import { certificationCategoryMeta, certifications } from "@/data/certifications";
import { compareYearMonthDesc } from "@/lib/dates";
import type { Certification } from "@/types";

import { CertificationCard } from "./CertificationCard";

function groupByCategory(items: Certification[]) {
  const order: Certification["category"][] = [
    "cloud",
    "ai-ml",
    "language",
    "education",
    "facilitation",
  ];
  const groups = new Map<Certification["category"], Certification[]>();
  for (const item of items) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }
  for (const [, list] of groups) {
    list.sort((a, b) => compareYearMonthDesc(a.issuedOn || "", b.issuedOn || ""));
  }
  return order
    .filter((category) => groups.has(category))
    .map((category) => ({
      category,
      meta: certificationCategoryMeta[category],
      items: groups.get(category) ?? [],
    }));
}

export function CertificationList() {
  const groups = groupByCategory(certifications);

  return (
    <div className="flex flex-col gap-14">
      {groups.map(({ category, meta, items }) => (
        <section key={category} aria-labelledby={`cert-${category}`}>
          <header className="mb-6 flex flex-col gap-1">
            <h2
              id={`cert-${category}`}
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              {meta.label}
            </h2>
            <p className="text-sm text-muted-foreground">{meta.description}</p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id} className="h-full">
                <CertificationCard certification={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
