import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Landmark,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  Bot,
} from 'lucide-react';
import { product } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import HoverList from '@/components/ui/HoverList';
import HighlightText from '@/components/ui/HighlightText';

const TABS = [
  { key: 'insurance', label: 'For Insurance', icon: Shield },
  { key: 'banking', label: 'For Banking', icon: Landmark },
];

const PEXELS_IMAGES = [
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const AI_ICONS = [Cpu, Bot, Sparkles, Layers, Shield, Cpu, Bot, Sparkles];

function TabSwitcher({ active, onChange }) {
  return (
    <div className="sticky top-16 z-30 border-b border-line bg-white/80 backdrop-blur-lg">
      <div className="container flex gap-1 py-1">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive ? 'text-electric-600' : 'text-black hover:text-black'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-electric-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ModuleSection({ module, index }) {
  const reversed = index % 2 !== 0;
  const img = PEXELS_IMAGES[index % PEXELS_IMAGES.length];

  return (
    <Reveal>
      <div
        className={`grid items-start gap-12 lg:grid-cols-2 ${
          reversed ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className={reversed ? 'lg:[direction:ltr]' : ''}>
          <span className="eyebrow mb-4 block text-electric-500">
            {module.index}
          </span>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
            {module.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed">
            <HighlightText text={module.tagline} />
          </p>
          <div className="mt-8">
            <HoverList items={module.features} />
          </div>
        </div>

        <div className={`overflow-hidden rounded-2xl ${reversed ? 'lg:[direction:ltr]' : ''}`}>
          <motion.img
            src={img}
            alt={module.name}
            className="aspect-[4/3] w-full object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </div>
      </div>
    </Reveal>
  );
}

function CtaBanner({ text }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface-100 px-8 py-10 text-center md:px-16 md:py-14">
        <p className="mx-auto max-w-3xl font-display text-lg font-medium leading-relaxed md:text-xl">
          <HighlightText text={text} />
        </p>
      </div>
    </Reveal>
  );
}

function AiComponentsSection() {
  const { eyebrow, title, items } = product.aiComponents;

  return (
    <section className="relative border-t border-line py-28 md:py-36">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-6">{eyebrow}</span>
          </Reveal>
          <h2 className="font-display text-display-sm font-semibold tracking-tightest text-black">
            <TextReveal text={title} />
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = AI_ICONS[i % AI_ICONS.length];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="glass group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-electric-500/40 hover:shadow-glow-soft">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50 text-electric-500 transition-colors duration-300 group-hover:bg-electric-500 group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed">
                    <HighlightText text={item.body} />
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative border-t border-line py-28 md:py-36">
      <div className="container text-center">
        <Reveal>
          <Sparkles className="mx-auto mb-6 h-10 w-10 text-electric-500" />
        </Reveal>
        <h2 className="font-display text-display-sm font-semibold tracking-tightest text-black">
          <TextReveal text="Ready to transform your operations?" />
        </h2>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
            <HighlightText text="See how BOIT Global's platform can accelerate automation across your insurance or banking business." />
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" arrow>
              Talk to us
            </Button>
            <Button to="/case-studies" variant="ghost" size="lg" arrow>
              View case studies
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Product() {
  const [activeTab, setActiveTab] = useState('insurance');
  const modules = activeTab === 'insurance' ? product.pillars : product.banking;

  return (
    <PageTransition>
      <PageHero
        eyebrow={product.hero.eyebrow}
        title={product.hero.title}
        subtitle={product.hero.subtitle}
      />

      <TabSwitcher active={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="py-20 md:py-28"
        >
          <div className="container space-y-20">
            {modules.map((mod, i) => (
              <div key={mod.id} className="space-y-16">
                <ModuleSection module={mod} index={i} />
                <CtaBanner text={mod.banner} />
              </div>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>

      <AiComponentsSection />
      <CtaSection />
    </PageTransition>
  );
}
