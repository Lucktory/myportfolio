import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { profile, profileStats } from "@/data/profile";
import { getIcon } from "@/lib/icons";

export function HeroIntro() {
  const ArrowUpRight = getIcon("arrowUpRight");
  const MapPin = getIcon("mapPin");
  const Briefcase = getIcon("briefcase");

  return (
    <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:items-end">
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 border border-border-strong bg-background/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80">
            <span
              aria-hidden
              className="inline-block size-1.5 bg-[var(--color-success)]"
            />
            Available · Senior &amp; Staff
          </span>
        </div>

        <h1 className="font-display text-balance text-5xl font-normal leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[5.5rem]">
          {profile.name}.
          <br />
          <span className="italic text-muted-foreground">
            Building reliable systems on the frontend &amp; the cloud.
          </span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.summary[0]}
        </p>

        <dl className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <div className="inline-flex items-center gap-2">
            <Briefcase className="size-3.5" aria-hidden />
            <dt className="sr-only">Currently at</dt>
            <dd>
              <span className="text-foreground">{profile.currentEmployer.name}</span>
            </dd>
          </div>
          <span aria-hidden className="text-border-strong">
            /
          </span>
          <div className="inline-flex items-center gap-2">
            <MapPin className="size-3.5" aria-hidden />
            <dt className="sr-only">Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <span aria-hidden className="text-border-strong">
            /
          </span>
          <div className="inline-flex items-center gap-2">
            <dt className="sr-only">Experience</dt>
            <dd>
              <span className="text-foreground">{profile.yearsOfExperience}</span>{" "}
              years
            </dd>
          </div>
        </dl>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button href="#contact">
            Get in touch
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
          <Button href="#about" variant="secondary">
            More about me
          </Button>
        </div>
      </div>

      <aside aria-label="At a glance" className="md:pl-4">
        <dl className="grid grid-cols-2 gap-px border border-border bg-border">
          {profileStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-background/70 p-5"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-normal leading-none tracking-tight text-foreground">
                {stat.value}
              </dd>
              {stat.hint ? (
                <p className="text-xs leading-snug text-muted-foreground">
                  {stat.hint}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
