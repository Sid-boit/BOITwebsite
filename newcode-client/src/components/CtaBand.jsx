import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './motion/Magnetic';
import Reveal from './motion/Reveal';
import './CtaBand.css';

/* Dark closing band used at the foot of the inner pages. */
export default function CtaBand({ eyebrow, title, body, buttons = [], points = [] }) {
  return (
    <section className="panel-dark cta-band">
      <div className="shell" style={{ padding: '104px 40px' }}>
        <div
          className="cta-band__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
            gap: 64,
            alignItems: 'end',
          }}
          data-stack="1"
        >
          <div>
            {eyebrow ? (
              <p className="eyebrow cta-band__eyebrow">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="cta-band__title">
              {String(title)
                .split('\n')
                .map((line) => (
                  <span key={line} className="cta-band__title-line">
                    {line}
                  </span>
                ))}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {body ? (
              <Reveal
                as="p"
                className="cta-band__body"
                style={{
                  margin: 0,
                  fontSize: 16.5,
                  lineHeight: 1.6,
                  color: 'var(--on-dark-3)',
                  maxWidth: '46ch',
                }}
              >
                {body}
              </Reveal>
            ) : null}

            {points.length ? (
              <div className="rowlist">
                {points.map((p) => (
                  <Reveal
                    key={p.title}
                    style={{
                      padding: '18px 0',
                      borderTop: '1px solid var(--line-dark)',
                    }}
                  >
                    <strong style={{ fontSize: 15.5, fontWeight: 600 }}>{p.title}</strong>
                    <p
                      style={{
                        margin: '6px 0 0',
                        fontSize: 14,
                        lineHeight: 1.55,
                        color: 'var(--on-dark-4)',
                      }}
                    >
                      {p.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            ) : null}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {buttons.map((b) => (
                <Magnetic
                  key={b.label}
                  as={Link}
                  to={b.to}
                  className={`btn ${b.primary ? 'btn--primary' : 'btn--ghost'}`}
                  style={
                    b.primary
                      ? undefined
                      : { borderColor: 'rgba(238,243,241,.28)', color: 'var(--on-dark)' }
                  }
                >
                  {b.label}
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
