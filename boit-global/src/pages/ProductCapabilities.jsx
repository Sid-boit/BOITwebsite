import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  ScanSearch,
  BarChart3,
  Scale,
  Workflow,
  Fingerprint,
  Sparkles,
  Megaphone,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { productCapabilities } from '@/data/productsNav';
import AnimatedPage from '@/components/effects/AnimatedPages';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const ICONS = [
  ShieldAlert,
  ScanSearch,
  BarChart3,
  Scale,
  Workflow,
  Fingerprint,
  Sparkles,
  Megaphone,
  TrendingUp,
];

const PANEL_VARIANTS = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

function indexFromHash(hash) {
  const id = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (!id) return 0;
  const i = productCapabilities.items.findIndex((g) => g.id === id);
  return i >= 0 ? i : 0;
}

/** AI capabilities page — sidebar + detail panel, like Services overview. */
export default function ProductCapabilities() {
  const location = useLocation();
  const [active, setActive] = useState(() => indexFromHash(location.hash));
  const item = productCapabilities.items[active];
  const Icon = ICONS[active % ICONS.length];

  useEffect(() => {
    const next = indexFromHash(location.hash);
    setActive(next);
    if (!location.hash) return undefined;
    const t = setTimeout(() => {
      document.getElementById('product-capabilities')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 120);
    return () => clearTimeout(t);
  }, [location.hash]);

  const selectItem = (i) => {
    setActive(i);
    const id = productCapabilities.items[i].id;
    window.history.replaceState(null, '', `/product/capabilities#${id}`);
  };

  return (
    <AnimatedPage>
      <PageHero
        eyebrow={productCapabilities.eyebrow}
        title={productCapabilities.title}
        subtitle={productCapabilities.subtitle}
      />

      <section id="product-capabilities" className="relative scroll-mt-28 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <nav className="flex flex-col gap-2">
                  {productCapabilities.items.map((g, i) => {
                    const ItemIcon = ICONS[i % ICONS.length];
                    const isActive = i === active;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        id={g.id}
                        onClick={() => selectItem(i)}
                        className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? 'border border-electric-400 bg-electric-50 text-black shadow-md shadow-electric-500/10'
                            : 'border border-line bg-white text-black hover:border-electric-400 hover:bg-surface-100'
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? 'bg-electric-500 text-black'
                              : 'bg-electric-50 text-electric-500 group-hover:bg-electric-100'
                          }`}
                        >
                          <ItemIcon className="h-4 w-4" />
                        </span>
                        <span className="font-display text-xs font-semibold leading-snug md:text-sm">
                          {g.name}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-8 rounded-2xl border border-line bg-gradient-to-b from-white to-electric-50/40 p-6 text-center">
                  <p className="font-display text-base font-semibold text-black">
                    See it in context
                  </p>
                  <p className="mt-1.5 text-sm text-black">
                    Explore insurance and banking modules powered by these capabilities.
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <Button to="/product/insurance" size="sm" arrow>
                      Insurance
                    </Button>
                    <Button to="/product/banking" variant="ghost" size="sm" arrow>
                      Banking
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.id}
                    variants={PANEL_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50 text-electric-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
                      {item.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed">
                      <HighlightText text={item.description} />
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                      {item.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-electric-400 hover:shadow-lg hover:shadow-electric-500/5"
                        >
                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-electric-50 text-electric-500">
                            <Cpu className="h-4 w-4" />
                          </div>
                          <h4 className="font-display text-sm font-semibold uppercase tracking-breathe text-black">
                            {cap.title}
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {cap.items.map((line) => (
                              <li
                                key={line}
                                className="flex items-start gap-2.5 text-sm text-black"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric-500/70" />
                                {line}
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
    </AnimatedPage>
  );
}
