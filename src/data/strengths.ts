import type { Strength } from "@/types";

export const strengths: Strength[] = [
  {
    id: "team-leading",
    title: "Team Leading",
    description:
      "Setting direction, unblocking engineers, and creating the conditions for a team to ship sustainably.",
    icon: "users",
  },
  {
    id: "code-review",
    title: "Code Review",
    description:
      "Reviews that raise the floor of a codebase — clear, kind, and grounded in the system's invariants.",
    icon: "code",
  },
  {
    id: "system-design",
    title: "System Design",
    description:
      "Designing services and frontends that scale gracefully — with explicit trade-offs and observable behaviour.",
    icon: "layers",
  },
  {
    id: "management-communication",
    title: "Management & Communication",
    description:
      "Writing clearly, aligning stakeholders, and translating between engineering, product, and business.",
    icon: "briefcase",
  },
];
