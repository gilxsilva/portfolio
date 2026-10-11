'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { fadeUp, stagger } from './motion';

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

export function HeroSection() {
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
              <CredPill emojiSrc="/emoji/sparkles.png"       label="CollegePlanAI · acquired" bg="#B82840" />
              <CredPill emojiSrc="/emoji/globe.png"          label="SF · Chapala · Stanford"  bg="#1A9E48" />
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
              <a
                href={siteData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-semibold text-muted hover:text-ink underline underline-offset-4 decoration-surface-dark hover:decoration-ink transition-colors duration-150"
              >
                GitHub ↗
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: floating stadium pills ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div className="relative" style={{ width: 400, height: 440 }}>

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
