import { useState } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0.35,
    rotateY: 88,
    scale: 0.985,
  },
  in: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  out: {
    opacity: 0.35,
    rotateY: -88,
    scale: 0.985,
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.645, 0.045, 0.355, 1],
  duration: 1.15,
};

/**
 * Book-flip page wrapper.
 *
 * After enter finishes we force `transform: none` (not rotateY(0)) so sticky
 * children like the Implementation Roadmap can pin to the viewport.
 * rotateY(0) still creates a CSS containing block and breaks sticky.
 */
export default function AnimatedPage({ children }) {
  const [settled, setSettled] = useState(false);

  return (
    <div
      className="book-stage relative w-full"
      style={settled ? undefined : { perspective: '1800px' }}
    >
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        transformTemplate={(_, generated) => (settled ? 'none' : generated)}
        className="book-page relative w-full origin-left"
        style={{
          backgroundColor: '#f7fefe',
          borderLeft: '3px solid #7ee8dc',
          borderRight: '1px solid #b8f0eb',
          borderTop: '1px solid #b8f0eb',
          borderBottom: '1px solid #b8f0eb',
          boxShadow: settled
            ? 'none'
            : 'inset 8px 0 16px -12px rgba(6, 43, 35, 0.18), 0 12px 40px -20px rgba(6, 43, 35, 0.2)',
          ...(!settled
            ? {
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }
            : {
                transformStyle: 'flat',
                backfaceVisibility: 'visible',
              }),
        }}
        onAnimationStart={(def) => {
          if (def === 'out') setSettled(false);
          if (def === 'in' || def === 'out') {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }}
        onAnimationComplete={(def) => {
          if (def === 'in') setSettled(true);
        }}
      >
        {!settled && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-black/[0.06] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-px bg-line-strong/60"
            />
          </>
        )}
        {children}
      </motion.div>
    </div>
  );
}
