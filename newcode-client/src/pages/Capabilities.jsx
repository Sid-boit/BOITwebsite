import React from 'react';
import { Link } from 'react-router-dom';

import { capabilities } from '../data/products';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';

export default function Capabilities() {
  const { hero, sidebar, items } = capabilities;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,280px) minmax(0,1fr)',
            gap: 64,
            alignItems: 'start',
          }}
          data-stack="1"
        >
          {/* ---- sticky index + CTA ---- */}
          <aside style={{ position: 'sticky', top: 110 }}>
            <p className="eyebrow">Index</p>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                margin: '16px 0 32px',
              }}
            >
              {items.map((c, i) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="underline"
                  style={{ fontSize: 14, color: 'var(--body-2)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      color: 'var(--accent)',
                      marginRight: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {c.title.replace(/\s*\(.*\)$/, '')}
                </a>
              ))}
            </nav>

            <div
              style={{
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: 22,
                background: 'var(--surface)',
              }}
            >
              <h4 style={{ margin: 0, fontSize: 17, letterSpacing: '-.02em' }}>
                {sidebar.title}
              </h4>
              <p
                style={{
                  margin: '8px 0 16px',
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: 'var(--body-2)',
                }}
              >
                {sidebar.body}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {sidebar.links.map((l) => (
                  <Magnetic
                    key={l.label}
                    as={Link}
                    to={l.to}
                    className="btn btn--ghost"
                    style={{ padding: '10px 16px', fontSize: 13 }}
                  >
                    {l.label}
                  </Magnetic>
                ))}
              </div>
            </div>
          </aside>

          {/* ---- capability sections ---- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {items.map((c, i) => (
              <article key={c.id} id={c.id} style={{ scrollMarginTop: 110 }}>
                <Reveal as="div" className="eyebrow eyebrow--accent">
                  {String(i + 1).padStart(2, '0')}
                </Reveal>
                <SplitText
                  as="h2"
                  text={c.title}
                  style={{
                    fontSize: 'clamp(24px, 2.6vw, 38px)',
                    letterSpacing: '-.035em',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    margin: '14px 0 16px',
                  }}
                />
                <Reveal as="p" delay={2} className="lede" style={{ fontSize: 16.5 }}>
                  {c.body}
                </Reveal>

                <div
                  className="grid-hair"
                  style={{
                    gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
                    marginTop: 26,
                  }}
                  data-stack="1"
                >
                  {c.groups.map((g, gi) => (
                    <Reveal key={g.title} delay={gi + 1} className="hair-cell lift">
                      <h4>{g.title}</h4>
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
                        {g.items.map((it) => (
                          <li
                            key={it}
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
                            {it}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Intelligence Layer"
        title="Ready to put these to work?"
        body="Talk to our team about the capability mix that fits your line of business."
        buttons={[
          { label: 'Demo', to: '/contact', primary: true },
          { label: 'Explore the platform', to: '/product' },
        ]}
      />
    </>
  );
}
