import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { home } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';
import Button from '@/components/ui/Button';
import RoadmapJourney from '@/components/sections/RoadmapJourney';
import RotatingSphere from '@/components/ui/RotatingSphere';
import ClientsMarquee from '@/components/sections/ClientsMarquee';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import StatsBar from '@/components/sections/StatsBar';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ReadyToTransformCTA from '@/components/sections/ReadyToTransformCTA';

const EASE = [0.16, 1, 0.3, 1];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Parallax: content drifts up and fades as you scroll past the hero.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-svh overflow-hidden">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[55vh] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="absolute right-0 top-0 h-[50vh] w-[50vw] rounded-full bg-radial-aqua blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 grid min-h-svh items-center gap-12 pt-20 lg:grid-cols-2 lg:gap-8"
      >
        {/* ── Left: copy + CTAs + stats ── */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow mb-8">{home.hero.eyebrow}</span>
          </Reveal>

          <h1 className="text-display font-semibold tracking-tightest text-black">
            <span className="block">
              <TextReveal text={home.hero.title[0]} />
            </span>
            <span className="block">
              <HighlightText
                text={home.hero.title[1]}
                className="text-display font-semibold tracking-tightest"
              />
            </span>
          </h1>

          <Reveal delay={0.5} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed">
              <HighlightText text={home.hero.subtitle} />
            </p>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to={home.hero.primaryCta.to} variant="primary" size="lg" arrow>
                {home.hero.primaryCta.label}
              </Button>
              <Button to={home.hero.secondaryCta.to} variant="ghost" size="lg">
                {home.hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={0.8}>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card sm:grid-cols-3">
              {home.hero.stats.map((s) => (
                <div key={s.value} className="bg-white p-6">
                  <div className="font-display text-3xl font-semibold text-electric-600">{s.value}</div>
                  <div className="mt-2 text-xs leading-relaxed text-black">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Right: rotating sphere ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
          className="flex items-center justify-center"
        >
          <RotatingSphere />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-breathe text-black">
          Scroll to explore
          <span className="relative h-10 w-px overflow-hidden bg-line-strong">
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-electric-400"
              animate={{ y: [-16, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </span>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Roadmap — see components/sections/RoadmapJourney.jsx (pinned city journey)  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Testimonial                                                                */
/* -------------------------------------------------------------------------- */

function Testimonial() {
  const { testimonial } = home;
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
      <div className="container relative">
        <Reveal>
          <span aria-hidden className="block font-display text-[8rem] leading-none text-electric-500/20 md:text-[12rem]">
            &ldquo;
          </span>
        </Reveal>
        <div className="-mt-16 max-w-4xl md:-mt-24">
          <blockquote className="font-display text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            <HighlightText text={testimonial.quote} />
          </blockquote>
          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-electric-500" />
              <div>
                <div className="font-display text-lg text-black">{testimonial.author}</div>
                <div className="text-sm text-black">{testimonial.role}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Commitment                                                                 */
/* -------------------------------------------------------------------------- */

function Commitment() {
  const { commitment } = home;
  return (
    <section className="relative border-t border-line py-28 md:py-36">
      <div className="container">
        <Reveal>
          <span className="eyebrow mb-14">{commitment.eyebrow}</span>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {commitment.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="group relative bg-white p-8 transition-colors duration-500 hover:bg-surface-100"
            >
              <span className="font-display text-xs tabular-nums text-electric-600">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                <HighlightText text={item.body} />
              </p>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-electric-500 transition-transform duration-500 ease-expo group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ClientsMarquee />
      <StatsBar />
      <RoadmapJourney />
      <IndustriesGrid />
      <TestimonialsCarousel />
      <PartnersMarquee />
      <Testimonial />
      <Commitment />
      <ReadyToTransformCTA />
    </PageTransition>
  );
}
