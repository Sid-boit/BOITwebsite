import { Link } from 'react-router-dom';
import { nav, brand, home } from '@/data/content';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#f7fefe]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-electric-sheen bg-[length:200%_100%] animate-shimmer" />

      {/* CTA band */}
      <div className="container relative py-24 md:py-32">
        <div className="flex flex-col items-start gap-8">
          <span className="eyebrow">{brand.name}</span>
          <h2 className="max-w-4xl text-display-sm font-semibold tracking-tightest">
            <TextReveal text={home.cta.title} />
          </h2>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-black">
              {home.cta.points.map((p) => (
                <span key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-500" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <Button to="/contact" variant="primary" size="lg" arrow>
              Start the conversation
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="hairline" />

      {/* Meta row */}
      <div className="container relative flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <BrandLogo />

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-black transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-black">
          &copy; {year} {brand.name}, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
