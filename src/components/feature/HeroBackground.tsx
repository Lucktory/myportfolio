"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function generateSpherePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const radius = 3.6;
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

type ConstellationProps = {
  count: number;
  color: string;
  reducedMotion: boolean;
};

function Constellation({ count, color, reducedMotion }: ConstellationProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => generateSpherePositions(count), [count]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    if (!reducedMotion) {
      points.rotation.y += delta * 0.04;
      points.rotation.x += delta * 0.015;
      const { x, y } = state.pointer;
      points.position.x = THREE.MathUtils.lerp(points.position.x, x * 0.35, 0.04);
      points.position.y = THREE.MathUtils.lerp(points.position.y, y * 0.35, 0.04);
    }
  });

  return (
    <points ref={pointsRef}>
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
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function useThemeColor(variable: string, fallback: string): string {
  const [color, setColor] = useState(fallback);
  useEffect(() => {
    const read = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim();
      if (value) setColor(value);
    };
    read();
    const media = window.matchMedia("(prefers-color-scheme: light)");
    media.addEventListener("change", read);
    return () => media.removeEventListener("change", read);
  }, [variable]);
  return color;
}

export function HeroBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const accentColor = useThemeColor("--accent", "#60a5fa");
  const [count, setCount] = useState(2800);

  useEffect(() => {
    const update = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmall = window.innerWidth < 768;
      setCount(isCoarse || isSmall ? 1600 : 3200);
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
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <Constellation
            count={count}
            color={accentColor}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,var(--background)_100%)]"
      />
    </div>
  );
}
