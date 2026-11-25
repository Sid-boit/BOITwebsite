import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { servicesOverview, serviceCategories, serviceCategoryOrder } from '../data/services';
import RotatingHero from '../components/RotatingHero';
import ScrollDeck from '../components/ScrollDeck';
import Commitment from '../components/Commitment';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './Services.css';

import planningRequirements from '../assets/services/planning-requirements.png';
import designArchitecture from '../assets/services/design-architecture.png';
import buildCoding from '../assets/services/build-coding.png';
import testingQualityAssurance from '../assets/services/testing-quality-assurance.png';
import deploymentRelease from '../assets/services/deployment-release.png';
import maintenanceMonitoring from '../assets/services/maintenance-monitoring.png';
import digitalTransformationVisual from '../assets/digitaltransformations.png';
import applicationManagementVisual from '../assets/applicationManagement.png';
import comprehensiveResourceVisual from '../assets/comprehensiveResource.png';
import specialisedResourceVisual from '../assets/SpecialisedResource.png';

/* The services hero rotates through the AI-assisted software delivery
   lifecycle — one scene per stage, matching the BOIT preview's home hero. */
const heroSlides = [
  {
    label: 'Plan',
    word: 'AI-shaped requirements.',
    kicker: '',
    title: 'From feedback to validated specs.',
    copy: '',
    image: planningRequirements,
    alt: 'Planning and requirements stage of software delivery',
  },
  {
    label: 'Design',
    word: 'Architecture, accelerated.',
    kicker: '',
    title: 'Turn intent into a technical blueprint.',
    copy: '',
    image: designArchitecture,
    alt: 'Design and architecture stage of software delivery',
  },
  {
    label: 'Build',
    word: 'Spec first. Code next.',
    kicker: '',
    title: 'Give coding agents a clear brief.',
    copy: '',
    image: buildCoding,
    alt: 'Build and coding stage of software delivery',
  },
  {
    label: 'Test',
    word: 'Quality at every step.',
    kicker: '',
    title: 'Evaluate continuously, not just at release.',
    copy: '',
    image: testingQualityAssurance,
    alt: 'Testing and quality assurance stage of software delivery',
  },
  {
    label: 'Release',
    word: 'AI-assisted releases.',
    kicker: '',
    title: 'Prepare delivery with control.',
    copy: '',
    image: deploymentRelease,
    alt: 'Deployment and release stage of software delivery',
  },
  {
    label: 'Monitor',
    word: 'Proactive operations.',
    kicker: '',
    title: 'Keep learning after launch.',
    copy: '',
    image: maintenanceMonitoring,
    alt: 'Maintenance and monitoring stage of software delivery',
  },
];

const serviceVisuals = {
  'digital-transformation': {
    image: digitalTransformationVisual,
    imageAlt: 'Digital transformation across platforms, devices, and connected workflows',
  },
  'application-support': {
    image: applicationManagementVisual,
    imageAlt: 'Application management teams collaborating across build, support, and enhancement',
  },
  'resource-augmentation': {
    image: comprehensiveResourceVisual,
    imageAlt: 'Specialists joining client teams with end-to-end delivery support',
  },
  'specialised-services': {
    image: specialisedResourceVisual,
    imageAlt: 'Specialized consulting across architecture, process, and operating model',
  },
};

/* The four service groups become the hover deck; each card lists its
   sub-disciplines and expands with matched imagery on hover. */
const serviceTitles = {
  'digital-transformation': 'Digital\nTransformation',
  'application-support': 'Application\nManagement',
  'resource-augmentation': 'Resource\nAugmentation',
  'specialised-services': 'Specialized\nServices',
};

const deckCards = servicesOverview.groups.map((g, i) => ({
  index: i + 1,
  title: serviceTitles[g.id] || g.title,
  body: g.body,
  dark: i % 2 === 1,
  bullets: g.columns.map((c) => `${c.title} — ${c.items.slice(0, 3).join(', ')}`),
  to: {
    'digital-transformation': '/services/digital-transformation',
    'application-support': '/services/application-management',
    'resource-augmentation': '/services/resource-augmentation',
    'specialised-services': '/services/specialised-services',
  }[g.id],
  linkLabel: 'See the full breakdown',
  facts: g.columns.map((c) => ({ k: c.title, v: c.items.join(' · ') })),
  ...(serviceVisuals[g.id] || {}),
}));

export default function Services() {
  const { groups, sidebarCta, whyPartner } = servicesOverview;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page services-page" ref={rootRef}>
      <RotatingHero
        eyebrow=""
        headingLines={['Banking & Insurance.']}
        lede="BOIT brings specialist expertise, AI agents, and connected workflows together to simplify operations and improve customer experiences."
        primary={{ label: 'Meet MIA', to: '/contact' }}
        secondary={{ label: 'Explore solutions', to: '#service-groups' }}
        tags={['', '']}
        bottomLeft=""
        bottomRight="PLAN / BUILD / RUN"
        slides={heroSlides}
        pagination="stages"
      />

      <ScrollDeck
        id="service-groups"
        mode="hover"
        spotlight
        title="Four ways we move your roadmap."
        allLink="/contact"
        allLabel="Request a demo"
        cards={deckCards}
      />

      {/* ------------------------------------------- full group inventory */}
      <section className="brand-band">
        <div className="shell brand-section">
          <SplitText
            as="h2"
            text="Every discipline, spelled out."
            style={{ margin: '0 0 48px', maxWidth: '22ch' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {groups.map((g) => (
              <article key={g.id} id={g.id} className="services-detail">
                <div className="services-detail-grid">
                  <div className="services-detail-sticky">
                    <h3>{g.title}</h3>
                    <Reveal as="p" delay={2} className="lede">
                      {g.body}
                    </Reveal>
                  </div>

                  <div className="services-feature-list">
                    {g.columns.map((c, ci) => (
                      <Reveal key={c.title} delay={ci + 1}>
                        <GlassPanel accent className="services-column-card">
                          <h4>{c.title}</h4>
                          <ul>
                            {c.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </GlassPanel>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ category routes */}
      <section className="shell brand-section services-section">
        <SplitText
          as="h2"
          text="Deep benches for insurance and banking."
          style={{ margin: '0 0 8px', maxWidth: '22ch' }}
        />

        <div className="brand-card-grid brand-card-grid--3">
          {serviceCategoryOrder.map((slug, i) => {
            const cat = serviceCategories[slug];
            return (
              <Reveal key={slug} delay={(i % 4) + 1}>
                <GlassPanel
                  as={Link}
                  to={`/services/${slug}`}
                  accent
                  className="services-practice-card"
                >
                  <h4>{cat.label}</h4>
                  <ul>
                    {cat.sections.map((s) => (
                      <li key={s.id}>{s.name}</li>
                    ))}
                  </ul>
                  <span className="link-arrow">Explore {cat.label}</span>
                </GlassPanel>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="services-section">
        <Commitment eyebrow={whyPartner.eyebrow} title={whyPartner.title} />
      </div>

      <CtaBand
        eyebrow=""
        title={sidebarCta.title}
        body={sidebarCta.body}
        buttons={[
          { label: sidebarCta.cta.label, to: sidebarCta.cta.to, primary: true },
          { label: 'View case studies', to: '/case-studies' },
        ]}
      />
    </div>
  );
}
