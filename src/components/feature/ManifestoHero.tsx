import { Button } from "@/components/ui/Button";
import { aboutLead, aboutSubline } from "@/data/about";
import { credentialsStrip, profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";

const ArrowRight = getIcon("arrowRight");
const Mail = getIcon("mail");

export function ManifestoHero() {
  // Split the lead line at " usually" so the second half can read italic/muted —
  // keeps the source-of-truth in `aboutLead`.
  const splitToken = " usually";
  const splitIdx = aboutLead.indexOf(splitToken);
  const headLine = splitIdx >= 0 ? aboutLead.slice(0, splitIdx) : aboutLead;
  const tailLine = splitIdx >= 0 ? aboutLead.slice(splitIdx) : "";

  return (
    <div className="flex flex-col gap-14 sm:gap-16">
      {/* Top label strip — small mono cues, no aurora, no decoration */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="inline-block size-1.5 bg-accent" />
          Portfolio · 2026
        </span>
        <span className="hidden sm:inline">
          {profile.location} · Open to remote work
        </span>
      </div>

      {/* MANIFESTO — display serif at scale */}
      <h1 className="font-display text-balance text-[2.5rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[6rem]">
        {headLine}
        <span className="italic text-muted-foreground">{tailLine}</span>
      </h1>

      {/* Subline — single paragraph, lexend, max-w */}
      <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl">
        {aboutSubline}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3">
        <Button href="#work" size="md">
          See the work
          <ArrowRight className="size-4" aria-hidden />
        </Button>
        <Button href="#contact" variant="secondary" size="md">
          <Mail className="size-4" aria-hidden />
          Get in touch
        </Button>
      </div>

      {/* Credentials strip — quiet proof, not the headline */}
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
  );
}
