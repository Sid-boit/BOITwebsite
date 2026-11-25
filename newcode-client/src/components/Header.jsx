import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, navCta, platformMenu, productMenu, servicesMenu } from '../data/site';
import Magnetic from './motion/Magnetic';
import ThemeToggle from './ThemeToggle';
import { logoFull } from '../brand/logos';
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
  { key: 'platform', label: 'Platform', to: '/platform/insurance', mega: true },
  { key: 'product', label: 'Product', to: '/product', mega: true },
  { key: 'services', label: 'Services', to: '/services', mega: true },
  { key: 'case-studies', label: 'Case Studies', to: '/case-studies' },
  { key: 'media', label: 'Media', to: '/media' },
  { key: 'about', label: 'About', to: '/about' },
];

/* Product routes under /product/* used to steal the Platform active state
   (prefix match on /product). Keep Platform and Product mutually exclusive. */
function tabIsActive(key, pathname) {
  if (key === 'platform') {
    return (
      pathname.startsWith('/platform') || pathname.startsWith('/product/capabilities')
    );
  }
  if (key === 'product') {
    if (pathname.startsWith('/product/capabilities')) return false;
    return pathname === '/product' || pathname.startsWith('/product/');
  }
  if (key === 'services') return pathname.startsWith('/services');
  if (key === 'case-studies') return pathname.startsWith('/case-studies');
  if (key === 'media') return pathname.startsWith('/media');
  if (key === 'about') return pathname.startsWith('/about');
  return false;
}

const panelContent = {
  platform: {
    title: 'Platform',
    to: '/platform/insurance',
    subtitle: platformMenu.subtitle,
    sections: [
      {
        heading: 'Industry platforms',
        items: platformMenu.platforms,
      },
      {
        heading: 'Capabilities',
        items: platformMenu.items,
      },
    ],
    actions: [
      { label: 'Explore the platform', to: '/platform/capabilities', primary: true },
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
      { label: 'Explore products', to: '/product', primary: true },
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

/* Mobile drawer: mega-menu tabs become collapsible groups. */
const drawerGroups = [
  {
    key: 'platform',
    label: 'Platform',
    to: platformMenu.to,
    overview: 'Platform overview',
    sections: [
      { heading: 'Industry platforms', items: platformMenu.platforms },
      { heading: 'Capabilities', items: platformMenu.items },
    ],
  },
  {
    key: 'product',
    label: 'Product',
    to: '/product',
    overview: 'All products',
    sections: [
      { heading: 'Business Verticals', items: productMenu.verticals },
      { heading: 'Business Solutions', items: productMenu.strip.chips },
    ],
  },
  {
    key: 'services',
    label: 'Services',
    to: '/services',
    overview: 'All services',
    sections: [
      { heading: 'Service lines', items: servicesMenu.top },
      ...servicesMenu.pillars.map((p) => ({ heading: p.label, items: p.groups })),
    ],
  },
];

const drawerLinks = tabs.filter((t) => !t.mega);

export default function Header() {
  const [open, setOpen] = useState(null); // 'platform' | 'product' | 'services' | null
  const [panelKey, setPanelKey] = useState('platform'); // keep last panel mounted to avoid flicker
  const [drawer, setDrawer] = useState(false);
  const [expanded, setExpanded] = useState(null); // open group in the mobile drawer
  const [scrolled, setScrolled] = useState(false);
  const [solid, setSolid] = useState(false); // mobile bar gets a backdrop once off the top
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
    // Fade the large left logo early so it clears page headings before they scroll under it.
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      setSolid(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Lock page scroll behind the open drawer; collapse groups when it closes.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('nav-open', drawer);
    if (!drawer) setExpanded(null);
    return () => root.classList.remove('nav-open');
  }, [drawer]);

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
    <header
      className="hdr"
      data-scrolled={scrolled ? '1' : '0'}
      data-solid={solid || drawer ? '1' : '0'}
      data-drawer={drawer ? '1' : '0'}
    >
      <div className="hdr__bar">
        <Link to="/" className="hdr__logo" aria-label={brand.ariaLabel} data-compact={scrolled ? '1' : '0'}>
          <img src={logoFull} alt={brand.name} className="hdr__logo-img" />
        </Link>

        <div className="hdr__bar-actions">
          <ThemeToggle className="theme-toggle--mobile" />
          <button
            className="hdr__burger"
            onClick={() => setDrawer((d) => !d)}
            aria-expanded={drawer}
            aria-controls="hdr-drawer"
            aria-label={drawer ? 'Close navigation' : 'Open navigation'}
          >
            <span className="hdr__burger-icon" aria-hidden="true">
              <i />
              <i />
            </span>
            {drawer ? 'Close' : 'Menu'}
          </button>
        </div>
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
            <img src={logoFull} alt="" className="hdr__mark-img" />
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
                  end={t.key === 'product'}
                  className={() => {
                    const active = tabIsActive(t.key, location.pathname);
                    return `hdr__tablink ${active ? 'active' : ''} ${
                      open === t.key ? 'is-open' : ''
                    }`;
                  }}
                  aria-expanded={t.mega ? open === t.key : undefined}
                >
                  {t.label}
                </NavLink>
              </span>
            ))}
          </nav>

          <ThemeToggle />

          <Magnetic as={Link} to={navCta.to} className="btn btn--primary hdr__cta">
            {navCta.label}
          </Magnetic>
        </div>

        <div className="hdr__panel" aria-hidden={open ? 'false' : 'true'}>
          <Link to={panel.to} className="hdr__panel-title" tabIndex={open ? undefined : -1}>
            {panel.title}
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

      <div
        className="hdr__drawer"
        id="hdr-drawer"
        data-open={drawer ? '1' : '0'}
        // Close on any link tap — also covers links to the page already open.
        onClick={(e) => {
          if (e.target.closest('a')) setDrawer(false);
        }}
      >
        <nav className="hdr__drawer-nav" aria-label="Mobile">
          <NavLink to="/" end className="hdr__drawer-link">
            Home
          </NavLink>

          {drawerGroups.map((g) => {
            const isOpen = expanded === g.key;
            return (
              <div className="hdr__group" data-open={isOpen ? '1' : '0'} key={g.key}>
                <button
                  type="button"
                  className={`hdr__group-btn ${
                    tabIsActive(g.key, location.pathname) ? 'active' : ''
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`hdr-group-${g.key}`}
                  onClick={() => setExpanded(isOpen ? null : g.key)}
                >
                  {g.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="hdr__group-body" id={`hdr-group-${g.key}`} hidden={!isOpen}>
                  <Link to={g.to} className="hdr__group-overview">
                    {g.overview} →
                  </Link>
                  {g.sections.map((section) => (
                    <div className="hdr__group-section" key={section.heading}>
                      <span className="sublabel">{section.heading}</span>
                      {section.items.map((it) => (
                        <Link key={it.label} to={it.to} className="hdr__group-item">
                          {it.icon ? <ItemIcon name={it.icon} /> : null}
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {drawerLinks.map((t) => (
            <NavLink
              key={t.key}
              to={t.to}
              className={() =>
                `hdr__drawer-link ${tabIsActive(t.key, location.pathname) ? 'active' : ''}`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="hdr__drawer-foot">
          <Link to={navCta.to} className="btn btn--primary hdr__drawer-cta">
            Request a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
