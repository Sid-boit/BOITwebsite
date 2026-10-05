import React from 'react';

import { platforms, featureInventory, aiComponents } from '../data/products';
import PageHero from '../components/PageHero';
import ScrollDeck from '../components/ScrollDeck';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';

/* /product/insurance and /product/banking share this layout. */
export default function Platform({ slug }) {
  const platform = platforms[slug];
  const inventory = featureInventory[slug];

  const deckCards = platform.modules.map((m, i) => ({
    index: i + 1,
    tag: m.name,
    title: m.name.replace('Accelerate ', ''),
    body: m.solution,
    dark: i % 2 === 1,
    bullets: m.features.map((f) => f.title),
    to: `/product/${slug}#${m.id}`,
    linkLabel: 'See the module',
    facts: m.features.map((f) => ({ k: f.title, v: f.body })),
  }));

  return (
    <>
      <PageHero
        eyebrow={platform.eyebrow}
        title={platform.title}
        subtitle={platform.subtitle}
      />

      <ScrollDeck
        id={`${slug}-modules`}
        eyebrow="01 — Modules"
        title={`Three accelerators for ${slug}.`}
        allLink="/product/capabilities"
        allLabel="AI capabilities"
        cards={deckCards}
      />

      {/* ------------------------------------------------ module detail */}
      <section className="panel-light" style={{ marginTop: 128 }}>
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            02 — In detail
          </Reveal>
          <SplitText
            as="h2"
            text="What each accelerator ships with."
            className="h2"
            style={{ margin: '22px 0 64px', maxWidth: '22ch' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 88 }}>
            {platform.modules.map((m, i) => (
              <article key={m.id} id={m.id} style={{ scrollMarginTop: 110 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1fr)',
                    gap: 64,
                    alignItems: 'start',
                  }}
                  data-stack="1"
                >
                  <div style={{ position: 'sticky', top: 110 }}>
                    <Reveal as="div" className="eyebrow eyebrow--accent">
                      {`0${i + 1} — ${m.name}`}
                    </Reveal>
                    <SplitText
                      as="h3"
                      text={m.headline}
                      style={{
                        fontSize: 'clamp(26px, 3vw, 44px)',
                        letterSpacing: '-.035em',
                        fontWeight: 600,
                        lineHeight: 1.02,
                        margin: '18px 0 20px',
                      }}
                    />
                    <Reveal as="p" delay={2} className="lede" style={{ fontSize: 16.5 }}>
                      {m.solution}
                    </Reveal>
                  </div>

                  <div className="grid-hair" style={{ gridTemplateColumns: '1fr' }}>
                    {m.features.map((f, fi) => (
                      <Reveal key={f.title} delay={fi + 1} className="hair-cell lift">
                        <div className="tag">{`Feature 0${fi + 1}`}</div>
                        <h4>{f.title}</h4>
                        <p>{f.body}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- approved copy grid */}
      <section className="section">
        <Reveal as="p" className="eyebrow">
          03 — Feature inventory
        </Reveal>
        <SplitText
          as="h2"
          text={`The full ${platform.title.toLowerCase()} feature set.`}
          className="h2"
          style={{ margin: '22px 0 48px', maxWidth: '22ch' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {inventory.map((b) => (
            <div key={b.n}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14,
                  flexWrap: 'wrap',
                  marginBottom: 18,
                }}
              >
                <span className="eyebrow eyebrow--accent">{b.n}</span>
                <h3 style={{ margin: 0, fontSize: 24, letterSpacing: '-.03em' }}>
                  {b.title}
                </h3>
                <span style={{ fontSize: 14.5, color: 'var(--body-2)' }}>{b.tagline}</span>
              </div>

              <div
                className="grid-hair"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}
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
      </section>

      {/* --------------------------------------- shared AI capability row */}
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal as="p" className="eyebrow">
          04 — {aiComponents.eyebrow}
        </Reveal>
        <SplitText
          as="h2"
          text={aiComponents.title}
          className="h3"
          style={{ margin: '18px 0 40px', maxWidth: '22ch' }}
        />
        <div
          className="grid-hair"
          style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}
          data-stack="1"
        >
          {aiComponents.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) + 1} className="hair-cell">
              <div className="tag">{`0${i + 1}`}</div>
              <h4 style={{ fontSize: 16.5 }}>{it.title}</h4>
              <p style={{ fontSize: 13.5 }}>{it.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow={platform.eyebrow}
        title={platform.cta.title}
        body={platform.cta.body}
        buttons={platform.cta.buttons}
      />
    </>
  );
}
