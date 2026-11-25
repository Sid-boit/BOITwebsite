/* Offerings for the Product atom hero orbit. */

const asset = (file) => `/product-atom/assets/${file}`;

export const productAtomOfferings = [
  {
    id: 'life',
    title: 'Life, Annuity & Medical Insurance',
    type: 'vertical',
    path: '/product/insurance/life-annuity-medical',
    description:
      'Connect life, annuity, and medical insurance journeys—from new business and underwriting to policy servicing, claims, and customer engagement.',
    tags: ['Life & takaful', 'Annuity', 'Medical & TPA'],
    image: asset('01-life-annuity-medical.webp'),
  },
  {
    id: 'property',
    title: 'Property & Casualty Insurance',
    type: 'vertical',
    path: '/product/insurance/property-casualty',
    description:
      'Unify personal and commercial lines with intelligent underwriting, policy servicing, claims, and recovery across home, motor, fleet, and specialty risks.',
    tags: ['Personal lines', 'Commercial lines', 'Claims & recovery'],
    image: asset('02-property-casualty.webp'),
  },
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    type: 'vertical',
    path: '/product/banking/financial-services',
    description:
      'Connect retail, corporate, and investment banking through digital channels, automated operations, customer intelligence, and stronger risk oversight.',
    tags: ['Retail banking', 'Corporate banking', 'Investment banking'],
    image: asset('03-financial-services.webp'),
  },
  {
    id: 'automation',
    title: 'Intelligent Process Automation',
    type: 'solution',
    path: '/product/solutions/intelligent-process-automation',
    description:
      'Combine AI and RPA to coordinate new business, underwriting, policy servicing, and claims—reducing manual handoffs and keeping exceptions visible.',
    tags: ['New business', 'Underwriting', 'Servicing & claims'],
    image: asset('04-intelligent-process-automation.webp'),
  },
  {
    id: 'case',
    title: 'Smart Case Management',
    type: 'solution',
    path: '/product/solutions/smart-case-management',
    description:
      'Bring intake, evidence review, task assignment, and resolution into one case view, with preserved context, collaboration, and SLA-aware routing.',
    tags: ['Intake & review', 'SLA-aware routing', 'Case resolution'],
    image: asset('05-smart-case-management.webp'),
  },
  {
    id: 'core',
    title: 'Insurance Core Modernization',
    type: 'solution',
    path: '/product/solutions/insurance-core-modernization',
    description:
      'Modernize policy administration, billing, and claims on a modular architecture that connects systems and supports new products and digital experiences.',
    tags: ['Modernize', 'Integrate', 'Optimize & scale'],
    image: asset('06-insurance-core-modernization.webp'),
  },
  {
    id: 'medical',
    title: 'Medical Underwriting',
    type: 'solution',
    path: '/product/solutions/medical-underwriting',
    description:
      'Organize medical evidence, analyze health and applicant data, and surface risk insights and recommended decisions for expert underwriting review.',
    tags: ['Collect evidence', 'Assess risk', 'Support decisions'],
    image: asset('07-medical-underwriting.webp'),
  },
  {
    id: 'motor',
    title: 'Motor Claims Management',
    type: 'solution',
    path: '/product/solutions/motor-claims-management',
    description:
      'Digitize the motor claims journey from first notice of loss to closure, connecting image-based damage assessment, repair networks, and settlement workflows.',
    tags: ['Digital FNOL', 'Damage assessment', 'Settlement'],
    image: asset('08-motor-claims-management.webp'),
  },
  {
    id: 'fraud',
    title: 'Fraud Detection & Management',
    type: 'solution',
    path: '/product/solutions/fraud-detection',
    description:
      'Analyze claims, applications, payments, and identity signals to identify anomalies, prioritize alerts, and package evidence for investigators.',
    tags: ['Anomaly detection', 'Investigation', 'Evidence trails'],
    image: asset('09-fraud-detection.webp'),
  },
  {
    id: 'kyc',
    title: 'e-KYC & Customer Onboarding',
    type: 'solution',
    path: '/product/solutions/ekyc-onboarding',
    description:
      'Guide digital identity capture, document extraction, face matching, and liveness checks through to account, policy, or card onboarding.',
    tags: ['Document verification', 'Biometrics', 'Digital onboarding'],
    image: asset('10-ekyc-onboarding.webp'),
  },
  {
    id: 'agency',
    title: 'ePOS & Agency Management',
    type: 'solution',
    path: '/product/solutions/epos-agency',
    description:
      'Equip agents with digital quoting and issuance, pipeline analytics, and agency management tools across branches, distribution partners, and mobile channels.',
    tags: ['Quote & issue', 'Agency network', 'Sales analytics'],
    image: asset('11-epos-agency.webp'),
  },
  {
    id: 'aml',
    title: 'Digital AML & Compliance',
    type: 'solution',
    path: '/product/solutions/digital-aml',
    description:
      'Connect customer screening, transaction monitoring, sanctions and PEP checks, and regulatory reporting with risk context and auditable evidence.',
    tags: ['Screen & monitor', 'Risk assessment', 'Regulatory reporting'],
    image: asset('12-digital-aml.webp'),
  },
];

export const productAtomDefaultSelection = {
  kicker: 'ONE CONNECTED PORTFOLIO',
  title: 'Many solutions. One intelligent foundation.',
  description:
    'Explore every offering around the AI nucleus. Each connects industry workflows with shared intelligence and coordinated execution.',
  tags: ['3 business verticals', '9 business solutions'],
  linkTo: '/product#pillars',
  linkLabel: 'View all offerings',
};

export const productAtomNucleusSelection = {
  kicker: 'THE INTELLIGENCE AT THE CENTRE',
  title: 'One AI nucleus. A connected product universe.',
  description:
    'BOIT’s domain-focused LLM, specialist agents, and AI orchestration connect industry context, execution, and human oversight across the portfolio.',
  tags: ['Domain LLM', 'Specialist agents', 'AI orchestration'],
  linkTo: '/product#pillars',
  linkLabel: 'Explore all 12 offerings',
};

export const PRODUCT_ATOM_ORBITS = [
  { rx: 350, ry: 122, tilt: 0, offset: 0.18, speed: 1 },
  { rx: 290, ry: 115, tilt: -52, offset: 0.73, speed: 0.86 },
  { rx: 290, ry: 115, tilt: 52, offset: 1.21, speed: -1.08 },
];

export const PRODUCT_ATOM_CENTER = { x: 450, y: 300 };

export function productAtomOrbitPoint(index, timePhase) {
  const plane = index % PRODUCT_ATOM_ORBITS.length;
  const slot = Math.floor(index / PRODUCT_ATOM_ORBITS.length);
  const orbit = PRODUCT_ATOM_ORBITS[plane];
  const angle = slot * Math.PI / 2 + orbit.offset + timePhase * orbit.speed;
  const u = orbit.rx * Math.cos(angle);
  const v = orbit.ry * Math.sin(angle);
  const tilt = (orbit.tilt * Math.PI) / 180;
  return {
    x: PRODUCT_ATOM_CENTER.x + u * Math.cos(tilt) - v * Math.sin(tilt),
    y: PRODUCT_ATOM_CENTER.y + u * Math.sin(tilt) + v * Math.cos(tilt),
    depth: Math.sin(angle),
    plane,
  };
}
