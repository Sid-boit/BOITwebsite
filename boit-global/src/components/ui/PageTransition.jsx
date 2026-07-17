import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Wraps each route so AnimatePresence can cross-fade + lift pages during
 * navigation. Also scrolls to top on enter for a clean page-to-page feel.
 */
export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: EASE }}
      onAnimationStart={() => window.scrollTo({ top: 0, behavior: 'instant' })}
    >
      {children}
    </motion.main>
  );
}
