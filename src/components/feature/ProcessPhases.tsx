import { processPhases } from "@/data/process";

export function ProcessPhases() {
  return (
    <ol className="flex flex-col">
      {processPhases.map((phase, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isLast = index === processPhases.length - 1;
        return (
          <li
            key={phase.id}
            className="group relative grid grid-cols-[60px_1fr] items-start gap-x-6 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[120px_240px_1fr] sm:gap-x-10 sm:py-10"
          >
            {/* Phase number — large mono with thin connector line going down */}
            <div className="relative flex flex-col items-start">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Phase
              </span>
              <span className="mt-1 font-display text-3xl leading-none text-foreground sm:text-4xl">
                {number}
              </span>
              {!isLast ? (
                <span
                  aria-hidden
                  className="absolute left-3 top-16 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
                />
              ) : null}
            </div>

            {/* Title — display serif, with small accent square */}
            <h3 className="flex items-baseline gap-3 font-display text-2xl leading-tight text-foreground sm:text-[1.75rem]">
              <span
                aria-hidden
                className="inline-block size-2 translate-y-[-2px] bg-accent"
              />
              {phase.title}
            </h3>

            {/* Body — col-span on mobile, third column on desktop */}
            <p className="col-span-2 max-w-2xl text-base leading-relaxed text-foreground/85 sm:col-span-1">
              {phase.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
