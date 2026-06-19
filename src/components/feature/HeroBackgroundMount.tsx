"use client";

import dynamic from "next/dynamic";

const HeroBackground = dynamic(
  () =>
    import("./HeroBackground").then((mod) => mod.HeroBackground),
  { ssr: false, loading: () => null },
);

export function HeroBackgroundMount() {
  return <HeroBackground />;
}
