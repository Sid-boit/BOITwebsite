import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/motion';

/* Parse "200+", "10+ years", "6" into { n, suffix }. */
function parseStat(value) {
  const raw = String(value).trim();
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { n: 0, suffix: raw, decimals: 0 };
  const num = match[1];
  return {
    n: Number(num),
    suffix: match[2] || '',
    decimals: num.includes('.') ? num.split('.')[1].length : 0,
  };
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

/* Counts from 0 to the target when the element enters the viewport. */
export default function CountUp({ value, duration = 1600, className = '', as: Tag = 'strong' }) {
  const { n, suffix, decimals } = parseStat(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? n : 0);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(n);
      return undefined;
    }

    const el = ref.current;
    if (!el) return undefined;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const current = n * easeOutCubic(t);
        setDisplay(current);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(n);
      };

      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n, duration]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : String(Math.round(display));

  return (
    <Tag ref={ref} className={className}>
      {formatted}
      {suffix}
    </Tag>
  );
}
