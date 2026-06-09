'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { siteData } from '@/lib/data';

/* ─── Animation helpers ─────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = (delay = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

const inView = { once: true, margin: '-72px' as const };

/* ─── Dayo-style stadium pill (floating in hero) ────────────────────────── */

interface StadiumPillProps {
  emojiSrc: string;
  label: string;
  bg: string;
  className?: string;
  rotate?: string;
  delay?: number;
}

function StadiumPill({
  emojiSrc,
  label,
  bg,
  className = '',
  rotate = 'rotate(0deg)',
  delay = 0,
}: StadiumPillProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`absolute flex items-center gap-2.5 rounded-full px-5 py-3 shadow-xl shadow-black/20 text-[15px] font-sans font-bold text-white select-none pointer-events-none whitespace-nowrap ${className}`}
      style={{ background: bg, transform: rotate }}
      animate={reduced ? undefined : { y: [0, -9, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <img src={emojiSrc} alt="" width={24} height={24} className="shrink-0 drop-shadow-sm" />
      {label}
    </motion.div>
  );
}

/* ─── Small credibility pill (hero text column) ─────────────────────────── */

function CredPill({
  emojiSrc,
  label,
  bg,
}: {
  emojiSrc: string;
  label: string;
  bg: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-sans font-bold text-white shadow-md shadow-black/15"
      style={{ background: bg }}
    >
      <img src={emojiSrc} alt="" width={14} height={14} className="shrink-0" />
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
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-10 items-center">

          {/* ── Left: text (dark on light) ── */}
          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Availability */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span className="text-xs font-sans font-bold text-emerald-700 tracking-widest uppercase">
                {siteData.availability}
              </span>
            </motion.div>

            {/* ES tagline */}
            <motion.p variants={fadeUp} className="font-display text-lg text-muted italic mb-3">
              {siteData.taglineEs}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-[0.88] tracking-tight text-ink mb-7"
              style={{ fontSize: 'clamp(3.6rem, 11vw, 7rem)' }}
            >
              Gil Silva
            </motion.h1>

            {/* Credibility strip */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-7">
              <CredPill emojiSrc="/emoji/graduation_cap.png" label="Stanford"              bg="#3A5FCC" />
              <CredPill emojiSrc="/emoji/package.png"        label="3× Amazon SDE"         bg="#D05C14" />
              <CredPill emojiSrc="/emoji/sparkles.png"       label="CollegePlan · acquired" bg="#B82840" />
              <CredPill emojiSrc="/emoji/globe.png"          label="First-gen · SF→Stanford" bg="#1A9E48" />
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-sans font-bold text-white bg-ink hover:-translate-y-0.5 transition-all duration-200 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Résumé ↗
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-sans font-bold text-ink-subtle border-2 border-surface-dark hover:border-ink hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See Projects ↓
              </a>
              <a
                href={siteData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-semibold text-muted hover:text-ink underline underline-offset-4 decoration-surface-dark hover:decoration-ink transition-colors duration-150"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: bitmoji card + floating stadium pills ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            {/*
             * Bitmoji card — same rounded card style as the Dayo reference.
             * Replace /public/bitmoji.svg with your own Bitmoji PNG/SVG any time.
             */}
            <div className="relative" style={{ width: 400, height: 440 }}>

              {/* Memoji — transparent PNG floats on the neutral bg */}
              <img
                src="/bitmoji.png"
                alt="Gil Silva Memoji"
                width={300}
                height={320}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 object-contain drop-shadow-2xl select-none"
                style={{ width: 300, height: 320 }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/bitmoji.svg';
                  (e.currentTarget as HTMLImageElement).onerror = () => {
                    (e.currentTarget as HTMLImageElement).src = '/avatar.svg';
                  };
                }}
              />

              {/* Floating stadium pills — color is the accent, not the background */}
              <StadiumPill
                emojiSrc="/emoji/package.png"
                label="Amazon"
                bg="#D05C14"
                className="top-12 -left-4"
                rotate="rotate(-4deg)"
                delay={0}
              />
              <StadiumPill
                emojiSrc="/emoji/graduation_cap.png"
                label="Stanford"
                bg="#3A5FCC"
                className="top-24 -right-6"
                rotate="rotate(3deg)"
                delay={1.1}
              />
              <StadiumPill
                emojiSrc="/emoji/globe.png"
                label="Community"
                bg="#1A9E48"
                className="bottom-28 -left-10"
                rotate="rotate(-3deg)"
                delay={2.1}
              />
              <StadiumPill
                emojiSrc="/emoji/sparkles.png"
                label="Shipped at scale"
                bg="#C48800"
                className="bottom-14 -right-4"
                rotate="rotate(3deg)"
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

const CARD_BLUE = 'linear-gradient(145deg, #A8D6F5 0%, #5AAEE6 55%, #2E92D8 100%)';

function WorkSection() {
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
            <span className="text-muted/40">Twice.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
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

/* ─── PROJECTS ──────────────────────────────────────────────────────────── */

const PROJECT_STYLES: Record<string, { pill: string; accent: string }> = {
  'HCI · Product':       { pill: '#3A5FCC', accent: '#3A5FCC' },
  'Global Health · AI':  { pill: '#2E92D8', accent: '#2E92D8' },
  'Community · EdTech':  { pill: '#1A9E48', accent: '#1A9E48' },
  'Civic Tech · Legal':  { pill: '#D48A00', accent: '#D48A00' },
  'EdTech · Research':   { pill: '#B82840', accent: '#B82840' },
  'Nonprofit · Product': { pill: '#D05C14', accent: '#D05C14' },
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
          <motion.p variants={fadeUp} className="font-sans text-xs font-bold text-accent tracking-widest uppercase mb-3">
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
            const style = PROJECT_STYLES[project.tag] ?? { pill: '#3B82C4', accent: '#3B82C4' };
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.46, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-lift rounded-3xl p-6 bg-white border border-surface-dark hover:shadow-xl transition-all duration-300"
                style={{ '--accent': style.accent } as React.CSSProperties}
              >
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
                  {project.year}{project.context ? ` · ${project.context}` : ''}
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

const STAT_STYLES = [
  { bg: '#3A5FCC', shadow: 'rgba(58,95,204,0.25)' },
  { bg: '#D05C14', shadow: 'rgba(208,92,20,0.25)' },
  { bg: '#1A9E48', shadow: 'rgba(26,158,72,0.25)' },
  { bg: '#2E92D8', shadow: 'rgba(46,146,216,0.25)' },
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
            <motion.p variants={fadeUp} className="font-sans text-xs font-bold text-accent tracking-widest uppercase mb-3">
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
                Symbolic Systems + HCI at Stanford. 3× Amazon SDE intern. Co-founded an English-learning program that still runs at Mission High School, SF.
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

/* ─── CONTACT ───────────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ background: 'linear-gradient(150deg, #18283E 0%, #0F1A2C 50%, #0C1624 100%)' }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-[540px] h-[420px] rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(44,130,210,0.28) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none translate-y-1/3"
        style={{ background: 'radial-gradient(circle, rgba(26,158,72,0.18) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.p variants={fadeUp} className="font-sans text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#60A5FA' }}>
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-none tracking-tighter mb-5 text-white"
            style={{ fontSize: 'clamp(3.8rem, 13vw, 10rem)' }}
          >
            {siteData.contact.headingEs}
          </motion.h2>

          <motion.p variants={fadeUp} className="font-sans text-lg leading-relaxed mb-12 max-w-sm" style={{ color: 'rgba(255,255,255,0.48)' }}>
            {siteData.contact.subheading}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-sans font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ background: '#2E92D8' }}
            >
              ✉ &nbsp;{siteData.contact.email}
            </a>
            <a
              href={siteData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-sans font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ background: '#1A9E48' }}
            >
              in &nbsp;{siteData.contact.linkedinHandle} ↗
            </a>
          </motion.div>

          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {siteData.contact.closingLine}
            </p>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.28)' }}>
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
