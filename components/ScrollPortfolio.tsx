'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { siteData } from '@/lib/data';

/* ─── Animation helpers ─────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = (delay = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

const inView = { once: true, margin: '-72px' as const };

/* ─── FloatingPill ──────────────────────────────────────────────────────── */

interface PillProps {
  emojiSrc: string;
  label: string;
  colorClass: string;
  className?: string;
  delay?: number;
}

function FloatingPill({ emojiSrc, label, colorClass, className = '', delay = 0 }: PillProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`absolute flex items-center gap-2 rounded-full px-3.5 py-2 shadow-lg shadow-ink/10 text-[13px] font-sans font-semibold select-none pointer-events-none border ${colorClass} ${className}`}
      animate={reduced ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <img src={emojiSrc} alt="" width={22} height={22} className="shrink-0 drop-shadow-sm" />
      <span>{label}</span>
    </motion.div>
  );
}

/* ─── CredPill ──────────────────────────────────────────────────────────── */

function CredPill({
  emojiSrc,
  label,
  colorClass,
}: {
  emojiSrc: string;
  label: string;
  colorClass: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-sans font-semibold border ${colorClass}`}
    >
      <img src={emojiSrc} alt="" width={15} height={15} className="shrink-0" />
      {label}
    </span>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-canvas pt-28 pb-20"
      aria-label="Introduction"
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-8 items-center">

          {/* ── Left column: text ── */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Availability */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-sm shadow-emerald-400" aria-hidden="true" />
              <span className="text-xs font-sans font-semibold text-emerald-700 tracking-widest uppercase">
                {siteData.availability}
              </span>
            </motion.div>

            {/* ES tagline */}
            <motion.p variants={fadeUp} className="font-display text-lg text-muted italic mb-4">
              {siteData.taglineEs}
            </motion.p>

            {/* Name — gradient */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-[0.88] tracking-tight mb-7"
              style={{
                fontSize: 'clamp(3.6rem, 11vw, 7rem)',
                backgroundImage: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 45%, #2563EB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Gil Silva
            </motion.h1>

            {/* Credibility strip */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-7">
              <CredPill
                emojiSrc="/emoji/graduation_cap.png"
                label="Stanford"
                colorClass="bg-violet-50 text-violet-800 border-violet-200"
              />
              <CredPill
                emojiSrc="/emoji/package.png"
                label="2× Amazon SDE"
                colorClass="bg-amber-50 text-amber-800 border-amber-200"
              />
              <CredPill
                emojiSrc="/emoji/sparkles.png"
                label="CollegePlan · acquired"
                colorClass="bg-rose-50 text-rose-700 border-rose-200"
              />
              <CredPill
                emojiSrc="/emoji/globe.png"
                label="First-gen · SF → Stanford"
                colorClass="bg-emerald-50 text-emerald-800 border-emerald-200"
              />
            </motion.div>

            {/* Value prop */}
            <motion.p variants={fadeUp} className="font-sans text-base md:text-lg text-muted leading-relaxed mb-10 max-w-md">
              {siteData.taglineEn}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <a
                href={siteData.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-sans font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-violet-300/60 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)' }}
              >
                View Résumé ↗
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-sans font-semibold text-ink-subtle border-2 border-surface-dark hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See Projects ↓
              </a>
              <a
                href={siteData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-medium text-muted hover:text-accent underline underline-offset-4 decoration-surface-dark hover:decoration-accent transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column: avatar + floating tags ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div className="relative" style={{ width: 340, height: 380 }}>
              {/* Glow behind avatar */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 55%, rgba(124,58,237,0.17) 0%, transparent 65%)',
                }}
              />

              {/* Avatar */}
              <img
                src="/avatar.svg"
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover z-10 shadow-xl shadow-violet-200/40"
                width={200}
                height={232}
                style={{ width: 200, height: 232 }}
              />

              {/* Floating pills */}
              <FloatingPill
                emojiSrc="/emoji/package.png"
                label="Amazon"
                colorClass="bg-amber-50 text-amber-800 border-amber-200"
                className="top-10 -left-4"
                delay={0}
              />
              <FloatingPill
                emojiSrc="/emoji/graduation_cap.png"
                label="Stanford"
                colorClass="bg-violet-50 text-violet-800 border-violet-200"
                className="top-20 -right-6"
                delay={1.1}
              />
              <FloatingPill
                emojiSrc="/emoji/globe.png"
                label="Community"
                colorClass="bg-emerald-50 text-emerald-800 border-emerald-200"
                className="bottom-24 -left-10"
                delay={2.2}
              />
              <FloatingPill
                emojiSrc="/emoji/sparkles.png"
                label="Shipped at scale"
                colorClass="bg-blue-50 text-blue-800 border-blue-200"
                className="bottom-10 -right-2"
                delay={0.6}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── WORK ──────────────────────────────────────────────────────────────── */

function WorkSection() {
  return (
    <section
      id="work"
      className="py-24"
      style={{ backgroundColor: '#18120E' }}
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
          <motion.p variants={fadeUp} className="font-sans text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#a78bfa' }}>
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="work-heading"
            className="font-display font-bold text-canvas leading-none tracking-tighter"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 6rem)' }}
          >
            Amazon.{' '}
            <span style={{ color: 'rgba(253,252,249,0.3)' }}>Twice.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {siteData.experience.featured.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-lift relative rounded-2xl p-6 border"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.09)',
              }}
            >
              {job.note && (
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-sans font-semibold mb-4"
                  style={{ backgroundColor: 'rgba(244,63,94,0.18)', color: '#fca5a5' }}
                >
                  ✦ {job.note}
                </span>
              )}
              <div className="mb-3">
                <span className="font-display text-xl font-bold text-canvas">{job.company}</span>
                <span className="block font-sans text-sm text-canvas/60 mt-0.5 leading-snug">{job.role}</span>
                <span className="font-sans text-xs mt-1 block" style={{ color: 'rgba(253,252,249,0.35)' }}>
                  {job.period}
                </span>
              </div>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'rgba(253,252,249,0.52)' }}>
                {job.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-1 text-xs font-sans font-medium"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(253,252,249,0.55)' }}
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

/* ─── PROJECTS ──────────────────────────────────────────────────────────── */

const PROJECT_COLORS: Record<string, { pill: string; hover: string }> = {
  'HCI · Product':       { pill: 'bg-violet-100 text-violet-700 border-violet-200', hover: 'hover:border-violet-300 hover:shadow-violet-100/60' },
  'Global Health · AI':  { pill: 'bg-blue-100 text-blue-700 border-blue-200',       hover: 'hover:border-blue-300 hover:shadow-blue-100/60' },
  'Community · EdTech':  { pill: 'bg-emerald-100 text-emerald-700 border-emerald-200', hover: 'hover:border-emerald-300 hover:shadow-emerald-100/60' },
  'Civic Tech · Legal':  { pill: 'bg-amber-100 text-amber-700 border-amber-200',    hover: 'hover:border-amber-300 hover:shadow-amber-100/60' },
  'EdTech · Research':   { pill: 'bg-rose-100 text-rose-700 border-rose-200',       hover: 'hover:border-rose-300 hover:shadow-rose-100/60' },
  'Nonprofit · Product': { pill: 'bg-orange-100 text-orange-700 border-orange-200', hover: 'hover:border-orange-300 hover:shadow-orange-100/60' },
};

function ProjectsSection() {
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
          <motion.p variants={fadeUp} className="font-sans text-xs font-semibold text-accent tracking-widest uppercase mb-3">
            Proyectos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="projects-heading"
            className="font-display font-bold text-ink leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Things I've built.
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.projects.map((project, i) => {
            const colors = PROJECT_COLORS[project.tag] ?? {
              pill: 'bg-surface text-muted border-surface-dark',
              hover: 'hover:border-accent hover:shadow-accent/10',
            };
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.48, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`card-lift group rounded-2xl p-6 bg-white border-2 border-surface-dark hover:shadow-lg transition-all duration-300 ${colors.hover}`}
              >
                <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-sans font-semibold border mb-3 ${colors.pill}`}>
                  {project.tag}
                </span>
                <h3 className="font-display text-[1.1rem] font-bold text-ink leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.award && (
                  <p className="font-sans text-xs font-semibold text-accent mb-1">★ {project.award}</p>
                )}
                <p className="font-sans text-xs text-muted/60">
                  {project.year}
                  {project.context ? ` · ${project.context}` : ''}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────────────────────── */

const STAT_GRADIENTS = [
  'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
  'linear-gradient(135deg, #D97706 0%, #EA580C 100%)',
  'linear-gradient(135deg, #059669 0%, #0891B2 100%)',
  'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
];

function AboutSection() {
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
            <motion.p variants={fadeUp} className="font-sans text-xs font-semibold text-accent tracking-widest uppercase mb-3">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="font-display font-bold text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
            >
              From Guadalajara<br />to Stanford.
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 font-sans text-base text-muted leading-relaxed">
              <p>
                First-gen student. Came from Guadalajara carrying two languages, two cultures, and a conviction that technology should work for everyone — not just the people who build it.
              </p>
              <p>
                Symbolic Systems + HCI at Stanford. 2× Amazon SDE intern. Co-founded an English-learning program that still runs at Mission High School, SF.
              </p>
            </motion.div>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {siteData.about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={inView}
                transition={{ duration: 0.44, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-lift rounded-2xl p-6 bg-white border border-surface-dark shadow-sm"
              >
                <div
                  className="font-display font-bold text-3xl md:text-4xl mb-2"
                  style={{
                    backgroundImage: STAT_GRADIENTS[i],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {h.value}
                </div>
                <div className="font-sans text-sm text-muted leading-snug">{h.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ───────────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ background: 'linear-gradient(135deg, #1a1033 0%, #0f1629 55%, #0b1a2c 100%)' }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-[560px] h-[440px] rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.26) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[440px] h-[440px] rounded-full pointer-events-none translate-y-1/3"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.p variants={fadeUp} className="font-sans text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#a78bfa' }}>
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-none tracking-tighter mb-5"
            style={{
              fontSize: 'clamp(3.8rem, 13vw, 10rem)',
              backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {siteData.contact.headingEs}
          </motion.h2>

          <motion.p variants={fadeUp} className="font-sans text-lg leading-relaxed mb-12 max-w-sm" style={{ color: 'rgba(255,255,255,0.48)' }}>
            {siteData.contact.subheading}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-sans font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ borderColor: 'rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#a78bfa';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(124,58,237,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              ✉&nbsp; {siteData.contact.email}
            </a>
            <a
              href={siteData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-sans font-semibold text-white border transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ borderColor: 'rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.05)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#93c5fd';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(37,99,235,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              in&nbsp; {siteData.contact.linkedinHandle} ↗
            </a>
          </motion.div>

          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {siteData.contact.closingLine}
            </p>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
              © 2026 Gil Silva
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function ScrollPortfolio() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
