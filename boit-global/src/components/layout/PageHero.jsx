import { Reveal, TextReveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';

/**
 * Compact inner-page hero: eyebrow + oversized title + subtitle, sitting on a
 * subtle grid + glow field. Keeps secondary routes visually consistent with
 * the home hero without a second WebGL canvas.
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#f7fefe] pt-40 md:pt-52">
      <div className="container relative pb-20 md:pb-28">
        <Reveal>
          <span className="eyebrow mb-8">{eyebrow}</span>
        </Reveal>
        <h1 className="max-w-4xl text-display font-semibold tracking-tightest text-black">
          <TextReveal text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              <HighlightText text={subtitle} />
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
