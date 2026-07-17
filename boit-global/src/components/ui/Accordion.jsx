import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Sleek, borderless accordion used in place of bulky cards for dense service
 * and product feature lists. One item open at a time; the active row glows
 * with the electric accent and reveals its body with a height animation.
 */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.id ?? item.title ?? i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-6 py-6 text-left transition-colors duration-300"
            >
              {item.index && (
                <span
                  className={`font-display text-sm tabular-nums transition-colors duration-300 ${
                    isOpen ? 'text-electric-600' : 'text-black'
                  }`}
                >
                  {item.index}
                </span>
              )}
              <span
                className={`flex-1 font-display text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl ${
                  isOpen ? 'text-black' : 'text-black group-hover:text-black'
                }`}
              >
                {item.title}
              </span>
              <span
                className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'border-electric-500/40 bg-electric-500/10 text-electric-600'
                    : 'border-line-strong text-black group-hover:border-electric-400'
                }`}
              >
                <motion.span
                  className="absolute h-px w-3 bg-current"
                  animate={{ rotate: isOpen ? 0 : 0 }}
                />
                <motion.span
                  className="absolute h-3 w-px bg-current"
                  animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-0 md:pl-14">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
