import React, { useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { serviceCategories, categoryChrome } from '../data/services';
import PageHero from '../components/PageHero';
import ScrollDeck from '../components/ScrollDeck';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './ServiceCategory.css';

export default function ServiceCategory() {
  const { slug } = useParams();
  const category = serviceCategories[slug];
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

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
    <div className="brand-page service-category-page" ref={rootRef}>
      <PageHero
        wash
        eyebrow={category.pillar}
        title={category.label}
        subtitle={categoryChrome.subtitle(category.label)}
      />

      <ScrollDeck
        id={`${slug}-deck`}
        mode="hover"
        spotlight
        eyebrow="Focus areas"
        title={`How we modernise ${category.label.toLowerCase()}.`}
        allLink="/contact"
        allLabel="Talk to our team"
        cards={deckCards}
      />

      <section className="brand-section brand-wash" style={{ marginTop: 48 }}>
        <div className="shell" style={{ padding: '0 var(--gutter)' }}>
          <Reveal as="p" className="eyebrow">
            In detail
          </Reveal>
          <SplitText
            as="h2"
            text="Challenge, solution, capability, impact."
            className="h2"
            style={{ margin: '22px 0 64px', maxWidth: '22ch' }}
          />

          <div className="svc-detail-list">
            {category.sections.map((s, i) => (
              <article key={s.id} id={s.id} className="svc-detail">
                <div className="svc-detail__grid" data-stack="1">
                  <div className="svc-detail__sticky">
                    <Reveal as="div" className="eyebrow eyebrow--accent">
                      {s.name}
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
                    <div className="rowlist rowlist--side">
                      <Reveal className="rowlist__row rowlist__row--side" delay={1}>
                        <h4 className="rowlist__title">Challenge</h4>
                        <p>{s.challenge}</p>
                      </Reveal>
                      <Reveal className="rowlist__row rowlist__row--side" delay={2}>
                        <h4 className="rowlist__title">Solution</h4>
                        <p>{s.solution}</p>
                      </Reveal>
                    </div>
                  </div>

                  <div className="svc-detail__cards">
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 14 }}>
                        Capabilities
                      </p>
                      <div className="svc-cap-grid">
                        {s.capabilities.map((c, ci) => (
                          <Reveal key={c.title} delay={ci + 1}>
                            <GlassPanel
                              accent
                              className={`svc-card svc-card--tone-${
                                (i + ci) % 2 === 0 ? 'violet' : 'teal'
                              }`}
                            >
                              <h4>{c.title}</h4>
                              <p>{c.body}</p>
                            </GlassPanel>
                          </Reveal>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow" style={{ marginBottom: 14 }}>
                        Impact
                      </p>
                      <div className="svc-impact-grid" data-stack="1">
                        {s.impact.map((im, ii) => (
                          <Reveal key={im.title} delay={ii + 1}>
                            <GlassPanel
                              accent
                              className={`svc-card svc-card--tone-${
                                ii % 2 === 0 ? 'teal' : 'violet'
                              }`}
                            >
                              <div className="tag eyebrow eyebrow--accent">Outcome</div>
                              <h4>{im.title}</h4>
                              <p>{im.body}</p>
                            </GlassPanel>
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
    </div>
  );
}
