import type { Metadata } from "next";

import { EducationTimeline } from "@/components/feature/EducationTimeline";
import { PageHeader } from "@/components/feature/PageHeader";
import { StrengthsList } from "@/components/feature/StrengthsList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/config/pages";
import { profile } from "@/data/profile";

const meta = pageMeta.about;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function AboutPage() {
  return (
    <>
      <Section id="about-header" spacing="loose">
        <Container size="default" className="flex flex-col gap-12">
          <PageHeader meta={meta} />

          <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground sm:text-lg">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="default">{profile.role}</Badge>
            <Badge variant="outline">{profile.currentEmployer.name}</Badge>
            <Badge variant="outline">{profile.location}</Badge>
            <Badge variant="outline">{profile.yearsOfExperience} years</Badge>
          </div>
        </Container>
      </Section>

      <Section id="strengths" spacing="default" className="border-t border-border">
        <Container size="default" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="How I work"
            title="The practices I bring to a team."
            description="Beyond the code — the soft skills I value as much as the stack."
          />
          <StrengthsList />
        </Container>
      </Section>

      <Section id="education" spacing="default" className="border-t border-border">
        <Container size="default" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Education"
            title="Where I trained — and where I'm sharpening next."
          />
          <EducationTimeline />
        </Container>
      </Section>
    </>
  );
}
