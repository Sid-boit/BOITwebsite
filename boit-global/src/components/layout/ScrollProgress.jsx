import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin electric progress bar fixed to the top of the viewport that fills as
 * the user scrolls the page — the global companion to the per-section
 * narrative line.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-electric-600 via-electric-400 to-electric-300 shadow-glow"
    />
  );
}
