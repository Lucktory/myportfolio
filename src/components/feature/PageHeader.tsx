import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageMeta } from "@/types";

type PageHeaderProps = {
  meta: PageMeta;
};

export function PageHeader({ meta }: PageHeaderProps) {
  return (
    <SectionHeading
      as="h1"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    />
  );
}
