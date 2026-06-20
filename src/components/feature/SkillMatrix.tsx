import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { skillGroups, topSkills } from "@/data/skills";
import { getIcon } from "@/lib/icons";

export function TopSkillsRow() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Top skills
      </p>
      <ul className="flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <li
            key={skill}
            className="border border-border bg-surface/40 px-3 py-1.5 font-mono text-xs text-foreground/85"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillMatrix() {
  return (
    <ul className="grid gap-0 border border-border md:grid-cols-2 lg:grid-cols-3 [&>li]:border-border [&>li:not(:last-child)]:border-b md:[&>li:nth-child(odd)]:border-r md:[&>li:not(:nth-last-child(-n+2))]:border-b md:[&>li:nth-last-child(-n+2)]:border-b-0 lg:[&>li]:border-r lg:[&>li:nth-child(3n)]:border-r-0 lg:[&>li:nth-last-child(-n+3)]:border-b-0">
      {skillGroups.map((group) => {
        const Icon = getIcon(group.icon);
        return (
          <li key={group.id}>
            <Card as="article" className="flex h-full flex-col gap-5 border-0 bg-transparent">
              <header className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="inline-flex size-10 items-center justify-center border border-border-strong text-accent"
                >
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <CardTitle className="font-display text-xl font-normal">
                    {group.title}
                  </CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </div>
              </header>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-border bg-surface/40 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {skill}
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
