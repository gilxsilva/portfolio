'use client';
import { motion } from 'framer-motion';
import { fadeUpSubtle, stagger, VIEWPORT } from '@/lib/motion';
import { siteData } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label — small 📦 emoji, static, no float (credibility zone) */}
        <motion.div
          variants={fadeUpSubtle}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-14"
        >
          <img
            src="/emoji/package.png"
            alt=""
            width={32}
            height={32}
            className="select-none"
            aria-hidden="true"
          />
          <span className="text-xs font-sans text-muted tracking-widest uppercase">Work</span>
          <div className="flex-1 h-px bg-surface" />
        </motion.div>

        {/* Featured roles — CLEAN. No glass. */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="divide-y divide-surface"
        >
          {siteData.experience.featured.map((job) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={fadeUpSubtle}
              className="py-10 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink tracking-tight">
                    {job.company}
                  </h3>
                  <p className="font-sans text-base text-muted mt-0.5">{job.role}</p>
                </div>
                <span className="font-sans text-sm text-muted shrink-0">{job.period}</span>
              </div>

              <p className="font-sans text-base text-ink/70 leading-relaxed max-w-2xl mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                {job.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs text-muted bg-surface px-2.5 py-1 border border-surface-dark"
                  >
                    {tag}
                  </span>
                ))}
                {job.note && (
                  <span className="font-sans text-xs text-accent ml-1">
                    ↗ {job.note}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Earlier roots */}
        <motion.div
          variants={fadeUpSubtle}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-10 pt-8 border-t border-surface"
        >
          <p className="font-sans text-xs text-muted uppercase tracking-widest mb-5">Earlier</p>
          <div className="flex flex-col gap-3">
            {siteData.experience.earlier.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5"
              >
                <span className="font-sans text-sm text-ink">
                  {job.company}
                  <span className="text-muted"> — {job.role}</span>
                </span>
                <span className="font-sans text-xs text-muted">{job.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
