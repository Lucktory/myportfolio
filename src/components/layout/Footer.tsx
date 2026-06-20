import Link from "next/link";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { getCurrentYear } from "@/lib/dates";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container size="wide" className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-normal tracking-tight text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {profile.role} / {profile.location}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
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

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {getCurrentYear()} {profile.name} · Built with Next.js + Tailwind
          </p>
          <SocialLinks items={profile.socials} />
        </div>
      </Container>
    </footer>
  );
}
