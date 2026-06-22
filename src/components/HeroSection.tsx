import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.number}>00</div>

      <div className={styles.inner}>
        {/* ── text block ─────────────────────────────────── */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Senior Full-Stack Engineer · React · AWS · Open to remote
          </p>

          <h1 className={styles.name}>Oscar<br />Cheung</h1>

          <p className={styles.role}>React · TypeScript · Python · AWS</p>

          <p className={styles.bio}>
            11+ years shipping production software at consumer scale.
            Currently at PayPay Corporation in Japan.
            I work across React, TypeScript, Python, and AWS — wherever the problem sits, I build it.
          </p>

          <div className={styles.actions}>
            <a href="#projects"  className={styles.btnPrimary}>View Projects</a>
            <a href="#experience" className={styles.btnGhost}>Experience</a>
          </div>
        </div>

        {/* ── photo block ────────────────────────────────── */}
        <div className={styles.photoBlock}>
          <div className={styles.cornerTL} />
          <div className={styles.cornerTR} />
          <div className={styles.cornerBL} />
          <div className={styles.cornerBR} />
          <Image
            src="/oscar-cheung.png"
            alt="Oscar Cheung"
            width={320}
            height={380}
            className={styles.photo}
            priority
          />
          <div className={styles.photoLabel}>
            <span>Tokyo, Japan</span>
            <span className={styles.photoLabelSep}>·</span>
            <span>UTC+9</span>
          </div>
        </div>
      </div>

      {/* ── stat strip ─────────────────────────────────────── */}
      <div className={styles.statStrip}>
        {[
          { n: '11+', label: 'Years' },
          { n: '13',  label: 'Certs' },
          { n: 'MSc', label: 'Edinburgh' },
          { n: 'AWS', label: 'SA Pro' },
        ].map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statN}>{s.n}</span>
            <span className={styles.statL}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
