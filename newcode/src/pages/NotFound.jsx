import React from 'react';
import { Link } from 'react-router-dom';

import { notFound } from '../data/site';
import Magnetic from '../components/motion/Magnetic';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '78vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 'var(--shell)',
        margin: '0 auto',
        padding: '180px var(--gutter) 96px',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative' }}>
        <h1
          style={{
            fontSize: 'clamp(84px, 18vw, 220px)',
            lineHeight: 0.86,
            letterSpacing: '-.05em',
            fontWeight: 600,
            margin: 0,
          }}
        >
          <span className="rise">
            <span style={{ color: 'var(--accent)' }}>{notFound.title}</span>
          </span>
        </h1>
        <p className="lede fade-up" style={{ marginTop: 28, animationDelay: '.3s' }}>
          {notFound.body}
        </p>
        <Magnetic
          as={Link}
          to={notFound.cta.to}
          className="btn btn--primary fade-up"
          style={{ marginTop: 28, animationDelay: '.42s' }}
        >
          {notFound.cta.label} <span>→</span>
        </Magnetic>
      </div>
    </section>
  );
}
