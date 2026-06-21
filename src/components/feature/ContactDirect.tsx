import Link from "next/link";

import { profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";

export function ContactDirect() {
  const ArrowUpRight = getIcon("arrowUpRight");

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
      {/* What to send — direct, no form */}
      <div className="flex flex-col gap-6">
        <p className="max-w-xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
          Whatever&apos;s closest to the truth: a screenshot of the spreadsheet,
          a paragraph about how the workflow actually runs, the worst day you
          had last month.
        </p>

        <ul className="flex max-w-xl flex-col gap-3 border-l-2 border-accent pl-5 sm:pl-6">
          <li className="flex gap-3 text-base leading-relaxed text-foreground/85">
            <span
              aria-hidden
              className="mt-3 inline-block size-1 shrink-0 bg-foreground/60"
            />
            What the team is doing today — even if it&apos;s ugly.
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-foreground/85">
            <span
              aria-hidden
              className="mt-3 inline-block size-1 shrink-0 bg-foreground/60"
            />
            Where the workarounds live — the spreadsheet, the WhatsApp thread,
            the half-built system.
          </li>
          <li className="flex gap-3 text-base leading-relaxed text-foreground/85">
            <span
              aria-hidden
              className="mt-3 inline-block size-1 shrink-0 bg-foreground/60"
            />
            What you wish it looked like — without worrying about how to get
            there.
          </li>
        </ul>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          No forms. No discovery-call funnel. A real message, a real reply.
        </p>
      </div>

      {/* Direct channels */}
      <aside className="flex flex-col gap-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Direct channels
        </p>
        <ul className="flex flex-col gap-px border border-border bg-border">
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

        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Reply window — usually a few days.
        </p>
      </aside>
    </div>
  );
}
