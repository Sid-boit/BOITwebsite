import { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductCategory } from '@/data/productsNav';
import AnimatedPage from '@/components/effects/AnimatedPages';
import PageHero from '@/components/layout/PageHero';
import HighlightText from '@/components/ui/HighlightText';
import HoverList from '@/components/ui/HoverList';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const SECTION_IMAGES = [
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
];

function ProductSection({ section, index }) {
  const reversed = index % 2 !== 0;
  const img = SECTION_IMAGES[index % SECTION_IMAGES.length];
  const step = String(index + 1).padStart(2, '0');

  return (
    <section id={section.slug} className="scroll-mt-28">
      <Reveal>
        <div
          className={`grid items-start gap-12 lg:grid-cols-2 ${
            reversed ? 'lg:[direction:rtl]' : ''
          }`}
        >
          <div className={reversed ? 'lg:[direction:ltr]' : ''}>
            <span className="eyebrow mb-4 block text-electric-500">{step}</span>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
              {section.navLabel}
            </h2>
            <p className="mt-3 text-lg font-medium leading-snug text-black/70 md:text-xl">
              {section.headline}
            </p>
            <p className="mt-4 text-base leading-relaxed">
              <HighlightText text={section.solution} />
            </p>
            <div className="mt-8">
              <HoverList items={section.features} />
            </div>
          </div>

          <div className={`overflow-hidden rounded-2xl ${reversed ? 'lg:[direction:ltr]' : ''}`}>
            <motion.img
              src={img}
              alt={section.navLabel}
              className="aspect-[4/3] w-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Insurance or Banking product page — alternating text / image sections. */
export default function ProductDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const category = slug ? getProductCategory(slug) : null;

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug, location.hash]);

  useEffect(() => {
    if (!location.hash) return undefined;
    const id = decodeURIComponent(location.hash.slice(1));
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 520);
    return () => clearTimeout(t);
  }, [location.hash, location.pathname, slug]);

  if (!category) {
    return <Navigate to="/product" replace />;
  }

  const { title, pages, eyebrow, subtitle } = category;

  return (
    <AnimatedPage>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="border-t border-line py-20 md:py-28">
        <div className="container space-y-24 md:space-y-32">
          {pages.map((section, i) => (
            <ProductSection key={section.slug} section={section} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-display-sm font-semibold tracking-tightest text-black">
              <TextReveal text={`Ready to accelerate ${category.label.toLowerCase()}?`} />
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
              Explore the AI capability layer or talk to our team about a tailored rollout.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" size="lg" arrow>
                Contact Us
              </Button>
              <Button to="/product/capabilities" variant="ghost" size="lg">
                AI Capabilities
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </AnimatedPage>
  );
}
