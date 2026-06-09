'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion';
import { FloatingEmoji } from '@/components/FloatingEmoji';
import { siteData } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-surface overflow-hidden">

      {/* ── Gradient orbs — these show through the glass cards ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-20 -left-32 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(196,90,42,0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-10 -right-20 w-[420px] h-[420px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(123,111,160,0.14) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-14"
        >
          <FloatingEmoji src="/emoji/sparkles.png" alt="" size={44} />
          <span className="text-xs font-sans text-muted tracking-widest uppercase shrink-0">
            Projects
          </span>
          <div className="flex-1 h-px bg-surface-dark" />
        </motion.div>

        {/* Glass card grid */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid sm:grid-cols-2 gap-4 md:gap-5"
          role="list"
        >
          {siteData.projects.map((project) => (
            <motion.article
              key={project.id}
              role="listitem"
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="glass-card relative flex flex-col gap-4 p-7 md:p-8 overflow-hidden rounded-none group"
            >
              {/* Accent bar */}
              <span
                className="absolute inset-y-0 left-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"
                aria-hidden="true"
              />

              {/* Tag + year */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-sans text-[0.65rem] text-muted uppercase tracking-widest bg-surface/60 px-2.5 py-1 border border-surface-dark/60">
                  {project.tag}
                </span>
                <span className="font-sans text-xs text-muted shrink-0">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink tracking-tight leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Award or context */}
              {project.award ? (
                <p className="font-sans text-xs text-accent leading-snug">★ {project.award}</p>
              ) : (
                <p className="font-sans text-xs text-muted/70">{project.context}</p>
              )}
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
