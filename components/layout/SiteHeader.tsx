'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/lib/data';

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Now', href: '/now' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-13 max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 ${
          scrolled || menuOpen ? 'border border-line bg-paper/90 shadow-lg shadow-ink/5 backdrop-blur-xl' : ''
        }`}
      >
        <Link href="/" className="flex items-center gap-2 rounded-lg font-display text-lg font-bold tracking-tight">
          <span className="vinyl size-6" aria-hidden="true" />
          {siteData.name}
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-paper-deep hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-paper-deep hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href={siteData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
          >
            Résumé ↗
          </a>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-0.5 rounded-2xl border border-line bg-paper/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium hover:bg-paper-deep"
            >
              {link.label}
            </Link>
          ))}
          <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className="rounded-xl px-4 py-3 font-medium hover:bg-paper-deep">
            GitHub ↗
          </a>
          <a
            href={siteData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-bold text-paper"
          >
            Résumé ↗
          </a>
        </div>
      )}
    </header>
  );
}
