import { motion } from 'framer-motion';
import { about } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

import brajImg from '@/assets/Braj.png';
import chintanImg from '@/assets/Chintan.png';
import priyankImg from '@/assets/Priyank.png';
import francisImg from '@/assets/francis.png';
import hirenImg from '@/assets/hiren.png';

const founderImages = {
  'Braj.png': brajImg,
  'Chintan.png': chintanImg,
  'Priyank.png': priyankImg,
  'francis.png': francisImg,
  'hiren.png': hirenImg,
};

const EASE = [0.16, 1, 0.3, 1];

function CertBadge({ code, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="flex h-20 w-20 items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 font-display text-xs font-bold leading-tight text-black text-center"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        {code}
      </div>
      <span className="text-xs text-black text-center">{label}</span>
    </motion.div>
  );
}

function FounderCard({ founder, index }) {
  const img = founderImages[founder.img];
  return (
    <Reveal delay={index * 0.1} className="flex flex-col items-center">
      <div className="relative w-full rounded-2xl border border-line bg-white px-8 pb-10 pt-28 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          {img ? (
            <img
              src={img}
              alt={founder.name}
              className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-electric-50 font-display text-2xl font-bold text-electric-500 shadow-md">
              {founder.name.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-black">{founder.name}</h3>
        <p className="mt-1 text-sm font-medium text-electric-600">{founder.role}</p>
        <p className="mt-4 text-sm leading-relaxed">
          <HighlightText text={founder.bio} />
        </p>
        {founder.extra && (
          <p className="mt-3 text-xs leading-relaxed italic">
            <HighlightText text={founder.extra} />
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <PageTransition>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />

      {/* Why Choose BOIT Global */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
              Why Choose BOIT Global?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div className="space-y-10">
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-6">
                  {about.certs.map((cert, i) => (
                    <CertBadge key={cert.code} code={cert.code} label={cert.label} delay={i * 0.08} />
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed">
                  <HighlightText text={about.intro[0]} />
                </p>
              </Reveal>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <Reveal delay={0.15}>
                <p className="leading-relaxed">
                  <HighlightText text={about.intro[1]} />
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="leading-relaxed">
                  <HighlightText text={about.intro[2]} />
                </p>
              </Reveal>

              {/* Locations */}
              <Reveal delay={0.25}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-black">
                  Our Offices
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {about.locations.map((loc) => (
                    <div
                      key={loc.name}
                      className="flex items-center gap-2 rounded-lg border border-line px-3 py-2"
                    >
                      <span className="text-lg">{loc.flag}</span>
                      <span className="text-sm font-medium text-black">{loc.name}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-3 gap-4">
                  {about.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span className="block font-display text-3xl font-bold text-electric-600">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-xs text-black">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative bg-white/50 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
              BOIT Leadership Team
            </h2>
          </Reveal>

          <div className="mt-24 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {about.founders.map((founder, i) => (
              <FounderCard key={founder.name} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-black md:text-4xl mb-12">
              Our Commitment
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {about.commitment.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="group relative bg-white p-10 transition-colors duration-500 hover:bg-surface-100"
              >
                <span className="font-display text-xs tabular-nums text-electric-600">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed">
                  <HighlightText text={item.body} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
