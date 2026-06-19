import type { Metadata } from "next";

import { ExperienceList } from "@/components/feature/ExperienceList";
import { PageHeader } from "@/components/feature/PageHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { pageMeta } from "@/config/pages";

const meta = pageMeta.experience;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function ExperiencePage() {
  return (
    <>
      <Section id="experience-header" spacing="loose">
        <Container size="default" className="flex flex-col gap-12">
          <PageHeader meta={meta} />
          <ExperienceList />
        </Container>
      </Section>
    </>
  );
}
