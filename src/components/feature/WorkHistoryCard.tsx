import Link from "next/link";

import { workHistoryDomains } from "@/data/about";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";

const NAV_ITEMS: { label: string; active?: boolean }[] = [
  { label: "Customers" },
  { label: "Jobs", active: true },
  { label: "Payments" },
  { label: "Approvals" },
  { label: "Reports" },
  { label: "Audit log" },
];

const KPIS: { label: string; value: string; tone: "default" | "accent" | "warn" }[] = [
  { label: "Active", value: "12", tone: "accent" },
  { label: "Pending", value: "03", tone: "default" },
  { label: "Overdue", value: "01", tone: "warn" },
];

type RowStatus = "live" | "pending" | "done";

const ROWS: { id: string; customer: string; assignee: string; status: RowStatus }[] = [
  { id: "J-0428", customer: "Acme Corp", assignee: "Mei", status: "live" },
  { id: "J-0429", customer: "Northwind", assignee: "Ren", status: "pending" },
  { id: "J-0430", customer: "Globex", assignee: "Yui", status: "done" },
  { id: "J-0431", customer: "Initech", assignee: "Akira", status: "live" },
];

const STATUS_STYLES: Record<RowStatus, { dot: string; label: string }> = {
  live: { dot: "bg-accent", label: "in progress" },
  pending: { dot: "bg-muted-foreground/60", label: "awaiting approval" },
  done: {
    dot: "bg-[var(--color-success)]",
    label: "done",
  },
};

export function WorkHistoryCard() {
  const ArrowUpRight = getIcon("arrowUpRight");

  return (
    <section
      aria-labelledby="work-history-title"
      className="grid gap-12 border border-border-strong bg-background/70 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-12"
    >
      {/* LEFT — narrative + the four shapes of work I take on */}
      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Work history · in shape, not in logos
          </span>
          <h3
            id="work-history-title"
            className="font-display text-balance text-3xl leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]"
          >
            The shape of what I&apos;ve actually built.
          </h3>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Different industries, same job: turn scattered inputs into a single
            system the team can run on. Here is what one of these looks like in
            practice —
          </p>
        </header>

        <ol className="flex flex-col border-t border-border">
          {workHistoryDomains.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <li key={item.id} className="border-b border-border">
                <Link
                  href={item.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-1 py-5 transition-colors hover:bg-surface-hover/40"
                  {...(item.external ? externalLinkProps(item.href) : {})}
                >
                  <span className="flex items-center gap-3 self-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon
                      aria-hidden
                      className="size-3.5 text-accent"
                    />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-xl leading-tight text-foreground sm:text-2xl">
                      {item.title}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 self-center text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      {/* RIGHT — stylized product mockup of an internal ops UI */}
      <OperationsMockup />
    </section>
  );
}

function OperationsMockup() {
  return (
    <figure className="flex flex-col gap-3">
      <div
        role="img"
        aria-label="A stylized internal operations dashboard: left sidebar with Customers, Jobs (active), Payments, Approvals, Reports, and Audit log; main panel showing today's jobs as a table with job IDs, customers, assignees, and status indicators (live, pending, done)."
        className="relative isolate overflow-hidden border border-border-strong bg-background shadow-elevated"
      >
        {/* Subtle ambient glow behind the panel */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.10),transparent_60%)]"
        />

        {/* Top chrome bar */}
        <div className="relative flex items-center gap-3 border-b border-border bg-background/80 px-4 py-2.5">
          <span aria-hidden className="size-1.5 bg-[var(--color-success)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/85">
            operations
          </span>
          <span aria-hidden className="text-border-strong">/</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            daily
          </span>
          <span aria-hidden className="ml-auto flex gap-1">
            <span className="size-1.5 bg-border-strong" />
            <span className="size-1.5 bg-border-strong" />
            <span className="size-1.5 bg-accent" />
          </span>
        </div>

        <div className="relative grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr]">
          {/* Sidebar */}
          <nav
            aria-label="Mock navigation"
            className="flex flex-col gap-px border-r border-border bg-background/40 p-2"
          >
            {NAV_ITEMS.map((item) => (
              <span
                key={item.label}
                className={
                  "flex items-center gap-2 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px] " +
                  (item.active
                    ? "border-l-2 border-accent bg-surface-hover/60 text-foreground"
                    : "border-l-2 border-transparent text-muted-foreground")
                }
              >
                <span
                  aria-hidden
                  className={
                    "inline-block size-1 " +
                    (item.active ? "bg-accent" : "bg-border-strong")
                  }
                />
                {item.label}
              </span>
            ))}
          </nav>

          {/* Main panel */}
          <div className="flex flex-col gap-4 p-4 sm:p-5">
            {/* Header row */}
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-base text-foreground sm:text-lg">
                Jobs · today
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tue · 21 Jun
              </span>
            </div>

            {/* KPI strip */}
            <dl className="grid grid-cols-3 gap-px border border-border bg-border">
              {KPIS.map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex flex-col gap-0.5 bg-background/80 px-2.5 py-2"
                >
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {kpi.label}
                  </dt>
                  <dd
                    className={
                      "font-display text-xl leading-none sm:text-2xl " +
                      (kpi.tone === "accent"
                        ? "text-foreground"
                        : kpi.tone === "warn"
                          ? "text-[var(--color-success)]"
                          : "text-foreground/70")
                    }
                  >
                    {kpi.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Table */}
            <div className="flex flex-col">
              <div className="grid grid-cols-[68px_1fr_auto] gap-3 border-b border-border px-1 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-[78px_1fr_60px_auto]">
                <span>Job</span>
                <span>Customer</span>
                <span className="hidden sm:inline">Owner</span>
                <span className="text-right">Status</span>
              </div>
              <ul className="flex flex-col">
                {ROWS.map((row) => {
                  const status = STATUS_STYLES[row.status];
                  return (
                    <li
                      key={row.id}
                      className="grid grid-cols-[68px_1fr_auto] items-center gap-3 border-b border-border/60 px-1 py-2.5 last:border-b-0 sm:grid-cols-[78px_1fr_60px_auto]"
                    >
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {row.id}
                      </span>
                      <span className="text-sm text-foreground/90">
                        {row.customer}
                      </span>
                      <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                        {row.assignee}
                      </span>
                      <span className="flex items-center justify-end gap-1.5">
                        <span
                          aria-hidden
                          className={"inline-block size-1.5 " + status.dot}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {status.label}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Illustrative — composite of the kind of internal ops UI I ship.
      </figcaption>
    </figure>
  );
}
