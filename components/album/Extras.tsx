import Link from 'next/link';
import { onRepeat } from '@/lib/onRepeat';
import type { Post } from '@/lib/substack';
import { SongCard } from '@/components/now/SongCard';
import { PostList } from '@/components/writing/PostList';
import { WritingEmpty } from '@/components/writing/WritingEmpty';
import { SideHeading } from './SideHeading';

const moreCls = 'text-sm font-bold text-label-ink underline underline-offset-4 hover:text-ink';

export function Extras({ posts }: { posts: Post[] | null }) {
  return (
    <section id="extras" tabIndex={-1} aria-labelledby="extras-heading" className="py-20 outline-none sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SideHeading id="extras-heading" side="Extras" title="On repeat & B-sides" />
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted">On repeat</h3>
              <Link href="/now" className={moreCls}>
                More on /now
              </Link>
            </div>
            <ul className="mt-4 grid max-w-md grid-cols-3 gap-4">
              {onRepeat.slice(0, 3).map((song, i) => (
                <li key={`${song.title}-${i}`}>
                  <SongCard song={song} index={i} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted">B-sides & demos</h3>
              <Link href="/writing" className={moreCls}>
                All writing
              </Link>
            </div>
            <div className="mt-2">{posts?.length ? <PostList posts={posts} compact /> : <WritingEmpty />}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
