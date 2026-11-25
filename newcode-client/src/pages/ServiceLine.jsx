import React, { useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { serviceLines } from '../data/services';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import { serviceLineHeroes } from '../data/submenuHeroes';
import '../styles/brand-surfaces.css';
import './ServiceLine.css';

export default function ServiceLine({ slug }) {
  const line = serviceLines[slug];
  const heroImage = serviceLineHeroes[slug];
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  if (!line) return <Navigate to="/services" replace />;

  return (
    <div className="brand-page service-line-page" ref={rootRef}>
      <section className="page-hero page-hero--wash service-line-page__hero">
        <div className="page-hero__wash" aria-hidden="true" />
        <div className="service-line-page__hero-inner" data-stack="1">
          <div>
            <h1
              className="h1 fade-up"
              style={{ maxWidth: '16ch', fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              {line.title}
            </h1>

            <p
              className="fade-up page-tagline"
              style={{
                margin: '22px 0 0',
                maxWidth: '42ch',
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                animationDelay: '.1s',
              }}
            >
              <span className="grad-text">{line.headline}</span>
            </p>

            <p
              className="lede fade-up"
              style={{ marginTop: 18, maxWidth: '42ch', animationDelay: '.18s' }}
            >
              {line.lede}
            </p>

            <div
              className="fade-up"
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                marginTop: 32,
                animationDelay: '.28s',
              }}
            >
              <Magnetic as={Link} to="/contact" className="btn btn--primary">
                Demo
              </Magnetic>
              <Magnetic as={Link} to="/services" className="btn btn--ghost">
                All services
              </Magnetic>
            </div>
          </div>

          <Reveal className="lam-hero-visual service-line-page__visual">
            <img src={heroImage} alt={line.imageAlt} />
          </Reveal>
        </div>
      </section>

      {line.sections?.map((section) => (
        <section className="brand-section brand-wash" key={section.title}>
          <div className="shell" style={{ padding: '0 var(--gutter)' }}>
            <Reveal as="p" className="eyebrow">
              {section.eyebrow}
            </Reveal>
            <SplitText
              as="h2"
              text={section.title}
              className="h2"
              style={{ margin: '18px 0 48px', maxWidth: '18ch' }}
            />

            <div className="service-line-page__grid brand-card-grid" data-stack="1">
              {section.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 4) + 1}>
                  <GlassPanel
                    accent
                    className={`service-line-page__card service-line-page__card--tone-${
                      i % 2 === 0 ? 'violet' : 'teal'
                    }`}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </GlassPanel>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {line.skillGroups ? (
        <section className="brand-section brand-band">
          <div className="shell" style={{ padding: '0 var(--gutter)' }}>
            <Reveal as="p" className="eyebrow">
              Skill sets
            </Reveal>
            <SplitText
              as="h2"
              text="Who we can place with you."
              className="h2"
              style={{ margin: '18px 0 48px', maxWidth: '16ch' }}
            />

            <div className="service-line-page__skills brand-card-grid brand-card-grid--3" data-stack="1">
              {line.skillGroups.map((group, i) => (
                <Reveal key={group.title} delay={(i % 4) + 1}>
                  <GlassPanel
                    accent
                    className={`service-line-page__card service-line-page__card--tone-${
                      i % 2 === 0 ? 'teal' : 'violet'
                    }`}
                  >
                    <h3>{group.title}</h3>
                    <ul className="service-line-page__list">
                      {group.items.map((item) => (
                        <li key={item}>
                          <b />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassPanel>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        eyebrow="Services"
        title="Ready to get started?"
        body="Tell us which service line you need and we will shape the engagement around it."
        buttons={[
          { label: 'Demo', to: '/contact', primary: true },
          { label: 'All services', to: '/services' },
        ]}
      />
    </div>
  );
}
