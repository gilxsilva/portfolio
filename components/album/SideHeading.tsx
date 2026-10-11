export function SideHeading({
  id,
  side,
  title,
  aside,
  dark = false,
}: {
  id: string;
  side: string;
  title: string;
  aside?: string;
  dark?: boolean;
}) {
  return (
    <header
      className={`mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-2 pb-4 ${
        dark ? 'border-paper/80' : 'border-ink'
      }`}
    >
      <div>
        <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? 'text-label' : 'text-label-ink'}`}>
          {side}
        </p>
        <h2 id={id} className="mt-1 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </div>
      {aside && <p className={`text-sm ${dark ? 'text-paper/60' : 'text-muted'}`}>{aside}</p>}
    </header>
  );
}
