import type { CaseStudy } from "@/types";

/**
 * Case studies.
 *
 * --- HOW TO REPLACE PLACEHOLDER DATA WITH REAL ASSETS ---
 *
 * 1. Drop the real image into `public/cases/` (e.g. `public/cases/01-before.png`).
 * 2. On the case entry below, edit the `beforeImage` / `afterImage` object:
 *      { src: "/cases/01-before.png", alt: "Master Excel workbook (before)" }
 *    and REMOVE the `placeholder: true` flag.
 * 3. Add `companyName` (and `companyUrl` if you have a live link).
 *    Anonymity is the default — leave both blank to keep the case anonymous;
 *    the `industry` line will still render.
 * 4. The `verified` flag is internal-only — it just marks which entries are
 *    real engagements vs. illustrative ones. Display does not change.
 *
 * All four cases are wired identically, so swap-in is one edit per field.
 */
export const cases: CaseStudy[] = [
  {
    id: "logistics-excel-automation",
    industry: "Regional logistics supplier",
    shape: "Workflow automation",
    before:
      "Two staff spent the first half of every morning copying order data from supplier emails and PDFs into a master Excel workbook. That workbook was the source of truth for shipping, billing, and stock — and it broke in a different way every week.",
    built:
      "An automated extraction pipeline that reads the incoming emails and PDFs, normalises the data, and writes it into a single internal dashboard. Staff now reconcile exceptions instead of typing in rows.",
    outcome: { value: "≈ 12 h / week", label: "reclaimed per staff member" },
    stack: ["Python", "Pandas", "Postgres", "React", "AWS Lambda"],
    beforeImage: {
      src: "/cases/01-before.png",
      alt: "The master Excel workbook used as the source of truth before the rebuild.",
      placeholder: true,
    },
    afterImage: {
      src: "/cases/01-after.png",
      alt: "The unified internal dashboard that replaced the spreadsheet.",
      placeholder: true,
    },
    // companyName: "Acme Logistics",
    // companyUrl: "https://example.com",
    verified: true,
  },
  {
    id: "construction-custom-crm",
    industry: "Construction services",
    shape: "Custom CRM",
    before:
      "The sales team used a generic CRM that thought every deal was a single transaction. Their reality was multi-stage jobs spanning quotes, surveys, scheduling, and invoicing. Follow-ups slipped through the gaps every week.",
    built:
      "A job-centric CRM built around the firm's real lifecycle: quote → won → surveyed → scheduled → done → invoiced. Each stage owns its own follow-ups; nothing leaves the funnel by accident.",
    outcome: { value: "+18%", label: "follow-ups closed within SLA" },
    stack: ["Next.js", "TypeScript", "Postgres", "Tailwind", "Vercel"],
    beforeImage: {
      src: "/cases/02-before.png",
      alt: "The generic CRM the team was forced to bend to their workflow.",
      placeholder: true,
    },
    afterImage: {
      src: "/cases/02-after.png",
      alt: "The job-centric custom CRM, organised by lifecycle stage.",
      placeholder: true,
    },
  },
  {
    id: "services-internal-ops-tool",
    industry: "Multi-branch services business",
    shape: "Internal ops tool",
    before:
      "Three disconnected systems for bookings, billing, and reporting. Branch managers exported CSVs every Friday night just to get a picture of the week. The owner had no live view at all.",
    built:
      "A single internal ops tool with role-based dashboards: staff see their day, managers see their branch, the owner sees the company. One source of truth, corrected in one place.",
    outcome: { value: "0 weekends", label: "of manual CSV exports per manager" },
    stack: ["React", "Node", "MySQL", "Redis", "Docker"],
    beforeImage: {
      src: "/cases/03-before.png",
      alt: "The three disconnected systems the team was juggling each week.",
      placeholder: true,
    },
    afterImage: {
      src: "/cases/03-after.png",
      alt: "The unified internal ops tool with role-based dashboards.",
      placeholder: true,
    },
  },
  {
    id: "property-approvals-documents",
    industry: "Property management",
    shape: "Approvals & documents",
    before:
      "Maintenance approvals lived in a WhatsApp group and a shared inbox. Sign-off was 'whoever shouted loudest,' and the paper trail only surfaced when something went wrong.",
    built:
      "Routed approval flows tied to each property, with a real audit trail, digital signatures, and reminders that escalate when nothing happens. Every decision has a name and a timestamp.",
    outcome: { value: "48 h → 6 h", label: "median time-to-approval" },
    stack: ["Next.js", "TypeScript", "Postgres", "S3", "DocuSign API"],
    beforeImage: {
      src: "/cases/04-before.png",
      alt: "Approvals scattered across WhatsApp threads and email inboxes.",
      placeholder: true,
    },
    afterImage: {
      src: "/cases/04-after.png",
      alt: "The routed approvals flow with signed audit trail.",
      placeholder: true,
    },
  },
];
