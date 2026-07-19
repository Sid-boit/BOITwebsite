import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Compact inner-page hero. Title animates on mount (not whileInView) so it
 * still reveals correctly during page transitions.
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  const words = String(title).split(' ');

  return (
    <section className="relative overflow-hidden bg-[#f7fefe] pt-40 md:pt-52">
      <div className="container relative pb-20 md:pb-28">
        {eyebrow ? (
          <Reveal>
            <span className="eyebrow mb-8">{eyebrow}</span>
          </Reveal>
        ) : null}
        <h1 className="max-w-4xl text-display font-semibold tracking-tightest text-black">
          <span className="inline-block" aria-label={words.join(' ')}>
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
                >
                  {word}
                  {i < words.length - 1 ? '\u00A0' : ''}
                </motion.span>
              </span>
            ))}
          </span>
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
