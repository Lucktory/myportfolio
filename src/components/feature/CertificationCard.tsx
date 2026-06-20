import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { formatYearMonth, isExpired } from "@/lib/dates";
import { getIcon } from "@/lib/icons";
import { externalLinkProps } from "@/lib/url";
import type { Certification } from "@/types";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const ShieldIcon = getIcon("badgeCheck");
  const ExternalIcon = getIcon("external");

  const expired = isExpired(certification.expiresOn);
  const issued = formatYearMonth(certification.issuedOn);
  const expires = formatYearMonth(certification.expiresOn);

  return (
    <Card
      as="article"
      interactive
      density="compact"
      className="flex h-full flex-col gap-4 bg-background/40"
    >
      <header className="flex items-start gap-3">
        <span
          aria-hidden
          className="inline-flex size-9 shrink-0 items-center justify-center border border-border-strong text-accent"
        >
          <ShieldIcon className="size-4" />
        </span>
        <div className="flex flex-1 flex-col gap-1">
          <CardTitle className="font-display text-base font-normal leading-snug">
            {certification.title}
          </CardTitle>
          <CardDescription className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {certification.issuer}
          </CardDescription>
        </div>
      </header>

      <dl className="grid gap-2 font-mono text-[11px] text-muted-foreground sm:grid-cols-2">
        {issued ? (
          <div>
            <dt className="uppercase tracking-[0.14em]">Issued</dt>
            <dd className="mt-0.5 text-sm text-foreground/85">{issued}</dd>
          </div>
        ) : null}
        {expires ? (
          <div>
            <dt className="uppercase tracking-[0.14em]">
              {expired ? "Expired" : "Valid until"}
            </dt>
            <dd className="mt-0.5 text-sm text-foreground/85">{expires}</dd>
          </div>
        ) : null}
        {certification.credentialId ? (
          <div className="sm:col-span-2">
            <dt className="uppercase tracking-[0.14em]">Credential ID</dt>
            <dd className="mt-0.5 break-all text-[11px] text-foreground/70">
              {certification.credentialId}
            </dd>
          </div>
        ) : null}
      </dl>

      {certification.skills && certification.skills.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {certification.skills.map((skill) => (
            <li
              key={skill}
              className="border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-foreground/75"
            >
              {skill}
            </li>
          ))}
        </ul>
      ) : null}

      {certification.credentialUrl ? (
        <div className="mt-auto pt-2">
          <Link
            href={certification.credentialUrl}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground hover:underline"
            {...externalLinkProps(certification.credentialUrl)}
          >
            Show credential
            <ExternalIcon className="size-3.5" aria-hidden />
          </Link>
        </div>
      ) : null}
    </Card>
  );
}
