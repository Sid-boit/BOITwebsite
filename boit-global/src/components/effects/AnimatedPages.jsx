import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 48,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -32,
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
};

/**
 * Fast left-to-right page enter / exit.
 * After enter finishes, transform is cleared so sticky children keep working.
 */
export default function AnimatedPage({ children }) {
  const location = useLocation();
  const [settled, setSettled] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      transformTemplate={(_, generated) => (settled ? 'none' : generated)}
      className="relative w-full"
      style={{ backgroundColor: '#f7fefe' }}
      onAnimationStart={(def) => {
        if (def === 'out') setSettled(false);
        // Preserve deep-link scroll targets (e.g. /services/health#slug)
        if ((def === 'in' || def === 'out') && !location.hash) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }}
      onAnimationComplete={(def) => {
        if (def === 'in') setSettled(true);
      }}
    >
      {children}
    </motion.div>
  );
}
