import Link from 'next/link';
import { Vinyl } from '@/components/album/Vinyl';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 px-6 pt-36 pb-24">
        <Vinyl className="relative w-24" />
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-label-ink">Error 404</p>
        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">Track not found.</h1>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft">
          This one didn&apos;t make the final cut. The rest of the album is still playing.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-ink px-5 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
        >
          Back to the album
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
