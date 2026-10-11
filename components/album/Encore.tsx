import { siteData } from '@/lib/data';
import { Vinyl } from './Vinyl';

const btn =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5';

export function Encore() {
  const { contact, links } = siteData;
  return (
    <footer
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-vinyl pt-24 pb-32 text-paper outline-none sm:pt-32"
    >
      <Vinyl className="absolute -top-40 -right-56 w-[30rem] opacity-40 sm:-right-32" />
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-label">Encore · Hidden track</p>
        <h2
          id="contact-heading"
          className="mt-3 font-display font-bold leading-none tracking-tighter"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
        >
          {contact.heading}
        </h2>
        <p className="mt-5 max-w-sm text-lg text-paper/65">{contact.subheading}</p>
        <p className="mt-2 max-w-xl text-sm text-balance text-paper/50">
          {siteData.graduation} · {siteData.availability}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${links.email}`} className={`${btn} bg-label text-paper`}>
            {links.email}
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-paper/30 hover:border-paper`}>
            LinkedIn ↗
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-paper/30 hover:border-paper`}>
            GitHub ↗
          </a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-paper/30 hover:border-paper`}>
            Résumé ↗
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-paper/10 pt-8 text-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-medium text-paper/70">{contact.closingLine}</p>
            <p className="mt-0.5 text-paper/45">{contact.closingLineSub}</p>
          </div>
          <p className="shrink-0 text-paper/45">
            © 2026 {siteData.name} · {siteData.albumTitle}, Vol. 1
          </p>
        </div>
      </div>
    </footer>
  );
}
