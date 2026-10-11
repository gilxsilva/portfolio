import { SiteFooter, PageIntro } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
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
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pt-36 pb-24">
        <PageIntro side="Now" title="On repeat">
          {now.intro}
        </PageIntro>

        <section aria-labelledby="songs-heading">
          <h2 id="songs-heading" className="border-b-2 border-ink pb-3 font-display text-2xl font-bold">
            Listening
          </h2>
          <ol>
            {onRepeat.map((song, i) => (
              <li key={`${song.title}-${i}`} className="border-b border-line">
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-3 grid grid-cols-[2rem_3.5rem_1fr_auto] items-center gap-x-4 rounded-xl px-3 py-3 transition-colors hover:bg-paper-deep"
                >
                  <span className="font-display tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <SongArt song={song} index={i} size={112} />
                  <span className="min-w-0">
                    <span className="block truncate font-display text-lg font-bold group-hover:text-label-ink">{song.title}</span>
                    <span className="block truncate text-sm text-muted">{song.artist}</span>
                  </span>
                  <span className="text-sm font-bold text-label-ink">
                    Listen ↗<span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {now.lists.map((list) => (
            <section key={list.title} aria-labelledby={`now-${list.title}`}>
              <h2 id={`now-${list.title}`} className="border-b-2 border-ink pb-3 font-display text-2xl font-bold">
                {list.title}
              </h2>
              <ul className="mt-4 space-y-3 leading-relaxed text-ink-soft">
                {list.items.map((item) => (
                  <li key={item.text}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-label-ink">
                        {item.text} ↗
                      </a>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted">Last updated {updated}.</p>
      </main>
      <SiteFooter />
    </>
  );
}
