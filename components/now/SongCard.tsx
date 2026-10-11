import Image from 'next/image';
import type { Song } from '@/lib/onRepeat';

const SLEEVES = ['#D4561F', '#3A4FA8', '#1F7A52', '#2C7DB8', '#8A3B6B'];

export function SongArt({ song, index, size }: { song: Song; index: number; size: number }) {
  if (song.art) {
    return (
      <Image
        src={song.art}
        alt=""
        width={size}
        height={size}
        className="aspect-square w-full rounded-md object-cover shadow-md shadow-ink/20"
      />
    );
  }
  return (
    <span
      className="relative block aspect-square w-full overflow-hidden rounded-md shadow-md shadow-ink/20"
      style={{ background: SLEEVES[index % SLEEVES.length] }}
      aria-hidden="true"
    >
      <span className="vinyl absolute top-[15%] left-[15%] w-[70%]" style={{ aspectRatio: 1 }} />
    </span>
  );
}

/** Homepage card: a compact row on phones, a cover-first card from sm up. */
export function SongCard({ song, index }: { song: Song; index: number }) {
  return (
    <a href={song.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 sm:block">
      <span className="relative block w-16 shrink-0 sm:w-auto">
        <SongArt song={song} index={index} size={240} />
        {song.nowPlaying && (
          <span className="absolute top-1.5 left-1.5 hidden rounded-full bg-ink/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] whitespace-nowrap text-paper sm:block">
            Now playing
          </span>
        )}
      </span>
      <span className="block min-w-0">
        {song.nowPlaying && (
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-label-ink sm:hidden">Now playing</span>
        )}
        <span className="block truncate font-display font-bold group-hover:text-label-ink sm:mt-2">{song.title}</span>
        <span className="block truncate text-sm text-muted">{song.artist}</span>
        {song.chapter && <span className="mt-0.5 block truncate text-xs text-muted">{song.chapter}</span>}
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
