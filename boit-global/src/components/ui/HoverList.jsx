import { useState } from 'react';
import { motion } from 'framer-motion';
import HighlightText from '@/components/ui/HighlightText';

/**
 * Interactive hover-list: a stack of large, borderless rows where the hovered
 * item brightens, slides right, and reveals its description. A lightweight
 * alternative to feature cards for scannable capability lists.
 */
export default function HoverList({ items }) {
  const [active, setActive] = useState(null);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isActive = active === i;
        return (
          <li key={item.title ?? i}>
            <motion.div
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className="group relative flex cursor-default flex-col gap-1 py-5 md:flex-row md:items-baseline md:gap-8"
            >
              {/* electric hairline that grows on hover */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 h-px bg-electric-500"
                initial={false}
                animate={{ width: isActive ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.h4
                animate={{ x: isActive ? 12 : 0, color: isActive ? '#000000' : '#000000' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-lg font-medium tracking-tight text-black md:w-1/3 md:text-xl"
              >
                {item.title}
              </motion.h4>
              {item.body && (
                <motion.p
                  animate={{ opacity: isActive ? 1 : 0.85 }}
                  className="flex-1 text-sm leading-relaxed md:text-base"
                >
                  <HighlightText text={item.body} />
                </motion.p>
              )}
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
