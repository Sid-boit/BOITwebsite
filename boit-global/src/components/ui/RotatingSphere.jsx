import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * RotatingSphere — 3D CSS cube for the brand tagline:
 *   Built · On · Intelligent · Tech
 *
 * Continuous spin uses CSS keyframes so it is not blocked by the parent
 * book-flip page transition on first load.
 */

const WORDS = ['Built', 'On', 'Intelligent', 'Tech'];
const radius = 220;
/** Match AnimatedPage enter duration (+ small buffer). */
const START_DELAY_MS = 1300;

export default function RotatingSphere() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), START_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return undefined;
    const t = setInterval(() => setActive((a) => (a + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, [ready]);

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center perspective-1200">
      <div className="sphere-orbit-cw absolute h-[520px] w-[520px] rounded-full border border-dashed border-electric-500/30" />
      <div className="sphere-orbit-ccw absolute h-[400px] w-[400px] rounded-full border border-electric-500/20" />

      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="sphere-particle absolute h-2 w-2 rounded-full bg-electric-500/60"
          style={{
            '--tx': `${Math.cos((i * Math.PI) / 4) * 260}px`,
            '--ty': `${Math.sin((i * Math.PI) / 4) * 260}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${6 + i * 0.3}s`,
          }}
        />
      ))}

      <div className="pointer-events-none absolute z-30 flex flex-col items-center">
        <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.4em] text-black md:text-xs">
          We are
        </div>
        <div className="font-display text-3xl font-extrabold leading-none text-black md:text-5xl">
          BOIT <span className="text-electric-500">Global</span>
        </div>
        <div className="mt-3 h-[2px] w-16 bg-electric-500" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-black md:text-sm"
          >
            {WORDS[active]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`preserve-3d relative h-[300px] w-[300px] ${ready ? 'sphere-spin' : ''}`}
      >
        {WORDS.map((word, i) => {
          const angle = i * 90;
          const isActive = active === i;
          return (
            <div
              key={word}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)` }}
            >
              <div
                className={`whitespace-nowrap font-display text-4xl font-extrabold transition-transform duration-500 md:text-6xl ${
                  isActive ? 'text-electric-500 text-glow-teal' : 'text-black/25'
                }`}
                style={{ transform: isActive ? 'scale(1.15)' : 'scale(1)' }}
              >
                {word}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-8 h-12 w-[400px] bg-gradient-to-t from-electric-500/20 to-transparent blur-xl" />
    </div>
  );
}
