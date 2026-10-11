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

/** Compact card for the homepage row. */
export function SongCard({ song, index }: { song: Song; index: number }) {
  return (
    <a href={song.url} target="_blank" rel="noopener noreferrer" className="group block">
      <SongArt song={song} index={index} size={240} />
      <span className="mt-2 block truncate font-display font-bold group-hover:text-label-ink">{song.title}</span>
      <span className="block truncate text-sm text-muted">{song.artist}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
