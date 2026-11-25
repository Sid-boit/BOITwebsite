import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Magnetic from './motion/Magnetic';
import SplitText from './motion/SplitText';
import Reveal from './motion/Reveal';
import './ScrollDeck.css';

/*
  Scroll-driven horizontal card deck (mode="scroll", default).

  The section is tall; a sticky viewport-height stage is pinned inside it. As the
  page scrolls the cards first sit side-by-side as small tabs, then blend into a
  single-file track that moves right-to-left — one card held at full size at a
  time.

  Hover deck (mode="hover"): all cards sit in a compact row; hover expands one
  with left copy + preview image. Scroll engine is kept but not run in this mode.

  spotlight: with mode="hover", opens a centered ~60vw overlay card and blurs
  the rest of the page (Product page trial).
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
          <Magnetic as={Link} to={card.to} className="btn btn--primary deck__cta">
            {card.linkLabel || `Explore ${card.title}`}
          </Magnetic>
        ) : null}
      </div>

      <div className="deck__visual" data-hide-sm="1">
        <div className={`frame${card.image ? ' frame--image' : ''}`}>
          {card.image ? (
            <img
              className="deck__image"
              src={card.image}
              alt={card.imageAlt || card.title}
              loading="lazy"
            />
          ) : card.facts?.length ? (
            <div className="deck__facts">
              {card.facts.map((f) => (
                <div key={f.k}>
                  <div className="fk">{f.k}</div>
                  <div className="fv">{f.v}</div>
                </div>
              ))}
            </div>
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

function ExpandedCardBody({ card }) {
  return (
    <>
      <div className="deck-hover__expanded-body">
        <div className="deck-hover__expanded-scroll">
          {card.tag ? <span className="deck-hover__tag">{card.tag}</span> : null}
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
        </div>
        {card.to ? (
          <Magnetic as={Link} to={card.to} className="btn btn--primary deck__cta">
            {card.linkLabel || `Explore ${card.title}`}
          </Magnetic>
        ) : null}
      </div>
      {card.image ? (
        <div className="deck-hover__expanded-visual">
          <img src={card.image} alt={card.imageAlt || card.title} loading="lazy" />
        </div>
      ) : null}
    </>
  );
}

function HoverCard({ card, active, dimmed, spotlight, onEnter, onLeave, onFocusOpen, onClickOpen }) {
  return (
    <article
      className={`deck-hover__card${card.dark ? ' deck-hover__card--dark' : ''}${
        active ? ' is-active' : ''
      }${dimmed ? ' is-dimmed' : ''}${spotlight ? ' deck-hover__card--spotlight' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onFocusOpen || onEnter}
      onBlur={onLeave}
      onClick={(e) => {
        if (e.target.closest('a, button')) return;
        onClickOpen?.();
      }}
    >
      <div className="deck-hover__compact">
        <div className="deck-hover__copy">
          {card.tag ? <span className="deck-hover__tag">{card.tag}</span> : null}
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
        {card.image ? (
          <div className="deck-hover__thumb">
            <img src={card.image} alt="" loading="lazy" />
          </div>
        ) : null}
      </div>

      {!spotlight ? (
        <div className="deck-hover__expanded">
          <ExpandedCardBody card={card} />
        </div>
      ) : null}
    </article>
  );
}

function SpotlightOverlay({ card, onEnter, onLeave, onClose, onNavigate }) {
  // Only dismiss on panel-leave after the pointer has actually entered the panel.
  // Opening the overlay steals hover from the source card — that must not close us.
  const enteredPanel = useRef(false);

  useEffect(() => {
    enteredPanel.current = false;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, card.title]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="deck-spotlight" role="dialog" aria-modal="true" aria-label={card.title}>
      <div
        className="deck-spotlight__backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <article
        className={`deck-spotlight__panel${card.dark ? ' deck-spotlight__panel--dark' : ''}`}
        onMouseEnter={() => {
          enteredPanel.current = true;
          onEnter();
        }}
        onMouseLeave={() => {
          if (!enteredPanel.current) return;
          onLeave();
        }}
        // Following a link (e.g. "See the module" → #section) should reveal the page.
        onClick={(e) => {
          if (e.target.closest('a')) onNavigate();
        }}
      >
        <ExpandedCardBody card={card} />
      </article>
    </div>,
    document.body,
  );
}

/* Delay before hover expands a card — stops scroll-past from opening them. */
const HOVER_OPEN_MS = 700;

function HoverDeck({ id, eyebrow, title, allLink, allLabel, cards, spotlight = false }) {
  const [active, setActive] = useState(null);
  const closeTimer = useRef(null);
  const openTimer = useRef(null);
  // After a link in the spotlight is followed, the card under the pointer would
  // reopen it straight away while the page scrolls — hold hover off briefly.
  const holdUntil = useRef(0);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const clearOpen = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
  };

  const openCardNow = (i) => {
    if (Date.now() < holdUntil.current) return;
    clearClose();
    clearOpen();
    setActive(i);
  };

  const scheduleOpen = (i) => {
    if (Date.now() < holdUntil.current) return;
    clearClose();
    if (active === i) {
      clearOpen();
      return;
    }
    clearOpen();
    openTimer.current = setTimeout(() => {
      openTimer.current = null;
      if (Date.now() < holdUntil.current) return;
      setActive(i);
    }, HOVER_OPEN_MS);
  };

  const scheduleClose = () => {
    clearOpen();
    clearClose();
    closeTimer.current = setTimeout(() => setActive(null), spotlight ? 120 : 0);
  };

  const closeNow = () => {
    clearOpen();
    clearClose();
    setActive(null);
  };

  useEffect(
    () => () => {
      clearClose();
      clearOpen();
    },
    [],
  );

  const activeCard = active !== null ? cards[active] : null;

  return (
    <section
      id={id}
      className={`deck deck--hover shell${spotlight ? ' deck--spotlight' : ''}`}
    >
      <div className="deck__head">
        <div>
          {eyebrow ? (
            <Reveal as="p" className="eyebrow">
              {eyebrow}
            </Reveal>
          ) : null}
          {title ? <SplitText as="h2" text={title} /> : null}
        </div>
        {allLink ? (
          <Magnetic as={Link} to={allLink} className="deck__all">
            {allLabel}
          </Magnetic>
        ) : null}
      </div>

      <div
        className="deck-hover__row"
        onMouseLeave={() => {
          // Spotlight overlay is a portal — leaving the row/card must not close it
          // (that was closing the panel the instant it opened).
          if (spotlight) {
            clearOpen();
            return;
          }
          closeNow();
        }}
      >
        {cards.map((card, i) => (
          <HoverCard
            key={card.title}
            card={card}
            spotlight={spotlight}
            active={!spotlight && active === i}
            dimmed={active !== null && active !== i}
            onEnter={() => scheduleOpen(i)}
            onFocusOpen={() => openCardNow(i)}
            onClickOpen={() => openCardNow(i)}
            onLeave={() => {
              if (spotlight) clearOpen();
            }}
          />
        ))}
      </div>

      {spotlight && activeCard ? (
        <SpotlightOverlay
          card={activeCard}
          onEnter={clearClose}
          onLeave={scheduleClose}
          onClose={closeNow}
          onNavigate={() => {
            holdUntil.current = Date.now() + 1200;
            clearOpen();
            clearClose();
            setActive(null);
          }}
        />
      ) : null}
    </section>
  );
}

export default function ScrollDeck({
  id,
  eyebrow,
  title,
  allLink,
  allLabel,
  cards,
  mode = 'scroll',
  spotlight = false,
  actions, // stacked (mobile) layout: button row in place of the plain allLink
}) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const backdropRef = useRef(null);
  const dotsRef = useRef(null);
  const labelRef = useRef(null);
  const [isStatic, setIsStatic] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );

  const n = cards.length;
  const isHover = mode === 'hover';

  useEffect(() => {
    const mqNarrow = window.matchMedia('(max-width: 900px)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (isHover) {
        // Hover deck only stacks on narrow viewports; reduced-motion still gets hover CSS.
        setIsStatic(mqNarrow.matches);
      } else {
        setIsStatic(mqNarrow.matches || mqMotion.matches);
      }
    };
    sync();
    mqNarrow.addEventListener('change', sync);
    mqMotion.addEventListener('change', sync);
    return () => {
      mqNarrow.removeEventListener('change', sync);
      mqMotion.removeEventListener('change', sync);
    };
  }, [isHover]);

  /* ---- scroll engine (preserved; only runs in mode="scroll") ---- */
  useEffect(() => {
    if (isHover || isStatic) return undefined;
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
  }, [isHover, isStatic, n, cards]);

  /* ---- stacked fallback ---- */
  if (isStatic) {
    return (
      <section id={id} className="deck deck--static shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <SplitText as="h2" text={title} className="h2" style={{ marginTop: eyebrow ? 14 : 0 }} />
        <div className="deck__stack">
          {cards.map((card) => (
            <Reveal
              key={card.title}
              className={`deck__scard ${card.dark ? 'deck__scard--dark' : ''}`}
            >
              {card.image ? (
                <div className="deck__scard-thumb">
                  <img src={card.image} alt={card.imageAlt || card.title} loading="lazy" />
                </div>
              ) : null}
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
                <Link to={card.to} className="btn btn--primary deck__cta">
                  {card.linkLabel || `Explore ${card.title}`}
                </Link>
              ) : null}
            </Reveal>
          ))}
          {actions?.length ? (
            <div className="deck__actions">
              {actions.map((a) => (
                <Link key={a.label} to={a.to} className="btn btn--primary">
                  {a.label}
                </Link>
              ))}
            </div>
          ) : allLink ? (
            <Link to={allLink} className="deck__all" style={{ alignSelf: 'start' }}>
              {allLabel}
            </Link>
          ) : null}
        </div>
      </section>
    );
  }

  if (isHover) {
    return (
      <HoverDeck
        id={id}
        eyebrow={eyebrow}
        title={title}
        allLink={allLink}
        allLabel={allLabel}
        cards={cards}
        spotlight={spotlight}
      />
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
              {eyebrow ? (
                <Reveal as="p" className="eyebrow">
                  {eyebrow}
                </Reveal>
              ) : null}
              <SplitText as="h2" text={title} />
            </div>
            {allLink ? (
              <Magnetic as={Link} to={allLink} className="deck__all">
                {allLabel}
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
