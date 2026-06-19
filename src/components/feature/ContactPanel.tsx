import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";

export function ContactPanel() {
  const ArrowUpRight = getIcon("arrowUpRight");

  return (
    <Card className="flex flex-col gap-8 p-8 sm:p-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Direct channels
        </p>
        <p className="text-base leading-relaxed text-foreground sm:text-lg">
          I read every message. The fastest way to reach me is LinkedIn — I'll come back to you when I can give your question a real answer.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {profile.socials.map((social) => {
          const Icon = getIcon(social.icon);
          return (
            <li key={social.label}>
              <Link
                href={social.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-4 hover:border-border-strong hover:bg-surface-hover"
                {...externalLinkProps(social.href)}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {social.label}
                    </span>
                    {social.handle ? (
                      <span className="text-xs text-muted-foreground">
                        {social.handle}
                      </span>
                    ) : null}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 text-muted-foreground group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
