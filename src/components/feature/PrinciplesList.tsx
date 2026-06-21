import { aboutPrinciples } from "@/data/about";

export function PrinciplesList() {
  return (
    <ol className="flex flex-col border-y border-border">
      {aboutPrinciples.map((principle, index) => (
        <li
          key={principle.label}
          className="grid grid-cols-[44px_1fr] items-baseline gap-x-5 gap-y-2 border-b border-border py-7 last:border-b-0 md:grid-cols-[60px_240px_1fr] md:gap-x-10 md:py-9 lg:grid-cols-[72px_280px_1fr] lg:gap-x-14"
        >
          <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl leading-tight text-foreground sm:text-[1.75rem] md:text-[1.875rem]">
            {principle.label}
          </h3>
          <p className="col-span-2 max-w-md text-base leading-relaxed text-muted-foreground md:col-span-1 md:pt-1">
            {principle.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
