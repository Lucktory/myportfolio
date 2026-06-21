import Link from "next/link";

import { stackILeanOn } from "@/data/about";
import { credentialsStrip, profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";

export function ForDevelopers() {
  const ArrowUpRight = getIcon("arrowUpRight");

  return (
    <div className="flex flex-col gap-12">
      <p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
        You&apos;re not the primary audience for this page — the operator above
        is. But you might be the colleague, the referrer, or the future
        collaborator. Here&apos;s the short version.
      </p>

      <dl className="grid gap-px border border-border bg-border md:grid-cols-2">
        <div className="flex flex-col gap-3 bg-background p-6 sm:p-8">
          <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Stack I reach for
          </dt>
          <dd className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            {stackILeanOn.map((tool, i) => (
              <span key={tool}>
                {tool}
                {i < stackILeanOn.length - 1 ? (
                  <span aria-hidden className="mx-2 text-border-strong">
                    ·
                  </span>
                ) : (
                  "."
                )}
              </span>
            ))}
          </dd>
        </div>

        <div className="flex flex-col gap-3 bg-background p-6 sm:p-8">
          <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Credentials
          </dt>
          <dd className="flex flex-col gap-1.5 text-base leading-relaxed text-foreground/85">
            {credentialsStrip.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </dd>
        </div>
      </dl>

      <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {profile.socials.map((social) => {
          const Icon = getIcon(social.icon);
          return (
            <li key={social.label}>
              <Link
                href={social.href}
                className="group flex items-center justify-between gap-4 bg-background p-5 transition-colors hover:bg-surface-hover"
                {...externalLinkProps(social.href)}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex size-9 items-center justify-center border border-border-strong text-accent"
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {social.label}
                    </span>
                    {social.handle ? (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {social.handle}
                      </span>
                    ) : null}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
