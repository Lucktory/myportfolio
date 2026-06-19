"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ---------- helpers ---------- */

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(media.matches);
    const handler = (event: MediaQueryListEvent) => setPrefers(event.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);
  return prefers;
}

function generateSpherePositions(count: number, radius = 3.6): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const r = Math.cbrt(Math.random()) * radius;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

/* ---------- aurora shader (Stripe / Linear style gradient mesh) ---------- */

const auroraVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auroraFragment = /* glsl */ `
  precision highp float;

  uniform float u_time;
  uniform vec2  u_resolution;
  uniform vec3  u_base;
  uniform vec3  u_c1;
  uniform vec3  u_c2;
  uniform vec3  u_c3;
  uniform vec3  u_c4;

  varying vec2 vUv;

  float blob(vec2 uv, vec2 c, float r) {
    return smoothstep(r, 0.0, length(uv - c));
  }

  // cheap hash for grain
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    // aspect-correct uv so circles stay round on wide displays
    vec2 uv = vUv;
    float aspect = u_resolution.x / max(u_resolution.y, 1.0);
    vec2 auv = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

    float t = u_time * 0.08;

    // four soft light sources orbiting on slow Lissajous curves
    vec2 c1 = vec2(-0.35 * aspect + 0.25 * sin(t * 1.30), -0.10 + 0.18 * cos(t * 0.90));
    vec2 c2 = vec2( 0.30 * aspect + 0.22 * cos(t * 1.10),  0.18 + 0.18 * sin(t * 1.70));
    vec2 c3 = vec2( 0.00            + 0.40 * sin(t * 0.70), -0.30 + 0.25 * cos(t * 1.30));
    vec2 c4 = vec2(-0.10            + 0.35 * cos(t * 1.50),  0.30 + 0.22 * sin(t * 0.50));

    float a1 = blob(auv, c1, 0.65 * aspect);
    float a2 = blob(auv, c2, 0.60 * aspect);
    float a3 = blob(auv, c3, 0.80 * aspect);
    float a4 = blob(auv, c4, 0.55 * aspect);

    vec3 color = u_base;
    color = mix(color, u_c1, a1 * 0.85);
    color = mix(color, u_c2, a2 * 0.75);
    color = mix(color, u_c3, a3 * 0.55);
    color = mix(color, u_c4, a4 * 0.45);

    // top-side lift — keep the upper area slightly brighter (hero spotlight)
    float topLift = smoothstep(0.0, 0.6, 1.0 - uv.y) * 0.12;
    color += u_c2 * topLift;

    // dithering to kill banding on dark gradients
    float n = hash(uv * u_resolution);
    color += (n - 0.5) * 0.012;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function Aurora() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_base: { value: new THREE.Color("#060c1d") },
      u_c1: { value: new THREE.Color("#1e3a8a") }, // blue-800
      u_c2: { value: new THREE.Color("#3b82f6") }, // blue-500
      u_c3: { value: new THREE.Color("#06b6d4") }, // cyan-500
      u_c4: { value: new THREE.Color("#7c3aed") }, // violet-600
    }),
    [],
  );

  useFrame((state) => {
    if (!matRef.current) return;
    matRef.current.uniforms.u_time.value = state.clock.elapsedTime;
    const { width, height } = state.size;
    matRef.current.uniforms.u_resolution.value.set(width, height);
  });

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[40, 24]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={auroraVertex}
        fragmentShader={auroraFragment}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ---------- subtle particle layer over the aurora ---------- */

type ParticlesProps = {
  count: number;
  color: string;
  reducedMotion: boolean;
};

function Particles({ count, color, reducedMotion }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => generateSpherePositions(count, 3.2), [count]);

  useFrame((state, delta) => {
    const points = ref.current;
    if (!points || reducedMotion) return;
    points.rotation.y += delta * 0.03;
    points.rotation.x += delta * 0.01;
    const { x, y } = state.pointer;
    points.position.x = THREE.MathUtils.lerp(points.position.x, x * 0.25, 0.04);
    points.position.y = THREE.MathUtils.lerp(points.position.y, y * 0.25, 0.04);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.014}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------- accent color read from CSS at runtime ---------- */

function useThemeColor(variable: string, fallback: string): string {
  const [color, setColor] = useState(fallback);
  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();
    if (value) setColor(value);
  }, [variable]);
  return color;
}

/* ---------- composite background ---------- */

export function HeroBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const accentColor = useThemeColor("--accent", "#60a5fa");
  const [count, setCount] = useState(1600);

  useEffect(() => {
    const update = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmall = window.innerWidth < 768;
      setCount(isCoarse || isSmall ? 900 : 1800);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
        }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <Aurora />
          <Particles
            count={count}
            color={accentColor}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>

      {/* Soft bottom blend — only fades a thin strip, leaving the
          aurora visible across the rest of the hero. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
      />
    </div>
  );
}
