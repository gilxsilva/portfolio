import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gil Silva — Engineer & Designer',
  description:
    'Symbolic Systems + HCI student at Stanford. 2× Amazon SDE Intern. Building human-centered technology.',
  openGraph: {
    title: 'Gil Silva — Engineer & Designer',
    description:
      'Symbolic Systems + HCI at Stanford. 2× Amazon SDE Intern. Building technology that empowers people.',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#FDFCF9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakartaSans.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased" style={{ backgroundColor: '#FDFCF9' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
