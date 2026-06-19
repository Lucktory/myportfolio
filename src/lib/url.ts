export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function mailto(email: string, subject?: string): string {
  const base = `mailto:${email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export function externalLinkProps(href: string) {
  return isExternalUrl(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};
}
