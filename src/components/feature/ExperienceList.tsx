import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { experience } from "@/data/experience";
import { getIcon } from "@/lib/icons";

export function ExperienceList() {
  const Icon = getIcon("briefcase");

  return (
    <ol className="flex flex-col gap-px border border-border bg-border">
      {experience.map((item) => (
        <li key={item.id}>
          <Card
            as="article"
            className="flex flex-col gap-6 border-0 bg-background/50"
          >
            <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center border border-border-strong text-accent"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <CardTitle className="font-display text-2xl font-normal leading-tight">
                    {item.role}
                  </CardTitle>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="text-foreground">{item.company}</span>
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {item.startDate === "Current"
                  ? item.endDate
                  : `${item.startDate} — ${item.endDate}`}
              </span>
            </header>

            <CardDescription className="text-base text-foreground/80">
              {item.summary}
            </CardDescription>

            {item.highlights && item.highlights.length > 0 ? (
              <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-border-strong">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            {item.stack && item.stack.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>
        </li>
      ))}
    </ol>
  );
}
