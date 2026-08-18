import React from 'react';

/* Word-by-word rise-in headline. Each word sits in an overflow-hidden mask and
   is released with a stagger once the element scrolls into view. */
export default function SplitText({ as: Tag = 'h2', text, className = '', stagger = 42, ...rest }) {
  const words = String(text).trim().split(/\s+/);
  return (
    <Tag className={`split ${className}`} data-split="1" {...rest}>
      {words.map((w, i) => (
        <React.Fragment key={`${w}-${i}`}>
          <span className="w">
            <i style={{ transitionDelay: `${i * stagger}ms` }}>{w}</i>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
