import { AboutOperator } from "@/components/feature/AboutOperator";
import { CaseExcerpts } from "@/components/feature/CaseExcerpts";
import { ContactDirect } from "@/components/feature/ContactDirect";
import { ForDevelopers } from "@/components/feature/ForDevelopers";
import { ManifestoHero } from "@/components/feature/ManifestoHero";
import { PrinciplesList } from "@/components/feature/PrinciplesList";
import { ProcessPhases } from "@/components/feature/ProcessPhases";
import { VoicesTranscript } from "@/components/feature/VoicesTranscript";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/config/pages";

const TOTAL_SECTIONS = 8;

export default function HomePage() {
  return (
    <>
      {/* 1 — MANIFESTO HERO */}
      <Section
        id="top"
        spacing="xl"
        className="bg-background pt-32 sm:pt-36 lg:pt-40"
      >
        <Container size="wide">
          <ManifestoHero />
        </Container>
      </Section>

      {/* 2 — THREE VOICES */}
      <Section id="voices" spacing="xl" className="bg-muted">
        <Container size="wide" className="flex flex-col gap-16 lg:gap-20">
          <SectionHeading
            index="02"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.voices.eyebrow}
            title={pageMeta.voices.heading}
            description={pageMeta.voices.description}
          />
          <VoicesTranscript />
        </Container>
      </Section>

      {/* 3 — CASE EXCERPTS */}
      <Section id="work" spacing="xl" className="bg-background">
        <Container size="wide" className="flex flex-col gap-16 lg:gap-24">
          <SectionHeading
            index="03"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.work.eyebrow}
            title={pageMeta.work.heading}
            description={pageMeta.work.description}
          />
          <CaseExcerpts />
        </Container>
      </Section>

      {/* 4 — HOW A PROJECT RUNS */}
      <Section id="process" spacing="xl" className="bg-muted">
        <Container size="wide" className="flex flex-col gap-16 lg:gap-20">
          <SectionHeading
            index="04"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.process.eyebrow}
            title={pageMeta.process.heading}
            description={pageMeta.process.description}
          />
          <ProcessPhases />
        </Container>
      </Section>

      {/* 5 — PRINCIPLES */}
      <Section id="principles" spacing="xl" className="bg-background">
        <Container size="wide" className="flex flex-col gap-16 lg:gap-20">
          <SectionHeading
            index="05"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.principles.eyebrow}
            title={pageMeta.principles.heading}
            description={pageMeta.principles.description}
          />
          <PrinciplesList />
        </Container>
      </Section>

      {/* 6 — ABOUT THE OPERATOR */}
      <Section id="about" spacing="xl" className="bg-muted">
        <Container size="wide" className="flex flex-col gap-14 lg:gap-16">
          <SectionHeading
            index="06"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.about.eyebrow}
            title={pageMeta.about.heading}
          />
          <AboutOperator />
        </Container>
      </Section>

      {/* 7 — FOR DEVELOPERS */}
      <Section id="developers" spacing="xl" className="bg-background">
        <Container size="default" className="flex flex-col gap-14 lg:gap-16">
          <SectionHeading
            index="07"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.developers.eyebrow}
            title={pageMeta.developers.heading}
            description={pageMeta.developers.description}
          />
          <ForDevelopers />
        </Container>
      </Section>

      {/* 8 — CONTACT */}
      <Section id="contact" spacing="xl" className="bg-muted">
        <Container size="wide" className="flex flex-col gap-14 lg:gap-16">
          <SectionHeading
            index="08"
            totalSections={TOTAL_SECTIONS}
            eyebrow={pageMeta.contact.eyebrow}
            title={pageMeta.contact.heading}
            description={pageMeta.contact.description}
          />
          <ContactDirect />
        </Container>
      </Section>
    </>
  );
}
