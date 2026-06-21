import type { Profile, Stat } from "@/types";

export const profile: Profile = {
  name: "Oscar Cheung",
  shortName: "Oscar",
  role: "Operator-engineer",
  headline: "Custom CRMs · internal ops tools · workflow automation",
  currentEmployer: {
    name: "PayPay Corporation",
  },
  yearsOfExperience: "11+",
  location: "Japan",
  resumeUrl: undefined,
  summary: [
    "I build the kind of software that usually starts as a messy conversation — custom CRMs, internal ops tools, and the quiet automation that takes manual work off your team.",
    "Senior full-stack engineer with 11+ years of production experience. Day job at PayPay Corporation in Japan; consulting work on the side for small and mid-sized businesses whose tools have outgrown their workarounds.",
    "I bring the same discipline I apply to fintech systems to the smaller teams who shouldn't need an in-house dev department just to run their own company.",
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

// Quiet credentials strip — surfaces in §6 (About the operator) and §7 (For developers).
export const credentialsStrip: string[] = [
  "PayPay Corporation",
  "11+ years",
  "MSc Data Science · Edinburgh (in progress)",
  "AWS · ML · FinTech certifications",
];

export const profileStats: Stat[] = [
  { label: "Years shipping", value: "11+", hint: "Production engineering experience" },
  { label: "Certifications", value: "13", hint: "AWS, ML, FinTech & more" },
  { label: "Current role", value: "Senior", hint: "Full-Stack Engineer" },
  { label: "Based in", value: "Japan", hint: "Open to remote collaboration" },
];
