import type { Metadata } from 'next';
import { Lexend, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Oscar Cheung | Automation Engineer',
  description:
    'Custom automation for individuals and small-to-mid-sized businesses. Node.js, TypeScript, Python, LLM integrations, web scraping. 11+ years of production engineering. Based in Japan. Open to remote work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
