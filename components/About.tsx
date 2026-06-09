'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion';
import { FloatingEmoji } from '@/components/FloatingEmoji';
import { siteData } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <FloatingEmoji src="/emoji/graduation_cap.png" alt="" size={40} />
          <span className="text-xs font-sans text-muted tracking-widest uppercase">About</span>
          <div className="flex-1 h-px bg-surface-dark" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">

          {/* Narrative text */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="md:col-span-2 space-y-5"
          >
            {siteData.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-sans text-base md:text-lg text-ink/80 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Stats column with glass */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {/* Avatar — visible on md+ in the stats column */}
            <motion.div
              variants={fadeUp}
              className="hidden md:block mb-7"
            >
              <div className="w-24 h-28 rounded-xl overflow-hidden">
                <img
                  src="/avatar.svg"
                  alt="Gil Silva — illustrated avatar"
                  className="w-full h-full object-cover"
                  width={96}
                  height={112}
                />
              </div>
            </motion.div>

            {/* Glass stat cards */}
            <div className="glass-card rounded-xl p-5 space-y-5">
              {siteData.about.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="border-l-2 border-accent/35 pl-4"
                >
                  <div className="font-display text-2xl font-semibold text-ink leading-none mb-1">
                    {h.value}
                  </div>
                  <div className="font-sans text-sm text-muted">
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
