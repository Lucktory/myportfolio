'use client';

import { useState, useEffect } from 'react';
import styles from './BootSequence.module.css';

const LINES = [
  '> Initializing portfolio...',
  '> Loading marcus_wong.profile...',
  '> Connecting to Singapore...',
  '> Ready.',
];

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < LINES.length) {
        setVisibleLines((prev) => [...prev, LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.boot} ${done ? styles.done : ''}`}>
      {visibleLines.map((line, i) => (
        <div
          key={i}
          className={`${styles.line} ${line === '> Ready.' ? styles.ready : ''}`}
        >
          {line}
        </div>
      ))}
      {!done && <span className={styles.cursor}>█</span>}
    </div>
  );
}
