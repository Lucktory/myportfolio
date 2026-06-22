'use client';
import Image from 'next/image';
import styles from './Navbar.module.css';

const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education',  label: 'Education' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  return (
    <aside className={styles.rail}>
      <div className={styles.logoRow}>
        <a href="#hero" className={styles.avatarLink}>
          <Image
            src="/oscar-cheung.png"
            alt="Oscar Cheung"
            width={36}
            height={36}
            className={styles.avatar}
          />
        </a>
        <a href="#hero" className={styles.logo}>
          OC<span className={styles.dot}>.</span>
        </a>
      </div>

      <nav className={styles.nav}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            <span className={styles.linkLine} />
            {l.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className={styles.hire}>
        Hire Me
      </a>

      <div className={styles.side}>
        <span>Japan</span>
        <span className={styles.sideDiv} />
        <span>Senior Full-Stack Engineer</span>
      </div>
    </aside>
  );
}
