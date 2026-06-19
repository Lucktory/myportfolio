"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryNav } from "@/config/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { getIcon } from "@/lib/icons";

import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = getIcon("menu");
  const CloseIcon = getIcon("close");

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            {profile.name}
            <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">
              · {profile.role}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-sm",
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-surface-hover hover:text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
          >
            {isOpen ? (
              <CloseIcon className="size-4" aria-hidden />
            ) : (
              <MenuIcon className="size-4" aria-hidden />
            )}
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border py-3 md:hidden"
          >
            <ul className="flex flex-col">
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm",
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-surface-hover hover:text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
