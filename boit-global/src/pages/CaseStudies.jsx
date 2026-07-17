import { motion } from 'framer-motion';
import { caseStudies } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const EASE = [0.16, 1, 0.3, 1];

export default function CaseStudies() {
  return (
    <PageTransition>
      <PageHero
        eyebrow={caseStudies.hero.eyebrow}
        title={caseStudies.hero.title}
        subtitle={caseStudies.hero.subtitle}
      />

      <section className="relative py-16 md:py-24">
        <div className="container">
          <div className="divide-y divide-line border-y border-line">
            {caseStudies.items.map((item, i) => (
              <motion.a
                key={item.id}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="group relative grid gap-6 py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12"
              >
                <span className="font-display text-sm tabular-nums text-electric-600">
                  0{i + 1}
                </span>

                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-black transition-colors duration-300 group-hover:text-electric-600 md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed">
                    <HighlightText text={item.summary} />
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line-strong px-3 py-1 text-xs text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-black transition-all duration-300 ease-expo group-hover:border-electric-500/50 group-hover:bg-electric-500/10 group-hover:text-electric-600">
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16">
              <Button to="/contact" variant="ghost" size="lg" arrow>
                Discuss your transformation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
