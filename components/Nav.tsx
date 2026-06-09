'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/lib/data';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hablemos', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <header id="main-nav" className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <nav
        className={`max-w-5xl mx-auto px-5 h-13 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-surface-dark shadow-lg shadow-ink/[0.07]'
            : ''
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-display font-bold text-[1.05rem] text-ink tracking-tight hover:text-accent transition-colors duration-200 rounded-lg px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Gil Silva — back to top"
        >
          GS
        </a>

        <div className="hidden md:flex items-center gap-0.5" role="list">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="listitem"
              className="text-sm font-sans font-medium text-muted hover:text-ink px-4 py-2 rounded-xl hover:bg-surface transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm font-sans font-bold px-4 py-2.5 text-white rounded-xl hover:-translate-y-0.5 transition-all duration-200 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            style={{ background: 'linear-gradient(135deg, #3B82C4 0%, #1D6DB0 100%)' }}
          >
            Résumé ↗
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink hover:text-accent transition-colors rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        role="region"
        className={`md:hidden mx-4 overflow-hidden transition-all duration-300 rounded-2xl mt-2 ${
          menuOpen
            ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-xl border border-surface-dark shadow-xl shadow-ink/10'
            : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-3 py-3 flex flex-col gap-0.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-4 text-base font-sans font-medium text-ink hover:text-accent hover:bg-blue-50 rounded-xl transition-all duration-150"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 px-4 text-sm font-sans font-bold text-center text-white rounded-xl transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #3B82C4 0%, #1D6DB0 100%)' }}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </header>
  );
}
