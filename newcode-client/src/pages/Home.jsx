import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { homePage } from '../data/site';
import RotatingHero from '../components/RotatingHero';
import CountUp from '../components/CountUp';
import Marquee from '../components/Marquee';
import Reveal from '../components/motion/Reveal';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './Home.css';

function SectionTitle({ lines = [], gradient, className = '' }) {
  return (
    <h2 className={className}>
      {lines.map((line) => (
        <React.Fragment key={line}>
          {line}
          <br />
        </React.Fragment>
      ))}
      {gradient ? <span className="gradient-text">{gradient}</span> : null}
    </h2>
  );
}

export default function Home() {
  const { hero, outcomes, solutions, intelligence, meetMia, whyBoit, contact } = homePage;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page home-page" ref={rootRef}>
      {/* -------------------------------------------------------------- hero */}
      <RotatingHero
        eyebrow={hero.eyebrow}
        headingLines={hero.headingLines}
        headingClassName={hero.headingClassName}
        lede={hero.lede}
        primary={hero.primary}
        secondary={hero.secondary}
        tags={hero.tags}
        bottomLeft={hero.bottomLeft}
        bottomRight={hero.bottomRight}
        slides={hero.slides}
        pagination={hero.pagination}
      />

      {/* ----------------------------------------------------------- outcomes */}
      <section className="home-section shell" id="outcomes">
        <Reveal as="p" className="eyebrow">
          {outcomes.eyebrow}
        </Reveal>
        <SectionTitle lines={outcomes.titleLines} gradient={outcomes.titleGradient} />
        <div className="home-outcomes">
          {outcomes.items.map((it) => (
            <article key={it.title} className="home-panel">
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- solutions */}
      <section className="home-band" id="solutions">
        <div className="shell home-section">
          <Reveal as="p" className="eyebrow">
            {solutions.eyebrow}
          </Reveal>
          <h2>{solutions.title}</h2>
          <div className="home-paths">
            {solutions.paths.map((p) => (
              <article key={p.tag} className="home-panel">
                <span>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Magnetic as={Link} to={p.link.to} className="btn btn--primary">
                  {p.link.label}
                </Magnetic>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- intelligence */}
      <section className="boit-intelligence" id="intelligence">
        <div className="shell">
          <Reveal as="p" className="eyebrow">
            {intelligence.eyebrow}
          </Reveal>
          <SectionTitle lines={intelligence.titleLines} gradient={intelligence.titleGradient} />
          <p className="intelligence-lede">{intelligence.lede}</p>

          <div className="intelligence-cards">
            {intelligence.cards.map((c) => (
              <article key={c.title} className="home-panel">
                {c.tag ? <span>{c.tag}</span> : null}
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <p className="diff-benefit">{c.benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ meet MIA */}
      {/* <section className="home-band" id="meet-mia">
        <div className="shell home-section home-mia">
          <div>
            <Reveal as="p" className="eyebrow">
              {meetMia.eyebrow}
            </Reveal>
            <SectionTitle lines={meetMia.titleLines} gradient={meetMia.titleGradient} />
            <p>{meetMia.body}</p>
            <Magnetic as={Link} to={meetMia.button.to} className="btn btn--primary">
              {meetMia.button.label}
            </Magnetic>
            <p className="home-note">{meetMia.note}</p>
          </div>
          <img className="home-mia-photo" src={meetMia.photo} alt="MIA, BOIT’s AI assistant" loading="lazy" />
        </div>
      </section> */}

      {/* ------------------------------------------------------------ why BOIT */}
      <section className="home-section shell" id="why-boit">
        <Reveal as="p" className="eyebrow">
          {whyBoit.eyebrow}
        </Reveal>
        <SectionTitle lines={whyBoit.titleLines} gradient={whyBoit.titleGradient} />
        <p className="home-intro">{whyBoit.intro}</p>
        <div className="home-outcomes">
          {whyBoit.stats.map((s) => (
            <article key={s.label} className="home-panel">
              <CountUp as="h3" value={s.value} />
              <p>{s.label}</p>
            </article>
          ))}
        </div>
        <div className="home-trust">
          <div className="home-trust-customers">
            <h3>Marquee customers</h3>
            <Marquee items={whyBoit.trust.customers} duration={40} className="home-customer-marquee" />
          </div>
          <div className="home-trust-partners">
            <h3>Technology partners</h3>
            <Marquee items={whyBoit.trust.partners} duration={36} className="home-partner-marquee" />
          </div>
        </div>
        <div className="home-panel home-trust-markets">
          <h3>{whyBoit.markets.title}</h3>
          <div className="home-trust-logos home-trust-logos--markets">
            {whyBoit.markets.items.map((place) => (
              <div
                key={place.name}
                className="home-trust-logo-cell home-trust-market-cell"
                title={place.name}
              >
                <div className="home-trust-market-photo">
                  <img src={place.image} alt="" loading="lazy" />
                </div>
                <span className="home-trust-market-name">{place.short}</span>
              </div>
            ))}
          </div>
        </div>
        <Link to={whyBoit.link.to} className="link-arrow">
          {whyBoit.link.label}
        </Link>
      </section>

      {/* ------------------------------------------------------------- contact */}
      <section className="home-contact home-section" id="contact">
        <div className="shell">
          <Reveal as="p" className="eyebrow">
            {contact.eyebrow}
          </Reveal>
          <SectionTitle lines={contact.titleLines} />
          <p>{contact.body}</p>
          <Magnetic as={Link} to={contact.button.to} className="btn btn--primary">
            {contact.button.label}
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
