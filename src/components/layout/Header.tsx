"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { primaryNav } from "@/config/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { getIcon } from "@/lib/icons";

import { Container } from "./Container";

const MenuIcon = getIcon("menu");
const CloseIcon = getIcon("close");

function getSectionId(href: string): string | null {
  return href.startsWith("#") ? href.slice(1) : null;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = primaryNav
      .map((item) => getSectionId(item.href))
      .filter((id): id is string => Boolean(id));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
          >
            <span aria-hidden className="font-mono text-accent">
              ◐
            </span>
            <span>{profile.name}</span>
            <span className="ml-1 hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
              / {profile.role}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const id = getSectionId(item.href);
                const active = id !== null && id === activeId;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      aria-current={active ? "true" : undefined}
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
            className="inline-flex size-10 items-center justify-center border border-border bg-surface text-foreground md:hidden"
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
                const id = getSectionId(item.href);
                const active = id !== null && id === activeId;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2 font-mono text-xs uppercase tracking-[0.18em]",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      aria-current={active ? "true" : undefined}
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
