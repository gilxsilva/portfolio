import { siteData } from '@/lib/data';
import { GoldRecord } from './GoldRecord';
import { SideHeading } from './SideHeading';

export function LinerNotes() {
  const { about, awards } = siteData;
  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="border-y border-line bg-paper-deep py-20 outline-none sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SideHeading id="about-heading" side="Liner notes" title="About" />
        <div className="grid gap-12 md:grid-cols-[1.35fr_1fr]">
          <div className="space-y-5 leading-relaxed text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'font-display text-xl leading-snug text-ink sm:text-2xl' : ''}>
                {p}
              </p>
            ))}
          </div>
          <dl className="space-y-4 border-l-2 border-ink pl-6 text-sm">
            {about.credits.map((credit) => (
              <div key={credit.label}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">{credit.label}</dt>
                <dd className="mt-0.5 font-semibold">{credit.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mt-14 text-xs font-bold uppercase tracking-[0.22em] text-muted">Certified gold</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <li key={award.title}>
              <GoldRecord {...award} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
