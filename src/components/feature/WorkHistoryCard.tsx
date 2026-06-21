import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { workHistoryDomains } from "@/data/about";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";

const MESSY_INPUTS: { label: string; rotate: string; offsetX: string }[] = [
  { label: "XLSX", rotate: "-6deg", offsetX: "0px" },
  { label: "CHAT", rotate: "4deg", offsetX: "28px" },
  { label: "EMAIL", rotate: "-3deg", offsetX: "8px" },
  { label: "STICKY", rotate: "5deg", offsetX: "34px" },
  { label: "PDF", rotate: "-4deg", offsetX: "12px" },
];

const SYSTEM_ROWS: string[] = [
  "Customers",
  "Jobs",
  "Payments",
  "Approvals",
];

export function WorkHistoryCard() {
  const ArrowUpRight = getIcon("arrowUpRight");

  return (
    <Card
      as="section"
      aria-labelledby="work-history-title"
      className="flex flex-col gap-10 border-border-strong bg-background/70 p-6 sm:p-10"
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Work history · in shape, not in logos
          </span>
          <h3
            id="work-history-title"
            className="font-display text-2xl leading-tight text-foreground sm:text-3xl"
          >
            The shape of what I&apos;ve actually built.
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Different industries, same job: turn scattered inputs into a single
          system the team can run on.
        </p>
      </header>

      {/* ILLUSTRATION — messy inputs → unified system */}
      <WorkHistoryIllustration />

      {/* 3-4 links — the categories of work I take on */}
      <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {workHistoryDomains.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex h-full items-start gap-4 bg-background/60 p-5 hover:bg-surface-hover"
                {...(item.external ? externalLinkProps(item.href) : {})}
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center border border-border-strong text-accent"
                >
                  <Icon className="size-4" />
                </span>
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function WorkHistoryIllustration() {
  return (
    <div
      role="img"
      aria-label="Diagram: scattered business inputs — spreadsheets, chats, emails, sticky notes, PDFs — converging into a single unified workflow listing customers, jobs, payments, and approvals."
      className="relative grid grid-cols-1 items-center gap-8 border border-border bg-background/40 p-6 sm:p-8 md:grid-cols-[1fr_auto_1fr] md:gap-4"
    >
      {/* LEFT — messy inputs */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Messy inputs
        </span>
        <div className="relative flex min-h-[180px] flex-col gap-2">
          {MESSY_INPUTS.map((input) => (
            <span
              key={input.label}
              aria-hidden
              style={{
                transform: `rotate(${input.rotate}) translateX(${input.offsetX})`,
              }}
              className="inline-flex w-fit items-center gap-2 border border-border-strong bg-background/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85 shadow-soft"
            >
              <span
                aria-hidden
                className="inline-block size-1.5 bg-muted-foreground/70"
              />
              {input.label}
            </span>
          ))}
        </div>
      </div>

      {/* CONNECTOR — converging lines + chevron */}
      <div
        aria-hidden
        className="hidden h-full min-h-[160px] w-24 items-center justify-center md:flex"
      >
        <svg
          viewBox="0 0 96 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <g stroke="var(--border-strong)" strokeWidth="1">
            <path d="M0 24 C 40 24, 56 80, 96 80" />
            <path d="M0 60 C 36 60, 56 80, 96 80" />
            <path d="M0 96 C 36 96, 56 80, 96 80" />
            <path d="M0 132 C 40 132, 56 80, 96 80" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.25" fill="none">
            <path d="M70 70 L 84 80 L 70 90" />
          </g>
          <circle
            cx="96"
            cy="80"
            r="2"
            fill="var(--accent)"
          />
        </svg>
      </div>

      {/* Mobile connector — single down arrow */}
      <div
        aria-hidden
        className="flex items-center justify-center py-1 md:hidden"
      >
        <svg
          viewBox="0 0 60 24"
          className="h-5 w-16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12 H 50"
            stroke="var(--border-strong)"
            strokeWidth="1"
          />
          <path
            d="M44 6 L 52 12 L 44 18"
            stroke="var(--accent)"
            strokeWidth="1.25"
            fill="none"
          />
        </svg>
      </div>

      {/* RIGHT — unified system */}
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Unified system
        </span>
        <div className="flex flex-col border border-border-strong bg-background/80">
          <div className="flex items-center justify-between border-b border-border bg-background/60 px-3 py-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              one place
            </span>
            <span className="flex gap-1" aria-hidden>
              <span className="inline-block size-1.5 bg-border-strong" />
              <span className="inline-block size-1.5 bg-border-strong" />
              <span className="inline-block size-1.5 bg-accent" />
            </span>
          </div>
          <ul className="flex flex-col">
            {SYSTEM_ROWS.map((row, index) => (
              <li
                key={row}
                className={
                  "flex items-center gap-3 px-3 py-2.5 " +
                  (index < SYSTEM_ROWS.length - 1
                    ? "border-b border-border/70"
                    : "")
                }
              >
                <span
                  aria-hidden
                  className="inline-block h-3 w-px bg-accent"
                />
                <span className="text-sm text-foreground/90">{row}</span>
                <span
                  aria-hidden
                  className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  ok
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
