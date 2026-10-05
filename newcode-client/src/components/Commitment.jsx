import React from 'react';
import { commitment } from '../data/site';
import Reveal from './motion/Reveal';
import SplitText from './motion/SplitText';

/* "Our Commitment" — the same four pledges appear on Home, About and Services. */
export default function Commitment({ title, eyebrow = commitment.eyebrow }) {
  return (
    <section className="section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,.78fr) minmax(0,1fr)',
          gap: 72,
        }}
        data-stack="1"
      >
        <div>
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
          {title ? (
            <SplitText as="h2" text={title} className="h2" style={{ marginTop: 22 }} />
          ) : null}
        </div>

        <div className="rowlist">
          {commitment.items.map((c, i) => (
            <Reveal className="rowlist__row" key={c.title} delay={i + 1}>
              <div className="k">{`0${i + 1}`}</div>
              <div>
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-.02em',
                  }}
                >
                  {c.title}
                </h4>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
