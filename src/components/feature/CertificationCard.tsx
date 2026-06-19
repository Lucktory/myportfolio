import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
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
    <Card as="article" interactive className="flex h-full flex-col gap-4">
      <header className="flex items-start gap-3">
        <span
          aria-hidden
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground"
        >
          <ShieldIcon className="size-5" />
        </span>
        <div className="flex flex-1 flex-col gap-1">
          <CardTitle>{certification.title}</CardTitle>
          <CardDescription className="text-foreground/80">
            {certification.issuer}
          </CardDescription>
        </div>
      </header>

      <dl className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
        {issued ? (
          <div>
            <dt className="uppercase tracking-[0.12em]">Issued</dt>
            <dd className="mt-0.5 text-sm text-foreground">{issued}</dd>
          </div>
        ) : null}
        {expires ? (
          <div>
            <dt className="uppercase tracking-[0.12em]">
              {expired ? "Expired" : "Valid until"}
            </dt>
            <dd className="mt-0.5 text-sm text-foreground">{expires}</dd>
          </div>
        ) : null}
        {certification.credentialId ? (
          <div className="sm:col-span-2">
            <dt className="uppercase tracking-[0.12em]">Credential ID</dt>
            <dd className="mt-0.5 break-all font-mono text-[11px] text-foreground/80 sm:text-xs">
              {certification.credentialId}
            </dd>
          </div>
        ) : null}
      </dl>

      {certification.skills && certification.skills.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {certification.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="default">{skill}</Badge>
            </li>
          ))}
        </ul>
      ) : null}

      {certification.credentialUrl ? (
        <div className="mt-auto pt-2">
          <Link
            href={certification.credentialUrl}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:underline"
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
