import Link from "next/link";

import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";
import type { SocialLink } from "@/types";

type SocialLinksProps = {
  items: SocialLink[];
  variant?: "icon" | "labeled";
};

export function SocialLinks({ items, variant = "icon" }: SocialLinksProps) {
  if (variant === "labeled") {
    return (
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          const external = externalLinkProps(item.href);
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                {...external}
              >
                <Icon className="size-4" aria-hidden />
                <span className="font-medium text-foreground">{item.label}</span>
                {item.handle ? (
                  <span className="font-mono text-xs text-muted-foreground">· {item.handle}</span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {items.map((item) => {
        const Icon = getIcon(item.icon);
        const external = externalLinkProps(item.href);
        return (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="inline-flex size-10 items-center justify-center border border-border bg-surface/60 text-muted-foreground hover:border-border-strong hover:bg-surface hover:text-foreground"
              {...external}
            >
              <Icon className="size-4" aria-hidden />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
