import { Vinyl } from '@/components/album/Vinyl';

export function WritingEmpty() {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-dashed border-line p-6">
      <Vinyl className="relative w-14 shrink-0" />
      <div>
        <p className="font-display text-lg font-bold">No B-sides pressed yet.</p>
        <p className="mt-1 text-sm text-muted">
          New posts from Substack will show up here. Check back soon, or say hola below.
        </p>
      </div>
    </div>
  );
}
