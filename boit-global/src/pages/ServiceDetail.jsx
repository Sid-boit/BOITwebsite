import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  getCategoryBySlug,
  getServicePage,
  getFirstPagePath,
} from '@/data/servicesNav';
import AnimatedPage from '@/components/effects/AnimatedPages';
import ServicesTopBox from '@/components/sections/ServicesTopBox';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

/**
 * Universal one-page layout for each service sub-page:
 * Category heading → Headline → Challenge → Solution → Key Capabilities → Business Impact → Next
 */
export default function ServiceDetail() {
  const { slug, pageSlug } = useParams();
  const category = slug ? getCategoryBySlug(slug) : null;
  const data = slug && pageSlug ? getServicePage(slug, pageSlug) : null;

  useEffect(() => {
    if (data) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, pageSlug, data]);

  // /services/:slug → redirect to first sub-page
  if (slug && !pageSlug) {
    if (!category) return <Navigate to="/services" replace />;
    return <Navigate to={getFirstPagePath(slug)} replace />;
  }

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  const { categoryTitle, pillar, page, next, prev, pageIndex, pageCount } = data;

  return (
    <AnimatedPage>
      <ServicesTopBox />

      {/* Category heading (e.g. Life Insurance) */}
      <section className="border-b border-line bg-white pb-6 pt-10 md:pb-8 md:pt-14">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
              {pillar}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-black md:text-5xl">
              {categoryTitle}
            </h1>
            <p className="mt-3 text-sm text-black/60">
              Page {pageIndex + 1} of {pageCount}
              <span className="mx-2 text-black/30">·</span>
              {page.navLabel}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Headline */}
      <section className="border-b border-line py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-black md:text-4xl">
              {page.headline}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
              The Challenge
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg">
              <HighlightText text={page.challenge} />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-line bg-white py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
              The BOIT Global Solution
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg">
              <HighlightText text={page.solution} />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
              Key Capabilities
            </p>
          </Reveal>
          <ul className="mt-8 space-y-5">
            {page.capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 md:p-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-50 font-display text-xs font-bold text-electric-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-black md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed md:text-base">
                      <HighlightText text={item.body} />
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Business Impact */}
      <section className="border-t border-line bg-surface-100 py-10 md:py-14">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
              Business Impact
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {page.impact.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="h-full rounded-2xl border border-line bg-white p-5">
                  <h3 className="font-display text-base font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    <HighlightText text={item.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-line py-10 md:py-14">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                to={`/services/${slug}/${prev.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-electric-600"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest text-black/50">
                    Previous
                  </span>
                  {prev.navLabel}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Button to={`/services/${slug}/${next.slug}`} size="lg" arrow>
                Next: {next.navLabel}
              </Button>
            ) : (
              <Button to="/contact" size="lg" arrow>
                Contact Us
              </Button>
            )}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
