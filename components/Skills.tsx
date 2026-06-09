'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion';
import { siteData } from '@/lib/data';

const GROUPS = [
  { label: 'Engineering', key: 'engineering' as const },
  { label: 'Design & Research', key: 'design' as const },
  { label: 'Context & Community', key: 'context' as const },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-xs font-sans text-muted tracking-widest uppercase shrink-0">
            Skills & Tools
          </span>
          <div className="flex-1 h-px bg-surface" />
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {GROUPS.map((group) => (
            <motion.div
              key={group.key}
              variants={fadeUp}
              className="glass-card rounded-xl p-5"
            >
              <h3 className="font-sans text-xs text-muted uppercase tracking-widest mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteData.skills[group.key].map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-sm text-ink bg-surface/50 border border-surface-dark/60 px-3 py-1.5 leading-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
