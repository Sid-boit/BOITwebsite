import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, LifeBuoy, Users, Lightbulb } from 'lucide-react';
import { services, home } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const GROUP_ICONS = [Cpu, LifeBuoy, Users, Lightbulb];

const PANEL_VARIANTS = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function indexFromHash(hash) {
  const id = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (!id) return 0;
  const i = services.groups.findIndex((g) => g.id === id);
  return i >= 0 ? i : 0;
}

export default function Services() {
  const location = useLocation();
  const [active, setActive] = useState(() => indexFromHash(location.hash));
  const group = services.groups[active];

  useEffect(() => {
    const next = indexFromHash(location.hash);
    setActive(next);
    if (!location.hash) return undefined;
    const t = setTimeout(() => {
      document.getElementById('services-groups')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 120);
    return () => clearTimeout(t);
  }, [location.hash]);

  const selectGroup = (i) => {
    setActive(i);
    const id = services.groups[i].id;
    window.history.replaceState(null, '', `/services#${id}`);
  };

  return (
    <PageTransition>
      <PageHero
        eyebrow={services.hero.eyebrow}
        title={services.hero.title}
        subtitle={services.hero.subtitle}
      />

      <section id="services-groups" className="relative scroll-mt-28 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <nav className="flex flex-col gap-3">
                  {services.groups.map((g, i) => {
                    const Icon = GROUP_ICONS[i];
                    const isActive = i === active;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        id={g.id}
                        onClick={() => selectGroup(i)}
                        className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                          isActive
                            ? 'border border-electric-400 bg-electric-50 text-black shadow-md shadow-electric-500/10'
                            : 'border border-line bg-white text-black hover:border-electric-400 hover:bg-surface-100'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? 'bg-electric-500 text-black'
                              : 'bg-electric-50 text-electric-500 group-hover:bg-electric-100'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <span className="block text-[11px] font-medium uppercase tracking-widest opacity-60">
                            {g.index}
                          </span>
                          <span className="font-display text-sm font-semibold leading-snug">
                            {g.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-8 rounded-2xl border border-line bg-gradient-to-b from-white to-electric-50/40 p-6 text-center">
                  <p className="font-display text-base font-semibold text-black">
                    Ready to get started?
                  </p>
                  <p className="mt-1.5 text-sm text-black">
                    Let us tailor a solution for your business.
                  </p>
                  <div className="mt-5">
                    <Button to="/contact" size="sm" arrow>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={group.id}
                    variants={PANEL_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
                      {group.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed">
                      <HighlightText text={group.description} />
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                      {group.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="group/card rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-electric-400 hover:shadow-lg hover:shadow-electric-500/5"
                        >
                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-electric-50 text-electric-500">
                            <Cpu className="h-4.5 w-4.5" />
                          </div>
                          <h4 className="font-display text-sm font-semibold uppercase tracking-breathe text-black">
                            {cap.title}
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {cap.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-black"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric-500/70" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="container">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-widest text-electric-500">
              {home.commitment.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-black md:text-3xl">
              Why partner with us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.commitment.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-electric-400 hover:shadow-lg hover:shadow-electric-500/5">
                  <h3 className="font-display text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    <HighlightText text={item.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
