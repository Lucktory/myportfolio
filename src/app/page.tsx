import { AboutComposition } from "@/components/feature/AboutComposition";
import { CertificationList } from "@/components/feature/CertificationList";
import { ContactPanel } from "@/components/feature/ContactPanel";
import { EducationTimeline } from "@/components/feature/EducationTimeline";
import { ExperienceList } from "@/components/feature/ExperienceList";
import { HeroBackgroundMount } from "@/components/feature/HeroBackgroundMount";
import { HeroIntro } from "@/components/feature/HeroIntro";
import {
  AccentGlowBackground,
  PatternBackground,
  PhotoBackground,
} from "@/components/feature/SectionBackground";
import { SkillMatrix, TopSkillsRow } from "@/components/feature/SkillMatrix";
import { WorkHistoryCard } from "@/components/feature/WorkHistoryCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/config/pages";

const TOKYO_PHOTO =
  "https://images.unsplash.com/photo-1682985942242-31413035c2db?auto=format&fit=crop&w=2400&q=80";

export default function HomePage() {
  return (
    <>
      {/* HERO — Aurora shader (WebGL) */}
      <Section
        id="top"
        spacing="loose"
        className="relative isolate overflow-hidden bg-background pt-32 sm:pt-40"
      >
        <HeroBackgroundMount />
        <Container size="wide" className="relative z-10">
          <HeroIntro />
        </Container>
      </Section>

      {/* ABOUT — Long-form philosophy + work-history card */}
      <Section
        id="about"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <AccentGlowBackground />
        <Container size="wide" className="relative z-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow={pageMeta.about.eyebrow}
            title={pageMeta.about.heading}
            description={pageMeta.about.description}
          />

          <AboutComposition />

          <WorkHistoryCard />
        </Container>
      </Section>

      {/* SKILLS — Blueprint grid pattern */}
      <Section
        id="skills"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <PatternBackground pattern="grid" />
        <Container size="wide" className="relative z-10 flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.skills.eyebrow}
            title={pageMeta.skills.heading}
            description={pageMeta.skills.description}
          />
          <TopSkillsRow />
          <SkillMatrix />
        </Container>
      </Section>

      {/* EXPERIENCE — Tokyo cityscape photo (Oscar's location) */}
      <Section
        id="experience"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <PhotoBackground
          src={TOKYO_PHOTO}
          alt=""
          position="center"
          intensity="medium"
        />
        <Container size="default" className="relative z-10 flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.experience.eyebrow}
            title={pageMeta.experience.heading}
            description={pageMeta.experience.description}
          />
          <ExperienceList />
        </Container>
      </Section>

      {/* CERTIFICATIONS — Document-feel dot grid */}
      <Section
        id="certifications"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <PatternBackground pattern="dot" />
        <Container size="wide" className="relative z-10 flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.certifications.eyebrow}
            title={pageMeta.certifications.heading}
            description={pageMeta.certifications.description}
          />
          <CertificationList />
        </Container>
      </Section>

      {/* EDUCATION — Academic diagonal lines */}
      <Section
        id="education"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <PatternBackground pattern="diagonal" />
        <Container size="default" className="relative z-10 flex flex-col gap-12">
          <SectionHeading
            eyebrow="Education"
            title="Where I trained — and where I'm sharpening next."
          />
          <EducationTimeline />
        </Container>
      </Section>

      {/* CONTACT — Minimal accent glow */}
      <Section
        id="contact"
        spacing="default"
        className="relative isolate overflow-hidden border-t border-border bg-background"
      >
        <AccentGlowBackground />
        <Container size="default" className="relative z-10 flex flex-col gap-12">
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
