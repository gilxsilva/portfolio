'use client';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { fadeUp, stagger, inView } from './motion';

/* ─── ABOUT ─────────────────────────────────────────────────────────────── */

const STAT_STYLES = [
  { bg: '#3A5FCC', shadow: 'rgba(58,95,204,0.25)' },
  { bg: '#D05C14', shadow: 'rgba(208,92,20,0.25)' },
  { bg: '#1A9E48', shadow: 'rgba(26,158,72,0.25)' },
  { bg: '#2E92D8', shadow: 'rgba(46,146,216,0.25)' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <motion.p variants={fadeUp} className="font-sans text-xs font-bold text-accent tracking-widest uppercase mb-3">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="font-display font-bold text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
            >
              Born in SF, raised<br />in Chapala, MX.
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 font-sans text-base text-muted leading-relaxed">
              <p>
                Born in San Francisco, raised in Chapala, Jalisco. Back in the US for Stanford. Two languages, two cultures, and a conviction that technology should work for everyone, not just the people who build it.
              </p>
              <p>
                Symbolic Systems + HCI at Stanford. 3× Amazon SDE intern. Co-founded an English-learning program that still runs at 826 Valencia, SF.
              </p>
            </motion.div>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {siteData.about.highlights.map((h, i) => {
              const s = STAT_STYLES[i];
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.93 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={inView}
                  transition={{ duration: 0.42, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="card-lift rounded-3xl p-6 bg-white border border-surface-dark"
                  style={{ boxShadow: `0 8px 24px -4px ${s.shadow}` }}
                >
                  <div
                    className="font-display font-bold text-3xl md:text-4xl mb-2"
                    style={{ color: s.bg }}
                  >
                    {h.value}
                  </div>
                  <div className="font-sans text-sm text-muted leading-snug">{h.label}</div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
