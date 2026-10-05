import React from 'react';
import { Link } from 'react-router-dom';
import { brand, footer, primaryNav } from '../data/site';
import Magnetic from './motion/Magnetic';
import SplitText from './motion/SplitText';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="panel-dark">
      <div className="shell" style={{ padding: '120px 40px 72px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
            gap: 64,
            alignItems: 'end',
          }}
          data-stack="1"
        >
          <div>
            <p className="eyebrow" style={{ color: 'var(--on-dark-4)' }}>
              {footer.band.eyebrow}
            </p>
            <SplitText
              as="h2"
              text={footer.band.title}
              style={{
                fontSize: 'clamp(34px, 5vw, 76px)',
                lineHeight: 0.98,
                letterSpacing: '-.04em',
                fontWeight: 600,
                margin: '24px 0 0',
                maxWidth: '20ch',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              {footer.band.points.map((p) => (
                <li
                  key={p}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--on-dark-3)',
                    border: '1px solid rgba(238,243,241,.2)',
                    borderRadius: 999,
                    padding: '8px 14px',
                  }}
                >
                  {p}
                </li>
              ))}
            </ul>
            <Magnetic
              as={Link}
              to={footer.band.cta.to}
              className="btn btn--primary btn--block"
            >
              {footer.band.cta.label}
              <span>→</span>
            </Magnetic>
          </div>
        </div>

        <div
          style={{
            marginTop: 96,
            paddingTop: 30,
            borderTop: '1px solid var(--line-dark)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
            gap: 32,
          }}
          data-stack="1"
        >
          <div>
            <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-.04em' }}>
              <span style={{ color: 'var(--bright)' }}>bo</span>
              <span style={{ color: 'var(--on-dark)' }}>IT</span>
            </span>
            <p
              style={{
                margin: '14px 0 0',
                fontSize: 13.5,
                lineHeight: 1.6,
                color: 'var(--on-dark-4)',
                maxWidth: '32ch',
              }}
            >
              {brand.tagline} Singapore · Dubai · Kuala Lumpur · Jakarta · Bangalore ·
              Johannesburg.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>
              Navigate
            </div>
            {footer.nav.map((n) => (
              <Link key={n.label} to={n.to}>
                {n.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>
              Platform
            </div>
            <Link to="/product/insurance">Insurance Platform</Link>
            <Link to="/product/banking">Banking Platform</Link>
            <Link to="/product/capabilities">AI Capabilities</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>
              Contact
            </div>
            <a href="mailto:hello@boitglobal.com">hello@boitglobal.com</a>
            <a href="mailto:marcom@boitglobal.com">marcom@boitglobal.com</a>
            <Link to="/contact">Demo</Link>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontFamily: 'var(--mono)',
            fontSize: 10.5,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          {footer.copyright(year)}
        </div>
      </div>
    </footer>
  );
}

/* Nav list is re-exported for the sitemap-style links elsewhere. */
export { primaryNav };
