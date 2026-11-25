import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { platforms, productHub } from '../data/products';
import CtaBand from './CtaBand';
import GlassPanel from './GlassPanel';
import Reveal from './motion/Reveal';
import SplitText from './motion/SplitText';
import Magnetic from './motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './ProductVerticalPage.css';

/* Shared product vertical / solution page: wash hero, glass pillars, accelerators. */
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
  ctaEyebrow,
}) {
  const platform = platformKey ? platforms[platformKey] : null;
  const cta = platform?.cta || productHub.cta;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page vertical-page" ref={rootRef}>
      <section className="page-hero page-hero--wash vertical-page__hero">
        <div className="page-hero__wash" aria-hidden="true" />
        <div className="vertical-page__hero-inner" data-stack="1">
          <div>
            <h1
              className="h1 fade-up"
              style={{ maxWidth: '14ch', fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              {title}
            </h1>

            {headline ? (
              <p
                className="fade-up page-tagline"
                style={{
                  margin: '22px 0 0',
                  maxWidth: '42ch',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  animationDelay: '.1s',
                }}
              >
                <span className="grad-text">{headline}</span>
              </p>
            ) : null}

            <p
              className="lede fade-up"
              style={{ marginTop: 18, maxWidth: '42ch', animationDelay: '.18s' }}
            >
              {lede}
            </p>

            <div
              className="fade-up"
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                marginTop: 32,
                animationDelay: '.28s',
              }}
            >
              <Magnetic as={Link} to="/contact" className="btn btn--primary">
                Demo
              </Magnetic>
              {platformTo ? (
                <Magnetic as={Link} to={platformTo} className="btn btn--ghost">
                  {platformLabel}
                </Magnetic>
              ) : null}
            </div>
          </div>

          <Reveal className="lam-hero-visual vertical-page__visual">
            <img src={image} alt={imageAlt} />
          </Reveal>
        </div>
      </section>

      <section className="brand-section brand-wash">
        <div className="shell" style={{ padding: '0 var(--gutter)' }}>
          <Reveal as="p" className="eyebrow">
            {pillarsEyebrow}
          </Reveal>
          <SplitText
            as="h2"
            text={pillarsTitle}
            className="h2"
            style={{ margin: '18px 0 48px', maxWidth: '18ch' }}
          />

          <div className="vertical-page__pillars brand-card-grid" data-stack="1">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i + 1}>
                <GlassPanel
                  accent
                  className={`vertical-page__card vertical-page__card--tone-${
                    i % 2 === 0 ? 'violet' : 'teal'
                  }`}
                >
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {platform && acceleratorsTitle ? (
        <section className="brand-section brand-band vertical-page__accels-section">
          <div className="shell" style={{ padding: '0 var(--gutter)' }}>
            <div className="vertical-page__accels-layout">
              <div className="vertical-page__accels-sticky">
                <Reveal as="p" className="eyebrow">
                  Accelerators
                </Reveal>
                <SplitText
                  as="h2"
                  text={acceleratorsTitle}
                  className="h2"
                  style={{ margin: '18px 0 0', maxWidth: '18ch' }}
                />
              </div>

              <div className="vertical-page__accels">
                {platform.modules.map((m, i) => (
                  <Reveal key={m.id} delay={(i % 3) + 1}>
                    <GlassPanel
                      as={Link}
                      to={`${platformTo}#${m.id}`}
                      accent
                      className={`vertical-page__card vertical-page__accel vertical-page__card--tone-${
                        i % 2 === 0 ? 'teal' : 'violet'
                      }`}
                    >
                      <h3>{m.name}</h3>
                      <p>
                        {m.headline}. {m.solution}
                      </p>
                    </GlassPanel>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        eyebrow={ctaEyebrow || platform?.eyebrow || 'Product'}
        title={cta.title}
        body={cta.body}
        buttons={cta.buttons}
      />
    </div>
  );
}
