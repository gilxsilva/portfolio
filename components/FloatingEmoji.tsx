'use client';
import { motion } from 'framer-motion';

interface FloatingEmojiProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function FloatingEmoji({ src, alt, size = 48, className = '' }: FloatingEmojiProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block shrink-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="select-none pointer-events-none drop-shadow-md"
        draggable={false}
      />
    </motion.div>
  );
}
