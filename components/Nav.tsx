'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/lib/data';

const NAV_LINKS = [
  { label: 'About', href: '#act2' },
  { label: 'Work', href: '#act4' },
  { label: 'Projects', href: '#act5' },
  { label: 'Contact', href: '#act6' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-dark' : ''}`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-display text-[1.05rem] font-semibold text-canvas tracking-tight hover:text-accent transition-colors duration-200"
          aria-label="Gil Silva — back to top"
        >
          Gil Silva
        </a>

        <div className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="listitem"
              className="text-sm font-sans text-canvas/60 hover:text-canvas transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteData.links.email}`}
            className="text-sm font-sans px-4 py-2 border border-canvas/20 text-canvas hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-1 text-canvas hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          scrolled ? 'bg-ink/85 backdrop-blur-xl' : 'bg-[#0A0908]'
        } ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 py-4 flex flex-col border-t border-canvas/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3.5 text-base font-sans text-canvas/60 hover:text-canvas border-b border-canvas/10 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteData.links.email}`}
            className="mt-4 py-2 text-sm font-sans text-accent"
            onClick={() => setMenuOpen(false)}
          >
            {siteData.links.email}
          </a>
        </div>
      </div>
    </header>
  );
}
