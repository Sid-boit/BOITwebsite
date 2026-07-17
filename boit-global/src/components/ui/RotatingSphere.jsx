import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * RotatingSphere — ported from BOITwebsite/frontend/src/components/RotatingSphere.jsx.
 *
 * A 3D CSS cube that rotates on Y showing the four words of the brand tagline:
 *   Built · On · Intelligent · Tech
 * The active word glows in the teal accent; the center always shows "BOIT Global".
 *
 * Token mapping from the source project:
 *   boit-teal  → electric-500 (#006D5B)
 *   boit-ink   → navy-900
 *   font-heading → font-display (Space Grotesk)
 *   font-body    → font-sans (Inter)
 *   perspective-1000 → perspective-1200 (inline/utility)
 *   preserve-3d → preserve-3d (utility, added to index.css)
 *   text-glow-teal → text-glow-teal (utility, added to index.css)
 *   radial-glow  → bg-radial-glow (already in tailwind config)
 */

const WORDS = ['Built', 'On', 'Intelligent', 'Tech'];

const radius = 220;

export default function RotatingSphere() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center perspective-1200">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      {/* Outer orbit ring — dashed */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-electric-500/30"
      />
      {/* Inner orbit ring — solid */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[400px] w-[400px] rounded-full border border-electric-500/20"
      />

      {/* Floating particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-electric-500/60"
          animate={{
            x: [0, Math.cos((i * Math.PI) / 4) * 260, 0],
            y: [0, Math.sin((i * Math.PI) / 4) * 260, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Center persistent label */}
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

      {/* The rotating 3D cube — 4 word faces around the Y axis */}
      <motion.div
        className="preserve-3d relative h-[300px] w-[300px]"
        animate={{ rotateY: [0, -90, -180, -270, -360] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
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
              <motion.div
                animate={{ scale: isActive ? 1.15 : 1 }}
                transition={{ duration: 0.6 }}
                className={`whitespace-nowrap font-display text-4xl font-extrabold md:text-6xl ${
                  isActive ? 'text-electric-500 text-glow-teal' : 'text-black/25'
                }`}
              >
                {word}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Soft floor reflection */}
      <div className="pointer-events-none absolute bottom-8 h-12 w-[400px] bg-gradient-to-t from-electric-500/20 to-transparent blur-xl" />
    </div>
  );
}
