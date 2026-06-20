import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { strengths } from "@/data/strengths";
import { getIcon } from "@/lib/icons";

export function StrengthsList() {
  return (
    <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
      {strengths.map((strength) => {
        const Icon = getIcon(strength.icon);
        return (
          <li key={strength.id}>
            <Card
              as="article"
              className="flex h-full gap-4 border-0 bg-background/40"
            >
              <span
                aria-hidden
                className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center border border-border-strong text-accent"
              >
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <CardTitle className="font-display text-lg font-normal">
                  {strength.title}
                </CardTitle>
                <CardDescription>{strength.description}</CardDescription>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
