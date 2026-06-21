import Image from "next/image";

import { operatorBio, operatorClosing, operatorPhoto } from "@/data/about";
import { credentialsStrip } from "@/data/profile";
import { cn } from "@/lib/cn";

export function AboutOperator() {
  return (
    <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
      {/* Portrait — swap-me until a real headshot lands */}
      <OperatorPortrait className="w-full max-w-[300px]" />

      {/* Bio + credentials */}
      <div className="flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
          {operatorBio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <figure className="border-l-2 border-accent pl-5 sm:pl-6">
          <blockquote className="font-display text-balance text-2xl leading-snug text-foreground sm:text-[1.75rem]">
            {operatorClosing}
          </blockquote>
        </figure>

        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Quiet credentials
          </span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/80">
            {credentialsStrip.map((item, index) => (
              <li key={item} className="inline-flex items-center gap-5">
                {item}
                {index < credentialsStrip.length - 1 ? (
                  <span aria-hidden className="text-border-strong">
                    /
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function OperatorPortrait({ className }: { className?: string }) {
  if (operatorPhoto.placeholder) {
    return (
      <figure
        role="img"
        aria-label={`Placeholder for: ${operatorPhoto.alt}`}
        className={cn(
          "relative aspect-[3/4] overflow-hidden border border-border-strong bg-surface",
          className,
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgba(26,22,18,0.045)_10px,rgba(26,22,18,0.045)_11px)]"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 p-5">
          <span className="inline-flex w-fit items-center gap-2 border border-border-strong bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span aria-hidden className="inline-block size-1.5 bg-accent" />
            Portrait
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-display text-base leading-snug text-foreground">
              {operatorPhoto.alt}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              drop the image at{" "}
              <span className="text-foreground/80">{operatorPhoto.src}</span>
            </p>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative aspect-[3/4] overflow-hidden border border-border-strong bg-surface",
        className,
      )}
    >
      <Image
        src={operatorPhoto.src}
        alt={operatorPhoto.alt}
        fill
        sizes="(min-width: 1024px) 300px, 80vw"
        className="object-cover"
      />
    </figure>
  );
}
