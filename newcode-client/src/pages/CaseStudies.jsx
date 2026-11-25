import React, { useRef } from 'react';
import { caseStudies } from '../data/site';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './CaseStudies.css';

export default function CaseStudies() {
  const { hero, groups, disclaimer } = caseStudies;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page case-studies-page" ref={rootRef}>
      <PageHero
        wash
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section
        className="brand-section brand-wash"
        style={{ paddingTop: 48, paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}
      >
        {groups.map((g, gi) => (
          <div key={g.label} className="cs-group" style={{ marginBottom: 72 }}>
            <SplitText
              as="h2"
              text={g.label}
              className="h3"
              style={{
                fontSize: 'clamp(24px, 2.6vw, 36px)',
                margin: '0 0 28px',
              }}
            />

            <div className="cs-grid brand-card-grid brand-card-grid--2" data-stack="1">
              {g.items.map((c, i) => (
                <Reveal key={c.url} delay={(i % 4) + 1}>
                  <GlassPanel
                    accent
                    className={`cs-card cs-card--tone-${(gi + i) % 2 === 0 ? 'violet' : 'teal'}`}
                    style={{ minHeight: 240, padding: 28 }}
                  >
                    <div className="tag eyebrow eyebrow--accent">{c.source}</div>
                    <h4 style={{ fontSize: 20, lineHeight: 1.2, margin: '12px 0 10px' }}>{c.title}</h4>
                    <p style={{ margin: 0, flex: 1 }}>{c.body}</p>

                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                      {c.tags.map((t) => (
                        <span key={t} className="cs-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow"
                      style={{ marginTop: 18 }}
                    >
                      Read the case study <span>→</span>
                    </a>
                  </GlassPanel>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal>
          <GlassPanel className="cs-disclaimer" style={{ padding: '26px 28px' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>
              {disclaimer.title}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                lineHeight: 1.65,
                color: 'var(--body-2)',
              }}
            >
              {disclaimer.body}
            </p>
          </GlassPanel>
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Case Studies"
        title="Discuss your transformation."
        body="Tell us where the friction is and we will show you the fastest path to production."
        buttons={[{ label: hero.cta.label, to: hero.cta.to, primary: true }]}
      />
    </div>
  );
}
