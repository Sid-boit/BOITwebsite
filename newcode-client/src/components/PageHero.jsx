import React from 'react';

/* Shared inner-page hero: mono eyebrow, masked rise-in title, lede, optional
   children (buttons, meta). When `wash` is on, soft violet/teal blobs match
   the Home / Services / Product classification hero treatment. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  style,
  wash = false,
  className = '',
}) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section
      className={`page-hero${wash ? ' page-hero--wash' : ''}${className ? ` ${className}` : ''}`}
      style={{
        position: 'relative',
        maxWidth: wash ? 'none' : 'var(--shell)',
        margin: '0 auto',
        padding: wash ? '168px 0 72px' : '168px var(--gutter) 72px',
        ...style,
      }}
    >
      {wash ? <div className="page-hero__wash" aria-hidden="true" /> : null}

      <div
        className="page-hero__inner"
        style={
          wash
            ? {
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: 'var(--shell)',
                margin: '0 auto',
                padding: '0 var(--gutter)',
                boxSizing: 'border-box',
              }
            : undefined
        }
      >
        

        <h1 className="h1" style={{ maxWidth: '18ch' }}>
          {lines.map((line, i) => (
            <span className="rise" key={line}>
              <span style={{ animationDelay: `${0.05 + i * 0.11}s` }}>{line}</span>
            </span>
          ))}
        </h1>

        {subtitle ? (
          <p className="lede fade-up" style={{ marginTop: 34, animationDelay: '.42s' }}>
            {subtitle}
          </p>
        ) : null}

        {children ? (
          <div className="fade-up" style={{ marginTop: 32, animationDelay: '.55s' }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
