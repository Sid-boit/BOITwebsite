import React, { useState } from 'react';

import { about } from '../data/site';
import PageHero from '../components/PageHero';
import Commitment from '../components/Commitment';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';

function LocationCard({ loc, active, onEnter }) {
  return (
    <div
      className="hair-cell lift"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      tabIndex={0}
      style={{
        gap: 10,
        outline: 'none',
        background: active ? 'rgba(18,223,182,.06)' : undefined,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 20 }} aria-hidden="true">
          {loc.flag}
        </span>
        <h4>{loc.city}</h4>
      </div>
      <p style={{ fontWeight: 500, color: 'var(--ink-2)' }}>{loc.company}</p>
      <p>{loc.address}</p>

      <dl
        style={{
          margin: '4px 0 0',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '6px 14px',
          fontSize: 13,
        }}
      >
        {loc.uen ? (
          <>
            <dt className="eyebrow">UEN</dt>
            <dd style={{ margin: 0, color: 'var(--body-2)' }}>{loc.uen}</dd>
          </>
        ) : null}
        {loc.phone ? (
          <>
            <dt className="eyebrow">Phone</dt>
            <dd style={{ margin: 0 }}>
              <a href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}>{loc.phone}</a>
            </dd>
          </>
        ) : null}
        {loc.email ? (
          <>
            <dt className="eyebrow">Email</dt>
            <dd style={{ margin: 0 }}>
              <a href={`mailto:${loc.email}`}>{loc.email}</a>
            </dd>
          </>
        ) : null}
        {loc.manager ? (
          <>
            <dt className="eyebrow">Manager</dt>
            <dd style={{ margin: 0, color: 'var(--body-2)' }}>{loc.manager}</dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}

export default function About() {
  const { hero, why, locations, leadership } = about;
  const [active, setActive] = useState(0);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      {/* ------------------------------------------------- why choose us */}
      <section className="panel-light">
        <div className="shell" style={{ padding: '112px 40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1fr)',
              gap: 72,
              alignItems: 'start',
            }}
            data-stack="1"
          >
            <div style={{ position: 'sticky', top: 110 }}>
              <Reveal as="p" className="eyebrow">
                01 — Why us
              </Reveal>
              <SplitText
                as="h2"
                text={why.title}
                className="h2"
                style={{ margin: '22px 0 26px' }}
              />
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                {why.certifications.map((c) => (
                  <Reveal
                    key={c.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      border: '1px solid var(--line)',
                      borderRadius: 14,
                      padding: '12px 16px',
                      background: 'var(--surface)',
                    }}
                  >
                    <img
                      src={c.src}
                      alt={`${c.name} Certified`}
                      style={{ height: 38, width: 'auto', objectFit: 'contain' }}
                    />
                    <span>
                      <strong style={{ display: 'block', fontSize: 14 }}>{c.name}</strong>
                      <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{c.label}</span>
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <div className="rowlist">
                {why.paragraphs.map((p, i) => (
                  <Reveal className="rowlist__row" key={p.slice(0, 24)} delay={i + 1}>
                    <div className="k">{`0${i + 1}`}</div>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>

              <div
                className="grid-hair"
                style={{
                  gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
                  marginTop: 32,
                }}
                data-stack="1"
              >
                {why.stats.map((s) => (
                  <div key={s.label} className="hair-cell" style={{ gap: 8 }}>
                    <div
                      data-count={s.count}
                      data-suffix={s.suffix}
                      style={{
                        fontSize: 'clamp(30px, 3.4vw, 48px)',
                        fontWeight: 600,
                        letterSpacing: '-.04em',
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {s.value ?? `${s.count}${s.suffix ?? ''}`}
                    </div>
                    <p style={{ fontSize: 14 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- locations */}
      <section id="locations" className="section">
        <Reveal as="p" className="eyebrow">
          02 — {locations.eyebrow}
        </Reveal>
        <SplitText
          as="h2"
          text={locations.title}
          className="h2"
          style={{ margin: '22px 0 12px' }}
        />
        <Reveal as="p" className="lede" style={{ marginBottom: 40 }}>
          {locations.helper}
        </Reveal>

        <Reveal
          style={{
            border: '1px solid var(--line)',
            borderRadius: 20,
            overflow: 'hidden',
            background: 'var(--surface)',
            marginBottom: 32,
            position: 'relative',
          }}
        >
          <img src={locations.map} alt={locations.mapAlt} style={{ width: '100%' }} />
          <div
            style={{
              position: 'absolute',
              left: 20,
              bottom: 20,
              background: 'rgba(246,248,247,.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <img
              src={locations.items[active].image}
              alt=""
              style={{ height: 28, width: 'auto', objectFit: 'contain' }}
            />
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>
              {locations.items[active].city}
            </span>
            <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
              {locations.items[active].company}
            </span>
          </div>
        </Reveal>

        <div
          className="grid-hair"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}
          data-stack="1"
        >
          {locations.items.map((loc, i) => (
            <LocationCard
              key={loc.city}
              loc={loc}
              active={i === active}
              onEnter={() => setActive(i)}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- leadership */}
      <section className="panel-light">
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            03 — Leadership
          </Reveal>
          <SplitText
            as="h2"
            text={leadership.title}
            className="h2"
            style={{ margin: '22px 0 56px' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {leadership.people.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 4) + 1}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px minmax(0,.7fr) minmax(0,1fr)',
                  gap: 32,
                  padding: '34px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom:
                    i === leadership.people.length - 1 ? '1px solid var(--line)' : undefined,
                  alignItems: 'start',
                }}
                data-stack="1"
              >
                <img
                  src={p.photo}
                  alt={p.name}
                  style={{
                    width: 140,
                    height: 140,
                    objectFit: 'cover',
                    borderRadius: 16,
                    border: '1px solid var(--line)',
                    background: 'var(--surface-alt)',
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 24,
                      letterSpacing: '-.03em',
                      fontWeight: 600,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p className="eyebrow eyebrow--accent" style={{ marginTop: 8 }}>
                    {p.role}
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--body)' }}>
                    {p.bio}
                  </p>
                  <p
                    style={{
                      margin: '14px 0 0',
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: 'var(--body-2)',
                      fontStyle: 'italic',
                    }}
                  >
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Commitment title="How we hold ourselves to account." />

      <CtaBand
        eyebrow="About Us"
        title="Let’s talk about your transformation."
        body="Share your goals and our team will get back within one business day."
        buttons={[
          { label: 'Demo', to: '/contact', primary: true },
          { label: 'Our services', to: '/services' },
        ]}
      />
    </>
  );
}
