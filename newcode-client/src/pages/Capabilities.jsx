import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { capabilities as insuranceCapabilities } from '../data/products';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './Capabilities.css';

export default function Capabilities({ data = insuranceCapabilities }) {
  const { hero, sidebar, items } = data;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page capabilities-page" ref={rootRef}>
      <section className="page-hero page-hero--wash cap-hero">
        <div className="page-hero__wash" aria-hidden="true" />
        <div className="cap-hero__inner" data-stack="1">
          <div>
            {hero.eyebrow ? (
              <Reveal as="p" className="eyebrow">
                {hero.eyebrow}
              </Reveal>
            ) : null}
            <h1
              className="h1 fade-up"
              style={{ maxWidth: '14ch', fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              {hero.title}
            </h1>
            {hero.subtitle ? (
              <p
                className="lede fade-up"
                style={{ marginTop: 18, maxWidth: '42ch', animationDelay: '.18s' }}
              >
                {hero.subtitle}
              </p>
            ) : null}
          </div>

          {hero.cover ? (
            <Reveal className="cap-hero__visual">
              <img src={hero.cover} alt={hero.coverAlt || ''} />
            </Reveal>
          ) : null}
        </div>
      </section>

      <section
        className="brand-section brand-wash"
        style={{ paddingTop: 40, paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}
      >
        <div className="cap-layout" data-stack="1">
          <aside className="cap-aside">
            <p className="eyebrow">Index</p>
            <nav className="cap-index">
              {items.map((c) => (
                <a key={c.id} href={`#${c.id}`} className="cap-index__link">
                  {c.title.replace(/\s*\(.*\)$/, '')}
                </a>
              ))}
            </nav>

            <GlassPanel accent className="cap-sidebar-card">
              <h4>{sidebar.title}</h4>
              <p>{sidebar.body}</p>
              <div className="cap-sidebar-actions">
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
            </GlassPanel>
          </aside>

          <div className="cap-sections">
            {items.map((c, i) => (
              <article key={c.id} id={c.id} className="cap-section">
                <SplitText
                  as="h2"
                  text={c.title}
                  className="h3"
                  style={{
                    fontSize: 'clamp(24px, 2.6vw, 38px)',
                    letterSpacing: '-.035em',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    margin: '0 0 16px',
                  }}
                />
                <Reveal as="p" delay={1} className="lede" style={{ fontSize: 16.5 }}>
                  {c.body}
                </Reveal>

                <div className="cap-groups brand-card-grid brand-card-grid--2">
                  {c.groups.map((g, gi) => (
                    <Reveal key={g.title} delay={gi + 1}>
                      <GlassPanel
                        accent
                        className={`cap-group-card cap-group-card--tone-${
                          (i + gi) % 2 === 0 ? 'violet' : 'teal'
                        }`}
                      >
                        <h4>{g.title}</h4>
                        <ul>
                          {g.items.map((it) => (
                            <li key={it}>
                              <b />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </GlassPanel>
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
          {
            label: 'Explore the platform',
            to: data === insuranceCapabilities ? '/platform/insurance' : '/platform/banking',
          },
        ]}
      />
    </div>
  );
}
