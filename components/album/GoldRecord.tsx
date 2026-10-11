export function GoldRecord({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-paper p-3 pr-4">
      <span className="gold-record size-12 shrink-0" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block font-display font-bold leading-tight">{title}</span>
        <span className="block text-xs text-muted">{detail}</span>
      </span>
    </div>
  );
}

export function GoldChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold-ink">
      <span className="gold-record size-3" aria-hidden="true" />
      {children}
    </span>
  );
}
