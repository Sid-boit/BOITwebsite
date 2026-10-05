import React from 'react';

/* Shared inner-page hero: mono eyebrow, masked rise-in title, lede, optional
   children (buttons, meta). Decorative blobs match the Home hero treatment. */
export default function PageHero({ eyebrow, title, subtitle, children }) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section
      style={{
        position: 'relative',
        maxWidth: 'var(--shell)',
        margin: '0 auto',
        padding: '168px var(--gutter) 72px',
      }}
    >
      <p className="eyebrow eyebrow--dot fade-up">
        <i />
        {eyebrow}
      </p>

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
    </section>
  );
}
