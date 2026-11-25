import React from 'react';

/* Infinite logo/name ticker. The track is duplicated so the -50% keyframe loops
   seamlessly. Steady speed only — no scroll coupling. */
export default function Marquee({ items = [], duration = 46, className = '' }) {
  const row = (hidden) => (
    <div className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item, i) => {
        const key = `${hidden ? 'b' : 'a'}-${typeof item === 'string' ? item : item.name}-${i}`;
        if (typeof item === 'string') {
          return (
            <span key={key} className="marquee__chip">
              {item}
            </span>
          );
        }
        return (
          <span key={key} className="marquee__logo">
            <img src={item.logo} alt={hidden ? '' : item.name} loading="lazy" />
          </span>
        );
      })}
    </div>
  );

  return (
    <div className={`marquee ${className}`.trim()}>
      <div className="marquee__track" style={{ animationDuration: `${duration}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
