import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { productHub, platforms, capabilities, aiComponents, featureInventory } from '../data/products';
import PageHero from '../components/PageHero';
import ProductAtomHero from '../components/ProductAtomHero';
import ScrollDeck from '../components/ScrollDeck';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import insuranceVisual from '../assets/insurance.png';
import bankingVisual from '../assets/02-banking.png';
import aiCapabilitiesVisual from '../assets/03-ai-capabilities.png';
import '../styles/brand-surfaces.css';
import './Product.css';

/* Merge insurance + banking inventory blocks that share an accelerator role. */
const inventoryGroupKey = (title) => {
  const t = title.toLowerCase();
  if (t.includes('engagement')) return 'engagement';
  if (t.includes('operation')) return 'operations';
  if (t.includes('distribution') || t.includes('channel')) return 'distribution';
  return title;
};

const inventoryGroupTitle = {
  engagement: 'Accelerate Engagement',
  operations: 'Accelerate Operations',
  distribution: 'Accelerate Distribution',
};

const combinedInventory = (() => {
  const order = [];
  const byKey = new Map();

  for (const [pillar, blocks] of Object.entries(featureInventory)) {
    for (const block of blocks) {
      const key = inventoryGroupKey(block.title);
      if (!byKey.has(key)) {
        byKey.set(key, {
          title: inventoryGroupTitle[key] || block.title,
          banner: block.banner,
          pillars: [],
        });
        order.push(key);
      }
      const entry = byKey.get(key);
      entry.pillars.push({
        key: pillar,
        label: pillar === 'insurance' ? 'Insurance' : 'Banking',
        features: block.features,
      });
      if (pillar === 'insurance') entry.banner = block.banner;
    }
  }

  return order.map((key) => byKey.get(key));
})();

/* Hub deck: the two platform pillars plus the shared intelligence layer. */
const deckCards = [
  {
    index: 1,
    tag: '',
    title: 'Insurance',
    body: platforms.insurance.subtitle,
    bullets: featureInventory.insurance.map((f) =>
      f.tagline?.trim() ? `${f.title} — ${f.tagline.replace(/\.$/, '')}.` : f.title,
    ),
    to: '/platform/insurance',
    linkLabel: productHub.pillars[0].linkLabel,
    image: insuranceVisual,
    imageAlt: 'Connected insurance engagement, operations, and distribution workflows',
  },
  {
    index: 2,
    tag: '',
    title: 'Banking',
    dark: true,
    body: platforms.banking.subtitle,
    bullets: featureInventory.banking.map((f) =>
      f.tagline?.trim() ? `${f.title} — ${f.tagline.replace(/\.$/, '')}.` : f.title,
    ),
    to: '/platform/banking',
    linkLabel: productHub.pillars[1].linkLabel,
    image: bankingVisual,
    imageAlt: 'Intelligent banking channels, operations, and customer engagement',
  },
  {
    index: 3,
    tag: '',
    title: 'AI Capabilities',
    body: productHub.capabilitiesStrip.subtitle,
    chips: capabilities.items.map((c) => c.title.replace(/\s*\(.*\)$/, '')),
    to: '/product/capabilities',
    linkLabel: productHub.capabilitiesStrip.cta.label,
    image: aiCapabilitiesVisual,
    imageAlt: 'Unified AI capabilities powering insurance and banking modules',
  },
];

export default function Product() {
  const { hero, pillars, capabilitiesStrip, cta } = productHub;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page product-page" ref={rootRef}>
      <ProductAtomHero />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        style={{
          maxWidth: 'var(--shell)',
          margin: '0 auto',
          padding: '56px var(--gutter) 28px',
        }}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {pillars.map((p) => (
            <Magnetic key={p.key} as={Link} to={p.to} className="btn btn--primary">
              {p.linkLabel}
            </Magnetic>
          ))}
        </div>
      </PageHero>

      <ScrollDeck
        id="pillars"
        mode="hover"
        spotlight
        title=""
        allLink="/product/capabilities"
        allLabel="View all capabilities"
        cards={deckCards}
      />

      {/* ---------------------------------------- feature inventory */}
      <section className="brand-band">
        <div className="shell brand-section">
          <SplitText
            as="h2"
            text="Engagement, operations, distribution — end to end."
            style={{ margin: '0 0 48px', maxWidth: '24ch' }}
          />

          {combinedInventory.map((block) => (
            <article key={block.title} className="product-detail">
              <div className="product-detail-grid">
                <div className="product-detail-sticky">
                  <h3>{block.title}</h3>
                  <Reveal as="p" delay={1}>
                    {block.banner}
                  </Reveal>
                </div>

                <div className="product-feature-list">
                  {block.pillars.map((pillar) => (
                    <div key={pillar.key} className="product-feature-pillar">
                      <p className="product-feature-pillar__label">{pillar.label}</p>
                      {pillar.features.map((f, fi) => (
                        <Reveal key={`${pillar.key}-${f.title}`} delay={fi + 1}>
                          <GlassPanel accent className="product-feature-card">
                            <h4>{f.title}</h4>
                            <p>{f.body}</p>
                          </GlassPanel>
                        </Reveal>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------- AI components strip */}
      <section className="shell brand-section product-section">
        <SplitText
          as="h2"
          text={aiComponents.title}
          style={{ margin: '0 0 18px', maxWidth: '22ch' }}
        />
        <Reveal as="p" className="lede" style={{ marginBottom: 8 }}>
          {capabilitiesStrip.subtitle}
        </Reveal>

        <div className="brand-card-grid brand-card-grid--4">
          {aiComponents.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) + 1}>
              <GlassPanel accent className="product-ai-card">
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        <Magnetic
          as={Link}
          to={capabilitiesStrip.cta.to}
          className="link-arrow"
          style={{ marginTop: 32, display: 'inline-flex' }}
        >
          {capabilitiesStrip.cta.label}
        </Magnetic>
      </section>

      <CtaBand
        title={cta.title}
        body={cta.body}
        buttons={cta.buttons}
      />
    </div>
  );
}
