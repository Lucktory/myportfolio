import Image from "next/image";

import { cn } from "@/lib/cn";

type Img = { src: string; alt: string; placeholder?: boolean };

export type CaseImageRole = "before" | "after";

const ROLE_LABEL: Record<CaseImageRole, string> = {
  before: "Before",
  after: "After",
};

type Props = {
  image: Img;
  role: CaseImageRole;
  className?: string;
};

/**
 * Renders a real screenshot when `image.placeholder` is falsy.
 * Otherwise renders a clearly labelled "swap-me" frame at the same aspect
 * ratio, so dropping in a real asset later doesn't shift layout.
 */
export function CaseImage({ image, role, className }: Props) {
  if (image.placeholder) {
    return <PlaceholderFrame image={image} role={role} className={className} />;
  }
  return (
    <figure
      className={cn(
        "relative aspect-[16/10] overflow-hidden border border-border-strong bg-surface",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </figure>
  );
}

function PlaceholderFrame({ image, role, className }: Props) {
  return (
    <figure
      role="img"
      aria-label={`Placeholder for: ${image.alt}`}
      className={cn(
        "relative aspect-[16/10] overflow-hidden border border-border-strong bg-surface",
        className,
      )}
    >
      {/* Subtle diagonal hatch — low-contrast lift on dark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgba(245,245,245,0.045)_10px,rgba(245,245,245,0.045)_11px)]"
      />

      <div className="relative flex h-full flex-col justify-between gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 border border-border-strong bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span aria-hidden className="inline-block size-1.5 bg-accent" />
            {ROLE_LABEL[role]}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            placeholder
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-display text-base leading-snug text-foreground sm:text-lg">
            {image.alt}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            drop the image at{" "}
            <span className="text-foreground/80">{image.src}</span>
          </p>
        </div>
      </div>
    </figure>
  );
}
