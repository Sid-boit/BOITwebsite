import React from 'react';

import { caseStudies } from '../data/site';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';

export default function CaseStudies() {
  const { hero, groups, disclaimer } = caseStudies;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section" style={{ paddingTop: 40 }}>
        {groups.map((g, gi) => (
          <div key={g.label} style={{ marginBottom: 72 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 14,
                marginBottom: 28,
              }}
            >
              <span className="eyebrow eyebrow--accent">{`0${gi + 1}`}</span>
              <SplitText
                as="h2"
                text={g.label}
                className="h3"
                style={{ fontSize: 'clamp(24px, 2.6vw, 36px)' }}
              />
            </div>

            <div
              className="grid-hair"
              style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }}
              data-stack="1"
            >
              {g.items.map((c, i) => (
                <Reveal
                  key={c.url}
                  delay={(i % 4) + 1}
                  className="hair-cell lift"
                  style={{ minHeight: 240 }}
                >
                  <div className="tag">{c.source}</div>
                  <h4 style={{ fontSize: 20, lineHeight: 1.2 }}>{c.title}</h4>
                  <p>{c.body}</p>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: 10.5,
                          letterSpacing: '.08em',
                          textTransform: 'uppercase',
                          border: '1px solid var(--line)',
                          borderRadius: 999,
                          padding: '6px 11px',
                          color: 'var(--muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-arrow"
                    style={{ marginTop: 'auto' }}
                  >
                    Read the case study <span>→</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal
          style={{
            border: '1px solid var(--line)',
            borderRadius: 16,
            padding: '26px 28px',
            background: 'var(--surface)',
          }}
        >
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
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Case Studies"
        title="Discuss your transformation."
        body="Tell us where the friction is and we will show you the fastest path to production."
        buttons={[{ label: hero.cta.label, to: hero.cta.to, primary: true }]}
      />
    </>
  );
}
