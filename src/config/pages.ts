import type { PageMeta } from "@/types";

export const pageMeta: Record<string, PageMeta> = {
  home: {
    id: "home",
    title: "Home",
    eyebrow: "Portfolio",
    heading: "Senior full-stack engineer focused on the frontend and the cloud.",
    description:
      "11+ years of building production systems with React, TypeScript, and AWS. Currently shipping at PayPay Corporation in Japan.",
  },
  about: {
    id: "about",
    title: "About",
    eyebrow: "About",
    heading: "An engineer who cares about the details.",
    description:
      "A short read on how I work, what I value, and where I'm sharpening next.",
  },
  skills: {
    id: "skills",
    title: "Skills",
    eyebrow: "Toolbelt",
    heading: "What I bring to a team.",
    description:
      "Grouped by depth — the stack I lead with, the tools I'm comfortable in, and the practices I bring beyond the code.",
  },
  experience: {
    id: "experience",
    title: "Experience",
    eyebrow: "Career",
    heading: "Where I'm building today.",
    description:
      "Currently at PayPay Corporation in Japan, with 11+ years of full-stack engineering behind that.",
  },
  certifications: {
    id: "certifications",
    title: "Certifications",
    eyebrow: "Credentials",
    heading: "Continuous learning, on the record.",
    description:
      "A working record of certifications across cloud, machine learning, fintech, and team facilitation.",
  },
  contact: {
    id: "contact",
    title: "Contact",
    eyebrow: "Let's talk",
    heading: "Open to a conversation.",
    description:
      "The best way to reach me is LinkedIn. I read every message and reply when I can give it a real answer.",
  },
};
