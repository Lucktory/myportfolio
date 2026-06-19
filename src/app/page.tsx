import { CertificationList } from "@/components/feature/CertificationList";
import { ContactPanel } from "@/components/feature/ContactPanel";
import { EducationTimeline } from "@/components/feature/EducationTimeline";
import { ExperienceList } from "@/components/feature/ExperienceList";
import { HeroBackgroundMount } from "@/components/feature/HeroBackgroundMount";
import { HeroIntro } from "@/components/feature/HeroIntro";
import { SkillMatrix, TopSkillsRow } from "@/components/feature/SkillMatrix";
import { StrengthsList } from "@/components/feature/StrengthsList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/config/pages";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <Section
        id="top"
        spacing="loose"
        className="relative isolate overflow-hidden pt-32 sm:pt-40"
      >
        <HeroBackgroundMount />
        <Container size="wide" className="relative z-10">
          <HeroIntro />
        </Container>
      </Section>

      <Section
        id="about"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.about.eyebrow}
            title={pageMeta.about.heading}
            description={pageMeta.about.description}
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground sm:text-lg">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="default">{profile.role}</Badge>
                <Badge variant="outline">{profile.currentEmployer.name}</Badge>
                <Badge variant="outline">{profile.location}</Badge>
                <Badge variant="outline">{profile.yearsOfExperience} years</Badge>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                How I work
              </p>
              <StrengthsList />
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="skills"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.skills.eyebrow}
            title={pageMeta.skills.heading}
            description={pageMeta.skills.description}
          />
          <TopSkillsRow />
          <SkillMatrix />
        </Container>
      </Section>

      <Section
        id="experience"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="default" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.experience.eyebrow}
            title={pageMeta.experience.heading}
            description={pageMeta.experience.description}
          />
          <ExperienceList />
        </Container>
      </Section>

      <Section
        id="certifications"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.certifications.eyebrow}
            title={pageMeta.certifications.heading}
            description={pageMeta.certifications.description}
          />
          <CertificationList />
        </Container>
      </Section>

      <Section
        id="education"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="default" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Education"
            title="Where I trained — and where I'm sharpening next."
          />
          <EducationTimeline />
        </Container>
      </Section>

      <Section
        id="contact"
        spacing="default"
        className="border-t border-border"
      >
        <Container size="default" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={pageMeta.contact.eyebrow}
            title={pageMeta.contact.heading}
            description={pageMeta.contact.description}
          />
          <ContactPanel />
        </Container>
      </Section>
    </>
  );
}
