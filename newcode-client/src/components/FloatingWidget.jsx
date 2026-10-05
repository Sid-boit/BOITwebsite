import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FloatingWidget.css';

const WIDTH = 300;
const MARGIN = 28;
const DEMO = '/contact';
const DRAG_THRESHOLD = 6;

const CARDS = [
  { id: 'claims', title: 'AI-Powered Claims', sub: '10x faster processing', bar: '62%' },
  { id: 'motor', title: 'Motor Claims', sub: 'Settle in hours, not days', bar: '74%' },
  { id: 'medical', title: 'Medical Underwriting', sub: 'Faster, consistent decisions', bar: '68%' },
  { id: 'fraud', title: 'Fraud Detection', sub: 'Spot risk before it pays out', bar: '81%' },
  { id: 'ekyc', title: 'e-KYC Onboarding', sub: 'Verify customers in minutes', bar: '70%' },
];

function depthOf(index, active) {
  return (index - active + CARDS.length) % CARDS.length;
}

export default function FloatingWidget() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [pos, setPos] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardRef = useRef(null);
  const dragRef = useRef({ active: false, moved: false, dx: 0, dy: 0, x: 0, y: 0 });

  useEffect(() => {
    const place = () => {
      const h = cardRef.current?.offsetHeight || 180;
      setPos({
        x: window.innerWidth - WIDTH - MARGIN,
        y: window.innerHeight - h - MARGIN,
      });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, []);

  useEffect(() => {
    if (paused || dragging || pathname === DEMO) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % CARDS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [paused, dragging, pathname]);

  const clamp = (x, y) => {
    const el = cardRef.current;
    const w = el?.offsetWidth || WIDTH;
    const h = el?.offsetHeight || 180;
    return {
      x: Math.min(Math.max(x, 8), window.innerWidth - w - 8),
      y: Math.min(Math.max(y, 8), window.innerHeight - h - 8),
    };
  };

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    const rect = cardRef.current.getBoundingClientRect();
    dragRef.current = {
      active: true,
      moved: false,
      settled: false,
      dx: e.clientX - rect.left,
      dy: e.clientY - rect.top,
      x: e.clientX,
      y: e.clientY,
    };
    setDragging(true);

    const onMove = (ev) => {
      const drag = dragRef.current;
      if (!drag.active) return;
      const travel = Math.hypot(ev.clientX - drag.x, ev.clientY - drag.y);
      if (travel >= DRAG_THRESHOLD) drag.moved = true;
      if (travel > 0) setPos(clamp(ev.clientX - drag.dx, ev.clientY - drag.dy));
    };
    const onUp = (ev) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      finishPointer(ev, true);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    cardRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const travel = Math.hypot(e.clientX - drag.x, e.clientY - drag.y);
    if (travel >= DRAG_THRESHOLD) drag.moved = true;
    if (travel > 0) setPos(clamp(e.clientX - drag.dx, e.clientY - drag.dy));
  };

  const finishPointer = (e, openDemo) => {
    if (dragRef.current.settled) return;
    const moved = dragRef.current.moved;
    dragRef.current.active = false;
    dragRef.current.settled = true;
    setDragging(false);
    if (cardRef.current?.hasPointerCapture?.(e.pointerId)) {
      cardRef.current.releasePointerCapture(e.pointerId);
    }
    if (openDemo && !moved) navigate(DEMO);
  };

  const onPointerUp = (e) => finishPointer(e, true);
  const onPointerCancel = (e) => finishPointer(e, false);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(DEMO);
    }
  };

  if (pathname === DEMO) return null;

  const focused = CARDS[active];

  return (
    <div
      ref={cardRef}
      className="fwidget"
      style={pos ? { left: pos.x, top: pos.y } : undefined}
      data-ready={pos ? '1' : '0'}
      data-dragging={dragging ? '1' : '0'}
      role="button"
      draggable={false}
      tabIndex={0}
      aria-label={`${focused.title}. Open the demo form`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="fwidget__stage">
        {CARDS.map((card, index) => {
          const depth = depthOf(index, active);
          return (
            <div key={card.id} className="fwidget__card" data-depth={depth} aria-hidden="true">
              <div className="fwidget__thumb">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill={`url(#fwidget-bolt-${card.id})`} />
                  <defs>
                    <linearGradient
                      id={`fwidget-bolt-${card.id}`}
                      x1="4"
                      y1="2"
                      x2="19"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#eef3f1" />
                      <stop offset="1" stopColor="#d5deda" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="fwidget__body">
                <div className="fwidget__title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="var(--accent)" />
                  </svg>
                  {card.title}
                </div>
                <p className="fwidget__sub">{card.sub}</p>
                <div className="fwidget__bar">
                  <span style={{ width: card.bar }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
