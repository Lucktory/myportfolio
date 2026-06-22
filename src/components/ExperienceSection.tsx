import styles from './ExperienceSection.module.css';

const experience = [
  {
    company: 'PayPay Corporation',
    location: 'Tokyo, Japan',
    role: 'Senior Full-Stack Engineer',
    period: 'Current',
    current: true,
    description:
      'One of Japan\'s largest mobile payments platforms, serving tens of millions of users. Senior full-stack engineer across React, TypeScript, Python, and AWS in customer-facing systems.',
    highlights: [
      'Lead frontend engineering with React, Redux, and TypeScript on customer-facing features',
      'Design and review AWS infrastructure for high-throughput payment workflows',
      'Code review, system design, and mentorship as part of senior IC responsibilities',
      'Maintain operational stability at consumer payments scale — reliability is the bar',
      'AWS Certified Solutions Architect — Professional · TensorFlow Developer Certified',
    ],
  },
];

const education = [
  {
    school: 'The University of Edinburgh',
    schoolJp: 'MSc — In Progress',
    location: 'Edinburgh, UK · Remote',
    degree: 'Master of Science, Data Science',
    period: 'Currently enrolled',
    highlights: [
      'Pursuing MSc Data Science remotely while continuing full-time engineering work',
      'Coursework areas: machine learning, statistics, applied data engineering',
      'Strengthening the analytical foundation behind production engineering practice',
    ],
  },
  {
    school: 'The Chinese University of Hong Kong',
    schoolJp: '香港中文大學',
    location: 'Hong Kong',
    degree: 'Bachelor of Science, Computer Science',
    period: 'Completed',
    highlights: [
      'Foundational coursework in algorithms, systems, and software engineering',
      'Built the early career groundwork that became 11+ years of production shipping',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <>
      <section id="experience" className={styles.section}>
        <div className={styles.sectionNum}>01</div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Experience</span>
            <h2 className={styles.sectionTitle}>Work History</h2>
          </div>

          <div className={styles.expList}>
            {experience.map((job, i) => (
              <div key={i} className={styles.expCard}>
                <div className={styles.expLeft}>
                  <p className={styles.expCompany}>{job.company}</p>
                  <p className={styles.expLocation}>{job.location}</p>
                  <p className={styles.expRole}>{job.role}</p>
                  <p className={styles.expPeriod}>{job.period}</p>
                  {job.current && <span className={styles.currentBadge}>Current</span>}
                </div>
                <div className={styles.expRight}>
                  <p className={styles.expDesc}>{job.description}</p>
                  <ul className={styles.expHighlights}>
                    {job.highlights.map((h, j) => (
                      <li key={j} className={styles.expHighlight}>
                        <span className={styles.arrow}>›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className={styles.section}>
        <div className={styles.sectionNum}>02</div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Education</span>
            <h2 className={styles.sectionTitle}>Academic Background</h2>
          </div>
          {education.map((edu, i) => (
            <div key={i} className={styles.eduCard}>
              <div className={styles.eduLeft}>
                <div className={styles.eduIcon}>🎓</div>
                <p className={styles.eduSchool}>{edu.school}</p>
                <p className={styles.eduLocation}>{edu.schoolJp}</p>
                <p className={styles.eduLocation}>{edu.location}</p>
              </div>
              <div className={styles.eduRight}>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <p className={styles.eduPeriod}>{edu.period}</p>
                <ul className={styles.expHighlights}>
                  {edu.highlights.map((h, j) => (
                    <li key={j} className={styles.expHighlight}>
                      <span className={styles.arrow}>›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
