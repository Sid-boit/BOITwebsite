import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { aboutPage } from '../data/site';
import CtaBand from '../components/CtaBand';
import CountUp from '../components/CountUp';
import Marquee from '../components/Marquee';
import Reveal from '../components/motion/Reveal';
import Magnetic from '../components/motion/Magnetic';
import useTiltPanels from '../hooks/useTiltPanels';
import './About.css';

/* Renders title lines with an optional trailing gradient line, matching the
   `.grad-text` treatment used across the site. */
function SectionTitle({ lines = [], gradient, className = '' }) {
  return (
    <h2 className={className}>
      {lines.map((line) => (
        <React.Fragment key={line}>
          {line}
          <br />
        </React.Fragment>
      ))}
      {gradient ? <span className="grad-text">{gradient}</span> : null}
    </h2>
  );
}

function LeaderCard({ person }) {
  return (
    <article className="leader-card">
      <div className="leader-portrait">
        <img src={person.photo} alt={person.name} />
      </div>
      <div className="leader-copy">
        <span className="leader-location">{person.location}</span>
        <h3>{person.name}</h3>
        <p className="leader-role">{person.role}</p>
        <p>{person.bio}</p>
        {person.linkedin ? (
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn profile
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function About() {
  const {
    hero,
    stats,
    story,
    leadership,
    partners,
    customers,
    certifications,
    people,
    locationsShowcase,
    news,
    closingCta,
  } = aboutPage;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="about-page" ref={rootRef}>
      {/* -------------------------------------------------------------- hero */}
      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div>
            <Reveal as="p" className="eyebrow">
              {hero.eyebrow}
            </Reveal>
            <h1 className="fade-up">
              {hero.titleLines.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <span className="grad-text">{hero.titleGradient}</span>
            </h1>
            <p className="about-hero-lede fade-up">{hero.lede}</p>
            <div className="fade-up" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Magnetic as="a" href={hero.primary.to} className="btn btn--primary">
                {hero.primary.label}
              </Magnetic>
              <a className="about-leadership-link" href={hero.secondary.to}>
                {hero.secondary.label}
              </a>
            </div>
          </div>

          <div className="about-visual about-visual--art">
            <img
              src={hero.art}
              alt="BOIT at the center of a connected sphere linking a protective shield and banking institution"
            />
            <div className="hero-art-caption">
              <span>{hero.artCaption.tag}</span>
              <strong>{hero.artCaption.title}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- stats */}
      <section className="about-stats shell" aria-label="BOIT at a glance">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp value={s.value} />
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* -------------------------------------------------------------- story */}
      <section id="story" className="shell about-section story-grid">
        <div className="story-grid__media">
          <Reveal as="p" className="eyebrow">
            {story.eyebrow}
          </Reveal>
          <SectionTitle lines={story.titleLines} gradient={story.titleGradient} />
          <figure className="story-photo">
            <img src={story.photo} alt="Colleagues collaborating around a laptop in a bright office" loading="lazy" />
            <figcaption>{story.photoCaption}</figcaption>
          </figure>
        </div>
        <div className="story-grid__copy">
          <p className="large-copy">{story.lead}</p>
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- leadership */}
      <section id="leadership" className="about-leadership">
        <div className="shell about-section">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow">
                {leadership.eyebrow}
              </Reveal>
              <h2>{leadership.title}</h2>
            </div>
            <p>{leadership.intro}</p>
          </div>

          <h3 className="team-subheading">{leadership.coFoundersLabel}</h3>
          <div className="leadership-grid">
            {leadership.coFounders.map((p) => (
              <LeaderCard key={p.name} person={p} />
            ))}
          </div>

          <h3 className="team-subheading">{leadership.productLeadershipLabel}</h3>
          <div className="leadership-grid leadership-grid--two">
            {leadership.productLeadership.map((p) => (
              <LeaderCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ partners */}
      <section id="partners" className="about-tint about-partners">
        <div className="shell about-section">
          <Reveal as="p" className="eyebrow">
            {partners.eyebrow}
          </Reveal>
          <SectionTitle lines={partners.titleLines} gradient={partners.titleGradient} />
          <p className="section-intro">{partners.intro}</p>
        </div>
        <div className="about-partner-strip">
          <Marquee items={partners.items} duration={36} className="about-partner-marquee" />
        </div>
      </section>

      {/* ----------------------------------------------------------- customers */}
      <section id="customers" className="about-section about-customers">
        <div className="shell">
          <div className="section-head">
            <div>
              <Reveal as="p" className="eyebrow">
                {customers.eyebrow}
              </Reveal>
              <SectionTitle lines={customers.titleLines} gradient={customers.titleGradient}/>
            </div>
            <p>{customers.intro}</p>
          </div>
        </div>
        <div className="about-customer-strip">
          <Marquee items={customers.items} duration={42} className="about-customer-marquee" />
        </div>
      </section>

      {/* ------------------------------------------------------- certifications */}
      <section id="certifications" className="about-certs">
        <div className="shell about-section cert-layout">
          <div>
            <Reveal as="p" className="eyebrow">
              {certifications.eyebrow}
            </Reveal>
            <SectionTitle lines={certifications.titleLines} gradient={certifications.titleGradient}/>
            <p>{certifications.body}</p>
            <small>{certifications.note}</small>
          </div>
          <div className="cert-pair">
            {certifications.items.map((c) => (
              <article key={c.name}>
                <img src={c.badge} alt={`${c.name} certification badge`} />
                <h3>{c.name}</h3>
                <p>{c.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- offerings */}
      {/* <section id="products" className="shell about-section">
        <Reveal as="p" className="eyebrow">
          {offerings.eyebrow}
        </Reveal>
        <SectionTitle lines={offerings.titleLines} gradient={offerings.titleGradient} />
        <div className="offering-grid">
          {offerings.items.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              {item.planned ? (
                <p className="planned">
                  {item.planned}
                  <br />
                  {item.plannedNote}
                </p>
              ) : null}
              {item.link ? <Link to={item.link.to}>{item.link.label}</Link> : null}
            </article>
          ))}
        </div>
      </section> */}

      {/* -------------------------------------------------------------- people */}
      <section id="people" className="about-tint">
        <div className="shell about-section">
          {people.eyebrow ? (
            <Reveal as="p" className="eyebrow">
              {people.eyebrow}
            </Reveal>
          ) : null}
          <SectionTitle lines={people.titleLines} gradient={people.titleGradient} />
          <div className="story-grid story-grid--talent">
            <figure className="talent-photo">
              <img src={people.photo} alt="Professionals sharing knowledge around a laptop" loading="lazy" />
              {(people.photoCaption || people.photoNote) ? (
                <figcaption>
                  {people.photoCaption}
                  {people.photoNote ? <small>{people.photoNote}</small> : null}
                </figcaption>
              ) : null}
            </figure>
            <div className="story-grid__copy">
              <p className="large-copy">{people.lead}</p>
              {people.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ locations */}
      <section id="locations" className="shell about-section">
        <Reveal as="p" className="eyebrow">
          {locationsShowcase.eyebrow}
        </Reveal>
        <SectionTitle lines={locationsShowcase.titleLines} gradient={locationsShowcase.titleGradient} />
        <p className="section-intro">{locationsShowcase.intro}</p>
        <div className="location-grid">
          {locationsShowcase.items.map((loc) => (
            <article key={loc.city}>
              <figure className="location-photo">
                <img src={loc.photo} alt={`${loc.city} skyline`} loading="lazy" />
                <figcaption>{loc.caption}</figcaption>
              </figure>
              <div className="location-details">
                <span>{loc.tag}</span>
                <h3>{loc.city}</h3>
                {loc.detail ? <p>{loc.detail}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------- news */}
      <section className="about-tint">
        <div className="shell about-section">
          <Reveal as="p" className="eyebrow">
            {news.eyebrow}
          </Reveal>
          <h2>{news.title}</h2>
          <div className="news-grid">
            {news.items.map((n) => (
              <article key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
                <a href={n.link} target="_blank" rel="noopener noreferrer">
                  {n.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={closingCta.eyebrow}
        title={closingCta.title}
        body={closingCta.body}
        buttons={[{ label: closingCta.button.label, to: closingCta.button.to, primary: true }]}
      />
    </div>
  );
}
