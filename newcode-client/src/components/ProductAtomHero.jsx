import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PRODUCT_ATOM_CENTER,
  productAtomDefaultSelection,
  productAtomNucleusSelection,
  productAtomOfferings,
  productAtomOrbitPoint,
} from '../data/productAtom';
import './ProductAtomHero.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Native React Product atom hero — no iframe. */
export default function ProductAtomHero() {
  const stageRef = useRef(null);
  const nodeRefs = useRef([]);
  const wireRefs = useRef([]);
  const phaseRef = useRef(0);
  const lastRef = useRef(0);
  const frameRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const selectedIdRef = useRef(null);
  const pauseRef = useRef({ manual: false, hover: false, focus: false });

  const [selectedId, setSelectedId] = useState(null);
  const [panelMode, setPanelMode] = useState('default');
  const [manualPause, setManualPause] = useState(false);
  const [hoverPause, setHoverPause] = useState(false);
  const [focusPause, setFocusPause] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [nodeWidth, setNodeWidth] = useState(152);
  const [titleFs, setTitleFs] = useState(10);

  selectedIdRef.current = selectedId;
  pauseRef.current = { manual: manualPause, hover: hoverPause, focus: focusPause };

  const selected = useMemo(
    () => productAtomOfferings.find((o) => o.id === selectedId) || null,
    [selectedId],
  );

  const panel =
    panelMode === 'offering' && selected
      ? {
          kicker: selected.type === 'vertical' ? 'BUSINESS VERTICAL' : 'BUSINESS SOLUTION',
          title: selected.title,
          description: selected.description,
          tags: selected.tags,
          linkTo: selected.path,
          linkLabel: 'Explore this offering',
        }
      : panelMode === 'nucleus'
        ? productAtomNucleusSelection
        : productAtomDefaultSelection;

  const paused = manualPause || hoverPause || focusPause || reduced;

  const statusText = reduced
    ? 'Motion reduced · Select to explore'
    : manualPause
      ? 'Orbit paused · Select to explore'
      : hoverPause || focusPause
        ? 'Paused for exploration'
        : '';

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const applyPositions = (phase) => {
      const { width, height } = sizeRef.current;
      if (!width || !height) return;
      const currentSelected = selectedIdRef.current;

      productAtomOfferings.forEach((p, i) => {
        const { x, y, depth } = productAtomOrbitPoint(i, phase);
        const active = p.id === currentSelected;
        const scale = active ? 1.04 : 0.93 + (depth + 1) * 0.055;
        const z = active
          ? 70
          : depth >= 0
            ? 30 + Math.round(depth * 10)
            : 5 + Math.round((depth + 1) * 7);
        const opacity = active ? 1 : depth >= 0 ? 1 : 0.65 + (depth + 1) * 0.15;
        const node = nodeRefs.current[i];
        if (node) {
          node.style.transform = `translate3d(${(x / 900) * width}px, ${(y / 620) * height}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
          node.style.zIndex = String(z);
          node.style.opacity = String(opacity);
        }
        const wire = wireRefs.current[i];
        if (wire) {
          wire.setAttribute('x2', x.toFixed(2));
          wire.setAttribute('y2', y.toFixed(2));
        }
      });
    };

    const layout = () => {
      const rect = stage.getBoundingClientRect();
      sizeRef.current = { width: rect.width, height: rect.height };
      const mobile = window.matchMedia('(max-width: 700px)').matches;
      const w = mobile
        ? Math.max(96, Math.min(132, rect.width * 0.28))
        : Math.max(118, Math.min(168, rect.width * 0.2));
      setNodeWidth(w);
      setTitleFs(Math.max(7, Math.min(11, w * 0.068)));
      applyPositions(phaseRef.current);
    };

    const ro = new ResizeObserver(layout);
    ro.observe(stage);

    /* Refs attach after first paint — retry layout so nodes aren't stuck at 0,0. */
    layout();
    const boot = [0, 32, 100, 250].map((ms) =>
      window.setTimeout(() => {
        layout();
        applyPositions(phaseRef.current);
      }, ms),
    );

    const animate = (time) => {
      const delta = lastRef.current ? Math.min((time - lastRef.current) / 1000, 0.1) : 0;
      lastRef.current = time;
      const p = pauseRef.current;
      const isPaused = p.manual || p.hover || p.focus || document.hidden || prefersReducedMotion();
      if (!isPaused) phaseRef.current += delta * 0.105;
      applyPositions(phaseRef.current);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      ro.disconnect();
      boot.forEach((id) => window.clearTimeout(id));
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const selectOffering = (id) => {
    setSelectedId(id);
    setPanelMode('offering');
  };

  const selectNucleus = () => {
    setSelectedId(null);
    setPanelMode('nucleus');
  };

  return (
    <section
      className={`product-atom-hero${paused ? ' is-paused' : ''}`}
      aria-label="BOIT product universe"
    >
      <div className="product-atom-hero__layout">
        <div className="product-atom-hero__copy">
          <h1 className="product-atom-hero__title">
            Every product.
            <br />
            Connected by
            <br />
            <em>intelligence.</em>
          </h1>
          <p className="product-atom-hero__intro">
            A connected product portfolio for Banking and Insurance. Bringing AI to customer
            acquisition, underwriting, claims, servicing, distribution, risk, and compliance.
          </p>
          <div className="product-atom-hero__actions">
            <a className="btn btn--primary" href="#pillars">
              Explore the portfolio
            </a>
            <Link className="btn btn--ghost" to="/contact">
              Request a demo
            </Link>
          </div>

          <div className="product-atom-hero__selection" aria-live="polite" aria-atomic="true">
            <p className="product-atom-hero__kicker">{panel.kicker}</p>
            <h2>{panel.title}</h2>
            <p>{panel.description}</p>
            <div className="product-atom-hero__tags">
              {panel.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {panel.linkTo.includes('#') ? (
              <a href={panel.linkTo}>{panel.linkLabel}</a>
            ) : (
              <Link to={panel.linkTo}>{panel.linkLabel}</Link>
            )}
          </div>
        </div>

        <div className="product-atom-hero__visual">
          <div className="product-atom-hero__visual-top">
            <button
              type="button"
              className="product-atom-hero__orbit-toggle"
              aria-label={manualPause ? 'Resume product orbit' : 'Pause product orbit'}
              aria-pressed={manualPause}
              disabled={reduced}
              onClick={() => setManualPause((v) => !v)}
            >
              {reduced ? 'Motion off' : manualPause ? '▶ Resume' : 'Ⅱ Pause'}
            </button>
          </div>

          <div
            className="product-atom-hero__stage"
            ref={stageRef}
            role="group"
            aria-label="Twelve BOIT offerings revolving around a spherical AI nucleus. Select a product to explore its details."
            onPointerEnter={(e) => {
              if (e.pointerType !== 'touch') setHoverPause(true);
            }}
            onPointerLeave={() => setHoverPause(false)}
            onFocusCapture={() => setFocusPause(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setFocusPause(false);
            }}
          >
            <svg
              className="product-atom-hero__space"
              viewBox="0 0 900 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g>
                <ellipse className="product-atom-hero__track" cx="450" cy="300" rx="350" ry="122" />
                <ellipse
                  className="product-atom-hero__track"
                  cx="450"
                  cy="300"
                  rx="290"
                  ry="115"
                  transform="rotate(-52 450 300)"
                />
                <ellipse
                  className="product-atom-hero__track"
                  cx="450"
                  cy="300"
                  rx="290"
                  ry="115"
                  transform="rotate(52 450 300)"
                />
              </g>
              <g>
                {productAtomOfferings.map((o, i) => (
                  <line
                    key={`wire-${o.id}`}
                    ref={(el) => {
                      wireRefs.current[i] = el;
                    }}
                    className={`product-atom-hero__wire${
                      selectedId === o.id ? ' is-selected' : ''
                    }`}
                    x1={PRODUCT_ATOM_CENTER.x}
                    y1={PRODUCT_ATOM_CENTER.y}
                    x2={PRODUCT_ATOM_CENTER.x}
                    y2={PRODUCT_ATOM_CENTER.y}
                  />
                ))}
              </g>
            </svg>

            <button
              type="button"
              className="product-atom-hero__nucleus"
              aria-label="Explore the BOIT AI nucleus: domain LLM, specialist agents and orchestration"
              onClick={selectNucleus}
              style={{
                left: `${(PRODUCT_ATOM_CENTER.x / 900) * 100}%`,
                top: `${(PRODUCT_ATOM_CENTER.y / 620) * 100}%`,
              }}
            >
              <span className="product-atom-hero__nucleus-halo" />
              <span className="product-atom-hero__nucleus-core" aria-hidden="true" />
              <span className="product-atom-hero__nucleus-label">BOIT AI</span>
              <span className="product-atom-hero__nucleus-caption">
                LLM · Agents · Orchestration
              </span>
            </button>

            {productAtomOfferings.map((offering, i) => {
              const active = selectedId === offering.id;
              return (
                <button
                  key={offering.id}
                  type="button"
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className={`product-atom-hero__node product-atom-hero__node--${offering.type}${
                    active ? ' is-selected' : ''
                  }`}
                  aria-label={`${offering.title}. Show product details.`}
                  aria-pressed={active}
                  onClick={() => selectOffering(offering.id)}
                  style={{ width: nodeWidth }}
                >
                  <img
                    className="product-atom-hero__thumb"
                    src={offering.image}
                    alt=""
                    width={160}
                    height={160}
                    draggable={false}
                    loading="lazy"
                  />
                  <span className="product-atom-hero__node-title" style={{ fontSize: titleFs }}>
                    {offering.title}
                  </span>
                  <span className="product-atom-hero__node-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="product-atom-hero__visual-bottom">
            <span></span>
            <span>{statusText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
