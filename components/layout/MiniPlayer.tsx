'use client';
import { useEffect, useRef, useState } from 'react';
import { ListMusic, SkipBack, SkipForward } from 'lucide-react';
import { sections } from '@/lib/sections';

const iconBtn =
  'rounded-lg p-2 text-paper/75 transition-colors hover:bg-white/10 hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent';

/** Sticky "now playing" bar: shows the current section, scroll progress, and jumps between sections. */
export function MiniPlayer() {
  const [active, setActive] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Current section: whichever one crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(sections.findIndex((s) => s.id === entry.target.id));
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Progress bar follows scroll position without re-rendering.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!listOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setListOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [listOpen]);

  const play = (index: number) => {
    const el = document.getElementById(sections[index].id);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    el.focus({ preventScroll: true });
    setActive(index);
    setListOpen(false);
  };

  const current = sections[active];
  const prev = sections[active - 1];
  const next = sections[active + 1];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <nav
        aria-label="Section player"
        className="pointer-events-auto mx-auto max-w-2xl overflow-hidden rounded-2xl bg-vinyl/95 text-paper shadow-2xl shadow-ink/40 ring-1 ring-white/10 backdrop-blur"
      >
        {listOpen && (
          <ol id="player-tracklist" className="border-b border-white/10 p-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <button
                  onClick={() => play(i)}
                  aria-current={i === active ? 'true' : undefined}
                  className={`flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                    i === active ? 'text-label' : 'text-paper/80'
                  }`}
                >
                  <span className="w-5 font-display tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-semibold">{section.label}</span>
                  <span className="ml-auto text-xs text-paper/45">{section.side}</span>
                </button>
              </li>
            ))}
          </ol>
        )}
        <div className="h-0.5 bg-white/10">
          <div ref={progressRef} className="h-full origin-left bg-label" style={{ transform: 'scaleX(0)' }} />
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="vinyl spin size-9 shrink-0" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/50">Now playing · {current.side}</p>
            <p className="truncate font-display font-bold">
              {String(active + 1).padStart(2, '0')} · {current.label}
            </p>
          </div>
          <button
            className={iconBtn}
            onClick={() => play(active - 1)}
            disabled={!prev}
            aria-label={prev ? `Previous: ${prev.label}` : 'Previous'}
          >
            <SkipBack size={18} />
          </button>
          <button
            className={iconBtn}
            onClick={() => play(active + 1)}
            disabled={!next}
            aria-label={next ? `Next: ${next.label}` : 'Next'}
          >
            <SkipForward size={18} />
          </button>
          <button
            className={iconBtn}
            onClick={() => setListOpen(!listOpen)}
            aria-expanded={listOpen}
            aria-controls="player-tracklist"
            aria-label="Tracklist"
          >
            <ListMusic size={18} />
          </button>
        </div>
      </nav>
    </div>
  );
}
