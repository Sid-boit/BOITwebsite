import { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCategoryBySlug } from '@/data/servicesNav';
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

function ServiceSection({ section, index }) {
  const reversed = index % 2 !== 0;
  const img = SECTION_IMAGES[index % SECTION_IMAGES.length];
  const step = String(index + 1).padStart(2, '0');
  const features = [...(section.capabilities ?? []), ...(section.impact ?? [])];

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
              <HoverList items={features} />
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

/**
 * One page per category (Life Insurance, Retail Banking, …) with alternating
 * text/image sections — same layout pattern as the Product page.
 */
export default function ServiceDetail() {
  const { slug, pageSlug } = useParams();
  const location = useLocation();
  const category = slug ? getCategoryBySlug(slug) : null;

  useEffect(() => {
    if (pageSlug || location.hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug, pageSlug, location.hash]);

  useEffect(() => {
    if (!location.hash || pageSlug) return undefined;
    const id = decodeURIComponent(location.hash.slice(1));
    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    // Wait for page enter + layout so the heading is in place
    const t = setTimeout(scrollToSection, 520);
    return () => clearTimeout(t);
  }, [location.hash, location.pathname, slug, pageSlug]);

  // Legacy deep links → category page + section hash
  if (slug && pageSlug) {
    return <Navigate to={`/services/${slug}#${pageSlug}`} replace />;
  }

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const { title, pages } = category;

  return (
    <AnimatedPage>
      <PageHero
        title={title}
        subtitle={`End-to-end solutions for ${title.toLowerCase()} — explore how BOIT Global modernises every stage of your operations.`}
      />

      <section className="border-t border-line py-20 md:py-28">
        <div className="container space-y-24 md:space-y-32">
          {pages.map((section, i) => (
            <ServiceSection key={section.slug} section={section} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-display-sm font-semibold tracking-tightest text-black">
              <TextReveal text={`Ready to transform ${title}?`} />
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
              Talk to our team about tailoring a solution for your organisation.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" size="lg" arrow>
                Contact Us
              </Button>
              <Button to="/services" variant="ghost" size="lg">
                All Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </AnimatedPage>
  );
}
