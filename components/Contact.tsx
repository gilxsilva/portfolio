'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion';
import { FloatingEmoji } from '@/components/FloatingEmoji';
import { siteData } from '@/lib/data';

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative text-canvas overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% -5%, rgba(90,30,140,0.32) 0%, transparent 52%), #0F0E0D',
      }}
    >
      {/* Subtle bottom orb for depth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(196,90,42,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 md:py-36">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >

          {/* Section marker */}
          <motion.div variants={fadeUp} className="mb-8">
            <FloatingEmoji src="/emoji/globe.png" alt="" size={52} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold text-accent leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 9vw, 6rem)' }}
          >
            {siteData.contact.headingEs}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-canvas/60 mb-12 max-w-sm"
          >
            {siteData.contact.subheading}
          </motion.p>

          {/* Glass contact block */}
          <motion.div
            variants={fadeUp}
            className="glass-card-dark rounded-2xl p-8 mb-10 inline-block min-w-0"
          >
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="font-sans text-base md:text-lg text-canvas hover:text-accent transition-colors duration-150 underline underline-offset-4 decoration-canvas/20 hover:decoration-accent/50"
              >
                {siteData.contact.email}
              </a>
              <a
                href={siteData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base md:text-lg text-canvas hover:text-accent transition-colors duration-150 underline underline-offset-4 decoration-canvas/20 hover:decoration-accent/50"
              >
                {siteData.contact.linkedinHandle}
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </motion.div>

          {/* Footer line */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 border-t border-canvas/10"
          >
            <p className="font-sans text-sm text-canvas/40">
              {siteData.contact.closingLine}
            </p>
            <p className="font-sans text-sm text-canvas/40">
              © 2026 Gil Silva
            </p>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}
