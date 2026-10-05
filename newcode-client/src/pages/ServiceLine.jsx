import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { serviceLines } from '../data/services';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';
import heroImage from '../assets/pageimages/bankingFinance.png';

export default function ServiceLine({ slug }) {
  const line = serviceLines[slug];
  if (!line) return <Navigate to="/services" replace />;

  return (
    <>
      <section
        style={{
          position: 'relative',
          maxWidth: 'var(--shell)',
          margin: '0 auto',
          padding: '148px var(--gutter) 72px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.25fr)',
            gap: 40,
            alignItems: 'center',
          }}
          data-stack="1"
        >
          <div>
            <h1
              className="h1 fade-up"
              style={{ maxWidth: '16ch', fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              {line.title}
            </h1>

            <p
              className="fade-up"
              style={{
                margin: '22px 0 0',
                maxWidth: '42ch',
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                animationDelay: '.1s',
              }}
            >
              <span className="grad-text">{line.headline}</span>
            </p>

            <p className="lede fade-up" style={{ marginTop: 18, maxWidth: '42ch', animationDelay: '.18s' }}>
              {line.lede}
            </p>

            <div
              className="fade-up"
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32, animationDelay: '.28s' }}
            >
              <Magnetic as={Link} to="/contact" className="btn btn--primary">
                Demo
              </Magnetic>
              <Magnetic as={Link} to="/services" className="btn btn--ghost">
                All services <span>→</span>
              </Magnetic>
            </div>
          </div>

          <Reveal className="lam-hero-visual" style={{ justifySelf: 'stretch', width: '100%', maxWidth: 'none' }}>
            <img
              src={heroImage}
              alt={line.imageAlt}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                minHeight: 420,
                borderRadius: 28,
                objectFit: 'contain',
              }}
            />
          </Reveal>
        </div>
      </section>

      {line.sections?.map((section) => (
        <section className="panel-light" key={section.title}>
          <div className="shell" style={{ padding: '96px var(--gutter)' }}>
            <Reveal as="p" className="eyebrow">
              {section.eyebrow}
            </Reveal>
            <SplitText
              as="h2"
              text={section.title}
              className="h2"
              style={{ margin: '18px 0 48px', maxWidth: '18ch' }}
            />

            <div
              className="grid-hair"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
              data-stack="1"
            >
              {section.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 4) + 1} className="hair-cell lift">
                  <div className="tag">{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: 22, letterSpacing: '-.03em', margin: '10px 0 12px' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: 'var(--body-2)', fontSize: 15, lineHeight: 1.55 }}>{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {line.skillGroups ? (
        <section className="panel-light">
          <div className="shell" style={{ padding: '96px var(--gutter)' }}>
            <Reveal as="p" className="eyebrow">
              Skill sets
            </Reveal>
            <SplitText
              as="h2"
              text="Who we can place with you."
              className="h2"
              style={{ margin: '18px 0 48px', maxWidth: '16ch' }}
            />

            <div
              className="grid-hair"
              style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
              data-stack="1"
            >
              {line.skillGroups.map((group, i) => (
                <Reveal key={group.title} delay={(i % 4) + 1} className="hair-cell">
                  <h3 style={{ fontSize: 22, letterSpacing: '-.03em', margin: '0 0 14px' }}>{group.title}</h3>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          gap: 10,
                          alignItems: 'baseline',
                          fontSize: 15,
                          lineHeight: 1.45,
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
                        {item}
                      </li>
                    ))}
                  </ul>
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
    </>
  );
}
