import {
  aboutBuildsAround,
  aboutClosing,
  aboutLead,
  aboutNarrative,
  aboutPrinciples,
  aboutVoices,
} from "@/data/about";

export function AboutComposition() {
  return (
    <article className="flex flex-col gap-24 sm:gap-28 lg:gap-32">
      {/* OPENING — display type at scale, no box, no eyebrow */}
      <header className="max-w-5xl">
        <p className="font-display text-balance text-[2.25rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          {(() => {
            const split = " usually";
            const idx = aboutLead.indexOf(split);
            const head = idx >= 0 ? aboutLead.slice(0, idx) : aboutLead;
            const tail = idx >= 0 ? aboutLead.slice(idx) : "";
            return (
              <>
                {head}
                <span className="italic text-muted-foreground">{tail}</span>
              </>
            );
          })()}
        </p>
      </header>

      {/* TRANSCRIPT — overheard at the kickoff, screenplay layout */}
      <section
        aria-labelledby="voices-heading"
        className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16"
      >
        <header className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Overheard at the kickoff
          </span>
          <h3
            id="voices-heading"
            className="font-display text-2xl leading-tight text-foreground/80 sm:text-3xl"
          >
            Three things I hear before any code gets written.
          </h3>
        </header>

        <dl className="flex flex-col">
          {aboutVoices.map((voice, index) => (
            <div
              key={voice.quote}
              className="grid gap-3 border-t border-border py-6 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-8 first:border-t-0 first:pt-0 last:pb-0"
            >
              <dt className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:pt-2">
                <span className="text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{voice.speaker}</span>
              </dt>
              <dd className="font-display text-2xl italic leading-snug text-foreground sm:text-[2rem] sm:leading-[1.15]">
                &ldquo;{voice.quote}&rdquo;
              </dd>
            </div>
          ))}
        </dl>

        <p className="font-mono text-xs italic text-muted-foreground lg:col-start-2">
          — that is normally where my work begins.
        </p>
      </section>

      {/* NARRATIVE — long-form with drop cap and inset pull quote */}
      <section className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-20">
        <div className="flex max-w-[34rem] flex-col gap-6 text-base leading-[1.7] text-foreground/85 sm:text-lg">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[5rem] first-letter:font-normal first-letter:leading-[0.85] first-letter:text-accent">
            {aboutNarrative[0]}
          </p>
          <p>{aboutNarrative[1]}</p>
          <p>{aboutNarrative[2]}</p>
        </div>

        <aside className="flex flex-col gap-12 lg:sticky lg:top-32">
          <figure className="border-l-2 border-accent pl-6">
            <blockquote className="font-display text-xl italic leading-snug text-foreground sm:text-2xl">
              Most real businesses don&apos;t have a perfect specification.
              They have habits, shortcuts, and people doing too much manual
              work every day.
            </blockquote>
          </figure>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              I build software around
            </span>
            <p className="font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
              {aboutBuildsAround.map((noun, i) => (
                <span key={noun}>
                  {noun}
                  {i < aboutBuildsAround.length - 1 ? (
                    <span aria-hidden className="mx-2 text-border-strong">
                      ·
                    </span>
                  ) : (
                    "."
                  )}
                </span>
              ))}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The nouns of an operating business. Not screens — the things
              the team actually depends on.
            </p>
          </div>
        </aside>
      </section>

      {/* PRINCIPLES — numbered hairline-ruled list, no boxes */}
      <section className="flex flex-col gap-12">
        <header className="flex max-w-3xl flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Things I won&apos;t skip
          </span>
          <h3 className="font-display text-balance text-3xl leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The boring parts that decide whether a system{" "}
            <span className="italic text-muted-foreground">survives.</span>
          </h3>
        </header>

        <ol className="flex flex-col border-y border-border">
          {aboutPrinciples.map((principle, index) => (
            <li
              key={principle.label}
              className="group grid grid-cols-[40px_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border py-7 last:border-b-0 sm:grid-cols-[60px_260px_1fr] sm:gap-x-12 sm:py-9"
            >
              <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="font-display text-2xl leading-tight text-foreground sm:text-[1.75rem]">
                {principle.label}
              </h4>
              <p className="col-span-2 max-w-md text-base leading-relaxed text-muted-foreground sm:col-span-1 sm:pt-1">
                {principle.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CLOSING — manifesto at scale, no box, no eyebrow */}
      <section className="max-w-5xl">
        <p className="font-display text-balance text-3xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          {aboutClosing.split(" — ")[0]} —{" "}
          <span className="italic text-muted-foreground">
            {aboutClosing.split(" — ")[1]}
          </span>
        </p>
      </section>
    </article>
  );
}
