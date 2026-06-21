import Link from "next/link";

import { CaseImage } from "@/components/feature/CaseImage";
import { cases } from "@/data/cases";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";
import type { CaseStudy } from "@/types";

const ArrowUpRight = getIcon("arrowUpRight");

export function CaseExcerpts() {
  return (
    <ol className="flex flex-col gap-24 sm:gap-28">
      {cases.map((caseStudy, index) => (
        <li key={caseStudy.id}>
          <CaseExcerptCard caseStudy={caseStudy} index={index} />
        </li>
      ))}
    </ol>
  );
}

function CaseExcerptCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex flex-col gap-10">
      {/* Header — index, shape tag, industry / company */}
      <header className="flex flex-col gap-5 border-b border-border pb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="text-accent">Case {number}</span>
            <span aria-hidden className="mx-3 text-border-strong">
              /
            </span>
            <span>{caseStudy.shape}</span>
          </p>
          {caseStudy.verified ? (
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span aria-hidden className="inline-block size-1.5 bg-[var(--color-success)]" />
              Real engagement · anonymised
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-balance text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          {caseStudy.companyName ? (
            caseStudy.companyUrl ? (
              <Link
                href={caseStudy.companyUrl}
                className="underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
                {...externalLinkProps(caseStudy.companyUrl)}
              >
                {caseStudy.companyName}
                <ArrowUpRight
                  aria-hidden
                  className="ml-1 inline-block size-5 align-baseline text-muted-foreground"
                />
              </Link>
            ) : (
              <span>{caseStudy.companyName}</span>
            )
          ) : (
            <span className="text-foreground/85">{caseStudy.industry}</span>
          )}
        </h3>

        {caseStudy.companyName ? (
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {caseStudy.industry}
          </p>
        ) : null}

        {caseStudy.stack && caseStudy.stack.length > 0 ? (
          <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span aria-hidden className="inline-block size-1 translate-y-[-2px] bg-accent" />
            <span className="text-foreground/80">Stack</span>
            <span aria-hidden className="text-border-strong">—</span>
            {caseStudy.stack.map((tool, i) => (
              <span key={tool} className="inline-flex items-baseline gap-2">
                {tool}
                {i < (caseStudy.stack?.length ?? 0) - 1 ? (
                  <span aria-hidden className="text-border-strong">·</span>
                ) : null}
              </span>
            ))}
          </p>
        ) : null}
      </header>

      {/* Visual pair — before / after side-by-side from md+ */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-5 lg:gap-6">
        <CaseImage image={caseStudy.beforeImage} role="before" />
        <CaseImage image={caseStudy.afterImage} role="after" />
      </div>

      {/* Body — three editorial blocks. 3-col only on md+ to avoid cramping at 640px. */}
      <div className="grid gap-8 border-t border-border pt-8 sm:gap-10 md:grid-cols-3 md:gap-12">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            The mess
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            {caseStudy.before}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            What I built
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            {caseStudy.built}
          </p>
        </div>

        <div className="flex flex-col gap-3 border-l-2 border-accent pl-5 sm:pl-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Outcome
          </p>
          <p className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {caseStudy.outcome.value}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {caseStudy.outcome.label}
          </p>
        </div>
      </div>
    </article>
  );
}
