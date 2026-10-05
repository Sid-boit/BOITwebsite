import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { serviceCategories, categoryChrome } from '../data/services';
import PageHero from '../components/PageHero';
import ScrollDeck from '../components/ScrollDeck';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';

export default function ServiceCategory() {
  const { slug } = useParams();
  const category = serviceCategories[slug];

  if (!category) return <Navigate to="/services" replace />;

  const deckCards = category.sections.map((s, i) => ({
    index: i + 1,
    tag: s.name,
    title: s.name.split(/[,(]/)[0].trim(),
    body: s.headline,
    dark: i % 2 === 1,
    bullets: s.capabilities.map((c) => c.title),
    to: `/services/${slug}#${s.id}`,
    linkLabel: 'Read the detail',
    facts: s.impact.map((im) => ({ k: im.title, v: im.body })),
  }));

  return (
    <>
      <PageHero
        eyebrow={category.pillar}
        title={category.label}
        subtitle={categoryChrome.subtitle(category.label)}
      />

      <ScrollDeck
        id={`${slug}-deck`}
        eyebrow="01 — Focus areas"
        title={`How we modernise ${category.label.toLowerCase()}.`}
        allLink="/contact"
        allLabel="Talk to our team"
        cards={deckCards}
      />

      {/* ------------------------------------------------- full sections */}
      <section className="panel-light" style={{ marginTop: 128 }}>
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            02 — In detail
          </Reveal>
          <SplitText
            as="h2"
            text="Challenge, solution, capability, impact."
            className="h2"
            style={{ margin: '22px 0 64px', maxWidth: '22ch' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
            {category.sections.map((s, i) => (
              <article key={s.id} id={s.id} style={{ scrollMarginTop: 110 }}>
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
                      {`0${i + 1} — ${s.name}`}
                    </Reveal>
                    <SplitText
                      as="h3"
                      text={s.headline}
                      style={{
                        fontSize: 'clamp(24px, 2.8vw, 40px)',
                        letterSpacing: '-.035em',
                        fontWeight: 600,
                        lineHeight: 1.04,
                        margin: '18px 0 22px',
                      }}
                    />
                    <div className="rowlist">
                      <Reveal className="rowlist__row" delay={1}>
                        <div className="k">Challenge</div>
                        <p>{s.challenge}</p>
                      </Reveal>
                      <Reveal className="rowlist__row" delay={2}>
                        <div className="k">Solution</div>
                        <p>{s.solution}</p>
                      </Reveal>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 14 }}>
                        Capabilities
                      </p>
                      <div className="grid-hair" style={{ gridTemplateColumns: '1fr' }}>
                        {s.capabilities.map((c, ci) => (
                          <Reveal key={c.title} delay={ci + 1} className="hair-cell lift">
                            <h4>{c.title}</h4>
                            <p>{c.body}</p>
                          </Reveal>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow" style={{ marginBottom: 14 }}>
                        Impact
                      </p>
                      <div
                        className="grid-hair"
                        style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}
                        data-stack="1"
                      >
                        {s.impact.map((im, ii) => (
                          <Reveal key={im.title} delay={ii + 1} className="hair-cell">
                            <div className="tag">Outcome</div>
                            <h4 style={{ fontSize: 16.5 }}>{im.title}</h4>
                            <p style={{ fontSize: 13.5 }}>{im.body}</p>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={category.pillar}
        title={categoryChrome.ctaTitle(category.label)}
        body={categoryChrome.ctaBody}
        buttons={categoryChrome.buttons}
      />
    </>
  );
}
