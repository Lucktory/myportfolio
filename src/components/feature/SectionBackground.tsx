import Image from "next/image";

import { cn } from "@/lib/cn";

const GRID_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><path d='M0 0 L0 64 M16 0 L16 64 M32 0 L32 64 M48 0 L48 64 M0 0 L64 0 M0 16 L64 16 M0 32 L64 32 M0 48 L64 48' stroke='%2360a5fa' stroke-width='0.5' opacity='0.10'/></svg>";

const DOT_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'><circle cx='1.5' cy='1.5' r='1' fill='%2360a5fa' opacity='0.25'/></svg>";

const DIAGONAL_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M-10 30 L30 -10 M0 40 L40 0 M10 50 L50 10' stroke='%2360a5fa' stroke-width='0.6' opacity='0.10'/></svg>";

type PatternBgProps = {
  pattern: "grid" | "dot" | "diagonal";
  className?: string;
};

const patternMap = {
  grid: GRID_SVG,
  dot: DOT_SVG,
  diagonal: DIAGONAL_SVG,
} as const;

export function PatternBackground({ pattern, className }: PatternBgProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url("${patternMap[pattern]}")` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_85%)]"
      />
    </div>
  );
}

type PhotoBgProps = {
  src: string;
  alt: string;
  position?: string;
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
};

const intensityOverlay = {
  subtle: "from-background/70 via-background/85 to-background",
  medium: "from-background/80 via-background/92 to-background",
  strong: "from-background/90 via-background/96 to-background",
} as const;

export function PhotoBackground({
  src,
  alt,
  position = "center",
  intensity = "medium",
  className,
}: PhotoBgProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={false}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          intensityOverlay[intensity],
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.10),transparent_60%)]"
      />
    </div>
  );
}

export function AccentGlowBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.10),transparent_60%)]"
      />
    </div>
  );
}
