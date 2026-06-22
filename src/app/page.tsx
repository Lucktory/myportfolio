import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBackground from '@/components/SkillBackground';
import { projects, skills } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  const professional = projects.filter((p) => p.type === 'professional');
  const personal     = projects.filter((p) => p.type === 'personal');

  // proficiency reflects actual career evidence — proficient stack at top,
  // intermediate / supporting stacks lower
  const skillEntries: { label: string; color: string; items: { name: string; pct: number }[] }[] = [
    { label: 'Web Frontend', color: '#06b6d4', items: [
      { name: 'React.js',   pct: 95 },
      { name: 'TypeScript', pct: 92 },
      { name: 'JavaScript', pct: 95 },
      { name: 'Redux',      pct: 90 },
      { name: 'Vue.js',     pct: 65 },
      { name: 'Next.js',    pct: 72 },
    ]},
    { label: 'Cloud & Infrastructure', color: '#eab308', items: [
      { name: 'AWS',            pct: 92 },
      { name: 'Google Cloud',   pct: 65 },
      { name: 'DevOps',         pct: 70 },
      { name: 'Docker',         pct: 72 },
      { name: 'GitHub Actions', pct: 78 },
    ]},
    { label: 'Backend', color: '#22c55e', items: [
      { name: 'Node.js',         pct: 75 },
      { name: 'Python (Django)', pct: 65 },
      { name: 'Ruby on Rails',   pct: 55 },
      { name: 'REST API Design', pct: 85 },
    ]},
    { label: 'Mobile', color: '#f97316', items: [
      { name: 'React Native', pct: 70 },
      { name: 'Swift (iOS)',  pct: 55 },
      { name: 'Kotlin',       pct: 55 },
    ]},
    { label: 'ML & Data', color: '#ef4444', items: [
      { name: 'TensorFlow',    pct: 65 },
      { name: 'Python',        pct: 72 },
      { name: 'Data Analysis', pct: 60 },
    ]},
    { label: 'Practices', color: '#6366f1', items: [
      { name: 'System Design', pct: 88 },
      { name: 'Code Review',   pct: 92 },
      { name: 'Team Leading',  pct: 85 },
      { name: 'Agile / ATF',   pct: 80 },
      { name: 'Communication', pct: 90 },
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
                  Based in Japan, I work across the full stack — React and TypeScript on the
                  frontend, Node.js and Python on the backend, AWS on the infrastructure side.
                  The core of my career has been frontend engineering at consumer scale, currently
                  at PayPay Corporation, one of Japan&apos;s largest mobile payments platforms.
                </p>
                <p>
                  Over 11+ years the scope has expanded well beyond a single layer. I&apos;ve
                  shipped React applications, Python services, mobile features in React Native,
                  Swift, and Kotlin, and AWS infrastructure for high-throughput consumer products.
                  Team leading, code review, and system design are part of how I work, not separate
                  from it.
                </p>
                <p>
                  Currently completing an MSc in Data Science at the University of Edinburgh
                  remotely, sharpening the analytical foundation behind the engineering work.
                  AWS Certified Solutions Architect — Professional. TensorFlow Developer Certified.
                  ICAgile Team Facilitation. The throughline is the same: shipping software that
                  holds up at consumer scale.
                </p>
              </div>
              <div className={styles.aboutCards}>
                <InfoCard icon="🏢" label="Current"   value="PayPay Corporation"   sub="Senior Full-Stack Engineer" />
                <InfoCard icon="📍" label="Location"  value="Tokyo, Japan"         sub="Remote-friendly" />
                <InfoCard icon="🎓" label="Studying"  value="MSc Data Science"     sub="Edinburgh · In progress" />
                <InfoCard icon="💻" label="Stack"     value="React · TS · AWS"     sub="Full-Stack" />
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
              Open to part-time or full-time remote contracts — React, TypeScript, AWS, or
              full-stack product work. I work well async across time zones and communicate
              clearly in English. Comfortable owning a feature end-to-end.
            </p>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <p className={styles.contactCardLabel}>Platform</p>
                <p className={styles.contactCardValue}>LinkedIn</p>
                <p className={styles.contactCardSub}>Primary channel · Connect &amp; message</p>
              </div>
              <div className={styles.contactCard}>
                <p className={styles.contactCardLabel}>Platform</p>
                <p className={styles.contactCardValue}>GitHub</p>
                <p className={styles.contactCardSub}>Code &amp; open source</p>
              </div>
              <div className={styles.contactCard}>
                <p className={styles.contactCardLabel}>Location</p>
                <p className={styles.contactCardValue}>Tokyo</p>
                <p className={styles.contactCardSub}>UTC+9 · Remote-friendly</p>
              </div>
              <div className={styles.contactCard}>
                <p className={styles.contactCardLabel}>Response</p>
                <p className={styles.contactCardValue}>24 hours</p>
                <p className={styles.contactCardSub}>Usually same day</p>
              </div>
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

function InfoCard({ icon, label, value, sub }: { icon: string; label: string; value: string; sub: string }) {
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
