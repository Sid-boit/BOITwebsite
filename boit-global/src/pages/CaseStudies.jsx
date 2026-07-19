import { motion } from 'framer-motion';
import { caseStudies } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const EASE = [0.16, 1, 0.3, 1];

export default function CaseStudies() {
  let index = 0;

  return (
    <PageTransition>
      <PageHero
        eyebrow={caseStudies.hero.eyebrow}
        title={caseStudies.hero.title}
        subtitle={caseStudies.hero.subtitle}
      />

      <section className="relative py-16 md:py-24">
        <div className="container space-y-20">
          {caseStudies.sections.map((section) => (
            <div key={section.id}>
              <Reveal>
                <p className="eyebrow mb-8">{section.label}</p>
              </Reveal>

              <div className="divide-y divide-line border-y border-line">
                {section.items.map((item) => {
                  index += 1;
                  const num = String(index).padStart(2, '0');
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="group relative grid gap-6 py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12"
                    >
                      <span className="font-display text-sm tabular-nums text-electric-600">
                        {num}
                      </span>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-electric-600">
                          {item.source}
                        </p>
                        <h3 className="font-display text-2xl font-medium tracking-tight text-black transition-colors duration-300 group-hover:text-electric-600 md:text-3xl">
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
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                          &rarr;
                        </span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          ))}

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface-100/80 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                Disclaimer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {caseStudies.disclaimer}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Button to="/contact" variant="ghost" size="lg" arrow>
              Discuss your transformation
            </Button>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
