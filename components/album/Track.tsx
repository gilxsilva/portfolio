import { Plus } from 'lucide-react';

/** One row of a tracklist. Native <details>, so it expands with mouse, keyboard, and no JS. */
export function Track({
  number,
  title,
  subtitle,
  credits,
  duration,
  gold = false,
  defaultOpen = false,
  children,
}: {
  number: number;
  title: string;
  subtitle?: string;
  credits?: string;
  duration?: string;
  gold?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="track group border-b border-line" open={defaultOpen}>
      <summary className="-mx-3 grid cursor-pointer grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 rounded-xl px-3 py-5 transition-colors hover:bg-paper-deep sm:grid-cols-[2.75rem_1fr_auto_1.25rem] sm:gap-x-4">
        <span className="font-display text-lg tabular-nums text-muted">{String(number).padStart(2, '0')}</span>
        <span className="min-w-0">
          <span className="font-display text-lg font-bold leading-snug sm:text-xl">{title}</span>
          {subtitle && <span className="text-muted"> · {subtitle}</span>}
          {gold && (
            <span className="gold-record ml-2 inline-block size-3.5 translate-y-0.5" title="Award winner" aria-label="Award winner" role="img" />
          )}
          {credits && <span className="mt-1 block text-sm text-muted">{credits}</span>}
        </span>
        <span className="whitespace-nowrap text-right text-xs tabular-nums text-muted sm:text-sm">{duration}</span>
        <Plus
          aria-hidden="true"
          size={18}
          className="hidden self-center text-muted transition-transform duration-300 group-open:rotate-45 sm:block"
        />
      </summary>
      <div className="pb-7 pl-[2.75rem] sm:pl-[3.75rem]">{children}</div>
    </details>
  );
}
