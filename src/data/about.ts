import type { IconKey } from "@/types";

export const aboutLead =
  "I build the kind of software that usually starts as a messy conversation.";

export const aboutSubline =
  "Operator-engineer for small and mid-sized businesses whose tools have outgrown the workarounds. Custom CRMs, internal ops tools, and the quiet automation that takes manual work off your team.";

export const aboutVoices: { speaker: string; quote: string }[] = [
  { speaker: "A business owner", quote: "We're doing this in Excel." },
  { speaker: "A manager", quote: "The team keeps forgetting follow-ups." },
  {
    speaker: "Someone on the floor",
    quote: "We use three tools, but none of them really talk to each other.",
  },
];

// "About the operator" — short personal bio for §6.
export const operatorBio: string[] = [
  "I'm Oscar — a senior full-stack engineer based in Japan, currently shipping at PayPay Corporation. On the side, I take on consulting work for small and mid-sized businesses whose operations have outgrown their tools.",
  "Eleven years of production engineering taught me that the boring parts decide whether software actually helps. I bring that discipline to teams who shouldn't need an in-house dev department just to run their own company.",
  "Outside of building, I'm reading toward an MSc in Data Science at the University of Edinburgh.",
];

export const operatorClosing =
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

// Operator personal photo (used in §6 About). Replace placeholder with a real headshot:
//   1. Drop the file in `public/operator/headshot.jpg`
//   2. Set `placeholder: false` (or remove the field)
export const operatorPhoto: { src: string; alt: string; placeholder?: boolean } = {
  src: "/operator/headshot.jpg",
  alt: "Oscar Cheung — portrait.",
  placeholder: true,
};

/**
 * Hero photo cluster (used in §1 Manifesto Hero).
 *
 * `primary` is the large circular portrait — drop this in first.
 * `satellites` are 0–2 smaller circular images that orbit the primary
 * (project moment, workspace shot, on-site photo, etc.). Leave the
 * `satellites` array empty if you'd prefer a single portrait.
 *
 * Replace by:
 *   1. Drop the real image at the listed path under `public/`
 *   2. Remove `placeholder: true` from that entry
 */
export type HeroPhoto = { src: string; alt: string; placeholder?: boolean };

export const heroPhotos: { primary: HeroPhoto; satellites: HeroPhoto[] } = {
  primary: {
    src: "/hero/portrait.jpg",
    alt: "Oscar — primary portrait.",
    placeholder: true,
  },
  satellites: [
    {
      src: "/hero/satellite-1.jpg",
      alt: "On-site with a client team.",
      placeholder: true,
    },
    {
      src: "/hero/satellite-2.jpg",
      alt: "At the workspace.",
      placeholder: true,
    },
  ],
};

// Stack the operator reaches for, for §7 (For developers).
export const stackILeanOn: string[] = [
  "React",
  "TypeScript",
  "Python",
  "Node",
  "Postgres",
  "AWS",
  "the boring sane parts of every team's stack",
];

// Optional — icon mapping retained in case it's needed downstream.
export type AboutIcon = IconKey;
