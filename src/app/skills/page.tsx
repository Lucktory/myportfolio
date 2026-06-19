import type { Metadata } from "next";

import { PageHeader } from "@/components/feature/PageHeader";
import { SkillMatrix, TopSkillsRow } from "@/components/feature/SkillMatrix";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { pageMeta } from "@/config/pages";

const meta = pageMeta.skills;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function SkillsPage() {
  return (
    <>
      <Section id="skills-header" spacing="loose">
        <Container size="wide" className="flex flex-col gap-12">
          <PageHeader meta={meta} />
          <TopSkillsRow />
        </Container>
      </Section>

      <Section id="skills-matrix" spacing="default" className="border-t border-border">
        <Container size="wide">
          <SkillMatrix />
        </Container>
      </Section>
    </>
  );
}
