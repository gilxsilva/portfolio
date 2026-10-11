import { siteData } from '@/lib/data';
import { Vinyl } from './Vinyl';

const btn =
  'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5';

function AlbumCover() {
  return (
    <div className="flex justify-center md:justify-start" aria-hidden="true">
      <div className="@container relative w-[min(62vw,23rem)] -translate-x-[14%] md:w-[min(28vw,23rem)] md:translate-x-0">
        <Vinyl className="absolute top-[3%] left-[36%] w-[94%]" />
        <div className="@container relative flex aspect-square flex-col justify-between overflow-hidden rounded-[4px] bg-label p-[7.5cqw] text-paper shadow-2xl shadow-ink/30">
          <div className="flex justify-between whitespace-nowrap text-[clamp(8px,3.3cqw,12px)] font-bold uppercase tracking-[0.28em]">
            <span>{siteData.name}</span>
            <span>Vol. 1</span>
          </div>
          <p className="font-display text-[17cqw] font-bold leading-[0.88] tracking-tight">
            Ingeniero
            <br />
            <span className="font-normal italic">y</span> Diseñador
          </p>
          <div className="flex items-end justify-between whitespace-nowrap text-[clamp(8px,3.3cqw,12px)] font-bold uppercase tracking-[0.28em]">
            <span>Side A · Side B</span>
            <span>2027</span>
          </div>
        </div>
        <span className="absolute -top-[6%] right-[5%] flex size-[22%] rotate-12 items-center justify-center rounded-full bg-paper text-center text-[clamp(7px,2.6cqw,10px)] font-extrabold uppercase leading-tight tracking-wider text-ink shadow-lg ring-1 ring-line">
          SWE
          <br />+ Design
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="cover"
      tabIndex={-1}
      aria-labelledby="hero-name"
      className="relative overflow-hidden pt-28 pb-20 outline-none sm:pt-36 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_1fr] md:gap-8 lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-label-ink">
            <span className="hidden sm:inline">New release · </span>
            {siteData.graduation}
          </p>
          <h1
            id="hero-name"
            className="mt-5 font-display font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 6.75rem)' }}
          >
            {siteData.name}
          </h1>
          <p className="mt-3 font-display text-2xl italic text-ink-soft">
            {siteData.albumTitle} <span className="whitespace-nowrap text-base not-italic text-muted">· {siteData.volume}</span>
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed">{siteData.tagline}</p>
          <p className="mt-3 flex max-w-md items-baseline gap-2 text-sm font-semibold text-emerald-800">
            <span className="size-2 shrink-0 translate-y-[-1px] rounded-full bg-emerald-600" aria-hidden="true" />
            <span className="text-balance">{siteData.availability}</span>
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {siteData.heroFacts.map((fact) => (
              <li key={fact} className="rounded-full border border-line bg-paper-deep px-3 py-1.5 text-sm font-semibold">
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteData.links.resume} target="_blank" rel="noopener noreferrer" className={`${btn} bg-ink text-paper shadow-lg shadow-ink/20`}>
              Résumé ↗
            </a>
            <a href={siteData.links.github} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-ink/80`}>
              GitHub ↗
            </a>
            <a href={siteData.links.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-ink/80`}>
              LinkedIn ↗
            </a>
          </div>
        </div>
        <AlbumCover />
      </div>
    </section>
  );
}
