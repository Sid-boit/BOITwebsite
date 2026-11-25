import React from 'react';

/* Frosted glass card shell shared across Home, Platform, and related pages. */
export default function GlassPanel({
  as: Tag = 'article',
  className = '',
  accent = false,
  children,
  ...rest
}) {
  return (
    <Tag
      className={`brand-panel${accent ? ' brand-panel--accent' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
