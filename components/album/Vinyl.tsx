/**
 * A spinning record. Decorative only; the spin stops under prefers-reduced-motion.
 * Pass a position class (relative/absolute) along with the size.
 */
export function Vinyl({ className = 'relative' }: { className?: string }) {
  return (
    <div className={`aspect-square ${className}`} aria-hidden="true">
      <div className="vinyl spin absolute inset-0" />
      <div className="vinyl-sheen absolute inset-0" />
    </div>
  );
}
