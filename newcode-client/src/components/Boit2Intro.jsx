import React from 'react';
import { Link } from 'react-router-dom';
import motorIllustration from '../assets/boit2/motor-illustration.png';
import medicalIllustration from '../assets/boit2/medical-illustration.png';
import lifeIllustration from '../assets/boit2/life-illustration.png';
import './Boit2Intro.css';

const products = [
  {
    id: 'product-motor',
    variant: 'motor',
    number: '01',
    floatKey: 'float-motor',
    label: 'Motor insurance',
    name: 'Motor360',
    jumpLabel: 'Motor',
    image: motorIllustration,
    imageAlt: 'Blue car on a winding road beneath a teal protective arc',
    tagline: 'A clearer journey from incident to resolution.',
    desc: 'A planned motor insurance solution designed to connect claims intake, evidence collection, assessment, and case management. Our focus is on reducing manual coordination and helping claims teams move each case forward with greater visibility.',
    focus: ['Digital claims submission', 'Document and image review', 'Assessment workflows', 'Fraud indicators', 'Claims tracking'],
  },
  {
    id: 'product-medical',
    variant: 'medical',
    number: '02',
    floatKey: 'float-medical',
    label: 'Medical insurance',
    name: 'Medical360',
    jumpLabel: 'Medical',
    image: medicalIllustration,
    imageAlt: 'Medical professional with a tablet beside a modern clinic',
    tagline: 'Bring medical information into focus.',
    desc: 'A planned medical insurance solution designed to help teams organize medical evidence and support underwriting and claims reviews. Our focus is on turning complex information into clear summaries while keeping expert judgment central to decisions.',
    focus: ['Medical document processing', 'Evidence summaries', 'Underwriting support', 'Claims review', 'Exception management'],
  },
  {
    id: 'product-life',
    variant: 'life',
    number: '03',
    floatKey: 'float-life',
    label: 'Life insurance',
    name: 'Life360',
    jumpLabel: 'Life',
    image: lifeIllustration,
    imageAlt: 'Family enjoying a garden beneath a blue and purple protective arc',
    tagline: 'Support every stage of the life insurance journey.',
    desc: 'A planned life insurance solution designed to connect customer onboarding, new business, underwriting, and policy servicing. Our focus is on simplifying handoffs and helping customers, agents, and operations teams stay informed throughout the policy lifecycle.',
    focus: ['Digital onboarding', 'Application management', 'Underwriting workflows', 'Policy servicing', 'Customer and agent visibility'],
  },
];

export default function Boit2Intro() {
  return (
    <div className="boit2-intro">
      <section className="hero playful-hero">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1>
              Insurance.
              <br />
              <span className="gradient-text">Reimagined.</span>
            </h1>
            <p className="hero-lede">
              Big ideas for simpler insurance.
              <br />
              Meet the motor, medical, and life products we&rsquo;re building to move the industry forward.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#boit2">
                Meet the products
              </a>
              <Link className="btn btn--primary" to="/contact">
                Let&rsquo;s talk
              </Link>
            </div>
            
          </div>

          <div className="hero-playground" aria-label="BOIT 2.0 motor, medical and life products">
            <div className="playground-grid" />
            <div className="halo halo-one" />
            <div className="halo halo-two" />
            <div className="central-orb">
              {/* <span>
                bo<span>IT</span>
              </span>
              <small>2.0</small> */}
            </div>
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`} className={`floating-product ${p.floatKey}`}>
                <span className="float-icon float-icon--image">
                  <img src={p.image} alt="" loading="lazy" />
                </span>
                <span>
                  <small>{p.label.toUpperCase()}</small>
                  <strong>{p.name}</strong>
                </span>
              </a>
            ))}
            <span className="spark spark-one">✳</span>
            <span className="spark spark-two">✧</span>
            <span className="concept-tag"></span>
          </div>
        </div>
        <div className="hero-bottom shell">
          <span></span>
          <span></span>
        </div>
      </section>

      <section id="boit2" className="showcase">
        <div className="shell">
          <div className="showcase-heading">
            <div>
              <p className="eyebrow eyebrow--accent"></p>
              <h2>
                Three products.
                <br />
                <span className="gradient-text">A world of possibility.</span>
              </h2>
            </div>
            <div className="showcase-intro">
              <p>
                We&rsquo;re building a new generation of intelligent insurance products across motor, medical, and
                life. Each product focuses on simplifying complex workflows, supporting informed decisions, and
                improving the experience for customers and insurance teams.
              </p>
              <span className="working-note"></span>
            </div>
          </div>

          {/* <div className="product-jump">
            {products.map((p, i) => (
              <a key={p.id} href={`#${p.id}`}>
                {`0${i + 1}`} <b>{p.jumpLabel}</b>
              </a>
            ))}
          </div> */}

          <div className="product-grid">
            {products.map((p) => (
              <article key={p.id} id={p.id} className={`product-card ${p.variant}`}>
                <div className="product-art">
                  <img
                    className="product-illustration"
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                  />
                  {/* <span className="art-label">{p.label}</span>
                  <span className="art-number">{p.number}</span> */}
                  {/* <span className="art-caption">BOIT 2.0 / {p.jumpLabel.toUpperCase()}</span> */}
                </div>
                <div className="product-content">
                  {/* <span className="status">
                    <i />
                    Planned product
                  </span> */}
                  <h3>BOIT {p.name}</h3>
                  <p className="product-tagline">{p.tagline}</p>
                  <p className="product-desc">{p.desc}</p>
                  <p className="focus-label">Planned focus areas</p>
                  <ul className="focus-list">
                    {p.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link className="product-link" to="/contact">
                    Discuss {p.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="showcase-bottom">
            <p></p>
            {/* <a className="link-arrow" href="#pillars">
              Explore the BOIT 2.0 vision <span>↓</span>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
