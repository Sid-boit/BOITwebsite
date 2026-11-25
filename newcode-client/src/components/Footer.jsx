import React from 'react';
import { Link } from 'react-router-dom';
import { brand, footer, primaryNav } from '../data/site';
import { logoFull } from '../brand/logos';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="panel-dark">
      <div className="shell" style={{ padding: '72px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
            gap: 32,
          }}
          data-stack="1"
        >
          <div>
            <Link to="/" aria-label={brand.ariaLabel} style={{ display: 'inline-flex' }}>
              <img
                src={logoFull}
                alt={brand.name}
                style={{
                  height: 28,
                  width: 'auto',
                  maxWidth: 112,
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  display: 'block',
                }}
              />
            </Link>
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
            <Link to="/platform/insurance">Insurance Platform</Link>
            <Link to="/platform/banking">Banking Platform</Link>
            <Link to="/platform/capabilities">Explore the platform</Link>
            <Link to="/product/capabilities">AI Capabilities</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>
              Contact
            </div>
            <a href="mailto:marcom@boitglobal.com">marcom@boitglobal.com</a>
            <Link to="/contact">Demo</Link>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 30,
            borderTop: '1px solid var(--line-dark)',
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
