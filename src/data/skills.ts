import type { SkillGroup } from "@/types";

export const topSkills: string[] = [
  "Amazon Web Services (AWS)",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Front-End Development",
];

export const skillGroups: SkillGroup[] = [
  {
    id: "proficient",
    level: "proficient",
    title: "Proficient",
    description:
      "The core stack I reach for daily. Shipped, scaled, and supported in production over years.",
    icon: "sparkles",
    skills: ["React.js", "Redux", "JavaScript", "TypeScript", "AWS"],
  },
  {
    id: "intermediate",
    level: "intermediate",
    title: "Intermediate",
    description:
      "Tools I've built real features with and remain comfortable picking up on a project.",
    icon: "layers",
    skills: [
      "TensorFlow",
      "React Native",
      "Vue.js",
      "Node.js",
      "Django",
      "Ruby on Rails",
      "Kotlin (Android)",
      "Swift (iOS)",
      "DevOps",
      "Google Cloud",
    ],
  },
  {
    id: "leadership",
    level: "leadership",
    title: "Leadership & Practice",
    description:
      "How I show up beyond the code — guiding teams and shaping the systems we build.",
    icon: "users",
    skills: [
      "Team Leading",
      "Code Review",
      "System Design",
      "Management",
      "Communication",
    ],
  },
];
