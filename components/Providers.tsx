'use client';
import { MotionConfig } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  // reducedMotion="user" reads prefers-reduced-motion and disables all
  // Framer Motion animations for users who have requested it.
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
