export const siteConfig = {
  name: "Oscar Cheung — Operator-engineer for small business operations",
  shortName: "Oscar Cheung",
  url: "https://oscarcheung.dev",
  ogImage: "/og.png",
  description:
    "Oscar Cheung — operator-engineer. I build custom CRMs, internal ops tools, and the quiet automation that takes manual work off your team. Eleven years of production engineering, brought to small and mid-sized businesses.",
  keywords: [
    "Oscar Cheung",
    "Operator-engineer",
    "Custom CRM",
    "Internal operations tool",
    "Workflow automation",
    "Business operations software",
    "Senior Full-Stack Engineer",
    "React",
    "TypeScript",
    "Python",
    "AWS",
    "Japan",
  ],
  author: {
    name: "Oscar Cheung",
    role: "Operator-engineer",
    location: "Japan",
  },
  locale: "en-US",
} as const;

export type SiteConfig = typeof siteConfig;
