import React from 'react';
import { Link } from 'react-router-dom';

import { platforms, productHub } from '../data/products';
import CtaBand from './CtaBand';
import Reveal from './motion/Reveal';
import SplitText from './motion/SplitText';
import Magnetic from './motion/Magnetic';

/* Shared sample vertical page: copy left, hero image right. */
export default function ProductVerticalPage({
  platformKey,
  title,
  headline,
  lede,
  image,
  imageAlt,
  pillarsEyebrow = 'Coverage pillars',
  pillarsTitle,
  pillars,
  acceleratorsTitle,
  platformLabel,
  platformTo,
}) {
  const platform = platformKey ? platforms[platformKey] : null;
  const cta = platform?.cta || productHub.cta;

  return (
    <>
      <section
        style={{
          position: 'relative',
          maxWidth: 'var(--shell)',
          margin: '0 auto',
          padding: '148px var(--gutter) 72px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.25fr)',
            gap: 40,
            alignItems: 'center',
          }}
          data-stack="1"
        >
          <div>
            <h1
              className="h1 fade-up"
              style={{ maxWidth: '14ch', fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              {title}
            </h1>

            {headline ? (
              <p
                className="fade-up"
                style={{
                  margin: '22px 0 0',
                  maxWidth: '42ch',
                  fontSize: 'clamp(18px, 1.8vw, 24px)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  animationDelay: '.1s',
                }}
              >
                <span className="grad-text">{headline}</span>
              </p>
            ) : null}

            <p className="lede fade-up" style={{ marginTop: 18, maxWidth: '42ch', animationDelay: '.18s' }}>
              {lede}
            </p>

            <div
              className="fade-up"
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32, animationDelay: '.28s' }}
            >
              <Magnetic as={Link} to="/contact" className="btn btn--primary">
                Demo
              </Magnetic>
              {platformTo ? (
                <Magnetic as={Link} to={platformTo} className="btn btn--ghost">
                  {platformLabel} <span>→</span>
                </Magnetic>
              ) : null}
            </div>
          </div>

          <Reveal className="lam-hero-visual" style={{ justifySelf: 'stretch', width: '100%', maxWidth: 'none' }}>
            <img
              src={image}
              alt={imageAlt}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                minHeight: 420,
                borderRadius: 28,
                objectFit: 'contain',
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="panel-light">
        <div className="shell" style={{ padding: '96px var(--gutter)' }}>
          <Reveal as="p" className="eyebrow">
            {pillarsEyebrow}
          </Reveal>
          <SplitText
            as="h2"
            text={pillarsTitle}
            className="h2"
            style={{ margin: '18px 0 48px', maxWidth: '18ch' }}
          />

          <div
            className="grid-hair"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
            data-stack="1"
          >
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="hair-cell lift">
                <div className="tag">{`0${i + 1}`}</div>
                <h3 style={{ fontSize: 22, letterSpacing: '-.03em', margin: '10px 0 12px' }}>{p.title}</h3>
                <p style={{ margin: 0, color: 'var(--body-2)', fontSize: 15, lineHeight: 1.55 }}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {platform && acceleratorsTitle ? (
        <section className="section">
          <Reveal as="p" className="eyebrow">
            Accelerators
          </Reveal>
          <SplitText
            as="h2"
            text={acceleratorsTitle}
            className="h2"
            style={{ margin: '18px 0 48px', maxWidth: '22ch' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {platform.modules.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) + 1}>
                <Link
                  to={`${platformTo}#${m.id}`}
                  className="lift"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '88px minmax(0, 1fr)',
                    gap: 24,
                    padding: '28px 0',
                    borderTop: '1px solid var(--line)',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  data-stack="1"
                >
                  <span className="eyebrow eyebrow--accent" style={{ marginTop: 6 }}>
                    {`0${i + 1}`}
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 24, letterSpacing: '-.03em' }}>{m.name}</h3>
                    <p style={{ margin: '10px 0 0', color: 'var(--body-2)', maxWidth: '56ch' }}>
                      {m.headline}. {m.solution}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand
        eyebrow={platform?.eyebrow || 'Product'}
        title={cta.title}
        body={cta.body}
        buttons={cta.buttons}
      />
    </>
  );
}
