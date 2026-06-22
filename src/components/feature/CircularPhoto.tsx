import Image from "next/image";

import { cn } from "@/lib/cn";

type Photo = { src: string; alt: string; placeholder?: boolean };

type Props = {
  photo: Photo;
  /** Tailwind className controlling outer size (e.g. "size-72"). */
  sizeClass?: string;
  /** Tailwind className for an absolute-positioned wrapper. Optional. */
  className?: string;
  /** Visual emphasis — primary uses heavier border + ring. */
  emphasis?: "primary" | "satellite";
};

/**
 * Circular framed photo. Renders <Image> when a real asset is set,
 * or a clearly-labelled circular swap-me frame when `placeholder: true`.
 */
export function CircularPhoto({
  photo,
  sizeClass = "size-64",
  className,
  emphasis = "satellite",
}: Props) {
  const ring =
    emphasis === "primary"
      ? "ring-2 ring-accent/30 ring-offset-4 ring-offset-background"
      : "ring-1 ring-border-strong/40 ring-offset-2 ring-offset-background";

  const border =
    emphasis === "primary" ? "border-2 border-border-strong" : "border border-border-strong";

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-full bg-surface",
        sizeClass,
        border,
        ring,
        className,
      )}
    >
      {photo.placeholder ? (
        <PlaceholderCircle photo={photo} emphasis={emphasis} />
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={emphasis === "primary" ? "320px" : "160px"}
          className="object-cover"
        />
      )}
    </figure>
  );
}

function PlaceholderCircle({
  photo,
  emphasis,
}: {
  photo: Photo;
  emphasis: "primary" | "satellite";
}) {
  return (
    <>
      {/* Subtle diagonal hatch — low-contrast lift on dark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_8px,rgba(245,245,245,0.05)_8px,rgba(245,245,245,0.05)_9px)]"
      />

      {/* Centered swap-me label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4 text-center">
        <span className="inline-flex items-center gap-1.5 border border-border-strong bg-background/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          <span aria-hidden className="inline-block size-1 bg-accent" />
          {emphasis === "primary" ? "Portrait" : "Photo"}
        </span>
        <span
          className={cn(
            "font-display leading-tight text-foreground/85",
            emphasis === "primary" ? "text-sm" : "text-[11px]",
          )}
        >
          {photo.alt}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
          {photo.src}
        </span>
      </div>
    </>
  );
}
