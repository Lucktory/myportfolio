'use client';

import { useEffect, useRef } from 'react';
import { Project } from '@/data/projects';
import ProjectIllustration from './ProjectIllustration';
import styles from './ProjectModal.module.css';

interface Props {
  project: Project;
  onClose: () => void;
}

const TYPE_COLOR: Record<string, string> = {
  professional: '#06b6d4',
  personal:     '#8b5cf6',
};

export default function ProjectModal({ project, onClose }: Props) {
  const color = TYPE_COLOR[project.type];
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    /* always show top of modal on open */
    backdropRef.current?.scrollTo({ top: 0 });
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div ref={backdropRef} className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── illustration header ──────────────────────────── */}
        <div className={styles.hero}>
          <ProjectIllustration id={project.id} type={project.type} />
          <div className={styles.heroGrad} />

          {/* overlaid meta */}
          <div className={styles.heroMeta}>
            <span className={styles.badge}
              style={{ color, borderColor: color + '50', background: color + '18' }}>
              {project.type === 'professional' ? 'Professional' : 'Personal'}
            </span>
            <span className={styles.period}>{project.period}</span>
          </div>

          {/* close button */}
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ── scrollable body ──────────────────────────────── */}
        <div className={styles.body}>

          <h2 className={styles.title}>{project.title}</h2>
          {project.company && <p className={styles.company}>{project.company}</p>}

          {/* tech stack */}
          <div className={styles.stack}>
            {project.stack.map((s) => (
              <span key={s} className={styles.tag}>{s}</span>
            ))}
          </div>

          <p className={styles.description}>{project.description}</p>

          {/* contributions */}
          <h4 className={styles.sectionLabel} style={{ color }}>What I built</h4>
          <ul className={styles.contributions}>
            {project.contributions.map((item, i) => (
              <li key={i} className={styles.contribItem}>
                <span className={styles.arrow} style={{ color }}>›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* challenge */}
          {project.challenge && (
            <>
              <h4 className={styles.sectionLabel} style={{ color: 'var(--red)' }}>Challenge</h4>
              <div className={styles.challenge}>
                {project.challenge}
              </div>
            </>
          )}

          {/* outcome */}
          <h4 className={styles.sectionLabel} style={{ color }}>Outcome</h4>
          <div className={styles.outcome} style={{ borderColor: color + '40', background: color + '0d' }}>
            <span className={styles.outcomeIcon}>✦</span>
            {project.outcome}
          </div>

          {project.note && <p className={styles.note}>{project.note}</p>}
        </div>
      </div>
    </div>
  );
}
