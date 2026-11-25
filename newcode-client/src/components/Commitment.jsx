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

        <div className="rowlist rowlist--side">
          {commitment.items.map((c, i) => (
            <Reveal className="rowlist__row rowlist__row--side" key={c.title} delay={i + 1}>
              <h4 className="rowlist__title">{c.title}</h4>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
