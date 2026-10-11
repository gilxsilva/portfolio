import Link from 'next/link';
import { siteData } from '@/lib/data';

/** Short footer for inner pages. The homepage ends with the Encore instead. */
export function SiteFooter() {
  const { links } = siteData;
  const linkCls = 'hover:text-paper';
  return (
    <footer className="bg-vinyl py-12 text-sm text-paper/60">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-display text-lg font-bold text-paper hover:text-label">
          ← Back to the album
        </Link>
        <div className="flex flex-wrap gap-5">
          <a href={`mailto:${links.email}`} className={linkCls}>
            {links.email}
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
            LinkedIn ↗
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ side, title, children }: { side: string; title: string; children: React.ReactNode }) {
  return (
    <header className="mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-label-ink">{side}</p>
      <h1 className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{children}</p>
    </header>
  );
}
