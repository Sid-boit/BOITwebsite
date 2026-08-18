import React, { useEffect, useRef, useState } from 'react';
import './FloatingWidget.css';

const WIDTH = 300;
const MARGIN = 28;

export default function FloatingWidget() {
  const [pos, setPos] = useState(null);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ active: false, dx: 0, dy: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const place = () => {
      const h = cardRef.current?.offsetHeight || 96;
      setPos({
        x: window.innerWidth - WIDTH - MARGIN,
        y: window.innerHeight - h - MARGIN,
      });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, []);

  const clamp = (x, y) => {
    const el = cardRef.current;
    const w = el?.offsetWidth || WIDTH;
    const h = el?.offsetHeight || 96;
    return {
      x: Math.min(Math.max(x, 8), window.innerWidth - w - 8),
      y: Math.min(Math.max(y, 8), window.innerHeight - h - 8),
    };
  };

  const onPointerDown = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    dragRef.current = {
      active: true,
      dx: e.clientX - rect.left,
      dy: e.clientY - rect.top,
    };
    setDragging(true);
    cardRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const next = clamp(e.clientX - dragRef.current.dx, e.clientY - dragRef.current.dy);
    setPos(next);
  };

  const onPointerUp = (e) => {
    dragRef.current.active = false;
    setDragging(false);
    cardRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={cardRef}
      className="fwidget"
      style={pos ? { left: pos.x, top: pos.y } : undefined}
      data-ready={pos ? '1' : '0'}
      data-dragging={dragging ? '1' : '0'}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="fwidget__thumb">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill="url(#fwidget-bolt)"
          />
          <defs>
            <linearGradient id="fwidget-bolt" x1="4" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#eef3f1" />
              <stop offset="1" stopColor="#d5deda" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="fwidget__body">
        <div className="fwidget__title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="var(--accent)" />
          </svg>
          AI-Powered Claims
        </div>
        <p className="fwidget__sub">10x faster processing</p>
        <div className="fwidget__bar">
          <span style={{ width: '62%' }} />
        </div>
      </div>
    </div>
  );
}
