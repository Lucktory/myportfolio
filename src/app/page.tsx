import type { ReactNode } from 'react';
import { Briefcase, Building2, Clock, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBackground from '@/components/SkillBackground';
import { projects, skills } from '@/data/projects';
import styles from './page.module.css';

const ICON_SIZE = 18;
const ICON_STROKE = 1.75;

export default function Home() {
  const professional = projects.filter((p) => p.type === 'professional');
  const personal     = projects.filter((p) => p.type === 'personal');

  // automation-engineer stack — primary tools at top, supporting infra below
  const skillEntries: { label: string; color: string; items: { name: string; pct: number }[] }[] = [
    { label: 'Custom Automation Backend', color: '#06b6d4', items: [
      { name: 'Node.js',          pct: 92 },
      { name: 'TypeScript',       pct: 92 },
      { name: 'Python',           pct: 85 },
      { name: 'REST APIs',        pct: 90 },
      { name: 'Webhooks',         pct: 88 },
    ]},
    { label: 'AI & LLM Integration', color: '#a855f7', items: [
      { name: 'OpenAI API',       pct: 88 },
      { name: 'Anthropic API',    pct: 85 },
      { name: 'LangChain',        pct: 75 },
      { name: 'Vector Embeddings', pct: 72 },
      { name: 'Prompt Engineering', pct: 88 },
    ]},
    { label: 'Browser & Web Automation', color: '#f97316', items: [
      { name: 'Playwright',       pct: 90 },
      { name: 'Puppeteer',        pct: 82 },
      { name: 'Selenium',         pct: 75 },
      { name: 'BeautifulSoup',    pct: 85 },
      { name: 'Anti-bot Handling', pct: 80 },
    ]},
    { label: 'Cloud & Deployment', color: '#eab308', items: [
      { name: 'AWS Lambda',       pct: 88 },
      { name: 'AWS (S3, RDS)',    pct: 85 },
      { name: 'Docker',           pct: 78 },
      { name: 'GitHub Actions',   pct: 85 },
      { name: 'Vercel / Railway', pct: 80 },
    ]},
    { label: 'Data & Storage', color: '#22c55e', items: [
      { name: 'PostgreSQL',       pct: 82 },
      { name: 'Supabase',         pct: 78 },
      { name: 'Airtable API',     pct: 75 },
      { name: 'Redis',            pct: 70 },
      { name: 'SQLite',           pct: 80 },
    ]},
    { label: 'Engineering Practice', color: '#6366f1', items: [
      { name: 'System Design',    pct: 90 },
      { name: 'Documentation',    pct: 92 },
      { name: 'Code Review',      pct: 90 },
      { name: 'Reliability',      pct: 88 },
      { name: 'Async Comms',      pct: 90 },
    ]},
  ];

  return (
    <div className={styles.layout}>
      <Navbar />

      <main className={styles.main}>
        <HeroSection />

        {/* ── About ───────────────────────────────────────── */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionNum}>00</div>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>About</span>
              <h2 className={styles.sectionTitle}>Who I Am</h2>
            </div>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <p>
                  I build automation that gives individuals and businesses hours of their week
                  back. Custom workflow tools, internal systems, and the quiet kind of software
                  that takes the manual, repetitive work off your team — work that gets done
                  while you sleep.
                </p>
                <p>
                  Most of my clients are individuals and small-to-mid-sized businesses whose
                  tools have outgrown their workarounds. The pattern repeats: three people
                  entering the same data into three different tools, weekly reports built by
                  hand from spreadsheets, vendor SaaS charging tens of thousands a year for the
                  20% of the feature set anyone actually uses. I ship the version that does only
                  the work you need — fewer subscriptions, fewer manual steps, measurable time
                  and money saved every month.
                </p>
                <p>
                  All of this is backed by 11+ years of production engineering — currently at
                  PayPay Corporation in Tokyo, one of Japan&apos;s largest mobile payments
                  platforms. The discipline that keeps a fintech system reliable is the same
                  discipline I bring to your operations: boring on purpose, documented, and
                  paying back long after I&apos;m gone. AWS Solutions Architect — Professional.
                  MSc Data Science at Edinburgh in progress.
                </p>
              </div>
              <div className={styles.aboutCards}>
                <InfoCard
                  icon={<Briefcase size={ICON_SIZE} strokeWidth={ICON_STROKE} />}
                  label="Focus"
                  value="Custom automation"
                  sub="Individuals & SMBs"
                />
                <InfoCard
                  icon={<Clock size={ICON_SIZE} strokeWidth={ICON_STROKE} />}
                  label="Saves"
                  value="Hours per week"
                  sub="Measurable ROI"
                />
                <InfoCard
                  icon={<MapPin size={ICON_SIZE} strokeWidth={ICON_STROKE} />}
                  label="Location"
                  value="Tokyo, Japan"
                  sub="Remote-friendly"
                />
                <InfoCard
                  icon={<Building2 size={ICON_SIZE} strokeWidth={ICON_STROKE} />}
                  label="Day job"
                  value="PayPay Corporation"
                  sub="Senior Full-Stack Engineer"
                />
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />

        {/* ── Projects ────────────────────────────────────── */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionNum}>03</div>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Projects</span>
              <h2 className={styles.sectionTitle}>What I Have Built</h2>
            </div>

            <div className={styles.projectsHead}>
              <span className={styles.projectDot} style={{ background: '#f97316' }} />
              Professional Projects
            </div>
            <div className={styles.bentoGrid}>
              {professional.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <div className={styles.projectsHead} style={{ marginTop: 48 }}>
              <span className={styles.projectDot} style={{ background: '#6366f1' }} />
              Personal Projects
            </div>
            <div className={styles.bentoGrid}>
              {personal.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionNum}>04</div>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Skills</span>
              <h2 className={styles.sectionTitle}>Technical Stack</h2>
            </div>
            <div className={styles.skillsGrid}>
              {skillEntries.map((g) => (
                <div key={g.label} className={styles.skillGroup} style={{ ['--skill-color' as string]: g.color }}>
                  <div className={styles.skillBg}>
                    <SkillBackground label={g.label} color={g.color} />
                  </div>
                  <h4 className={styles.skillLabel} style={{ color: g.color }}>{g.label}</h4>
                  <div className={styles.skillBars}>
                    {g.items.map((item) => (
                      <div key={item.name} className={styles.skillBar}>
                        <div className={styles.skillBarMeta}>
                          <span className={styles.skillBarName}>{item.name}</span>
                          <span className={styles.skillBarPct} style={{ color: g.color }}>{item.pct}%</span>
                        </div>
                        <div className={styles.skillBarTrack}>
                          <div
                            className={styles.skillBarFill}
                            style={{ width: `${item.pct}%`, background: g.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionNum}>05</div>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Contact</span>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
            </div>
            <p className={styles.contactBio}>
              Tell me what you&apos;re trying to automate. I usually reply within a day.
            </p>
            <div className={styles.contactRow}>
              <ContactBtn
                href="https://www.linkedin.com/in/oscarcheung"
                label="LinkedIn"
                handle="/in/oscarcheung"
                icon={<FaLinkedinIn size={22} />}
                external
              />
              <ContactBtn
                href="https://github.com/Lucktory"
                label="GitHub"
                handle="@Lucktory"
                icon={<FaGithub size={22} />}
                external
              />
              <ContactBtn
                href="mailto:hello@example.com"
                label="Email"
                handle="Coming soon"
                icon={<Mail size={22} strokeWidth={1.75} />}
              />
              <ContactBtn
                href="https://wa.me/000000000000"
                label="WhatsApp"
                handle="Coming soon"
                icon={<FaWhatsapp size={22} />}
                external
              />
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Oscar Cheung · Tokyo, Japan · Senior Full-Stack Engineer</span>
          <div className={styles.footerRight}>
            <div className={styles.footerDot} />
            <span>Available for remote contracts</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function InfoCard({ icon, label, value, sub }: { icon: ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className={styles.infoCard}>
      <span className={styles.infoIcon}>{icon}</span>
      <div>
        <div className={styles.infoLabel}>{label}</div>
        <div className={styles.infoValue}>{value}</div>
        <div className={styles.infoSub}>{sub}</div>
      </div>
    </div>
  );
}

function ContactBtn({
  href,
  label,
  handle,
  icon,
  external,
}: {
  href: string;
  label: string;
  handle: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={styles.contactBtn}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={styles.contactBtnIcon}>{icon}</span>
      <span className={styles.contactBtnLabel}>{label}</span>
      <span className={styles.contactBtnHandle}>{handle}</span>
    </a>
  );
}
