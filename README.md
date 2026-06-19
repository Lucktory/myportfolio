# Portfolio — Oscar Cheung

Personal portfolio for **Oscar Cheung**, Senior Full-Stack Engineer at PayPay Corporation
(Japan). 11+ years of experience across React, TypeScript, Python, and AWS.

Built as a production-grade Next.js site: typed data layer, function-grouped utilities,
page-by-page routing, and CSS split by mechanic.

## Stack

- **Framework** — Next.js (App Router) + TypeScript
- **Styling** — Tailwind CSS v4 with design tokens
- **Typography** — Lexend via `next/font/google`
- **Icons** — `lucide-react` (UI glyphs) + `react-icons` (brand marks)
- **A11y / SEO** — semantic landmarks, skip link, sitemap, robots, OG metadata

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/                # Pages, organised page-by-page (App Router)
│   ├── about/
│   ├── certifications/
│   ├── contact/
│   ├── experience/
│   ├── skills/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/         # Container, Section, Header, Footer
│   ├── ui/             # Primitives: Button, Badge, Card, SectionHeading, SocialLinks
│   └── feature/        # Feature blocks: Hero, SkillMatrix, CertificationList, …
├── config/             # site, navigation, pages (CMS-ready records)
├── data/               # profile, skills, certifications, education, strengths, experience
├── lib/                # Utilities grouped by function: cn, icons, dates, url
├── styles/             # CSS split by mechanic
│   ├── tokens.css      # design tokens exposed to Tailwind
│   ├── theme.css       # light + dark theme variables
│   ├── typography.css  # font wiring + type rendering
│   ├── layout.css      # page-level layout primitives
│   ├── motion.css      # transitions + reduced-motion guard
│   └── base.css        # element-level resets and focus
└── types/              # shared TypeScript types
```

All copy, skills, certifications, education and experience live in `src/data/`. No content
is hard-coded inside components — to update the portfolio, edit a data file.

## Pages

| Route              | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| `/`                | Hero, top skills, quick links, contact CTA         |
| `/about`           | Summary, leadership strengths, education timeline  |
| `/skills`          | Proficient / intermediate / leadership matrix      |
| `/experience`      | Current and past roles                             |
| `/certifications`  | All certifications, grouped by category            |
| `/contact`         | Direct channels                                    |
