import type { Metadata } from "next";

import { ContactPanel } from "@/components/feature/ContactPanel";
import { PageHeader } from "@/components/feature/PageHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { pageMeta } from "@/config/pages";

const meta = pageMeta.contact;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function ContactPage() {
  return (
    <Section id="contact-header" spacing="loose">
      <Container size="default" className="flex flex-col gap-12">
        <PageHeader meta={meta} />
        <ContactPanel />
      </Container>
    </Section>
  );
}
