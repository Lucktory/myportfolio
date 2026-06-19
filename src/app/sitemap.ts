import type { MetadataRoute } from "next";

import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return footerNav.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
