import ipa from '../assets/pageimages/IntelligentProcessAutomation.png';
import caseMgmt from '../assets/pageimages/smartCaseManagement.png';
import core from '../assets/pageimages/InsuranceCoreModernization.png';
import medical from '../assets/pageimages/MedicalUnderwriting.png';
import motor from '../assets/pageimages/MotorClaimsManagement.png';
import fraud from '../assets/pageimages/frauddetection.png';
import ekyc from '../assets/pageimages/eKYC.png';
import epos from '../assets/pageimages/ePOS.png';
import aml from '../assets/pageimages/digitalAMl.png';

export const solutions = [
  {
    slug: 'intelligent-process-automation',
    title: 'Intelligent Process Automation',
    headline: 'Leverage AI and RPA to automate complex business workflows efficiently.',
    lede: 'Combine artificial intelligence with robotic process automation to streamline operations, reduce manual effort, and eliminate bottlenecks across your organization for enhanced productivity.',
    image: ipa,
    imageAlt: 'Intelligent Process Automation across new business, underwriting, servicing, and claims',
    pillarsEyebrow: 'Lifecycle',
    pillarsTitle: 'Four stages. One automated spine.',
    pillars: [
      {
        title: 'New Business',
        body: 'Capture applications, enrich data, and route cases so issuance starts faster with fewer hand-offs.',
      },
      {
        title: 'Underwriting',
        body: 'Score risk, surface exceptions, and keep underwriters focused on the files that need a decision.',
      },
      {
        title: 'Policy Servicing',
        body: 'Automate endorsements, renewals, and customer requests while every change stays audit-ready.',
      },
      {
        title: 'Claims',
        body: 'Intake, triage, and settle with AI that packages evidence and recommends the next best action.',
      },
    ],
  },
  {
    slug: 'smart-case-management',
    title: 'Smart Case Management',
    headline: 'Data-driven visibility and intelligent insights for streamlined end-to-end case resolution.',
    lede: 'Centralize case information, automate task assignments, and utilize intelligent insights to ensure timely handling, improved collaboration, and better decision-making for complex scenarios.',
    image: caseMgmt,
    imageAlt: 'Smart Case Management from intake through resolve',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'Intake to resolve, without losing context.',
    pillars: [
      {
        title: 'Intake',
        body: 'Capture and organize incoming information from portals, email, documents, and partner feeds.',
      },
      {
        title: 'Review',
        body: 'Assess and validate with AI that highlights gaps, duplicates, and decision-ready evidence.',
      },
      {
        title: 'Manage',
        body: 'Collaborate across teams with SLA-aware routing, notes, and a single pane of glass.',
      },
      {
        title: 'Resolve',
        body: 'Act, close, and measure outcomes so every case feeds the next cycle of improvement.',
      },
    ],
  },
  {
    slug: 'insurance-core-modernization',
    title: 'Insurance Core Modernization',
    headline: 'Transform legacy systems into agile, future-ready digital insurance core platforms.',
    lede: 'Upgrade outdated policy administration, billing, and claims systems to flexible, scalable architectures that enable rapid product launches and seamless digital customer experiences.',
    image: core,
    imageAlt: 'Insurance Core Modernization — modernize, integrate, optimize, strengthen, deliver',
    pillarsEyebrow: 'Transformation path',
    pillarsTitle: 'Modernize the core without stalling the business.',
    pillars: [
      {
        title: 'Modernize',
        body: 'Migrate and re-platform legacy policy, claims, and billing systems onto a modular stack.',
      },
      {
        title: 'Integrate',
        body: 'Connect systems and data so every channel, partner, and AI service works from one source of truth.',
      },
      {
        title: 'Optimize',
        body: 'Improve efficiency and performance with automation, rules, and real-time operational insight.',
      },
      {
        title: 'Strengthen',
        body: 'Enhance compliance, security, and auditability as the platform scales.',
      },
      {
        title: 'Deliver',
        body: 'Ship better experiences and outcomes for customers, agents, and operations teams.',
      },
    ],
  },
  {
    slug: 'medical-underwriting',
    title: 'Medical Underwriting',
    headline: 'Accelerate risk assessment with automated analysis of digital medical data.',
    lede: 'Leverage digital health data, AI algorithms, and rule-based engines to streamline applicant evaluation, improve risk accuracy, and significantly reduce underwriting turnaround times.',
    image: medical,
    imageAlt: 'Medical Underwriting — collect, assess, evaluate, and decide',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'From evidence to decision, faster.',
    pillars: [
      {
        title: 'Collect',
        body: 'Gather medical and applicant information from forms, labs, and unstructured reports.',
      },
      {
        title: 'Assess',
        body: 'Analyze health data and medical history with extraction, comparison, and risk cues.',
      },
      {
        title: 'Evaluate',
        body: 'Evaluate risk and surface a recommended underwriting decision for the expert.',
      },
      {
        title: 'Decide',
        body: 'Approve, modify, or decline with confidence — every step documented for audit.',
      },
    ],
  },
  {
    slug: 'motor-claims-management',
    title: 'Motor Claims Management',
    headline: 'Optimize the entire claims lifecycle for faster, fairer auto settlements.',
    lede: 'Digitizes FNOL, automates damage assessment via image recognition, and integrates with repair networks to decrease claim cycle times and enhance customer satisfaction.',
    image: motor,
    imageAlt: 'Motor Claims Management — intake, assess, settle, and close',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'A faster path from FNOL to close.',
    pillars: [
      {
        title: 'Intake',
        body: 'Capture claim details instantly from apps, photos, and partner channels.',
      },
      {
        title: 'Assess',
        body: 'Evaluate damage and verify information with extraction, comparison, and fraud signals.',
      },
      {
        title: 'Settle',
        body: 'Approve and process the claim efficiently with STP where rules allow.',
      },
      {
        title: 'Close',
        body: 'Close the claim and keep the customer informed through to satisfaction.',
      },
    ],
  },
  {
    slug: 'fraud-detection',
    title: 'Fraud Detection & Management',
    headline: 'Proactively identify and mitigate fraudulent activities across all business lines.',
    lede: 'Utilize advanced analytics, machine learning models, and pattern recognition to detect anomalies in real-time, reducing financial losses and protecting your organization\'s reputation.',
    image: fraud,
    imageAlt: 'Fraud Detection and Management — detect, alert, verify, and protect',
    pillarsEyebrow: 'Defense loop',
    pillarsTitle: 'See it, score it, stop it.',
    pillars: [
      {
        title: 'Ingest',
        body: 'Pull signals from applications, claims, payments, and identity events into one scoring layer.',
      },
      {
        title: 'Detect',
        body: 'Flag anomalies with behavioral baselines, network analysis, and prioritized alerts.',
      },
      {
        title: 'Verify',
        body: 'Package evidence for investigators and keep every decision explainable.',
      },
      {
        title: 'Protect',
        body: 'Block leakage, recover faster, and feed outcomes back into the model.',
      },
    ],
  },
  {
    slug: 'ekyc-onboarding',
    title: 'e-KYC & Customer Onboarding',
    headline: 'Seamless, compliant, and fully digital identity verification for frictionless customer onboarding.',
    lede: 'Implement secure, paperless Know Your Customer (KYC) processes using biometrics and digital document verification to onboard customers quickly while ensuring strict regulatory compliance.',
    image: ekyc,
    imageAlt: 'e-KYC and Customer Onboarding — scan, process, verify, and issue',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'Secure identity in minutes, not days.',
    pillars: [
      {
        title: 'Scan',
        body: 'Capture ID documents and selfies from any device with guided capture.',
      },
      {
        title: 'Process',
        body: 'Extract, structure, and compare fields automatically across documents.',
      },
      {
        title: 'Verify',
        body: 'Match face, liveness, and fingerprints so only real customers proceed.',
      },
      {
        title: 'Issue',
        body: 'Complete onboarding and issue the account, policy, or card with a full audit trail.',
      },
    ],
  },
  {
    slug: 'epos-agency',
    title: 'ePOS & Agency Management',
    headline: 'Empower agents with digital point-of-sale tools and effective channel management.',
    lede: 'Provide agents with mobile-friendly ePOS capabilities and comprehensive agency dashboards to streamline sales, track performance, and improve distributor engagement.',
    image: epos,
    imageAlt: 'ePOS and Agency Management — quoting, analytics, network, and partnerships',
    pillarsEyebrow: 'Distribution',
    pillarsTitle: 'Quote, manage, and grow the agency force.',
    pillars: [
      {
        title: 'ePOS',
        body: 'Quote, check eligibility, and issue on tablet or web with straight-through paths.',
      },
      {
        title: 'Analytics',
        body: 'See pipeline, conversion, and product mix so leaders coach with facts.',
      },
      {
        title: 'Agency network',
        body: 'Onboard, entitle, and support agents across branches and partners.',
      },
      {
        title: 'Partnerships',
        body: 'Share products, commissions, and documents with a clear commercial trail.',
      },
    ],
  },
  {
    slug: 'digital-aml',
    title: 'Digital AML & Compliance',
    headline: 'Automate and strengthen Anti-Money Laundering (AML) risk management and compliance programs.',
    lede: 'Leverage technology for robust customer screening, transaction monitoring, and regulatory reporting to ensure ongoing compliance with evolving global regulations and reduce operational risk.',
    image: aml,
    imageAlt: 'Digital AML and Compliance — identity, monitoring, screening, and reporting',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'From identity to regulatory report.',
    pillars: [
      {
        title: 'Identity',
        body: 'Verify customers with digital KYC, documents, and biometric assurance.',
      },
      {
        title: 'Monitor',
        body: 'Watch transactions in real time and surface suspicious activity with context.',
      },
      {
        title: 'Screen',
        body: 'Match against PEP, sanctions, and adverse-media lists as risk changes.',
      },
      {
        title: 'Report',
        body: 'Package SAR-ready evidence and file to regulators with a complete audit trail.',
      },
    ],
  },
];

export function getSolution(slug) {
  return solutions.find((s) => s.slug === slug);
}
