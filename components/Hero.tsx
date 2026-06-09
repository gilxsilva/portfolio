'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/motion';
import { siteData } from '@/lib/data';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      {/* ── Gradient orb — warm amber bloom, bottom-right ── */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(196,90,42,0.11) 0%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Text column ── */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2.5 mb-10"
              aria-label="Availability status"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" aria-hidden="true" />
              <span className="text-xs font-sans text-muted tracking-wide uppercase">
                {siteData.availability}
              </span>
            </motion.div>

            {/* Accent rule */}
            <motion.div
              variants={fadeUp}
              className="w-10 h-0.5 bg-accent mb-7"
              aria-hidden="true"
            />

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-ink leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)' }}
            >
              Gil
              <br />
              Silva
            </motion.h1>

            {/* Bilingual tagline */}
            <motion.p
              variants={fadeUp}
              className="font-display text-xl md:text-2xl leading-snug mb-3"
            >
              <em className="text-muted not-italic">{siteData.taglineEs}</em>
              {' '}
              <span className="text-ink">{siteData.taglineEn}</span>
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-base md:text-lg text-muted max-w-lg leading-relaxed mt-5 mb-12"
            >
              Symbolic Systems + HCI at Stanford. 2× Amazon SDE Intern.
              First-generation, bilingual — building at the intersection of
              engineering, design, and community impact.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href={siteData.links.resume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-canvas text-sm font-sans font-medium hover:bg-accent transition-colors duration-200"
              >
                View Résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-surface-dark text-ink text-sm font-sans hover:border-accent hover:text-accent transition-colors duration-200"
              >
                See my work
                <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={siteData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-muted hover:text-ink underline underline-offset-4 decoration-surface-dark hover:decoration-accent transition-colors duration-150"
              >
                LinkedIn
                <span aria-hidden="true"> ↗</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Avatar column (desktop only) ── */}
          <motion.div
            className="hidden lg:flex flex-col items-center shrink-0"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.45 }}
          >
            {/*
              AVATAR: Replace /avatar.svg with your real custom illustrated avatar.
              Recommended: a transparent PNG or SVG, ~240×280px.
              Drop the file at public/avatar.png and update the src below.
            */}
            <div className="relative w-48 h-56">
              {/* Soft glow behind avatar */}
              <div
                className="absolute inset-0 rounded-2xl scale-110"
                style={{
                  background:
                    'radial-gradient(circle at 50% 60%, rgba(196,90,42,0.18) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
              <img
                src="/avatar.svg"
                alt="Gil Silva — illustrated avatar placeholder"
                className="relative z-10 w-full h-full object-cover rounded-2xl"
                width={192}
                height={224}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-6 md:left-[calc(max(1.5rem,(100vw-64rem)/2+1.5rem))] flex flex-col gap-1.5"
        aria-hidden="true"
      >
        <div className="w-6 h-px bg-muted/40" />
        <div className="w-3 h-px bg-accent" />
      </div>
    </section>
  );
}
