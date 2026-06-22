import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oscar Cheung | Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer specializing in React, TypeScript, Python, and AWS. 11+ years experience. Based in Japan. Open to remote contracts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
