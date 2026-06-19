import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section id="not-found" spacing="loose">
      <Container size="narrow" className="flex flex-col items-start gap-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          404
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          That page doesn't exist.
        </h1>
        <p className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          The link may be broken, or the page might have been moved. Head back to
          the homepage or try the navigation.
        </p>
        <Button href="/">Go to homepage</Button>
      </Container>
    </Section>
  );
}
