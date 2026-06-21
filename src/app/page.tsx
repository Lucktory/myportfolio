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

export default function HomePage() {
  return (
    <>
      {/* 1 — MANIFESTO HERO */}
      <Section
        id="top"
        spacing="loose"
        className="border-b border-border bg-background pt-32 sm:pt-40"
      >
        <Container size="wide">
          <ManifestoHero />
        </Container>
      </Section>

      {/* 2 — THREE VOICES */}
      <Section
        id="voices"
        spacing="default"
        className="border-b border-border bg-surface/40"
      >
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.voices.eyebrow}
            title={pageMeta.voices.heading}
            description={pageMeta.voices.description}
          />
          <VoicesTranscript />
        </Container>
      </Section>

      {/* 3 — CASE EXCERPTS */}
      <Section
        id="work"
        spacing="loose"
        className="border-b border-border bg-background"
      >
        <Container size="wide" className="flex flex-col gap-16">
          <SectionHeading
            eyebrow={pageMeta.work.eyebrow}
            title={pageMeta.work.heading}
            description={pageMeta.work.description}
          />
          <CaseExcerpts />
        </Container>
      </Section>

      {/* 4 — HOW A PROJECT RUNS */}
      <Section
        id="process"
        spacing="default"
        className="border-b border-border bg-surface/40"
      >
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.process.eyebrow}
            title={pageMeta.process.heading}
            description={pageMeta.process.description}
          />
          <ProcessPhases />
        </Container>
      </Section>

      {/* 5 — PRINCIPLES */}
      <Section
        id="principles"
        spacing="default"
        className="border-b border-border bg-background"
      >
        <Container size="wide" className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={pageMeta.principles.eyebrow}
            title={pageMeta.principles.heading}
            description={pageMeta.principles.description}
          />
          <PrinciplesList />
        </Container>
      </Section>

      {/* 6 — ABOUT THE OPERATOR */}
      <Section
        id="about"
        spacing="default"
        className="border-b border-border bg-surface/40"
      >
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.about.eyebrow}
            title={pageMeta.about.heading}
          />
          <AboutOperator />
        </Container>
      </Section>

      {/* 7 — FOR DEVELOPERS */}
      <Section
        id="developers"
        spacing="default"
        className="border-b border-border bg-background"
      >
        <Container size="default" className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={pageMeta.developers.eyebrow}
            title={pageMeta.developers.heading}
            description={pageMeta.developers.description}
          />
          <ForDevelopers />
        </Container>
      </Section>

      {/* 8 — CONTACT */}
      <Section id="contact" spacing="loose" className="bg-surface/40">
        <Container size="wide" className="flex flex-col gap-12">
          <SectionHeading
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
