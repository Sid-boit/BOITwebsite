import React, { useEffect, useRef } from 'react';

/* Infinite logo/name ticker. The track is duplicated so the -50% keyframe loops
   seamlessly; scroll velocity nudges the speed, as in the design. */
export default function Marquee({ items, duration = 46 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let last = window.scrollY;
    let idle = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const vel = y - last;
      last = y;
      track.style.animationDuration = `${(
        duration / (1 + Math.min(2.4, Math.abs(vel) * 0.05))
      ).toFixed(2)}s`;
      clearTimeout(idle);
      idle = setTimeout(() => {
        track.style.animationDuration = `${duration}s`;
      }, 180);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(idle);
      window.removeEventListener('scroll', onScroll);
    };
  }, [duration]);

  const row = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      style={{ display: 'flex', alignItems: 'center', gap: 18, paddingRight: 18 }}
    >
      {items.map((label) => (
        <span
          key={`${hidden ? 'b' : 'a'}-${label}`}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 13,
            letterSpacing: '.02em',
            color: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: 8,
            padding: '12px 22px',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
