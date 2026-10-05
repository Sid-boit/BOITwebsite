import React from 'react';

/* Fade + rise on scroll. `delay` maps to the four stagger steps in global.css. */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={className}
      data-reveal="1"
      data-reveal-d={delay ? String(delay) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
