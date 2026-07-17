import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { getServiceBySlug } from '@/data/servicesNav';
import PageTransition from '@/components/ui/PageTransition';
import ServicesTopBox from '@/components/sections/ServicesTopBox';
import HighlightText from '@/components/ui/HighlightText';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

/**
 * Dynamic service detail page — driven entirely by src/data/servicesNav.js.
 * Duplicate content by adding a new entry to the JSON; no page copy needed.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const { detail, title, navPoints, pillar } = service;

  return (
    <PageTransition>
      <ServicesTopBox />

      {/* Hero */}
      <section className="border-b border-line py-16 md:py-24">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="eyebrow">{detail.eyebrow ?? pillar}</p>
            <h1 className="mt-4 font-display text-display-sm font-bold tracking-tight text-black">
              {detail.title ?? title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">
              <HighlightText text={detail.subtitle} />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      {detail.intro?.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl space-y-4">
            {detail.intro.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed md:text-lg">
                  <HighlightText text={para} />
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Nav points — same list as mega-menu, with ripple hover */}
      <section className="border-y border-line bg-white py-12 md:py-16">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-black md:text-2xl">
              What we cover
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-line">
            {navPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.06}>
                <li className="hover-ripple hover-ripple--teal hover-ripple--full rounded-xl px-4 py-4 transition-colors hover:text-white">
                  <span className="hover-ripple__label flex items-start gap-3 text-base md:text-lg">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
                    {point}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlight cards */}
      {detail.highlights?.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
                Key capabilities
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.highlights.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="hover-ripple hover-ripple--teal hover-ripple--full h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:text-white">
                    <div className="hover-ripple__label">
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed opacity-90">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capability list */}
      {detail.capabilities?.length > 0 && (
        <section className="border-t border-line bg-surface-100 py-16 md:py-24">
          <div className="container max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
                Full capability list
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {detail.capabilities.map((cap, i) => (
                <Reveal key={cap} delay={i * 0.05}>
                  <li className="hover-ripple hover-ripple--teal hover-ripple--full flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors hover:text-white md:text-base">
                    <span className="hover-ripple__label flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                      {cap}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
              Ready to explore {title}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed">
              Talk to our team about tailoring a solution for your organization.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
    </PageTransition>
  );
}
