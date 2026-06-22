import styles from './TerminalWindow.module.css';

interface Props {
  children: React.ReactNode;
}

export default function TerminalWindow({ children }: Props) {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
        </div>
        <span className={styles.title}>marcus@portfolio: ~</span>
        <div className={styles.placeholder} />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
