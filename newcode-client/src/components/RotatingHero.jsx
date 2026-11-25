import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './motion/Magnetic';
import { prefersReducedMotion } from '../hooks/motion';
import './RotatingHero.css';

const ROTATE_MS = 3200;
const FADE_MS = 180;

/* The hero's photo/caption "scene" rotates through `slides` on a timer,
   matching the BOIT preview's home-motion.js behaviour (crossfade image,
   re-triggered text animation, pausable, respects reduced motion). */
export default function RotatingHero({
  eyebrow,
  headingLines = [],
  headingClassName = '',
  primary,
  secondary,
  lede,
  tags = [],
  bottomLeft,
  bottomRight,
  slides,
  pagination = 'stages', // 'stages' (labelled) | 'dots' (small dots)
}) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(prefersReducedMotion());
  const fadeTimer = useRef(null);
  const intervalTimer = useRef(null);

  const goTo = (next) => {
    setFading(true);
    clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(
      () => {
        setIndex(next);
        setFading(false);
      },
      prefersReducedMotion() ? 0 : FADE_MS
    );
  };

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setPaused(e.matches);
    reduced.addEventListener('change', onChange);
    return () => reduced.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    clearInterval(intervalTimer.current);
    if (paused || document.hidden) return undefined;
    intervalTimer.current = setInterval(() => {
      goTo((index + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(intervalTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused((p) => p || document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => () => clearTimeout(fadeTimer.current), []);

  const slide = slides[index];

  return (
    <section className="hero playful-hero">
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="">
            <i />
            {eyebrow}
          </p>
          <h1 className={`mia-motion-heading ${headingClassName}`}>
            {headingLines.map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className="gradient-text" key={`word-${index}`}>
              {slide.word}
            </span>
          </h1>
          <p className="hero-lede">{lede}</p>
          <div className="hero-actions">
            {primary ? (
              <Magnetic as={Link} to={primary.to} className="btn btn--primary">
                {primary.label}
              </Magnetic>
            ) : null}
            {secondary ? (
              <Magnetic as={Link} to={secondary.to} className="btn btn--primary">
                {secondary.label}
              </Magnetic>
            ) : null}
          </div>
          {tags.length ? (
            <div className="">
              {tags.map((t, i) => (
                <span key={t}>
                  {i === 0 ? <i /> : null}
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <figure className={`home-sculpture motion-scene ${paused ? 'is-paused' : ''}`} data-stage={index}>
          <img src={slide.image} alt={slide.alt} className={fading ? 'hero-image-out' : ''} fetchPriority="high" />
          <div className="scene-wash" />
          <div className="scene-caption">
            <span key={`kicker-${index}`} className="hero-transition">
              {slide.kicker}
            </span>
            <strong key={`title-${index}`} className="hero-transition">
              {slide.title}
            </strong>
            <p key={`copy-${index}`} className="hero-transition">
              {slide.copy}
            </p>
            <div
              className={pagination === 'dots' ? 'scene-stages asset-dots' : 'scene-stages'}
              aria-label="Hero slides"
            >
              {slides.map((s, i) => (
                <button
                  key={s.label || s.kicker}
                  type="button"
                  aria-label={`Show ${s.label || s.kicker} stage`}
                  aria-pressed={i === index}
                  onClick={() => goTo(i)}
                >
                  {pagination === 'dots' ? null : <span>{s.label}</span>}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="scene-pause"
            aria-label={paused ? 'Play hero animation' : 'Pause hero animation'}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? '▶' : 'Ⅱ'}
          </button>
        </figure>
      </div>
      <div className="hero-bottom shell">
        <span>{bottomLeft}</span>
        <span>{bottomRight}</span>
      </div>
    </section>
  );
}
