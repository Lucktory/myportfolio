import type { ProcessPhase } from "@/types";

export const processPhases: ProcessPhase[] = [
  {
    id: "listen",
    title: "Listen",
    body: "I sit with the team for a few days. I read the spreadsheets. I watch what people actually do — not what the org chart says they do.",
  },
  {
    id: "map",
    title: "Map the mess",
    body: "I diagram what's really happening: the loops, the shadow tools, the unspoken rules. We agree on the picture before anyone writes code.",
  },
  {
    id: "slice",
    title: "Build a thin slice",
    body: "One workflow end-to-end, used by real people in the second or third week. No big-bang launches, no eighteen-month roadmaps.",
  },
  {
    id: "survive",
    title: "Make it survive",
    body: "Permissions, mistake recovery, audit trails, edge cases. The boring parts that decide whether the system lasts beyond the honeymoon.",
  },
  {
    id: "handoff",
    title: "Hand off",
    body: "I train the team in their language, not mine. The owner walks away with admin keys, plain-English docs, and a system the staff can actually run.",
  },
  {
    id: "stay",
    title: "Stay reachable",
    body: "A small monthly arrangement for fixes, tweaks, and the things you'll only notice once the system is real. No surprise invoices.",
  },
];
