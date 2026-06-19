import Link from "next/link";

import { ContactPanel } from "@/components/feature/ContactPanel";
import { HeroIntro } from "@/components/feature/HeroIntro";
import { TopSkillsRow } from "@/components/feature/SkillMatrix";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/config/pages";
import { profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";

export default function HomePage() {
  const ArrowRight = getIcon("arrowRight");

  const quickLinks = [
    {
      title: "Skills",
      description: "What I'm proficient in, comfortable with, and lead with beyond code.",
      href: "/skills",
      icon: "sparkles" as const,
    },
    {
      title: "Experience",
      description: "Currently shipping at PayPay Corporation in Japan.",
      href: "/experience",
      icon: "briefcase" as const,
    },
    {
      title: "Certifications",
      description: "AWS Professional, TensorFlow Developer, and 11 more on record.",
      href: "/certifications",
      icon: "badgeCheck" as const,
    },
  ];

  return (
    <>
      <Section id="hero" spacing="loose">
        <Container size="wide">
          <HeroIntro />
        </Container>
      </Section>

      <Section id="top-skills" spacing="tight" className="border-t border-border">
        <Container size="wide">
          <TopSkillsRow />
        </Container>
      </Section>

      <Section id="explore" spacing="default" className="border-t border-border">
        <Container size="wide" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Explore"
            title="A quick tour."
            description={pageMeta.home.description}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = getIcon(link.icon);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:rounded-2xl"
                  >
                    <Card interactive className="flex h-full flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <span
                          aria-hidden
                          className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-muted text-foreground"
                        >
                          <Icon className="size-5" />
                        </span>
                        <ArrowRight
                          className="size-4 text-muted-foreground"
                          aria-hidden
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <CardTitle>{link.title}</CardTitle>
                        <CardDescription>{link.description}</CardDescription>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section id="contact-cta" spacing="default" className="border-t border-border">
        <Container size="wide" className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Badge variant="outline">Contact</Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {pageMeta.contact.heading}
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Currently at {profile.currentEmployer.name} in {profile.location}.
              Reach out via LinkedIn — I'll respond as soon as I can give your message a proper answer.
            </p>
          </div>
          <ContactPanel />
        </Container>
      </Section>
    </>
  );
}
