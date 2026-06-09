'use client';

import { useEffect, useRef } from 'react';
import { siteData } from '@/lib/data';
import { FloatingEmoji } from './FloatingEmoji';

export function ScrollPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.dataset.reducedMotion = 'true';
        // Reveal all initially-hidden elements
        const sel = [
          '#a1-name', '#a1-avail', '#a1-word1', '#a1-word2', '#a1-word3',
          '#a1-bilingual', '#a1-ctas',
          '#act3 .stat-item', '#a3-avatar',
          '#a4-line1', '#a4-line2', '#a4-jobs article',
          '#act5 .project-card',
        ].join(', ');
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = '';
        });
        // Make belief words visible
        document.querySelectorAll<HTMLElement>('#act2 .belief-word').forEach((el) => {
          el.style.opacity = '1';
        });
        return;
      }

      const E = 'cubic-bezier(0.28,0.11,0.32,1)';
      const vh = () => window.innerHeight;

      ctx = gsap.context(() => {

        // ── ACT 1: THE NAME ───────────────────────────────────
        // Name starts large (scale 2.2 from inline style), shrinks on scroll
        // Other elements start at opacity:0 (from inline styles), fade in with scroll
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#act1',
            start: 'top top',
            end: () => `+=${vh() * 2}`,
            pin: true,
            scrub: 1.4,
            anticipatePin: 1,
          },
        });
        tl1
          .to('#a1-name', { scale: 1, ease: E, duration: 2.5 })
          .to('#a1-word1', { opacity: 1, y: 0, ease: E, duration: 1.2 }, 0.8)
          .to('#a1-word2', { opacity: 1, y: 0, ease: E, duration: 1.2 }, 1.2)
          .to('#a1-word3', { opacity: 1, y: 0, ease: E, duration: 1.2 }, 1.6)
          .to('#a1-bilingual', { opacity: 1, y: 0, ease: E, duration: 1 }, 2.2)
          .to('#a1-avail', { opacity: 1, ease: E, duration: 0.8 }, 2.6)
          .to('#a1-ctas', { opacity: 1, y: 0, ease: E, duration: 1 }, 2.8)
          .to('#a1-inner', { scale: 0.88, opacity: 0, ease: E, duration: 2 }, 5);

        // ── ACT 2: THE BELIEF ─────────────────────────────────
        // Words start at opacity 0.07 (from inline styles) → 1.0 on scroll
        const words2 = gsap.utils.toArray<HTMLElement>('#act2 .belief-word');
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#act2',
            start: 'top top',
            end: () => `+=${vh() * 1.8}`,
            pin: true,
            scrub: 1.6,
            anticipatePin: 1,
          },
        });
        words2.forEach((word, i) => {
          tl2.to(word, { opacity: 1, ease: E, duration: 0.6 }, i * 0.3);
        });
        tl2.to('#a2-sub', { opacity: 1, y: 0, ease: E, duration: 0.8 }, words2.length * 0.3);
        tl2.to('#act2 .belief-inner', { scale: 0.93, opacity: 0, ease: E, duration: 1.5 }, words2.length * 0.3 + 2);

        // ── ACT 3: THE PROOF ──────────────────────────────────
        // Stats + avatar start at opacity:0 (inline styles), animate in
        const stats = gsap.utils.toArray<HTMLElement>('#act3 .stat-item');
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: '#act3',
            start: 'top top',
            end: () => `+=${vh() * 1.8}`,
            pin: true,
            scrub: 1.4,
            anticipatePin: 1,
          },
        });
        stats.forEach((stat, i) => {
          tl3.to(stat, { opacity: 1, x: 0, ease: E, duration: 1 }, i * 1.0);
        });
        tl3.to('#a3-avatar', { opacity: 1, x: 0, ease: E, duration: 1.5 }, 0.4);
        tl3.to('#act3 .proof-inner', { scale: 0.93, opacity: 0, ease: E, duration: 1.5 }, stats.length * 1.0 + 1.5);

        // ── ACT 4: THE WORK ───────────────────────────────────
        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: '#act4',
            start: 'top top',
            end: () => `+=${vh() * 2.5}`,
            pin: true,
            scrub: 1.4,
            anticipatePin: 1,
          },
        });
        tl4
          .to('#a4-line1', { opacity: 1, y: 0, ease: E, duration: 2 })
          .to('#a4-line2', { opacity: 1, y: 0, ease: E, duration: 2 }, '-=1')
          .to('#a4-jobs article', { opacity: 1, y: 0, stagger: 1.0, ease: E, duration: 1.5 }, '-=0.5')
          .to('#act4 .work-inner', { scale: 0.93, opacity: 0, ease: E, duration: 2 }, '+=2');

        // ── ACT 5: THE PROJECTS ───────────────────────────────
        const cards5 = gsap.utils.toArray<HTMLElement>('#act5 .project-card');
        // First card is visible (opacity:1 inline), rest are opacity:0 (inline)
        const tl5 = gsap.timeline({
          scrollTrigger: {
            trigger: '#act5',
            start: 'top top',
            end: () => `+=${vh() * (cards5.length + 1)}`,
            pin: true,
            scrub: 1.6,
            anticipatePin: 1,
            onUpdate: (self) => {
              const idx = Math.min(
                Math.floor(self.progress * cards5.length),
                cards5.length - 1,
              );
              const counter = document.querySelector<HTMLElement>('#a5-counter');
              if (counter) {
                counter.textContent = `${String(idx + 1).padStart(2, '0')} / 0${cards5.length}`;
              }
            },
          },
        });
        cards5.forEach((card, i) => {
          if (i < cards5.length - 1) {
            tl5.to(card, { opacity: 0, scale: 0.94, ease: E, duration: 0.8 }, i * 2 + 1.6);
            tl5.to(cards5[i + 1], { opacity: 1, scale: 1, ease: E, duration: 0.8 }, i * 2 + 1.6);
          }
        });

        // ── NAV THEME ─────────────────────────────────────────
        [2, 3].forEach((n) => {
          ScrollTrigger.create({
            trigger: `#act${n}`,
            start: 'top 64px',
            end: 'bottom 64px',
            onEnter: () => document.getElementById('main-nav')?.setAttribute('data-theme', 'light'),
            onLeave: () => document.getElementById('main-nav')?.removeAttribute('data-theme'),
            onEnterBack: () => document.getElementById('main-nav')?.setAttribute('data-theme', 'light'),
            onLeaveBack: () => document.getElementById('main-nav')?.removeAttribute('data-theme'),
          });
        });

      }, containerRef);

      await document.fonts.ready;
      ScrollTrigger.refresh();
    };

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <div ref={containerRef}>

      {/* ══ ACT 1: THE NAME ══════════════════════════════════ */}
      <section id="act1" className="act" style={{ backgroundColor: '#0A0908' }}>
        <div id="a1-inner" className="h-full flex flex-col items-center justify-center text-center px-6">

          {/* Badge: hidden until revealed with scroll */}
          <div
            id="a1-avail"
            className="font-sans text-xs text-canvas/35 tracking-[0.22em] uppercase mb-14 select-none"
            style={{ opacity: 0 }}
          >
            {siteData.availability}
          </div>

          {/* Name: starts scaled 2.2×, shrinks to 1× with scroll */}
          <h1
            id="a1-name"
            className="font-display font-semibold text-canvas leading-none tracking-tighter mb-10 will-change-transform"
            style={{ fontSize: 'clamp(4rem, 14vw, 10.5rem)', transform: 'scale(2.2)' }}
          >
            {siteData.name}
          </h1>

          <div className="flex items-baseline flex-wrap justify-center gap-x-6 gap-y-1 mb-8">
            <span
              id="a1-word1"
              className="font-display text-2xl md:text-3xl text-canvas/70 italic will-change-transform"
              style={{ opacity: 0, transform: 'translateY(2rem)' }}
            >
              Engineer.
            </span>
            <span
              id="a1-word2"
              className="font-display text-2xl md:text-3xl text-canvas/70 italic will-change-transform"
              style={{ opacity: 0, transform: 'translateY(2rem)' }}
            >
              Designer.
            </span>
            <span
              id="a1-word3"
              className="font-display text-2xl md:text-3xl text-canvas/70 italic will-change-transform"
              style={{ opacity: 0, transform: 'translateY(2rem)' }}
            >
              Builder.
            </span>
          </div>

          <p
            id="a1-bilingual"
            className="font-sans text-sm text-canvas/25 tracking-widest mb-16 will-change-transform"
            style={{ opacity: 0, transform: 'translateY(1rem)' }}
          >
            {siteData.taglineEs}
          </p>

          <div
            id="a1-ctas"
            className="flex items-center gap-5 will-change-transform"
            style={{ opacity: 0, transform: 'translateY(1.25rem)' }}
          >
            <a
              href="#act6"
              className="font-sans text-sm text-canvas border border-canvas/20 px-7 py-3 hover:border-accent hover:text-accent transition-all duration-300 tracking-wide"
            >
              Get in touch
            </a>
            <a
              href={siteData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-canvas/40 hover:text-canvas transition-colors duration-300 tracking-wide"
            >
              Resume ↗
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="w-px h-14 bg-canvas/12" />
          </div>
        </div>
      </section>

      {/* ══ ACT 2: THE BELIEF ════════════════════════════════ */}
      <section id="act2" className="act flex items-center" style={{ backgroundColor: '#F7F4EF' }}>
        <div className="belief-inner max-w-5xl mx-auto px-8 md:px-12 w-full will-change-transform">
          <p
            className="font-display font-semibold text-ink leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)' }}
            aria-label="Built at the intersection of minds and machines."
          >
            {[
              'Built', 'at', 'the',
              'intersection', 'of', 'minds',
              'and', 'machines.',
            ].map((word, i) => (
              <span
                key={i}
                className="belief-word inline-block will-change-transform"
                style={{ marginRight: '0.28em', opacity: 0.07 }}
              >
                {word}
              </span>
            ))}
          </p>
          <p
            id="a2-sub"
            className="font-sans text-base text-muted mt-10 max-w-md leading-relaxed will-change-transform"
            style={{ opacity: 0, transform: 'translateY(1rem)' }}
          >
            {siteData.taglineEn}
          </p>
        </div>
      </section>

      {/* ══ ACT 3: THE PROOF ═════════════════════════════════ */}
      <section id="act3" className="act" style={{ backgroundColor: '#EDE8E0' }}>
        <div className="proof-inner h-full max-w-5xl mx-auto px-6 md:px-12 flex items-center will-change-transform">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 w-full items-center">

            <div className="space-y-10">
              {siteData.about.highlights.map((h, i) => (
                <div
                  key={i}
                  className="stat-item flex items-baseline gap-5 border-l-2 border-accent pl-6 will-change-transform"
                  style={{ opacity: 0, transform: 'translateX(-1.75rem)' }}
                >
                  <span className="font-display text-4xl md:text-5xl font-semibold text-ink leading-none">
                    {h.value}
                  </span>
                  <span className="font-sans text-base text-muted">{h.label}</span>
                </div>
              ))}
            </div>

            <div
              id="a3-avatar"
              className="hidden md:flex items-center justify-center will-change-transform"
              style={{ opacity: 0, transform: 'translateX(3rem)' }}
            >
              <div className="w-60 rounded-2xl overflow-hidden border border-surface-dark" style={{ height: '272px' }}>
                <img
                  src="/avatar.svg"
                  alt="Gil Silva — illustrated avatar"
                  className="w-full h-full object-cover"
                  width={240}
                  height={272}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ ACT 4: THE WORK ══════════════════════════════════ */}
      <section id="act4" className="act" style={{ backgroundColor: '#0A0908' }}>
        <div className="work-inner h-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center pt-20 will-change-transform">

          <div className="mb-16">
            <div
              id="a4-line1"
              className="font-display font-semibold text-canvas leading-none tracking-tighter will-change-transform"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', opacity: 0, transform: 'translateY(2.5rem)' }}
            >
              Amazon.
            </div>
            <div
              id="a4-line2"
              className="font-display font-semibold text-canvas/40 leading-none tracking-tighter will-change-transform"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', opacity: 0, transform: 'translateY(2.5rem)' }}
            >
              Twice.
            </div>
          </div>

          <div id="a4-jobs" className="divide-y divide-canvas/8">
            {siteData.experience.featured.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="py-7 first:pt-0 will-change-transform"
                style={{ opacity: 0, transform: 'translateY(2.25rem)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <span className="font-display text-lg font-semibold text-canvas">{job.company}</span>
                    <span className="font-sans text-sm text-canvas/45 ml-3">{job.role}</span>
                  </div>
                  <span className="font-sans text-xs text-canvas/35 shrink-0">{job.period}</span>
                </div>
                <p className="font-sans text-sm text-canvas/55 leading-relaxed max-w-xl">{job.description}</p>
                {job.note && (
                  <p className="font-sans text-xs text-accent mt-2">↗ {job.note}</p>
                )}
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ══ ACT 5: THE PROJECTS ══════════════════════════════ */}
      <section id="act5" className="act" style={{ backgroundColor: '#0D0C0A' }}>

        <div className="absolute top-8 right-8 z-20" aria-live="polite" aria-atomic="true">
          <span id="a5-counter" className="font-sans text-xs text-canvas/25 tracking-[0.2em]">
            01 / 0{siteData.projects.length}
          </span>
        </div>

        <div className="relative h-full">
          {siteData.projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card will-change-transform"
              style={{ opacity: i === 0 ? 1 : 0 }}
              aria-hidden={i > 0 ? true : undefined}
            >
              <div className="max-w-5xl mx-auto w-full px-6 md:px-12 pt-16">
                <div className="font-sans text-xs text-canvas/22 tracking-[0.22em] uppercase mb-8">
                  {String(i + 1).padStart(2, '0')} — {project.tag}
                </div>
                <h3
                  className="font-display font-semibold text-canvas leading-[1.05] tracking-tight mb-8"
                  style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)' }}
                >
                  {project.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-canvas/55 leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>
                {project.award ? (
                  <p className="font-sans text-sm text-accent">★ {project.award}</p>
                ) : (
                  <p className="font-sans text-xs text-canvas/28 tracking-wide">{project.context}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ══ ACT 6: THE CLOSE ════════════════════════════════ */}
      <footer
        id="act6"
        className="relative overflow-hidden text-canvas"
        style={{
          background: 'radial-gradient(ellipse at 50% -8%, rgba(90,30,140,0.22) 0%, transparent 55%), #0A0908',
          minHeight: '100vh',
        }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(196,90,42,0.08) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32">

          <div className="mb-10">
            <FloatingEmoji src="/emoji/globe.png" alt="" size={52} />
          </div>

          <h2
            className="font-display font-semibold text-accent leading-none tracking-tighter mb-6"
            style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}
          >
            {siteData.contact.headingEs}
          </h2>

          <p className="font-sans text-lg text-canvas/45 mb-16 max-w-sm leading-relaxed">
            {siteData.contact.subheading}
          </p>

          <div className="glass-card-dark rounded-2xl p-8 inline-block mb-14">
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="font-sans text-base md:text-lg text-canvas hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-canvas/15 hover:decoration-accent/50"
              >
                {siteData.contact.email}
              </a>
              <a
                href={siteData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base md:text-lg text-canvas hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-canvas/15 hover:decoration-accent/50"
              >
                {siteData.contact.linkedinHandle}
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 border-t border-canvas/8">
            <p className="font-sans text-sm text-canvas/28">{siteData.contact.closingLine}</p>
            <p className="font-sans text-sm text-canvas/28">© 2026 Gil Silva</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
