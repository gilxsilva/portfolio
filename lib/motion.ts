import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

// Subtler variant for the credibility-zone Work section
export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 28 },
  },
};

export function stagger(delay = 0.06): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: delay } },
  };
}

export const VIEWPORT = { once: true, margin: '-60px' } as const;
