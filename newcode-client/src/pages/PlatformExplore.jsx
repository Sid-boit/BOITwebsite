import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { platformModules, platformExplore } from '../data/platformModules';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './PlatformExplore.css';

/* Platform capabilities hub — mirrors the product solutions listing pattern. */
export default function PlatformExplore() {
  const { hero, cta } = platformExplore;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page platform-explore-page" ref={rootRef}>
      <PageHero wash eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle}>
        <div className="platform-explore-actions">
          <Magnetic as={Link} to="/platform/insurance" className="btn btn--primary">
            Insurance platform
          </Magnetic>
          <Magnetic as={Link} to="/platform/banking" className="btn btn--ghost">
            Banking platform
          </Magnetic>
        </div>
      </PageHero>

      <section className="brand-section brand-wash platform-explore-grid-wrap">
        <div className="shell">
          <div className="brand-card-grid brand-card-grid--2 platform-explore-grid">
            {platformModules.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 4) + 1}>
                <GlassPanel
                  as={Link}
                  to={`/platform/capabilities/${m.slug}`}
                  accent
                  className={`platform-explore-card platform-explore-card--tone-${
                    i % 2 === 0 ? 'violet' : 'teal'
                  }`}
                >
                  <div className="platform-explore-card__media">
                    <img src={m.image} alt={m.imageAlt} loading="lazy" />
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.headline}</p>
                  <span className="link-arrow">Explore</span>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={cta.title} body={cta.body} buttons={cta.buttons} />
    </div>
  );
}
