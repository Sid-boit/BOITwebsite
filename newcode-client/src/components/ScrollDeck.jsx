import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './motion/Magnetic';
import SplitText from './motion/SplitText';
import Reveal from './motion/Reveal';
import './ScrollDeck.css';

/*
  Scroll-driven horizontal card deck.

  The section is tall; a sticky viewport-height stage is pinned inside it. As the
  page scrolls the cards first sit side-by-side as small tabs, then blend into a
  single-file track that moves right-to-left — one card held at full size at a
  time. Ported from the Home design and generalised to any number of cards so the
  Services and Products pages can reuse it.
*/

const smoothstep = (v) => {
  const k = Math.max(0, Math.min(1, v));
  return k * k * (3 - 2 * k);
};

function CardFace({ card, n }) {
  const num = String(card.index ?? 0).padStart(2, '0');
  return (
    <div className="deck__grid" data-stack="1">
      <div className="deck__mini" data-mini="1">
        <span className="n">{num}</span>
        <span className="t">{card.title}</span>
        <span className="k">{card.tag}</span>
      </div>

      <div className="deck__body">
        <div className="deck__kicker">
          <span>{num}</span>
          <i />
          <span className="hl">{card.tag}</span>
        </div>
        <h3>{card.title}</h3>
        <p>{card.body}</p>

        {card.bullets?.length ? (
          <ul className="deck__list">
            {card.bullets.map((b) => (
              <li key={b}>
                <b />
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        {card.chips?.length ? (
          <div className="deck__chips">
            {card.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        ) : null}

        {card.to ? (
          <Magnetic as={Link} to={card.to} className="deck__cta">
            {card.linkLabel || `Explore ${card.title}`} →
          </Magnetic>
        ) : null}
      </div>

      <div className="deck__visual" data-hide-sm="1">
        <div className="frame">
          {card.facts?.length ? (
            <div className="deck__facts">
              {card.facts.map((f) => (
                <div key={f.k}>
                  <div className="fk">{f.k}</div>
                  <div className="fv">{f.v}</div>
                </div>
              ))}
            </div>
          ) : card.image ? (
            <img
              src={card.image}
              alt={card.imageAlt || card.title}
              style={{ maxHeight: '100%', objectFit: 'contain' }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textAlign: 'center',
              }}
            >
              {card.title}
              <br />
              {`0${card.index} / 0${n}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ScrollDeck({ id, eyebrow, title, allLink, allLabel, cards }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const backdropRef = useRef(null);
  const dotsRef = useRef(null);
  const labelRef = useRef(null);
  const [isStatic, setIsStatic] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );

  const n = cards.length;

  useEffect(() => {
    const mqNarrow = window.matchMedia('(max-width: 900px)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setIsStatic(mqNarrow.matches || mqMotion.matches);
    sync();
    mqNarrow.addEventListener('change', sync);
    mqMotion.addEventListener('change', sync);
    return () => {
      mqNarrow.removeEventListener('change', sync);
      mqMotion.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (isStatic) return undefined;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return undefined;

    const els = Array.from(stage.querySelectorAll('.deck__card'));
    if (!els.length) return undefined;
    const minis = els.map((el) => el.querySelector('[data-mini]'));

    // Collapsed tab size shrinks as the deck gets longer so the row still fits.
    const s0 = n <= 3 ? 0.28 : (0.28 * 3) / n;
    let W = 0;
    let vw = 0;
    let raf = 0;

    const measure = () => {
      W = els[0].offsetWidth || 1;
      vw = window.innerWidth;
      minis.forEach((m) => {
        if (m) m.style.setProperty('--mini-scale', (0.28 / s0 / 1.6).toFixed(3));
      });
    };
    measure();

    const update = () => {
      if (vw !== window.innerWidth) measure();

      const rect = section.getBoundingClientRect();
      const span = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / (span || 1)));

      const rowSpread = W * s0 + 26;
      const trackSpread = W * 1.16;
      const u = smoothstep((p - 0.06) / 0.16); // row → focused track
      const q = Math.max(0, Math.min(n - 1, ((p - 0.16) / 0.72) * (n - 1)));
      const qi = Math.min(Math.max(0, n - 2), Math.floor(q));
      // Hold each card at full size, then hand over to the next.
      const t = n > 1 ? qi + smoothstep((q - qi - 0.22) / 0.56) : 0;
      const front = Math.max(0, Math.min(n - 1, Math.round(t)));

      if (backdropRef.current) {
        backdropRef.current.style.opacity = (u * 0.94).toFixed(3);
      }

      els.forEach((el, i) => {
        const focus = smoothstep(1 - Math.abs(i - t));
        const rowX = (i - (n - 1) / 2) * rowSpread;
        const trackX = (i - t) * trackSpread;
        const x = rowX * (1 - u) + trackX * u;
        const sc = s0 * (1 - u) + (s0 + (1 - s0) * focus) * u;
        const rot = (i - t) * 1.4 * u;

        el.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(
          1
        )}px,0,0) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
        el.style.zIndex = String(20 + Math.round(focus * 10) - i);
        el.style.pointerEvents = focus > 0.85 ? 'auto' : 'none';

        const mini = minis[i];
        if (mini) {
          const shown = 1 - smoothstep(focus * u * 1.15);
          mini.style.opacity = shown.toFixed(2);
          mini.style.visibility = shown < 0.02 ? 'hidden' : 'visible';
        }

        const lift = Math.round(focus * u * 10) / 10;
        if (el._lift !== lift) {
          el._lift = lift;
          el.style.boxShadow = `0 ${(24 + lift * 44).toFixed(0)}px ${(
            60 +
            lift * 60
          ).toFixed(0)}px -${(40 - lift * 8).toFixed(0)}px rgba(12,21,18,${(
            0.3 +
            lift * 0.28
          ).toFixed(2)})`;
        }
      });

      if (dotsRef.current) {
        Array.from(dotsRef.current.children).forEach((d, i) => {
          d.style.background = i === front ? 'var(--bright)' : 'rgba(12,21,18,.14)';
          d.style.width = i === front ? '72px' : '46px';
        });
      }

      if (labelRef.current) {
        const txt = `0${front + 1} / 0${n} — ${cards[front].title}${
          p > 0.97 ? ' · complete' : ' · keep scrolling'
        }`;
        if (labelRef.current.textContent !== txt) labelRef.current.textContent = txt;
      }
    };

    // The deck is a pure function of scroll position, so there is no need for a
    // permanently running rAF loop — coalesce scroll events into one frame.
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    const onResize = () => {
      measure();
      update();
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [isStatic, n, cards]);

  /* ---- stacked fallback ---- */
  if (isStatic) {
    return (
      <section id={id} className="deck deck--static shell">
        <p className="eyebrow">{eyebrow}</p>
        <SplitText as="h2" text={title} className="h2" style={{ marginTop: 14 }} />
        <div className="deck__stack">
          {cards.map((card) => (
            <Reveal
              key={card.title}
              className={`deck__scard ${card.dark ? 'deck__scard--dark' : ''}`}
            >
              <div className="deck__kicker">
                <span>{String(card.index).padStart(2, '0')}</span>
                <i />
                <span className="hl">{card.tag}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 26, letterSpacing: '-.03em' }}>
                {card.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'inherit' }}>
                {card.body}
              </p>
              {card.bullets?.length ? (
                <ul className="deck__list">
                  {card.bullets.map((b) => (
                    <li key={b}>
                      <b />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
              {card.chips?.length ? (
                <div className="deck__chips">
                  {card.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              ) : null}
              {card.to ? (
                <Link to={card.to} className="deck__cta">
                  {card.linkLabel || `Explore ${card.title}`} →
                </Link>
              ) : null}
            </Reveal>
          ))}
          {allLink ? (
            <Link to={allLink} className="deck__all" style={{ alignSelf: 'start' }}>
              {allLabel} →
            </Link>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="deck"
      ref={sectionRef}
      style={{ height: `${100 + n * 120}vh` }}
    >
      <div className="deck__pin">
        <div className="deck__backdrop" ref={backdropRef} />
        <div className="deck__inner">
          <div className="deck__head">
            <div>
              <Reveal as="p" className="eyebrow">
                {eyebrow}
              </Reveal>
              <SplitText as="h2" text={title} />
            </div>
            {allLink ? (
              <Magnetic as={Link} to={allLink} className="deck__all">
                {allLabel} →
              </Magnetic>
            ) : null}
          </div>

          <div className="deck__meter">
            <div className="deck__dots" ref={dotsRef}>
              {cards.map((c) => (
                <span key={c.title} />
              ))}
            </div>
            <span className="deck__label" ref={labelRef}>
              {`01 / 0${n} — ${cards[0].title} · keep scrolling`}
            </span>
          </div>

          <div className="deck__stage" ref={stageRef}>
            {cards.map((card) => (
              <article
                key={card.title}
                className={`deck__card ${card.dark ? 'deck__card--dark' : ''}`}
              >
                <CardFace card={card} n={n} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
