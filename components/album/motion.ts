/* ─── Animation helpers ─────────────────────────────────────────────────── */

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const stagger = (delay = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export const inView = { once: true, margin: '-72px' as const };
