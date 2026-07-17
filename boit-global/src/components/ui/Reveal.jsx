import { motion } from 'framer-motion';

// Shared spring-like easing used across every entrance animation.
const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal — fades + lifts its children into view once, when scrolled into
 * the viewport. `delay` staggers sequential elements.
 */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * TextReveal — staggered word-by-word reveal for headings, mimicking the
 * reference site's oversized display type sliding up in sequence.
 */
export function TextReveal({ text, className = '', delay = 0, wordDelay = 0.06 }) {
  const words = Array.isArray(text) ? text : String(text).split(' ');

  return (
    <span className={`inline-block ${className}`} aria-label={words.join(' ')}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * wordDelay }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
