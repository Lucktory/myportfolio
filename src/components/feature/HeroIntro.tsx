import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { profile, profileStats } from "@/data/profile";
import { getIcon } from "@/lib/icons";

export function HeroIntro() {
  const ArrowUpRight = getIcon("arrowUpRight");
  const MapPin = getIcon("mapPin");
  const Briefcase = getIcon("briefcase");

  return (
    <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">
            <span
              aria-hidden
              className="inline-block size-1.5 rounded-full bg-[var(--color-success)]"
            />
            Available for senior roles
          </Badge>
          <Badge variant="default">{profile.role}</Badge>
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            {profile.name}.
          </span>{" "}
          <span className="text-muted-foreground">
            Building reliable systems on the frontend and the cloud.
          </span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.summary[0]}
        </p>

        <dl className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-2">
            <Briefcase className="size-4" aria-hidden />
            <dt className="sr-only">Currently at</dt>
            <dd>
              <span className="text-foreground">{profile.currentEmployer.name}</span>
            </dd>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden />
            <dt className="sr-only">Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="inline-flex items-center gap-2">
            <span aria-hidden>·</span>
            <dt className="sr-only">Experience</dt>
            <dd>{profile.yearsOfExperience} years of experience</dd>
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
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {profileStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-surface p-5"
            >
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </dd>
              {stat.hint ? (
                <p className="text-xs text-muted-foreground">{stat.hint}</p>
              ) : null}
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
