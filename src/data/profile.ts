import type { Profile, Stat } from "@/types";

export const profile: Profile = {
  name: "Oscar Cheung",
  shortName: "Oscar",
  role: "Senior Full-Stack Engineer",
  headline: "React, JavaScript, TypeScript, Python, AWS",
  currentEmployer: {
    name: "PayPay Corporation",
  },
  yearsOfExperience: "11+",
  location: "Japan",
  resumeUrl: undefined,
  summary: [
    "Full-stack software engineer with 11+ years of experience, specialising in frontend development and cloud technologies.",
    "Currently at PayPay Corporation in Japan, where I design and ship customer-facing systems with React, TypeScript, and AWS.",
    "I work across the stack — leading teams, reviewing code, and owning system design — while continuing to deepen my craft through an MSc in Data Science at the University of Edinburgh.",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oscarcheung",
      icon: "linkedin",
      handle: "in/oscarcheung",
    },
    {
      label: "GitHub",
      href: "https://github.com/oscarcheung",
      icon: "github",
      handle: "@oscarcheung",
    },
  ],
};

export const profileStats: Stat[] = [
  { label: "Years shipping", value: "11+", hint: "Production engineering experience" },
  { label: "Certifications", value: "13", hint: "AWS, ML, FinTech & more" },
  { label: "Current role", value: "Senior", hint: "Full-Stack Engineer" },
  { label: "Based in", value: "Japan", hint: "Open to remote collaboration" },
];
