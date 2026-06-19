import type { Metadata } from "next";

import { CertificationList } from "@/components/feature/CertificationList";
import { PageHeader } from "@/components/feature/PageHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { pageMeta } from "@/config/pages";

const meta = pageMeta.certifications;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function CertificationsPage() {
  return (
    <>
      <Section id="certifications-header" spacing="loose">
        <Container size="wide" className="flex flex-col gap-12">
          <PageHeader meta={meta} />
        </Container>
      </Section>

      <Section id="certifications-list" spacing="tight" className="border-t border-border pb-24">
        <Container size="wide">
          <CertificationList />
        </Container>
      </Section>
    </>
  );
}
