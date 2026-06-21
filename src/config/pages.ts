import type { PageMeta } from "@/types";

export const pageMeta: Record<string, PageMeta> = {
  home: {
    id: "home",
    title: "Home",
    eyebrow: "Portfolio",
    heading: "I build software that usually starts as a messy conversation.",
    description:
      "Operator-engineer for small and mid-sized businesses whose tools have outgrown their workarounds.",
  },
  voices: {
    id: "voices",
    title: "Voices",
    eyebrow: "Where projects begin",
    heading: "Three things I hear before any code gets written.",
    description:
      "If you recognise yourself in one of these sentences, you're already in the right place.",
  },
  work: {
    id: "work",
    title: "Work",
    eyebrow: "Case excerpts",
    heading: "Different industries, same shape of work.",
    description:
      "Each one started with a spreadsheet, a workaround, or a system the team had outgrown. Names and screenshots are anonymised where the engagement requires it.",
  },
  process: {
    id: "process",
    title: "Process",
    eyebrow: "How a project runs",
    heading: "Six phases. No surprises.",
    description:
      "This is what hiring me actually looks like — written so you can decide before sending an email.",
  },
  principles: {
    id: "principles",
    title: "Principles",
    eyebrow: "Things I won't skip",
    heading: "The boring parts that decide whether a system survives.",
    description:
      "Most teams don't lose to the exciting features. They lose to the parts nobody volunteered to own.",
  },
  about: {
    id: "about",
    title: "About",
    eyebrow: "The operator",
    heading: "Eleven years of production engineering, brought to small teams.",
  },
  developers: {
    id: "developers",
    title: "For developers",
    eyebrow: "For developers",
    heading: "If you're a developer reading this —",
    description:
      "You're not the primary audience for this page. But you might be the colleague, the referrer, or the future collaborator. Here's the short version.",
  },
  contact: {
    id: "contact",
    title: "Contact",
    eyebrow: "Get in touch",
    heading: "Tell me about the mess. The unedited version.",
    description:
      "I read every message. Replies come when I can give you a real answer — usually within a few days.",
  },
};
