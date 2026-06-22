import Link from "next/link";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { getCurrentYear } from "@/lib/dates";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border-strong/70 bg-background">
      <Container size="wide" className="py-14 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Colophon
            </p>
            <p className="mt-4 font-display text-3xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-4xl">
              {profile.name}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Index
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 font-mono text-xs uppercase tracking-[0.16em]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border-strong/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            © {getCurrentYear()} {profile.name} · Set in Instrument Serif, Lexend &amp; JetBrains Mono
          </p>
          <SocialLinks items={profile.socials} />
        </div>
      </Container>
    </footer>
  );
}
