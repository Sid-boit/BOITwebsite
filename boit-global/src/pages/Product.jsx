import { Link } from 'react-router-dom';
import { Shield, Landmark, Sparkles, ArrowRight } from 'lucide-react';
import { product } from '@/data/content';
import { productsNav, productCapabilities } from '@/data/productsNav';
import AnimatedPage from '@/components/effects/AnimatedPages';
import PageHero from '@/components/layout/PageHero';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';
import Button from '@/components/ui/Button';

const PILLARS = [
  {
    key: 'insurance',
    icon: Shield,
    path: '/product/insurance',
    data: productsNav.insurance,
  },
  {
    key: 'banking',
    icon: Landmark,
    path: '/product/banking',
    data: productsNav.banking,
  },
];

/** Product hub — entry to Insurance, Banking, and AI Capabilities pages. */
export default function Product() {
  return (
    <AnimatedPage>
      <PageHero
        eyebrow={product.hero.eyebrow}
        title={product.hero.title}
        subtitle={product.hero.subtitle}
      />

      <section className="border-t border-line py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-8">Platform pillars</p>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {PILLARS.map(({ key, icon: Icon, path, data }, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <Link
                  to={path}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:border-electric-400 hover:shadow-lg hover:shadow-electric-500/5 md:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50 text-electric-600 transition-colors group-hover:bg-electric-500 group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-black md:text-3xl">
                    {data.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed">
                    <HighlightText text={data.subtitle} />
                  </p>
                  <ul className="mt-6 space-y-2">
                    {data.pages.map((p) => (
                      <li
                        key={p.slug}
                        className="flex items-center gap-2 text-sm font-medium text-black"
                      >
                        <span className="h-1 w-1 rounded-full bg-electric-500" />
                        {p.navLabel}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-600">
                    Explore {data.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-6">{productCapabilities.eyebrow}</span>
            </Reveal>
            <h2 className="font-display text-display-sm font-semibold tracking-tightest text-black">
              <TextReveal text={productCapabilities.title} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed">
                <HighlightText text={productCapabilities.subtitle} />
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCapabilities.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <Link
                  to={`/product/capabilities#${item.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:border-electric-400 hover:shadow-glow-soft"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-electric-50 text-electric-500 transition-colors group-hover:bg-electric-500 group-hover:text-black">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-black/70">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <Button to="/product/capabilities" size="lg" arrow>
                View all capabilities
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
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
    </AnimatedPage>
  );
}
