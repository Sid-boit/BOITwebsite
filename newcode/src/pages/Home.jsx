import React from 'react';
import { Link } from 'react-router-dom';

import { home } from '../data/site';
import { platforms, capabilities } from '../data/products';
import Marquee from '../components/Marquee';
import ScrollDeck from '../components/ScrollDeck';
import Commitment from '../components/Commitment';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import Magnetic from '../components/motion/Magnetic';

/* The three platform pillars presented as the scroll-driven deck. */
const deckCards = [
  {
    index: 1,
    tag: 'Insurance Platform',
    title: 'Insurance',
    body: platforms.insurance.subtitle,
    bullets: platforms.insurance.modules.map((m) => `${m.name} — ${m.headline}`),
    to: '/product/insurance',
    linkLabel: 'Explore Insurance',
    facts: platforms.insurance.modules.map((m) => ({
      k: m.name,
      v: m.features.map((f) => f.title).join(' · '),
    })),
  },
  {
    index: 2,
    tag: 'Banking Platform',
    title: 'Banking',
    dark: true,
    body: platforms.banking.subtitle,
    bullets: platforms.banking.modules.map((m) => `${m.name} — ${m.headline}`),
    to: '/product/banking',
    linkLabel: 'Explore Banking',
    facts: platforms.banking.modules.map((m) => ({
      k: m.name,
      v: m.features.map((f) => f.title).join(' · '),
    })),
  },
  {
    index: 3,
    tag: 'Intelligence Layer',
    title: 'AI Capabilities',
    body: capabilities.hero.subtitle,
    chips: capabilities.items.map((c) => c.title.replace(/\s*\(.*\)$/, '')),
    to: '/product/capabilities',
    linkLabel: 'View all capabilities',
  },
];

export default function Home() {
  const { hero, clients, statsBar, roadmap, industries, testimonials, partners } = home;

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section
        style={{
          position: 'relative',
          padding: '172px var(--gutter) 96px',
          maxWidth: 'var(--shell)',
          margin: '0 auto',
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-watermark" aria-hidden="true">
          <div className="hero-watermark__viewport">
            <div className="hero-watermark__track">
              {[
                'Smarter',
                'Adaptive',
                'Modular',
                'Scalable',
                'Agile',
                'Intelligent',
                'Smarter',
                'Adaptive',
                'Modular',
                'Scalable',
                'Agile',
                'Intelligent',
              ].map((w, i) => (
                <span key={`${w}-${i}`}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow eyebrow--dot fade-up">
            <i />
            {hero.eyebrow}
          </p>

          <h1 className="h1 h1--hero">
            {hero.titleLines.map((line, i) => (
              <span className="rise" key={i}>
                <span style={{ animationDelay: `${0.05 + i * 0.11}s` }}>
                  {line.parts.map((part, j) => {
                    const cls = [
                      part.accent ? 'grad-text' : '',
                      part.small ? 'h1__soft' : '',
                    ]
                      .filter(Boolean)
                      .join(' ');
                    return cls ? (
                      <span className={cls} key={j}>
                        {part.text}
                      </span>
                    ) : (
                      <React.Fragment key={j}>{part.text}</React.Fragment>
                    );
                  })}
                </span>
              </span>
            ))}
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,460px)',
              gap: 48,
              alignItems: 'end',
              marginTop: 52,
            }}
            data-stack="1"
          >
            <p className="lede fade-up" style={{ maxWidth: '46ch', animationDelay: '.45s' }}>
              {hero.subtitle}
            </p>

            <div
              className="fade-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                animationDelay: '.58s',
              }}
            >
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Magnetic as={Link} to={hero.primary.to} className="btn btn--primary">
                  {hero.primary.label} <span>→</span>
                </Magnetic>
                <Magnetic as={Link} to={hero.secondary.to} className="btn btn--ghost">
                  {hero.secondary.label}
                </Magnetic>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 4,
                  borderTop: '1px solid rgba(12,21,18,.1)',
                  paddingTop: 18,
                }}
              >
                {hero.stats.map((s) => (
                  <div key={s.value}>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: '-.03em',
                      }}
                    >
                      {s.value}
                    </div>
                    <div className="eyebrow" style={{ marginTop: 4, fontSize: 9.5 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p
            className="eyebrow fade-up"
            style={{ marginTop: 56, animationDelay: '.8s' }}
            aria-hidden="true"
          >
            ↓ {hero.scrollCue}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- clients */}
      <section className="panel-light" style={{ padding: '26px 0 56px' }}>
        <div
          className="shell"
          style={{
            paddingBottom: 22,
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <span className="eyebrow">{clients.eyebrow}</span>
          <strong style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-.02em' }}>
            {clients.title}
          </strong>
        </div>
        <Marquee items={clients.names} />
      </section>

      {/* --------------------------------------------------- stats strip */}
      <section className="section section--tight">
        <div
          className="grid-hair"
          style={{ gridTemplateColumns: 'repeat(5, minmax(0,1fr))' }}
          data-stack="1"
        >
          {statsBar.map((s) => (
            <div key={s.label} className="hair-cell lift" style={{ gap: 8 }}>
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
      </section>

      {/* ---------------------------------------------------- industries */}
      <section id="industries" className="section" style={{ paddingTop: 48 }}>
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
              01 — {industries.eyebrow}
            </Reveal>
            <SplitText
              as="h2"
              text={industries.title}
              className="h2"
              style={{ marginTop: 22 }}
            />
          </div>

          <div className="rowlist">
            {industries.items.map((it, i) => (
              <Reveal className="rowlist__row" key={it.title} delay={(i % 4) + 1}>
                <div className="k">{it.title.split(' ')[0]}</div>
                <div>
                  <h4
                    style={{
                      margin: '0 0 6px',
                      fontSize: 19,
                      fontWeight: 600,
                      letterSpacing: '-.02em',
                    }}
                  >
                    {it.title}
                  </h4>
                  <p>{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------- scroll-driven deck */}
      <ScrollDeck
        id="platform-pillars"
        eyebrow="02 — Platform pillars"
        title="One platform. Every touchpoint."
        allLink="/product"
        allLabel="All product detail"
        cards={deckCards}
      />

      {/* ------------------------------------------------------- roadmap */}
      <section id="roadmap" className="panel-light" style={{ marginTop: 128 }}>
        <div className="shell" style={{ padding: '112px 40px' }}>
          <Reveal as="p" className="eyebrow">
            03 — {roadmap.eyebrow}
          </Reveal>
          <SplitText
            as="h2"
            text={roadmap.title}
            className="h2"
            style={{ margin: '22px 0 18px', maxWidth: '24ch' }}
          />
          <Reveal as="p" className="lede" style={{ marginBottom: 64 }}>
            {roadmap.intro}
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
              gap: 28,
            }}
            data-stack="1"
          >
            {roadmap.steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i + 1}
                style={{
                  borderTop: `2px solid ${i === 0 ? 'var(--ink)' : 'rgba(12,21,18,.15)'}`,
                  paddingTop: 22,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '.18em',
                    color: 'var(--accent)',
                  }}
                >
                  STEP {s.n}
                </div>
                <h4
                  style={{
                    margin: '12px 0 10px',
                    fontSize: 21,
                    fontWeight: 600,
                    letterSpacing: '-.02em',
                  }}
                >
                  {s.title}
                </h4>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--body-2)' }}>
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- testimonials */}
      <section id="proof" className="section">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
            gap: 72,
            alignItems: 'start',
          }}
          data-stack="1"
        >
          <div>
            <Reveal as="p" className="eyebrow">
              04 — {testimonials.supporting}
            </Reveal>
            <SplitText
              as="h2"
              text={testimonials.title}
              className="h3"
              style={{ margin: '22px 0 26px' }}
            />
            <Reveal
              as="blockquote"
              delay={2}
              style={{
                margin: 0,
                borderLeft: '2px solid var(--bright)',
                padding: '4px 0 4px 22px',
                fontSize: 19,
                lineHeight: 1.5,
                letterSpacing: '-.01em',
              }}
            >
              “{home.featuredTestimonial.quote}”
              <footer className="eyebrow" style={{ marginTop: 14 }}>
                {home.featuredTestimonial.author} · {home.featuredTestimonial.role}
              </footer>
            </Reveal>

            <Reveal delay={3} style={{ marginTop: 44 }}>
              <p className="eyebrow">{partners.eyebrow}</p>
              <h4
                style={{
                  margin: '10px 0 16px',
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: '-.02em',
                }}
              >
                {partners.title}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {partners.names.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      border: '1px solid var(--line)',
                      borderRadius: 999,
                      padding: '9px 16px',
                      color: 'var(--ink-2)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid-hair" style={{ gridTemplateColumns: '1fr' }}>
            {testimonials.items.map((t, i) => (
              <Reveal key={t.name} delay={i + 1} className="hair-cell lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'rgba(18,223,182,.16)',
                      color: 'var(--accent)',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      letterSpacing: '.06em',
                    }}
                  >
                    {t.initials}
                  </span>
                  <h4>{t.name}</h4>
                </div>
                <p>{t.quote}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Commitment title="Built on four commitments." />

      <CtaBand
        eyebrow="Get started"
        title={home.cta.title}
        body={home.cta.subtitle}
        points={home.cta.points}
        buttons={[{ ...home.cta.button, primary: true }]}
      />
    </>
  );
}
