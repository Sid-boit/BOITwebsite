import { Reveal, TextReveal } from './Reveal';
import HighlightText from './HighlightText';

/**
 * Consistent section header: letter-spaced eyebrow + oversized display title
 * with an optional intro paragraph. Used across every route.
 */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-6">{eyebrow}</span>
        </Reveal>
      )}
      <h2 className="text-display-sm font-semibold tracking-tightest">
        <TextReveal text={title} />
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            <HighlightText text={intro} />
          </p>
        </Reveal>
      )}
    </div>
  );
}
