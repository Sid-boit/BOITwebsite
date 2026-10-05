import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, navCta, platformMenu, productMenu, servicesMenu } from '../data/site';
import Magnetic from './motion/Magnetic';
import logoFull from '../assets/new_logo_boit-removebg-preview.png';
import logoShort from '../assets/new_logo_short_boit-removebg-preview.png';
import './Header.css';

/* Contextual line icons for mega-menu items. */
const MENU_ICONS = {
  life: 'M19.5 12.5c0 4.5-5.2 8.2-7.1 9.4a.8.8 0 0 1-.8 0C9.7 20.7 4.5 17 4.5 12.5A4.5 4.5 0 0 1 12 8.6a4.5 4.5 0 0 1 7.5 3.9Z',
  property: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z',
  banking: 'M3 10 12 4l9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18',
  automation: 'M12 8V4m0 4a4 4 0 1 0 4 4h4m-4-4a4 4 0 0 1-4 4v4m0-4a4 4 0 0 1-4-4H4',
  case: 'M9 3h6l1 2h4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5h4l1-2Zm3 7v6m-3-3h6',
  core: 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  medical: 'M9 3h6v4h4v6h-4v4H9v-4H5V7h4V3Z',
  motor: 'M5 16 7 9h10l2 7M5 16H3m2 0h14m2 0h-2M7 16a1.5 1.5 0 1 0 0.01 0Zm10 0a1.5 1.5 0 1 0 0.01 0Z',
  fraud: 'M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Zm-3.2 9.2 2.2 2.2 4.4-4.4',
  kyc: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a8 8 0 0 1 16 0M17 14l2 2 3-3',
  pos: 'M4 5h16v10H4V5Zm2 13h4m4 0h6M8 8h2m2 0h2m2 0h2M8 11h8',
  aml: 'M12 3 4 7v2c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4ZM9 12h6M12 9v6',
  agents: 'M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7 3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm14 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 10v3m-7 1.5L12 13l7 1.5M9 21v-4.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5V21M5 16.5V19m14-2.5V19',
  datalake: 'M12 3c-4.4 0-8 1.3-8 3v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3Zm0 0v3m-8 3c0 1.7 3.6 3 8 3s8-1.3 8-3m-16 6c0 1.7 3.6 3 8 3s8-1.3 8-3',
  decision: 'M12 3v6m0 0 4-4m-4 4L8 5M4 14h6l2 3 2-7 2 4h4',
  extraction: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8M8 17h5',
  analysis: 'M4 19V5m5 14V9m5 10v-6m5 6V3',
  recommend: 'M12 2 14.5 9H22l-6 4.5L18.5 21 12 16.5 5.5 21 8 13.5 2 9h7.5L12 2Z',
  propensity: 'M3 17 9 11l4 4 8-8M15 7h5v5',
};

const FALLBACK_ICON = 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2';

function ItemIcon({ name }) {
  const d = MENU_ICONS[name] || FALLBACK_ICON;
  return (
    <svg className="hdr__item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tabs = [
  { key: 'platform', label: 'Platform', to: '/product/capabilities', mega: true },
  { key: 'product', label: 'Product', to: '/product', mega: true },
  { key: 'services', label: 'Services', to: '/services', mega: true },
  { key: 'case-studies', label: 'Case Studies', to: '/case-studies' },
  { key: 'media', label: 'Media', to: '/media' },
  { key: 'about', label: 'About', to: '/about' },
];

const panelContent = {
  platform: {
    title: 'Platform',
    to: platformMenu.to,
    subtitle: platformMenu.subtitle,
    sections: [
      {
        heading: 'Capabilities',
        items: platformMenu.items,
      },
    ],
    actions: [
      { label: 'Explore the platform →', to: '/product/capabilities', primary: true },
      { label: 'Talk to us', to: '/contact', primary: false },
    ],
  },
  product: {
    title: 'Product',
    to: '/product',
    subtitle: 'AI-native automation across insurance and banking.',
    sections: [
      {
        heading: 'Business Verticals',
        items: productMenu.verticals,
      },
      {
        heading: 'Business Solutions',
        items: productMenu.strip.chips,
      },
    ],
    actions: [
      { label: 'Explore products →', to: '/product', primary: true },
      { label: 'Talk to us', to: '/contact', primary: false },
    ],
  },
  services: {
    title: 'Services',
    to: '/services',
    subtitle: 'Delivery, support, and specialised consulting.',
    sections: [
      {
        heading: 'Service lines',
        items: servicesMenu.top,
      },
    ],
  },
};

export default function Header() {
  const [open, setOpen] = useState(null); // 'platform' | 'product' | 'services' | null
  const [panelKey, setPanelKey] = useState('platform'); // keep last panel mounted to avoid flicker
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    setOpen(null);
    setDrawer(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setDrawer(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // Wait for a real scroll before compacting — avoids early trigger on tiny nudges.
    const onScroll = () => setScrolled(window.scrollY > 140);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const cancelClose = () => clearTimeout(closeTimer.current);

  const hoverOpen = (key) => {
    cancelClose();
    setPanelKey(key);
    setOpen(key);
  };
  const hoverClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 220);
  };

  const panel = panelContent[panelKey];
  const multiSection = panel.sections.length > 1;

  return (
    <header className="hdr" data-scrolled={scrolled ? '1' : '0'}>
      <div className="hdr__bar">
        <Link to="/" className="hdr__logo" aria-label={brand.ariaLabel} data-compact={scrolled ? '1' : '0'}>
          <img src={logoFull} alt={brand.name} className="hdr__logo-img" />
        </Link>

        <button
          className="hdr__burger"
          onClick={() => setDrawer((d) => !d)}
          aria-expanded={drawer}
          aria-label="Toggle navigation"
        >
          {drawer ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        className="hdr__navcard"
        data-hide-sm="1"
        data-open={open ? '1' : '0'}
        data-scrolled={scrolled ? '1' : '0'}
        onMouseEnter={cancelClose}
        onMouseLeave={hoverClose}
      >
        <div className="hdr__navrow">
          <Link
            to="/"
            className="hdr__mark"
            aria-label={brand.ariaLabel}
            tabIndex={scrolled ? undefined : -1}
            aria-hidden={scrolled ? 'false' : 'true'}
          >
            <img src={logoShort} alt="" className="hdr__mark-img" />
          </Link>

          <nav className="hdr__tabs">
            {tabs.map((t) => (
              <span
                key={t.key}
                className="hdr__tab"
                onMouseEnter={t.mega ? () => hoverOpen(t.key) : hoverClose}
              >
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    `hdr__tablink ${isActive ? 'active' : ''} ${open === t.key ? 'is-open' : ''}`
                  }
                  aria-expanded={t.mega ? open === t.key : undefined}
                >
                  {t.label}
                </NavLink>
              </span>
            ))}
          </nav>

          <Magnetic as={Link} to={navCta.to} className="btn btn--primary hdr__cta">
            {navCta.label}
          </Magnetic>
        </div>

        <div className="hdr__panel" aria-hidden={open ? 'false' : 'true'}>
          <Link to={panel.to} className="hdr__panel-title" tabIndex={open ? undefined : -1}>
            {panel.title}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="hdr__panel-sub">{panel.subtitle}</p>
          <div className="hdr__panel-divider" />

          <div className={`hdr__sections ${multiSection ? 'hdr__sections--split' : ''}`}>
            {panel.sections.map((section) => (
              <div className="hdr__section" key={section.heading}>
                <p className="hdr__section-label">{section.heading}</p>
                <div className="hdr__section-list">
                  {section.items.map((it) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      className="hdr__panel-item"
                      tabIndex={open ? undefined : -1}
                    >
                      <ItemIcon name={it.icon} />
                      <span className="hdr__panel-item-text">
                        <span className="hdr__panel-item-label">{it.label}</span>
                        {it.detail ? (
                          <span className="hdr__panel-item-detail">{it.detail}</span>
                        ) : null}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {panel.actions ? (
            <div className="hdr__panel-actions">
              {panel.actions.map((a) => (
                <Link
                  key={a.label}
                  to={a.to}
                  className={`btn ${a.primary ? 'btn--primary' : 'btn--ghost'}`}
                  tabIndex={open ? undefined : -1}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="hdr__drawer" data-open={drawer ? '1' : '0'}>
        <nav>
          <Link to="/">Home</Link>
          <Link to={platformMenu.to}>Platform</Link>
          <div className="sub">
            <span className="sublabel">Capabilities</span>
            {platformMenu.items.map((it) => (
              <Link key={it.label} to={it.to}>
                {it.label}
              </Link>
            ))}
          </div>
          <Link to="/product">Product</Link>
          <div className="sub">
            <span className="sublabel">Business Verticals</span>
            {productMenu.verticals.map((v) => (
              <Link key={v.label} to={v.to}>
                {v.label}
              </Link>
            ))}
            <span className="sublabel">Business Solutions</span>
            {productMenu.strip.chips.map((c) => (
              <Link key={c.label} to={c.to}>
                {c.label}
              </Link>
            ))}
          </div>
          <Link to="/services">Services</Link>
          <div className="sub">
            <span className="sublabel">Service lines</span>
            {servicesMenu.top.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
            {servicesMenu.pillars.map((p) => (
              <React.Fragment key={p.label}>
                <span className="sublabel">{p.label}</span>
                {p.groups.map((g) => (
                  <Link key={g.label} to={g.to}>
                    {g.label}
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </div>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/media">Media</Link>
          <Link to="/about">About</Link>
          <Link to={navCta.to}>{navCta.label}</Link>
        </nav>
      </div>
    </header>
  );
}
