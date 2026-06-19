import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { strengths } from "@/data/strengths";
import { getIcon } from "@/lib/icons";

export function StrengthsList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {strengths.map((strength) => {
        const Icon = getIcon(strength.icon);
        return (
          <li key={strength.id}>
            <Card as="article" className="flex h-full gap-4">
              <span
                aria-hidden
                className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground"
              >
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <CardTitle>{strength.title}</CardTitle>
                <CardDescription>{strength.description}</CardDescription>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
