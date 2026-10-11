import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Code2, Music } from 'lucide-react';
import { Vinyl } from '@/components/album/Vinyl';
import type { NowItem, NowList } from '@/lib/now';

const ICONS = { book: BookOpen, music: Music, code: Code2 } as const;

function Visual({ list, item }: { list: NowList; item: NowItem }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={`${item.text} cover`}
        width={160}
        height={240}
        className="h-36 w-auto rotate-[-4deg] rounded-sm shadow-xl shadow-ink/30 transition-transform duration-300 group-hover:rotate-0"
      />
    );
  }
  if (list.visual === 'vinyl') return <Vinyl className="relative w-32" />;
  const Icon = ICONS[list.visual];
  return (
    <span className="flex size-24 items-center justify-center rounded-full bg-paper/15 ring-1 ring-paper/30" aria-hidden="true">
      <Icon size={44} strokeWidth={1.5} className="text-paper" />
    </span>
  );
}

function Card({ list, item }: { list: NowList; item: NowItem }) {
  const body = (
    <>
      <div
        className="relative flex h-48 items-center justify-center overflow-hidden"
        style={{ background: list.color }}
      >
        <Visual list={list} item={item} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-label-ink">{list.kicker}</p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
          <span className="sr-only">{list.title}: </span>
          {item.text}
        </h3>
        {item.detail && <p className="mt-1 text-muted">{item.detail}</p>}
        <p className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.2em] text-muted" aria-hidden="true">
          {list.title}
        </p>
      </div>
    </>
  );

  const cardCls =
    'group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-transform duration-300 hover:-translate-y-1';

  if (!item.href) return <div className={cardCls}>{body}</div>;
  return item.href.startsWith('/') ? (
    <Link href={item.href} className={cardCls}>
      {body}
    </Link>
  ) : (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardCls}>
      {body}
    </a>
  );
}

/** Building / Reading / Learning as album-style cards. */
export function NowCards({ lists }: { lists: NowList[] }) {
  return (
    <ul className="mt-6 grid gap-5 sm:grid-cols-3">
      {lists.flatMap((list) =>
        list.items.map((item) => (
          <li key={`${list.title}-${item.text}`}>
            <Card list={list} item={item} />
          </li>
        )),
      )}
    </ul>
  );
}
