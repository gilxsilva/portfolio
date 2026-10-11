'use client';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { fadeUp, stagger, inView } from './motion';

/* ─── WORK ──────────────────────────────────────────────────────────────── */

const CARD_BLUE = 'linear-gradient(145deg, #A8D6F5 0%, #5AAEE6 55%, #2E92D8 100%)';

export function WorkSection() {
  return (
    <section
      id="work"
      className="py-24 bg-canvas"
      aria-labelledby="work-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="font-sans text-xs font-bold text-accent tracking-widest uppercase mb-3">
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="work-heading"
            className="font-display font-bold text-ink leading-none tracking-tighter"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 6rem)' }}
          >
            Amazon.{' '}
            <span className="text-muted/40">Three times.</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.experience.featured.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.48, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-lift relative rounded-3xl p-6 overflow-hidden"
              style={{ background: CARD_BLUE }}
            >
              {job.note && (
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-sans font-bold mb-4 bg-white/25 text-white">
                  ✦ {job.note}
                </span>
              )}
              <div className="mb-3">
                <span className="font-display text-xl font-bold text-white">{job.company}</span>
                <span className="block font-sans text-sm text-white/70 mt-0.5 leading-snug">{job.role}</span>
                <span className="font-sans text-xs text-white/50 mt-1 block">{job.period}</span>
              </div>
              <p className="font-sans text-sm text-white/75 leading-relaxed mb-5">{job.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-1 text-xs font-sans font-semibold bg-white/20 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
