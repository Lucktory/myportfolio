import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { education } from "@/data/education";
import { getIcon } from "@/lib/icons";

export function EducationTimeline() {
  const Icon = getIcon("graduation");

  return (
    <ul className="flex flex-col gap-px border border-border bg-border">
      {education.map((item) => (
        <li key={item.id}>
          <Card
            as="article"
            className="flex flex-col gap-3 border-0 bg-background/40 sm:flex-row sm:items-start sm:gap-5"
          >
            <span
              aria-hidden
              className="inline-flex size-10 shrink-0 items-center justify-center border border-border-strong text-accent"
            >
              <Icon className="size-5" />
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="font-display text-2xl font-normal">
                  {item.degree}
                </CardTitle>
                {item.status === "in-progress" ? (
                  <Badge variant="success">In progress</Badge>
                ) : (
                  <Badge variant="outline">Completed</Badge>
                )}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span className="text-foreground">{item.institution}</span>
                {item.location ? ` · ${item.location}` : ""}
              </p>
              {item.notes ? <CardDescription>{item.notes}</CardDescription> : null}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
