'use client';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { fadeUp, stagger, inView } from './motion';

/* ─── CONTACT ───────────────────────────────────────────────────────────── */

export function ContactSection() {
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
            <a
              href={siteData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-sans font-bold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ background: '#3A5FCC' }}
            >
              {siteData.contact.githubHandle} ↗
            </a>
          </motion.div>

          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pt-8 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div>
              <p className="font-sans text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {siteData.contact.closingLine}
              </p>
              <p className="font-sans text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                {siteData.contact.closingLineSub}
              </p>
            </div>
            <p className="font-sans text-sm shrink-0" style={{ color: 'rgba(255,255,255,0.28)' }}>
              © 2026 Gil Silva
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
