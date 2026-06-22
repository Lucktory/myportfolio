'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import ProjectIllustration from './ProjectIllustration';
import ProjectModal from './ProjectModal';
import styles from './ProjectCard.module.css';

interface Props { project: Project; }

const TYPE_COLOR: Record<string, string> = {
  professional: '#06b6d4',
  personal:     '#8b5cf6',
};

export default function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);
  const color = TYPE_COLOR[project.type];

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
      >
        {/* illustration + title overlay */}
        <div className={styles.illustration}>
          <ProjectIllustration id={project.id} type={project.type} />
          <div className={styles.overlay} />

          {/* top: badge + period */}
          <span className={styles.badge}
            style={{ color, borderColor: color + '50', background: color + '14' }}>
            {project.type === 'professional' ? 'Professional' : 'Personal'}
          </span>
          <span className={styles.period}>{project.period}</span>

        </div>

        {/* card footer — title + tags */}
        <div className={styles.footer}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.company && <p className={styles.company}>{project.company}</p>}
          <div className={styles.stack}>
            {project.stack.slice(0, 4).map((s) => (
              <span key={s} className={styles.tag}>{s}</span>
            ))}
            {project.stack.length > 4 && (
              <span className={styles.tagMore}>+{project.stack.length - 4}</span>
            )}
          </div>
        </div>
      </div>

      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
