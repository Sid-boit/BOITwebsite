import React from 'react';
import { Link } from 'react-router-dom';

import { productHub, platforms, capabilities, aiComponents, featureInventory } from '../data/products';
import PageHero from '../components/PageHero';
import ScrollDeck from '../components/ScrollDeck';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';

/* Hub deck: the two platform pillars plus the shared intelligence layer. */
const deckCards = [
  {
    index: 1,
    tag: 'Platform pillar',
    title: 'Insurance',
    body: platforms.insurance.subtitle,
    bullets: featureInventory.insurance.map((f) => `${f.title} — ${f.tagline.split('.')[0]}.`),
    to: '/product/insurance',
    linkLabel: productHub.pillars[0].linkLabel,
    facts: platforms.insurance.modules.map((m) => ({
      k: m.name,
      v: m.features.map((f) => f.title).join(' · '),
    })),
  },
  {
    index: 2,
    tag: 'Platform pillar',
    title: 'Banking',
    dark: true,
    body: platforms.banking.subtitle,
    bullets: featureInventory.banking.map((f) => `${f.title} — ${f.tagline}`),
    to: '/product/banking',
    linkLabel: productHub.pillars[1].linkLabel,
    facts: platforms.banking.modules.map((m) => ({
      k: m.name,
      v: m.features.map((f) => f.title).join(' · '),
    })),
  },
  {
    index: 3,
    tag: 'Intelligence layer',
    title: 'AI Capabilities',
    body: productHub.capabilitiesStrip.subtitle,
    chips: capabilities.items.map((c) => c.title.replace(/\s*\(.*\)$/, '')),
    to: '/product/capabilities',
    linkLabel: productHub.capabilitiesStrip.cta.label,
  },
];

export default function Product() {
  const { hero, pillars, pillarsEyebrow, capabilitiesStrip, cta } = productHub;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {pillars.map((p) => (
            <Magnetic key={p.key} as={Link} to={p.to} className="btn btn--ghost">
              {p.linkLabel} <span>→</span>
            </Magnetic>
          ))}
        </div>
      </PageHero>

      <ScrollDeck
        id="pillars"
        eyebrow={`01 — ${pillarsEyebrow}`}
        title="One platform. Every touchpoint."
        allLink="/product/capabilities"
        allLabel="View all capabilities"
        cards={deckCards}
      />

      {/* ---------------------------------------- feature inventory grid */}
      <section className="panel-light" style={{ marginTop: 128 }}>
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            02 — Module inventory
          </Reveal>
          <SplitText
            as="h2"
            text="Engagement, operations, distribution — end to end."
            className="h2"
            style={{ margin: '22px 0 64px', maxWidth: '24ch' }}
          />

          {Object.entries(featureInventory).map(([key, blocks]) => (
            <div key={key} style={{ marginBottom: 72 }}>
              <p className="eyebrow eyebrow--accent" style={{ marginBottom: 24 }}>
                {key === 'insurance' ? 'Insurance pillars' : 'Banking pillars'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {blocks.map((b) => (
                  <div
                    key={`${key}-${b.n}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0,.62fr) minmax(0,1fr)',
                      gap: 40,
                      alignItems: 'start',
                    }}
                    data-stack="1"
                  >
                    <div>
                      <Reveal as="div" className="eyebrow">
                        {b.n}
                      </Reveal>
                      <h3
                        style={{
                          fontSize: 'clamp(22px, 2.3vw, 32px)',
                          letterSpacing: '-.03em',
                          fontWeight: 600,
                          margin: '12px 0 12px',
                        }}
                      >
                        {b.title}
                      </h3>
                      <Reveal
                        as="p"
                        delay={1}
                        style={{
                          margin: 0,
                          fontSize: 15.5,
                          lineHeight: 1.55,
                          color: 'var(--body)',
                          maxWidth: '44ch',
                        }}
                      >
                        {b.banner}
                      </Reveal>
                    </div>

                    <div
                      className="grid-hair"
                      style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      }}
                    >
                      {b.features.map((f, fi) => (
                        <Reveal
                          key={f.title}
                          delay={(fi % 4) + 1}
                          className="hair-cell lift"
                          style={{ gap: 8 }}
                        >
                          <h4 style={{ fontSize: 16.5 }}>{f.title}</h4>
                          <p style={{ fontSize: 13.5 }}>{f.body}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------- AI components strip */}
      <section className="section">
        <Reveal as="p" className="eyebrow">
          03 — {capabilitiesStrip.eyebrow}
        </Reveal>
        <SplitText
          as="h2"
          text={aiComponents.title}
          className="h2"
          style={{ margin: '22px 0 18px', maxWidth: '22ch' }}
        />
        <Reveal as="p" className="lede" style={{ marginBottom: 48 }}>
          {capabilitiesStrip.subtitle}
        </Reveal>

        <div
          className="grid-hair"
          style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}
          data-stack="1"
        >
          {aiComponents.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) + 1} className="hair-cell lift">
              <div className="tag">{`0${i + 1}`}</div>
              <h4 style={{ fontSize: 17 }}>{it.title}</h4>
              <p style={{ fontSize: 13.5 }}>{it.body}</p>
            </Reveal>
          ))}
        </div>

        <Magnetic
          as={Link}
          to={capabilitiesStrip.cta.to}
          className="link-arrow"
          style={{ marginTop: 32, display: 'inline-flex' }}
        >
          {capabilitiesStrip.cta.label} <span>→</span>
        </Magnetic>
      </section>

      <CtaBand
        //eyebrow="Accelerate Automation Platform"
        title={cta.title}
        body={cta.body}
        buttons={cta.buttons}
      />
    </>
  );
}
