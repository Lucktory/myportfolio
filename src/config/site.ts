export const siteConfig = {
  name: "Oscar Cheung — Senior Full-Stack Engineer",
  shortName: "Oscar Cheung",
  url: "https://oscarcheung.dev",
  ogImage: "/og.png",
  description:
    "Portfolio of Oscar Cheung, a Senior Full-Stack Engineer with 11+ years of experience in React, TypeScript, Python, and AWS. Currently building at PayPay Corporation in Japan.",
  keywords: [
    "Oscar Cheung",
    "Senior Full-Stack Engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "AWS",
    "PayPay",
    "Frontend Engineer",
    "Cloud Engineer",
  ],
  author: {
    name: "Oscar Cheung",
    role: "Senior Full-Stack Engineer",
    location: "Japan",
  },
  locale: "en-US",
} as const;

export type SiteConfig = typeof siteConfig;
