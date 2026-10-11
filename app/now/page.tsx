import { SiteFooter, PageIntro } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { NowCards } from '@/components/now/NowCards';
import { SongArt } from '@/components/now/SongCard';
import { pageMetadata } from '@/lib/metadata';
import { now } from '@/lib/now';
import { onRepeat } from '@/lib/onRepeat';

export const metadata = pageMetadata({
  title: 'On repeat',
  description: "What Gil Silva is listening to, building, reading, and learning right now.",
  path: '/now',
});

const updated = new Date(`${now.updated}T00:00:00Z`).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function NowPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pt-36 pb-24">
        <PageIntro side="Now" title="On repeat">
          {now.intro}
        </PageIntro>

        <section aria-labelledby="songs-heading">
          <h2 id="songs-heading" className="border-b-2 border-ink pb-3 font-display text-2xl font-bold">
            Listening
          </h2>
          <ol>
            {onRepeat.map((song, i) => (
              <li
                key={`${song.title}-${i}`}
                className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-line py-6 sm:grid-cols-[2.75rem_7rem_1fr] sm:gap-x-5"
              >
                <span className="font-display tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                <div className="mb-4 w-24 sm:mb-0 sm:w-auto">
                  <SongArt song={song} index={i} size={224} />
                </div>
                <div className="col-start-2 min-w-0 sm:col-start-3">
                  {song.nowPlaying && (
                    <p className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-label-ink">
                      <span className="size-1.5 rounded-full bg-label" aria-hidden="true" />
                      Now playing
                    </p>
                  )}
                  <h3 className="font-display text-xl font-bold leading-snug">{song.title}</h3>
                  <p className="text-muted">
                    {song.artist}
                    {song.album && <span className="italic"> · {song.album}</span>}
                  </p>
                  {song.chapter && (
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-ink">{song.chapter}</p>
                  )}
                  {song.note && <p className="mt-1.5 max-w-xl leading-relaxed text-ink-soft">{song.note}</p>}
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-bold text-label-ink underline underline-offset-4 hover:text-ink"
                  >
                    Listen ↗<span className="sr-only"> to {song.title} (opens in a new tab)</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="also-heading" className="mt-16">
          <h2 id="also-heading" className="border-b-2 border-ink pb-3 font-display text-2xl font-bold">
            Also on repeat
          </h2>
          <NowCards lists={now.lists} />
        </section>

        <p className="mt-16 text-sm text-muted">Last updated {updated}.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
