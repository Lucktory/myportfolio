import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Section index, e.g. "03". Pair with `totalSections` for "§ 03 / 08". */
  index?: string;
  totalSections?: number;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  totalSections,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const hasIndex = Boolean(index);
  const totalLabel =
    totalSections !== undefined
      ? String(totalSections).padStart(2, "0")
      : undefined;

  return (
    <header
      className={cn(
        "relative flex flex-col gap-8",
        isCentered ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {/* Top accent bar + section index — strong visual punctuation */}
      {hasIndex ? (
        <div
          className={cn(
            "flex w-full items-center gap-4 border-t-2 border-accent pt-4",
            isCentered && "justify-center",
          )}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/85">
            §&nbsp;{index}
            {totalLabel ? (
              <span className="text-muted-foreground">
                {" "}
                /&nbsp;{totalLabel}
              </span>
            ) : null}
          </span>
          {eyebrow ? (
            <>
              <span
                aria-hidden
                className="h-px flex-1 bg-border-strong/60"
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {eyebrow}
              </span>
            </>
          ) : null}
        </div>
      ) : eyebrow ? (
        <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span aria-hidden className="h-px w-8 bg-border-strong" />
          {eyebrow}
        </span>
      ) : null}

      <div
        className={cn(
          "grid gap-6 sm:gap-10",
          hasIndex ? "sm:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]" : "",
        )}
      >
        {hasIndex ? (
          <span
            aria-hidden
            className="font-display text-7xl leading-none tracking-tight text-foreground/85 sm:text-8xl lg:text-[8rem]"
          >
            {index}
          </span>
        ) : null}

        <div className="flex flex-col gap-5">
          <Heading className="font-display text-balance text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
            {title}
          </Heading>
          {description ? (
            <p
              className={cn(
                "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
                isCentered && "mx-auto",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
