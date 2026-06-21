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
    <div className="flex flex-col gap-20">
      {/* LEAD — editorial opening line + the three overheard voices */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <p className="font-display text-balance text-3xl font-normal leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:flex-1">
          <span className="text-muted-foreground/60">&ldquo;</span>
          {aboutLead}
          <span className="text-muted-foreground/60">&rdquo;</span>
        </p>

        <ul
          aria-label="The kinds of conversations my work starts with"
          className="flex w-full flex-col gap-px border border-border bg-border lg:max-w-sm"
        >
          {aboutVoices.map((voice) => (
            <li
              key={voice.quote}
              className="flex flex-col gap-2 bg-background/50 p-5"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {voice.speaker} says
              </span>
              <p className="font-display text-lg italic leading-snug text-foreground/90">
                <span aria-hidden className="mr-1 text-accent">
                  &ldquo;
                </span>
                {voice.quote}
                <span aria-hidden className="ml-0.5 text-accent">
                  &rdquo;
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* NARRATIVE — long-form column, with what-I-build-around aside */}
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
          {aboutNarrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="flex flex-col gap-5 lg:pt-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            What I build software around
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {aboutBuildsAround.map((noun) => (
              <li
                key={noun}
                className="border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-foreground/85"
              >
                {noun}
              </li>
            ))}
          </ul>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            The nouns of an operating business — not just screens or buttons, but
            the things people actually depend on.
          </p>
        </aside>
      </div>

      {/* PRINCIPLES — the boring parts that decide whether a system survives */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            The boring parts I refuse to skip
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            These decide whether a system actually survives contact with the team
            that has to live inside it every day.
          </p>
        </div>

        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {aboutPrinciples.map((principle, index) => (
            <li
              key={principle.label}
              className="flex flex-col gap-2 bg-background/40 p-5"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl leading-tight text-foreground">
                {principle.label}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* CLOSING — the position, marked with an editorial rule */}
      <figure className="flex flex-col gap-4 border-l-2 border-accent pl-6 sm:pl-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          In one line
        </span>
        <blockquote className="font-display text-balance text-2xl leading-snug text-foreground sm:text-3xl">
          {aboutClosing}
        </blockquote>
      </figure>
    </div>
  );
}
