'use client';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { fadeUp, stagger, inView } from './motion';

/* ─── PROJECTS ──────────────────────────────────────────────────────────── */

const PROJECT_STYLES: Record<string, { pill: string; accent: string }> = {
  'HCI · Product':       { pill: '#3A5FCC', accent: '#3A5FCC' },
  'Mobile · Social':     { pill: '#D05C14', accent: '#D05C14' },
  'Global Health · AI':  { pill: '#2E92D8', accent: '#2E92D8' },
  'Community · EdTech':  { pill: '#1A9E48', accent: '#1A9E48' },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-canvas"
      aria-labelledby="projects-heading"
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
            Proyectos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="projects-heading"
            className="font-display font-bold text-ink leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Things I&apos;ve built.
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {siteData.projects.map((project, i) => {
            const style = PROJECT_STYLES[project.tag] ?? { pill: '#3B82C4', accent: '#3B82C4' };
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.46, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-lift rounded-3xl p-6 bg-white border border-surface-dark hover:shadow-xl transition-all duration-300"
                style={{ '--accent': style.accent } as React.CSSProperties}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full aspect-video object-cover rounded-2xl mb-4 border border-surface-dark"
                    loading="lazy"
                  />
                )}
                <span
                  className="inline-block rounded-full px-3 py-1.5 text-xs font-sans font-bold text-white mb-3 shadow-md shadow-black/10"
                  style={{ background: style.pill }}
                >
                  {project.tag}
                </span>
                <h3 className="font-display text-[1.1rem] font-bold text-ink leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.award && (
                  <p className="font-sans text-xs font-bold mb-1" style={{ color: style.accent }}>
                    ★ {project.award}
                  </p>
                )}
                <p className="font-sans text-xs text-muted/55">
                  {[project.year, project.context].filter(Boolean).join(' · ')}
                </p>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-4 mt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans font-bold underline underline-offset-4 hover:opacity-75 transition-opacity duration-150"
                        style={{ color: style.accent }}
                      >
                        Live ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-sans font-bold underline underline-offset-4 hover:opacity-75 transition-opacity duration-150"
                        style={{ color: style.accent }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14"
        >
          <motion.h3 variants={fadeUp} className="font-sans text-xs font-bold text-muted tracking-widest uppercase mb-4">
            Other work
          </motion.h3>
          <ul className="divide-y divide-surface-dark border-y border-surface-dark">
            {siteData.otherWork.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4"
              >
                <span className="font-display font-bold text-ink sm:w-56 shrink-0">{item.title}</span>
                <span className="font-sans text-sm text-muted leading-relaxed flex-1">{item.description}</span>
                <span className="font-sans text-xs text-muted/55 shrink-0">
                  {item.year} · {item.context}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
