import type { IconKey } from "@/types";

export const aboutLead =
  "I build the kind of software that usually starts as a messy conversation.";

export const aboutVoices: { speaker: string; quote: string }[] = [
  { speaker: "A business owner", quote: "We're doing this in Excel." },
  { speaker: "A manager", quote: "The team keeps forgetting follow-ups." },
  {
    speaker: "Someone on the floor",
    quote: "We use three tools, but none of them really talk to each other.",
  },
];

export const aboutNarrative: string[] = [
  "That is normally where my work begins. I'm not the developer who waits for a perfect specification — most real businesses don't have one. They have habits, shortcuts, old spreadsheets, WhatsApp messages, half-working systems, and people doing too much manual work every day.",
  "My job is to understand that reality first, then turn it into software that feels natural for the team to use. I've built systems around customers, jobs, staff, payments, reports, reminders, approvals, documents, and daily operations — not just screens or buttons, but real workflows that people depend on.",
  "I don't believe every company needs a big complicated platform. Sometimes the right answer is a simple internal tool that removes five hours of manual work each week. Sometimes it's a custom CRM because the off-the-shelf ones force the business to work the wrong way. Sometimes it's quiet automation that takes a repeating task off the team's plate.",
];

export const aboutClosing =
  "My strength is taking unclear business operations and making them clean, usable, and reliable — without making the company feel like they now need a technical department just to use their own software.";

// The boring parts I refuse to skip — they decide whether a system survives.
export const aboutPrinciples: { label: string; detail: string }[] = [
  { label: "Permissions", detail: "Who can see what, and who can change what." },
  { label: "Mistake recovery", detail: "What happens when someone gets it wrong." },
  { label: "Data correction", detail: "How wrong data gets cleaned up without drama." },
  { label: "Oversight", detail: "How managers actually check the work." },
  { label: "Follow-ups", detail: "How nothing important gets quietly forgotten." },
  { label: "Load", detail: "How the system holds up when the team gets busy." },
];

export type WorkHistoryItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: IconKey;
  external?: boolean;
};

export const workHistoryDomains: WorkHistoryItem[] = [
  {
    id: "crm",
    title: "Custom CRM systems",
    summary:
      "Built around how the team actually sells and follows up — not the other way around.",
    href: "#contact",
    icon: "users",
  },
  {
    id: "ops",
    title: "Internal operations tools",
    summary:
      "Replacing brittle spreadsheets with workflows that hold up under real daily load.",
    href: "#contact",
    icon: "wrench",
  },
  {
    id: "automation",
    title: "Workflow automation",
    summary:
      "Quietly removing the repeating work that burns hours off the team every week.",
    href: "#contact",
    icon: "sparkles",
  },
  {
    id: "approvals",
    title: "Approvals & document flows",
    summary:
      "Routing, audit trails, corrections — the boring parts that decide if a system survives.",
    href: "#contact",
    icon: "shield",
  },
];

// What I build software around — the nouns of an operating business.
export const aboutBuildsAround: string[] = [
  "Customers",
  "Jobs",
  "Staff",
  "Payments",
  "Reports",
  "Reminders",
  "Approvals",
  "Documents",
  "Daily operations",
];
