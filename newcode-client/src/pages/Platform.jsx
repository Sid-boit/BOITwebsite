import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { platforms, featureInventory, aiComponents } from '../data/products';
import GlassPanel from '../components/GlassPanel';
import ScrollDeck from '../components/ScrollDeck';
import Reveal from '../components/motion/Reveal';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import engagementVisual from '../assets/engagement.png';
import operationsVisual from '../assets/operations.png';
import distributionVisual from '../assets/distributions.png';
import engageSmarterVisual from '../assets/engage-smarter.png';
import optimizeFasterVisual from '../assets/optimize-faster.jpg';
import '../styles/brand-surfaces.css';
import './Platform.css';

const moduleVisuals = {
  'accelerate-engagement': {
    image: engagementVisual,
    imageAlt: 'AI-powered customer engagement across portals, apps, and conversational channels',
  },
  'accelerate-operations': {
    image: operationsVisual,
    imageAlt: 'Automated operations with case management, security, and intelligent workflows',
  },
  'accelerate-distribution': {
    image: distributionVisual,
    imageAlt: 'Distribution and channel tools that empower agents and partners',
  },
  'accelerate-channel': {
    image: distributionVisual,
    imageAlt: 'Agency and branch channel tools with unified customer intelligence',
  },
};

/* Left-column detail art under sticky copy (insurance modules). */
const detailVisuals = {
  insurance: {
    'accelerate-engagement': {
      image: engageSmarterVisual,
      imageAlt:
        'Customer and agent engagement through portals, apps, and AI conversational channels',
    },
    'accelerate-operations': {
      image: optimizeFasterVisual,
      imageAlt:
        'Automated case workflows with AI review stations and human-in-the-loop exception handling',
    },
  },
};

/* /platform/insurance and /platform/banking share this layout. */
export default function Platform({ slug }) {
  const platform = platforms[slug];
  const inventory = featureInventory[slug];
  const rootRef = useRef(null);
  useTiltPanels(rootRef, [slug]);

  const deckCards = platform.modules.map((m, i) => ({
    index: i + 1,
    title: m.name.replace('Accelerate ', 'Accelerate\n'),
    body: m.solution,
    dark: i % 2 === 1,
    bullets: m.features.map((f) => f.title),
    facts: m.features.map((f) => ({ k: f.title, v: f.body })),
    ...(moduleVisuals[m.id] || {}),
  }));

  return (
    <div className="brand-page platform-page" ref={rootRef}>
      {/* -------------------------------------------------------------- hero */}
      <section className="brand-wash platform-hero">
        <div className="shell">
          <h1>
            {platform.title.split(' ')[0]}{' '}
            <span className="gradient-text">
              {platform.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="platform-lede">{platform.subtitle}</p>
          <div className="brand-actions">
            {platform.cta.buttons.map((btn) =>
              btn.primary ? (
                <Magnetic key={btn.label} as={Link} to={btn.to} className="btn btn--primary">
                  {btn.label}
                </Magnetic>
              ) : (
                <Magnetic key={btn.label} as={Link} to={btn.to} className="btn btn--ghost">
                  {btn.label}
                </Magnetic>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- modules */}
      <ScrollDeck
        id={`${slug}-modules`}
        mode="hover"
        spotlight
        title={`Three accelerators for ${slug}.`}
        actions={platform.cta.buttons}
        cards={deckCards}
      />

      {/* ---------------------------------------------------- module detail */}
      <section className="brand-band">
        <div className="shell brand-section">
          <h2 className="platform-ships-heading">
            What each <span className="gradient-text">accelerator</span> ships with.
          </h2>

          <div className="platform-detail-stack">
            {platform.modules.map((m) => {
              const detailVisual = detailVisuals[slug]?.[m.id];
              return (
                <article key={m.id} id={m.id} className="platform-detail">
                  <div className="platform-detail-grid">
                    <div className="platform-detail-sticky">
                      <h3>{m.headline.replace(/,\s+/g, ',\n')}</h3>
                      <p>{m.solution}</p>
                      {detailVisual ? (
                        <img
                          className="platform-detail-visual"
                          src={detailVisual.image}
                          alt={detailVisual.imageAlt}
                          loading="lazy"
                        />
                      ) : null}
                    </div>

                    <div className="platform-feature-list">
                      {m.features.map((f, fi) => (
                        <Reveal key={f.title} delay={fi + 1}>
                          <GlassPanel accent className="platform-feature-card">
                            <h4>{f.title}</h4>
                            <p>{f.body}</p>
                          </GlassPanel>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- feature inventory */}
      <section className="brand-section shell">
        <h2>
          The full{' '}
          <span className="gradient-text">{platform.title.toLowerCase()}</span>{' '}
          feature set.
        </h2>

        {inventory.map((b) => (
          <div key={b.n} className="platform-inventory-block">
            <div className="platform-inventory-head">
              <h3>{b.title}</h3>
              <span className="platform-tagline">{b.tagline}</span>
            </div>
            <div className="brand-card-grid brand-card-grid--4">
              {b.features.map((f, fi) => (
                <Reveal key={f.title} delay={(fi % 4) + 1}>
                  <GlassPanel accent className="platform-inventory-card">
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </GlassPanel>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* --------------------------------------------- AI capability row */}
      <section className="brand-band">
        <div className="shell brand-section">
          <h2>
            {aiComponents.title}
          </h2>
          <div className="brand-card-grid brand-card-grid--4">
            {aiComponents.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) + 1}>
                <GlassPanel accent className="platform-ai-card">
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- contact */}
      <section className="brand-wash platform-contact">
        <div className="shell">
          <h2>{platform.cta.title}</h2>
          <p className="platform-contact-body">{platform.cta.body}</p>
          <div className="brand-actions">
            {platform.cta.buttons.map((btn) =>
              btn.primary ? (
                <Magnetic key={btn.label} as={Link} to={btn.to} className="btn btn--primary">
                  {btn.label}
                </Magnetic>
              ) : (
                <Magnetic key={btn.label} as={Link} to={btn.to} className="btn btn--ghost">
                  {btn.label}
                </Magnetic>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
