import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { experience } from "@/data/experience";
import { getIcon } from "@/lib/icons";

export function ExperienceList() {
  const Icon = getIcon("briefcase");

  return (
    <ol className="flex flex-col gap-5">
      {experience.map((item) => (
        <li key={item.id}>
          <Card as="article" className="flex flex-col gap-5">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{item.company}</span>
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                </div>
              </div>
              <Badge variant="outline">
                {item.startDate === "Current" ? item.endDate : `${item.startDate} — ${item.endDate}`}
              </Badge>
            </header>

            <CardDescription>{item.summary}</CardDescription>

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
                  <li key={tech}>
                    <Badge variant="default">{tech}</Badge>
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
