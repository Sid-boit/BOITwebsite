import React from 'react';
import { Link } from 'react-router-dom';

import { servicesOverview, serviceCategories, serviceCategoryOrder } from '../data/services';
import PageHero from '../components/PageHero';
import ScrollDeck from '../components/ScrollDeck';
import Commitment from '../components/Commitment';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';

/* The four service groups become the horizontal deck; each card lists its
   sub-disciplines and carries the full column inventory in the side panel. */
const deckCards = servicesOverview.groups.map((g, i) => ({
  index: i + 1,
  tag: g.title,
  title: g.title.replace(' Solutions', '').replace(' & Consulting', ''),
  body: g.body,
  dark: i % 2 === 1,
  bullets: g.columns.map((c) => `${c.title} — ${c.items.slice(0, 3).join(', ')}`),
  to: `/services#${g.id}`,
  linkLabel: 'See the full breakdown',
  facts: g.columns.map((c) => ({ k: c.title, v: c.items.join(' · ') })),
}));

export default function Services() {
  const { hero, groups, sidebarCta, whyPartner } = servicesOverview;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Magnetic as={Link} to="/contact" className="btn btn--primary">
            {sidebarCta.cta.label} <span>→</span>
          </Magnetic>
          <Magnetic as={Link} to="/product" className="btn btn--ghost">
            Explore the platform
          </Magnetic>
        </div>
      </PageHero>

      <ScrollDeck
        id="service-groups"
        eyebrow="01 — What we deliver"
        title="Four ways we move your roadmap."
        allLink="/contact"
        allLabel="Request a demo"
        cards={deckCards}
      />

      {/* ------------------------------------------- full group inventory */}
      <section className="panel-light" style={{ marginTop: 128 }}>
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            02 — Service inventory
          </Reveal>
          <SplitText
            as="h2"
            text="Every discipline, spelled out."
            className="h2"
            style={{ margin: '22px 0 64px', maxWidth: '22ch' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
            {groups.map((g) => (
              <div key={g.id} id={g.id} style={{ scrollMarginTop: 110 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0,.7fr) minmax(0,1fr)',
                    gap: 48,
                    alignItems: 'start',
                  }}
                  data-stack="1"
                >
                  <div>
                    <Reveal as="div" className="eyebrow eyebrow--accent">
                      {g.n}
                    </Reveal>
                    <SplitText
                      as="h3"
                      text={g.title}
                      style={{
                        fontSize: 'clamp(24px, 2.6vw, 36px)',
                        letterSpacing: '-.03em',
                        fontWeight: 600,
                        lineHeight: 1.05,
                        margin: '14px 0 14px',
                      }}
                    />
                    <Reveal as="p" delay={2} className="lede" style={{ fontSize: 16 }}>
                      {g.body}
                    </Reveal>
                  </div>

                  <div
                    className="grid-hair"
                    style={{
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    }}
                  >
                    {g.columns.map((c, ci) => (
                      <Reveal key={c.title} delay={(ci % 4) + 1} className="hair-cell">
                        <h4>{c.title}</h4>
                        <ul
                          style={{
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 6,
                          }}
                        >
                          {c.items.map((i) => (
                            <li
                              key={i}
                              style={{
                                display: 'flex',
                                gap: 10,
                                alignItems: 'baseline',
                                fontSize: 14,
                                color: 'var(--body-2)',
                              }}
                            >
                              <b
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: '50%',
                                  background: 'var(--bright)',
                                  flex: 'none',
                                  transform: 'translateY(-3px)',
                                }}
                              />
                              {i}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ category routes */}
      <section className="section">
        <Reveal as="p" className="eyebrow">
          03 — Industry practices
        </Reveal>
        <SplitText
          as="h2"
          text="Deep benches for insurance and banking."
          className="h2"
          style={{ margin: '22px 0 48px', maxWidth: '22ch' }}
        />

        <div
          className="grid-hair"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}
          data-stack="1"
        >
          {serviceCategoryOrder.map((slug, i) => {
            const cat = serviceCategories[slug];
            return (
              <Reveal
                key={slug}
                delay={(i % 4) + 1}
                className="hair-cell lift"
                style={{ minHeight: 236 }}
              >
                <div className="tag">{cat.pillar}</div>
                <h4>{cat.label}</h4>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                  }}
                >
                  {cat.sections.map((s) => (
                    <li key={s.id} style={{ fontSize: 14, color: 'var(--body-2)' }}>
                      {s.name}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${slug}`}
                  className="link-arrow"
                  style={{ marginTop: 'auto' }}
                >
                  Explore {cat.label} <span>→</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Commitment eyebrow={whyPartner.eyebrow} title={whyPartner.title} />

      <CtaBand
        eyebrow="Next step"
        title={sidebarCta.title}
        body={sidebarCta.body}
        buttons={[
          { label: sidebarCta.cta.label, to: sidebarCta.cta.to, primary: true },
          { label: 'View case studies', to: '/case-studies' },
        ]}
      />
    </>
  );
}
