export interface Project {
  id: string;
  title: string;
  type: 'professional' | 'personal';
  company?: string;
  period: string;
  stack: string[];
  description: string;
  contributions: string[];
  outcome: string;
  challenge?: string;
  note?: string;
}

/**
 * Placeholder projects.
 *
 * These exist so the Projects section renders cleanly with the same
 * bento grid layout the template was designed around. Replace each
 * entry below with one of your real projects — keep the field
 * structure identical. The component handles 0 to many entries
 * gracefully; add or remove items freely.
 */
export const projects: Project[] = [
  {
    id: '01',
    title: '[Replace with your project title]',
    type: 'professional',
    company: 'PayPay Corporation — Tokyo',
    period: '2024',
    stack: ['React', 'TypeScript', 'Redux', 'AWS'],
    description:
      'Replace this with a 2-sentence summary of a real project: what the problem was, and what you built. Length is flexible — the card scales.',
    contributions: [
      'Replace with one specific shipped outcome — what you built, not what your job description said',
      'Aim for 3-5 bullets per project; the card stays balanced at that count',
      'Numbers and concrete artefacts land harder than adjectives',
      'Mention the constraint or trade-off you navigated, not just the result',
    ],
    outcome:
      'One-line measurable outcome — users impacted, latency reduction, cost saved, or systems consolidated.',
  },
  {
    id: '02',
    title: '[Replace with a second professional project]',
    type: 'professional',
    company: 'PayPay Corporation — Tokyo',
    period: '2023',
    stack: ['React', 'TypeScript', 'AWS', 'Node.js'],
    description:
      'Each project entry is its own card in the bento grid. Two or three professional projects is the sweet spot if you want to keep the section tight; more is fine if each entry earns its place.',
    contributions: [
      'Specific feature, refactor, or system you owned end-to-end',
      'A bullet describing what changed because of your work',
      'A bullet that mentions stakeholders or coordination',
    ],
    outcome: 'What the team or product looked like after this shipped.',
    challenge:
      'Optional. Use this to mention a constraint that shaped the solution — it makes the work feel real.',
  },
  {
    id: '03',
    title: '[Replace with a personal project]',
    type: 'personal',
    period: '2024',
    stack: ['Next.js', 'TypeScript', 'AWS'],
    description:
      'Personal projects sit below professional ones in the layout. Use them to show range — side projects, open source, learning vehicles, or experiments you ship for yourself.',
    contributions: [
      'What the project does and who it is for (including yourself)',
      'A specific technical choice you made and why',
      'A bullet about what you learned or proved by building it',
    ],
    outcome:
      'How the project ended — shipped, abandoned-on-purpose, still maintained, or absorbed into something larger.',
    note:
      'Optional. Use this for a closing thought — what you would do differently, or why the project still matters.',
  },
];

/**
 * Oscar's stack — canonical list. The Skills section composes its own
 * `skillEntries` inline in app/page.tsx; this object stays in sync.
 */
export const skills = {
  frontend:       ['React.js', 'Redux', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js'],
  backend:        ['Node.js', 'Python (Django)', 'Ruby on Rails', 'REST API Design'],
  cloud:          ['AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'DevOps'],
  mobile:         ['React Native', 'Swift (iOS)', 'Kotlin (Android)'],
  data:           ['TensorFlow', 'Python', 'Data Analysis'],
  practices:      ['System Design', 'Code Review', 'Team Leading', 'Agile Team Facilitation', 'Communication'],
};
