import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { skillGroups, topSkills } from "@/data/skills";
import { getIcon } from "@/lib/icons";

export function TopSkillsRow() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Top skills
      </p>
      <ul className="flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <li key={skill}>
            <Badge variant="default">{skill}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillMatrix() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = getIcon(group.icon);
        return (
          <li key={group.id}>
            <Card as="article" className="flex h-full flex-col gap-5">
              <header className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-muted text-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <CardTitle>{group.title}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </div>
              </header>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant={group.level === "proficient" ? "solid" : "default"}
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
