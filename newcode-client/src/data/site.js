/* Global chrome, navigation and the shorter pages.
   All copy transcribed from WEBSITE-CONTENT.md. */

import braj from '../assets/Braj.png';
import chintan from '../assets/Chintan.png';
import priyank from '../assets/Priyank.png';
import francis from '../assets/francis.png';
import hiren from '../assets/hiren.png';
import iso9001 from '../assets/iso9001.png';
import iso27001 from '../assets/iso27001.jpeg';
import worldMap from '../assets/country_image@3.png';
import dubai from '../assets/locations/dubai.png';
import india from '../assets/locations/india.png';
import indonesia from '../assets/locations/indonesia.png';
import malaysia from '../assets/locations/malaysia.png';
import singapore from '../assets/locations/singapore.png';
import southAfrica from '../assets/locations/south-africa.png';

import aboutHeroArt from '../assets/about/hero-fintech.png';
import aboutCollaboration from '../assets/about/collaboration.png';
import aboutTalentPhoto from '../assets/about/talent-learning.png';
import aboutCertIso9001 from '../assets/about/cert-iso9001.png';
import aboutCertIso27001 from '../assets/about/cert-iso27001.png';
import partnerIbm from '../assets/about/partner-ibm.png';
import partnerInsuremo from '../assets/about/partner-insuremo.png';
import partnerRedhat from '../assets/about/partner-redhat.png';
import partnerMicrosoft from '../assets/about/partner-microsoft.png';
import partnerNcino from '../assets/about/partner-ncino.png';
import partnerCollabera from '../assets/about/partner-collabera.png';
import customerPrudential from '../assets/about/customer-prudential.png';
import customerGenerali from '../assets/about/customer-generali.png';
import customerFwd from '../assets/about/customer-fwd.png';
import customerAllianz from '../assets/about/customer-allianz.png';
import customerManulife from '../assets/about/customer-manulife.png';
import customerTamuni from '../assets/about/customer-tamuni.png';
import customerSicom from '../assets/about/customer-sicom.png';
import customerEagle from '../assets/about/customer-eagle.png';
//import customerGreatEastern from '../assets/about/customer-great-eastern.png';
import customerStandardBank from '../assets/about/customerStandardBank.png';
import customerPrudentialHongkong from '../assets/about/prudential-hongkong.png';
import customerPrudentialTakaful from '../assets/about/prudential-takaful.png';
import ntuc from '../assets/about/ntuc.png';
import customerCbe from '../assets/about/customer-cbe.png';
import customerAlMasraf from '../assets/about/customer-almasraf.png';
import locationPhotoSingapore from '../assets/locations/singapore.png';
import locationPhotoDubai from '../assets/locations/dubai.png';
import locationPhotoKualaLumpur from '../assets/locations/malaysia.png';
import locationPhotoJakarta from '../assets/locations/indonesia.png';
import locationPhotoBengaluru from '../assets/locations/india.png';
import locationPhotoJohannesburg from '../assets/locations/south-africa.png';

import miaPortrait from '../assets/home/myra-portrait.jpg';
import heroLlm from '../assets/LLM.png';
import heroAgents from '../assets/500+.png';
import heroOrchestrator from '../assets/03-ai-orchestrator.png';

export const brand = {
  name: 'BOIT Global',
  tagline: '',
  wordmark: 'Global',
  ariaLabel: 'BOIT Global home',
};

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform/insurance' },
  { label: 'Product', to: '/product' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Media', to: '/media' },
  { label: 'About', to: '/about' },
];

export const navCta = { label: 'Demo', to: '/contact' };

export const platformMenu = {
  title: '',
  to: '/platform/insurance',
  subtitle: 'Modular AI infrastructure that powers every product workflow.',
  platforms: [
    { label: 'Insurance Platform', to: '/platform/insurance', icon: 'life' },
    { label: 'Banking Platform', to: '/platform/banking', icon: 'banking' },
  ],
  items: [
    {
      label: 'AI Agents & Orchestrator',
      to: '/platform/capabilities/ai-agents-orchestrator',
      icon: 'agents',
    },
    {
      label: 'Unified Data Lake',
      to: '/platform/capabilities/unified-data-lake',
      icon: 'datalake',
    },
    {
      label: 'Smart Decision Configurator',
      to: '/platform/capabilities/smart-decision-configurator',
      icon: 'decision',
    },
    {
      label: 'Intelligent Data Extraction & Comparison',
      to: '/platform/capabilities/intelligent-data-extraction',
      icon: 'extraction',
    },
    {
      label: 'AI Analysis & Summarization',
      to: '/platform/capabilities/ai-analysis-summarization',
      icon: 'analysis',
    },
    {
      label: 'Recommendation Engine',
      to: '/platform/capabilities/recommendation-engine',
      icon: 'recommend',
    },
    {
      label: 'Propensity & Predictive Analytics',
      to: '/platform/capabilities/propensity-predictive-analytics',
      icon: 'propensity',
    },
  ],
};

export const productMenu = {
  strip: {
    label: 'AI Capabilities',
    to: '/product/capabilities',
    linkLabel: 'View all',
    chips: [
      {
        label: 'Intelligent Process Automation',
        detail: '',
        to: '/product/solutions/intelligent-process-automation',
        icon: 'automation',
      },
      { label: 'Smart Case Management', to: '/product/solutions/smart-case-management', icon: 'case' },
      { label: 'Insurance Core Modernization', to: '/product/solutions/insurance-core-modernization', icon: 'core' },
      { label: 'Medical Underwriting', to: '/product/solutions/medical-underwriting', icon: 'medical' },
      { label: 'Motor Claims Management', to: '/product/solutions/motor-claims-management', icon: 'motor' },
      { label: 'Fraud Detection & Management', to: '/product/solutions/fraud-detection', icon: 'fraud' },
      { label: 'e-KYC & Customer Onboarding', to: '/product/solutions/ekyc-onboarding', icon: 'kyc' },
      { label: 'ePOS & Agency Management', to: '/product/solutions/epos-agency', icon: 'pos' },
      { label: 'Digital AML & Compliance', to: '/product/solutions/digital-aml', icon: 'aml' },
    ],
  },
  verticals: [
    {
      label: 'Life, Annuity, & Medical Insurance',
      to: '/product/insurance/life-annuity-medical',
      icon: 'life',
    },
    {
      label: 'Property & Casualty Insurance',
      to: '/product/insurance/property-casualty',
      icon: 'property',
    },
    {
      label: 'Banking & Financial Services',
      to: '/product/banking/financial-services',
      icon: 'banking',
    },
  ],
  pillars: [
    {
      label: 'Insurance',
      to: '/platform/insurance',
      groups: [
        {
          label: 'Accelerate Engagement',
          to: '/platform/insurance#accelerate-engagement',
          items: ['Engagement Portals / App', 'RPA & Chatbots'],
        },
        {
          label: 'Accelerate Operations',
          to: '/platform/insurance#accelerate-operations',
          items: [
            'Case Management and Workbenches',
            'Process, Rules & Content Management',
            'OOTB Reports and Dashboards',
          ],
        },
        {
          label: 'Accelerate Distribution',
          to: '/platform/insurance#accelerate-distribution',
          items: ['Lead Management', 'e-POS', 'SVOC'],
        },
      ],
    },
    {
      label: 'Banking',
      to: '/platform/banking',
      groups: [
        {
          label: 'Accelerate Engagement',
          to: '/platform/banking#accelerate-engagement',
          items: ['Mobile and Tablet Banking', 'Website / Portals / App · RPA & Chatbots'],
        },
        {
          label: 'Accelerate Operations',
          to: '/platform/banking#accelerate-operations',
          items: [
            'BPM and Case Management',
            'Process, Rules & Content Management',
            'OOTB Reports and Dashboards',
          ],
        },
        {
          label: 'Accelerate Distribution',
          to: '/platform/banking#accelerate-channel',
          items: [
            'Customer Relationship Management',
            'Sales and Campaign Management',
            'Single View of Customer',
          ],
        },
      ],
    },
  ],
  badges: [
    { alt: 'ISO 9001 Certified', src: iso9001 },
    { alt: 'ISO 27001 Certified', src: iso27001 },
  ],
};

export const servicesMenu = {
  top: [
    { label: 'Digital Transformation Solutions', to: '/services/digital-transformation', icon: 'automation' },
    { label: 'Application Management & Enhancement', to: '/services/application-management', icon: 'case' },
    { label: 'Comprehensive Resource Augmentation', to: '/services/resource-augmentation', icon: 'agents' },
    { label: 'Specialized Services & Consulting', to: '/services/specialised-services', icon: 'decision' },
  ],
  pillars: [
    {
      label: 'Insurance',
      groups: [
        {
          label: 'Life Insurance',
          to: '/services/life-insurance',
          items: [
            'Retail, Group, Takaful Business',
            'New business, UW, Servicing, and Claims',
            'Rules Engines, BPM, ECM',
            'Digital Portal and Mobile Apps',
          ],
        },
        {
          label: 'Health Insurance',
          to: '/services/health-insurance',
          items: [
            'Retail, Group, Takaful Business',
            'TPA and Provider Portal Platform',
            'Customer Self Service',
            'Digital Portal and Mobile Apps',
          ],
        },
        {
          label: 'General Insurance',
          to: '/services/general-insurance',
          items: [
            'Agent & Customer Portal and Mobile Apps',
            'Case Management and Workflow',
            'Personal and Commercial Lines',
            'Core System Modernization',
          ],
        },
      ],
    },
    {
      label: 'Banking',
      groups: [
        {
          label: 'Retail Banking',
          to: '/services/retail-banking',
          items: [
            'Mobile Banking, Tablet Banking',
            'Digital Account Opening',
            'BPM, ATM, CRM systems',
            'Branch Transformation and Queue Management System',
          ],
        },
        {
          label: 'Corporate Banking',
          to: '/services/corporate-banking',
          items: [
            'Corporate and Business Banking',
            'ODL, Cheque, Multi-currencies system',
            'Payment, Entitlement systems',
            'Group Companies and Renewals',
          ],
        },
        {
          label: 'Investment Banking',
          to: '/services/investment-banking',
          items: [
            'Market Data Analytics',
            'RegTech Solutions',
            'Smart Fraud Detection',
            'Smart Document Processing',
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ Home */

export const home = {
  hero: {
    // eyebrow: '',
    titleLines: [
      {
        parts: [
          { text: 'AI-Native', accent: true },
          { text: ' Transformation', small: true }
        ],
      },
      {
        parts: [
          { text: ' for ', small: true },
          { text: 'Insurance', accent: true },
          { text: ' & ', small: true },
          { text: 'Banking', accent: true },
        ],
      },
    ],
    subtitle:
      'A comprehensive suite of integrated solutions designed to transform insurance and banking operations through intelligent automation and seamless customer experiences.',
    primary: { label: 'Explore the platform', to: '/product' },
    secondary: { label: 'Talk to us', to: '/contact' },
    scrollCue: 'Scroll to explore',
    stats: [
      { value: 'STP', label: 'Higher straight-through processing' },
      { value: '24/7', label: 'World-class application support' },
      { value: 'AI', label: 'Powered decisioning & fraud defense' },
    ],
  },
  clients: {
    eyebrow: 'Trusted By',
    title: 'Esteemed Clients',
    names: [
      'Allianz',
      'NTUC',
      'Prudential',
      'Eagle Insurance',
      'FWD Insurance',
      'SICOM Group',
      'Manulife',
      'Standard Bank',
      'Commercial Bank of Ethiopia',
      'Generali',
      'Great Eastern',
      'Emirates NBD',
      'RAKBANK',
      'Al Masraf',
      'Prime Bank',
      'PAMAC',
      'FEM',
      'Genpact',
    ],
  },
  statsBar: [
    { count: 100, suffix: '+', label: 'Domain and technical consultants' },
    { count: 20, suffix: '+', label: 'Banks and insurance clients' },
    { value: '2 Decades', label: 'Of proven experience' },
    { count: 6, label: 'Country presence' },
    { count: 10, suffix: '+', label: 'Years average client tenure' },
  ],
  roadmap: {
    eyebrow: 'Implementation Roadmap',
    title: 'From discovery to go-live, fully manned.',
    intro:
      'A proven, low-risk path to production — engineered so your most critical timelines stay protected.',
    steps: [
      {
        n: '01',
        title: 'Discovery & Planning',
        body: 'Requirements analysis and system assessment to map the fastest, lowest-risk path to value.',
      },
      {
        n: '02',
        title: 'Configuration & Setup',
        body: 'Platform configuration and data migration tailored to your existing landscape.',
      },
      {
        n: '03',
        title: 'Testing & Training',
        body: 'Comprehensive testing and user training so your teams are production-ready on day one.',
      },
      {
        n: '04',
        title: 'Go-Live & Support',
        body: 'Production deployment with ongoing optimization and world-class application support.',
      },
    ],
  },
  industries: {
    eyebrow: 'Industries',
    title: 'Industries We Serve',
    items: [
      {
        title: 'Technology',
        body: 'Modern platforms, cloud and SaaS engineering for tech-first organisations.',
      },
      {
        title: 'Manufacturing',
        body: 'Operations digitisation, MES integration and Industry 4.0 enablement.',
      },
      {
        title: 'Banking',
        body: 'Core banking modernisation, digital channels and regulatory compliance.',
      },
      {
        title: 'Insurance',
        body: 'Policy administration, claims, underwriting automation for carriers.',
      },
      {
        title: 'Healthcare & Wellness',
        body: 'Patient platforms, EHR integrations and wellness tech transformation.',
      },
    ],
  },
  testimonials: {
    title: 'Customers Talk About Us',
    supporting: '15+ Clients Happy',
    items: [
      {
        initials: 'AT',
        name: 'Allianz Thailand',
        quote:
          'We have been working with BOIT Global for over a year on our system support. Their team is highly accountable, technically skilled, and truly operates as an extension of our own team. We are looking forward to continuing this collaboration and partnership.',
      },
      {
        initials: 'GA',
        name: 'Generali Asia',
        quote:
          'BOIT delivered a digital transformation roadmap that exceeded expectations. Their consultants brought deep insurance domain expertise and modern engineering practices to every engagement.',
      },
      {
        initials: 'FW',
        name: 'FWD Insurance',
        quote:
          "From day one BOIT felt like a trusted partner. Their team's accountability, agility and product knowledge accelerated our core platform rollout across multiple markets.",
      },
    ],
  },
  partners: {
    eyebrow: 'Collaborations',
    title: 'Our Privilege Partners',
    names: ['IBM', 'Microsoft', 'Red Hat', 'eBaoTech', 'Collabera', 'Oracle'],
  },
  featuredTestimonial: {
    quote:
      'We have been working with BOIT Global for over a year on our system support. Their team is highly accountable, technically skilled, and truly operates as an extension of our own team.',
    author: 'Allianz Thailand',
    role: 'System Support Partnership',
  },
  cta: {
    title: 'Ready to transform your business?',
    subtitle:
      'Join leading insurance and banking companies who have already revolutionized their operations with BOIT Global.',
    points: [
      {
        title: 'Quick Implementation',
        body: 'Modular onboarding so you go from kickoff to value fast.',
      },
      {
        title: 'Proven Results',
        body: 'Track record of measurable wins for insurance & banking leaders.',
      },
      {
        title: 'Expert Support',
        body: 'Senior consultants who stay with you long after go-live.',
      },
    ],
    button: { label: 'Demo', to: '/contact' },
  },
};

export const commitment = {
  eyebrow: '',
  items: [
    {
      title: 'Value',
      body: 'Competitive pricing to meet short, medium and long-term business objectives.',
    },
    { title: 'Quality', body: 'Uncompromised standards across every engagement.' },
    { title: 'Partnership', body: 'Built on transparency and ownership.' },
    { title: 'Governance', body: 'Global best practices for implementation and support.' },
  ],
};

/* ----------------------------------------------------------------- About */

export const about = {
  hero: {
    eyebrow: 'About Us',
    title: 'Transforming Insurance & Banking.',
    subtitle:
      'Comprehensive enterprise-grade services designed to accelerate your digital transformation journey with proven methodologies and industry expertise.',
  },
  why: {
    title: 'Why Choose BOIT Global?',
    certifications: [
      { name: 'ISO 9001', label: 'Quality Management', src: iso9001 },
      { name: 'ISO 27001', label: 'Information Security', src: iso27001 },
    ],
    paragraphs: [
      'BOIT team provides workflow automation, digital transformation implementation, maintenance, support, and resource augmentation services with high-quality standards and competitive commercial models.',
      'The BOIT Accelerate Automation Platform is an enterprise-grade digital foundation that empowers banks and insurers to modernize their ecosystems. It enables end-to-end transformation by digitizing engagement, optimizing core operations, and strengthening branch and distribution networks through an AI-powered, modular, and scalable architecture.',
      'Built on cloud-native, microservices, and open-standards technologies, the platform combines pre-built solution components and process accelerators that can function independently or seamlessly together. Its flexible design allows effortless integration with third-party applications, enabling faster transformation, reduced costs, and greater agility across financial enterprises.',
    ],
    stats: [
      { count: 25, suffix: '+', label: 'Years of delivery excellence' },
      { count: 80, suffix: '+', label: 'Years of combined experience' },
      { value: '06+', label: 'Country presence' },
    ],
  },
  locations: {
    eyebrow: 'Global presence',
    title: 'Our offices worldwide',
    helper:
      'Hover or tap a location to see company details, address, and contact information.',
    mapAlt: 'BOIT Global office locations world map',
    map: worldMap,
    items: [
      {
        city: 'Singapore',
        flag: '🇸🇬',
        image: singapore,
        company: 'BOIT Global',
        address: '20 Cecil Street, 05-03 Plus Tower, Singapore 049705',
        uen: '202240327N',
        email: 'marcom@boitglobal.com',
        manager: 'Mr. Chintan Kothari',
        x: 79.2,
        y: 53.4,
      },
      {
        city: 'Dubai',
        flag: '🇦🇪',
        image: dubai,
        company: 'BOIT MEA ',
        address:
          'No: 45427 – 001, IFZA Business Park, DDP, Dubai Silicon Oasis, Dubai, United Arab Emirates',
        phone: '+971-55225-1680',
        email: 'marcom@boitglobal.com',
        x: 63.8,
        y: 39.2,
      },
      {
        city: 'Malaysia',
        flag: '🇲🇾',
        image: malaysia,
        company: 'BOIT Malaysia SDN BHD',
        address:
          'BO1-A-09, Menara 2, KL Eco City, 3, Jln Bangsar 59200 Kuala Lumpur WP Malaysia',
        email: 'marcom@boitglobal.com',
        manager: 'Mr. Chintan Kothari',
        x: 77.4,
        y: 51.8,
      },
      {
        city: 'Indonesia',
        flag: '🇮🇩',
        image: indonesia,
        company: 'PT. BOIT Software Indonesia',
        address:
          'Sahid Sudirman Center, 11th floor, Suite A, Jalan Jendral Sudirman, Jakarta, Indonesia',
        phone: '+6592373013',
        x: 80.6,
        y: 58.8,
      },
      {
        city: 'India',
        flag: '🇮🇳',
        image: india,
        company: 'BOIT India Pvt. Ltd.',
        address: 'The Estate, 8th Floor, Dickenson Road, Bangalore, India – 560042',
        email: 'marcom@boitglobal.com',
        x: 71.8,
        y: 46.6,
      },
      {
        city: 'South Africa',
        flag: '🇿🇦',
        image: southAfrica,
        company: 'BOIT Africa Pty Ltd',
        address: 'Nelson Mandela Square, Sandton, Johannesburg, South Africa',
        phone: '+6592373013',
        x: 56.6,
        y: 68.4,
      },
    ],
  },
  leadership: {
    title: 'BOIT Leadership Team',
    people: [
      {
        name: 'Braj Bhusan Kumar',
        role: 'Co-Founder & CEO',
        photo: braj,
        bio: 'Braj Bhusan Kumar is a seasoned leader with over 20 years of diverse experience in financial services technology management. A software engineer and an Executive Management alumnus of the Yale School of Management, he has a strong foundation in both technical and business leadership.',
        note: 'Braj has a proven track record of delivering complex digital transformation programs across Asia-Pacific, the Middle East, Africa, and North America.',
      },
      {
        name: 'Chintan Kothari',
        role: 'Co-Founder & CCO',
        photo: chintan,
        bio: 'Chintan comes with 22+ years of global leadership experience working across 20+ countries in APAC, Middle East, KSA, Africa and North America regions. Chintan has significant experience in conceptualizing, strategizing and executing multi-million-dollar transformation programs for large organizations.',
        note: 'Chintan is an MBA in Finance and Marketing. Chintan is based out of Singapore and heads the operations for the APAC at BOIT.',
      },
      {
        name: 'Priyank Choudhary',
        role: 'Co-Founder & CTO',
        photo: priyank,
        bio: 'Priyank comes with 15+ years of professional experience spanning into people management, program, quality, customer relations and operations management. Priyank has hands-on experience in implementation and maintenance of end-to-end digital solutions for multiple BFSI organizations globally.',
        note: 'Priyank is an engineering graduate and a passionate technology leader. Priyank is based out of Dubai and heads the operation for the Middle East and Africa Region at BOIT.',
      },
      {
        name: 'Francis Chung',
        role: 'Head of Delivery',
        photo: francis,
        bio: 'With over 20 years of global Delivery Management experience, Francis has led numerous projects in Digital Transformation, AI Implementation, and Resource Outsourcing Management. Certified by the Scrum Alliance as both a Scrum Master and Product Owner, he is renowned for his innovative leadership and adaptability across diverse organizational cultures. Francis is based out of Malaysia.',
        note: 'As Head of Delivery, Francis is responsible for ensuring all customer projects are delivered on time and within budget while exceeding customer expectations. He is accountable for client satisfaction throughout the entire engagement.',
      },
      {
        name: 'Hiren Jain',
        role: 'Head of Product',
        photo: hiren,
        bio: 'Hiren brings extensive experience across digital transformation, product innovation, and business consulting in financial services. He combines deep technology fluency with a clear understanding of customer needs and strategic execution — helping insurers and banks modernize with confidence.',
        note: 'As Head of Product at BOIT, Hiren strengthens our mission to reshape the insurance and banking ecosystem through innovation, intelligence, and measurable impact — accelerating AI-powered transformation for institutions worldwide.',
      },
    ],
  },
};

/* --------------------------------------------------------- About (v2 page) */

export const aboutPage = {
  hero: {
    eyebrow: '',
    titleLines: ['Business expertise.', 'Human ambition.'],
    titleGradient: 'Intelligent impact.',
    lede: 'We help banks and insurers turn AI and digital technology into better business outcomes.',
    primary: { label: 'Get to know BOIT', to: '#story', primary: true },
    secondary: { label: '', to: '' },
    art: aboutHeroArt,
    artCaption: { tag: 'Banking + Insurance', title: 'Built around your business.' },
  },
  stats: [
    { value: '6', label: 'Countries' },
    { value: '200+', label: 'Domain & SME consultants' },
    { value: '20+', label: 'Banking & insurance clients' },
    { value: '10+ years', label: 'Average client tenure' },
  ],
  story: {
    eyebrow: '',
    titleLines: ['Deep in your industry.'],
    titleGradient: 'Focused on your outcomes.',
    photo: aboutCollaboration,
    photoCaption: '',
    lead: 'BOIT is an AI-first fintech firm focused on digital transformation across banking and insurance.',
    paragraphs: [
      'Our leadership brings more than 20 years of industry experience. We combine business knowledge with engineering expertise to help financial institutions modernize customer journeys and the operations behind them.',
      'Our work spans transformation platforms, specialist consulting, application management and enhancement, and AI talent augmentation. We build technology around the needs of the business, with teams that stay close to our customers.',
    ],
  },
  leadership: {
    eyebrow: '',
    title: 'Leadership Team',
    intro:
      '',
    coFoundersLabel: 'Our Co-founders',
    coFounders: [
      {
        name: 'Braj Bhusan Kumar',
        role: 'Co-founder & CEO',
        location: 'Dubai, UAE',
        photo: braj,
        bio: 'A financial services technology leader with more than 20 years of experience. Braj has led complex transformation programs across global markets and previously served as Global Head of Delivery at Azentio. He is an Executive Management alumnus of Yale School of Management.',
        linkedin: 'https://www.linkedin.com/in/brajb/',
      },
      {
        name: 'Chintan Kothari',
        role: 'Co-founder & Chief Customer Officer',
        location: 'Singapore',
        photo: chintan,
        bio: 'Chintan brings more than 22 years of global leadership experience, spanning transformation programs in over 20 countries. His expertise includes intelligent automation, case management, and customer experience. Based in Singapore, he leads BOIT’s APAC operations.',
        linkedin: 'https://www.linkedin.com/in/chintanpkothari/',
      },
      {
        name: 'Priyank Choudhary',
        role: 'Co-founder & Chief Technology Officer',
        location: 'Dubai, UAE',
        photo: priyank,
        bio: 'An engineering graduate and technology leader with experience delivering and maintaining digital solutions for financial institutions. Priyank brings expertise in program delivery, quality, and operations, and leads BOIT’s Middle East and Africa operations from Dubai.',
        linkedin: 'https://www.linkedin.com/in/choudhary-priyank/',
      },
    ],
    productLeadershipLabel: 'Product and delivery leadership',
    productLeadership: [
      {
        name: 'Francis Chung',
        role: 'Senior Vice President & Global Head of Account Delivery',
        location: 'Kuala Lumpur, Malaysia',
        photo: francis,
        bio: 'Francis leads transformation delivery and application management services. BOIT’s appointment announcement highlights more than 20 years of global delivery experience across insurtech, automation, and implementation support, with a focus on customer success and long-term partnerships.',
        linkedin: 'https://www.linkedin.com/in/francis-chungfs/',
      },
      {
        name: 'Hiren Jain',
        role: 'Senior Vice President & Head of Product & Consulting',
        location: 'Kuala Lumpur, Malaysia',
        photo: hiren,
        bio: 'Hiren leads product and consulting, bringing expertise in financial services transformation, digital platforms, and enterprise modernization. His role focuses on BOIT’s product strategy, consulting practice, and AI solutions for insurers and banks.',
        linkedin: 'https://www.linkedin.com/in/hiren-jain-8921308/',
      },
    ],
  },
  partners: {
    eyebrow: '',
    titleLines: ['Technology partnerships.'],
    titleGradient: 'Shared possibilities.',
    intro: 'Our technology ecosystem supports the platforms and integrations behind banking and insurance transformation.',
    items: [
      { name: 'IBM', logo: partnerIbm },
      { name: 'insureMO', logo: partnerInsuremo },
      { name: 'Red Hat', logo: partnerRedhat },
      { name: 'Microsoft', logo: partnerMicrosoft },
      { name: 'nCino', logo: partnerNcino },
      { name: 'Collabera', logo: partnerCollabera },
    ],
  },
  customers: {
    eyebrow: '',
    titleLines: ['Relationships built over'],
    titleGradient: 'long term.',
    intro:
      'BOIT’s customer portfolio spans banking and insurance. We bring domain expertise, implementation support, and ongoing application services to each relationship.',
    items: [
      { name: 'Prudential', logo: customerPrudential },
      { name: 'Generali', logo: customerGenerali },
      { name: 'FWD', logo: customerFwd },
      { name: 'Allianz', logo: customerAllianz },
      { name: 'Manulife', logo: customerManulife },
      { name: 'Prudential Takaful', logo: customerPrudentialTakaful },
      { name: 'TAMUNI Insurance', logo: customerTamuni },
      { name: 'SICOM Group', logo: customerSicom },
      { name: 'Eagle Insurance', logo: customerEagle },
      //{ name: 'Great Eastern', logo: customerGreatEastern },
      { name: 'Standard Bank', logo: customerStandardBank },
      { name: 'Prudential Hongkong', logo: customerPrudentialHongkong },
      { name: 'Commercial Bank of Ethiopia', logo: customerCbe },
      { name: 'NTUC', logo: ntuc },
      { name: 'Al Masraf', logo: customerAlMasraf },
    ],
  },
  certifications: {
    eyebrow: '',
    titleLines: ['Quality and security'],
    titleGradient:['at the foundation.'],
    body: 'BOIT’s corporate presentation identifies ISO 9001 and ISO 27001 certifications. Our delivery approach includes controlled access, protection of personal information, security monitoring, and structured governance.',
    note: '',
    items: [
      { name: 'ISO 9001', label: 'Quality management', badge: aboutCertIso9001 },
      { name: 'ISO 27001', label: 'Information security management', badge: aboutCertIso27001 },
    ],
  },
  offerings: {
    eyebrow: '',
    titleLines: ['Our platforms.'],
    titleGradient: 'Your next chapter.',
    items: [
      {
        number: '01',
        title: 'Accelerate Automation',
        paragraphs: [
          'A modular banking automation platform connecting customer engagement, operations, channels, and process and case management.',
          'AI capabilities include document intelligence, fraud detection, e-KYC, AML risk assessment, and recommendation engines.',
        ],
      },
      {
        number: '02',
        title: 'Insurance automation',
        paragraphs: [
          'Digital workflows and AI capabilities supporting insurance operations, including claims processing and case management.',
          'BOIT’s publicly announced Malaysian claims engagement covers automation, fraud management, compliance, and operational reporting.',
        ],
      },
      {
        number: '03',
        title: 'BOIT 2.0',
        paragraphs: ['Our planned product direction brings focused solutions to motor, medical, and life insurance.'],
        planned: 'Motor360 · Medical360 · Life360',
        plannedNote: 'Working names / planned scope',
        link: { label: 'Explore the product preview', to: '/product' },
      },
    ],
  },
  people: {
    eyebrow: '',
    titleLines: ['Specialist talent.'],
    titleGradient:['Room to grow.'],
    photo: aboutTalentPhoto,
    photoCaption: '',
    photoNote: '',
    lead: 'Our LEAP Hire–Train–Deploy program builds talent for evolving technology needs.',
    paragraphs: [
      'We develop specialists through hiring, reskilling, and upskilling. Our teams cover generative AI, machine learning, data engineering, cloud platforms, architecture, and assurance.',
      'Flexible engagement models support individual specialists, dedicated AI pods, and managed capacity.',
    ],
  },
  locationsShowcase: {
    eyebrow: '',
    titleLines: ['Six countries.'],
    titleGradient: 'One connected team.',
    intro: '',
    items: [
      {
        city: 'Singapore (HQ)',
        caption: '',
        photo: locationPhotoSingapore,
        tag: '',
        detail: 'BOIT Global Pte. Ltd.\n20 Cecil Street, 05-03 Plus Tower\nSingapore 049705',
      },
      {
        city: 'United Arab Emirates',
        caption: '',
        photo: locationPhotoDubai,
        tag: '',
        detail: 'BOIT MEA Information Technology Consultants L.L.C. Office 0107, The Binary by Omniyat  \n Business Bay Dubai, UAE ',
      },
      {
        city: 'Malaysia',
        caption: '',
        photo: locationPhotoKualaLumpur,
        tag: '',
        detail: 'BOIT Malaysia SDN BHD \n BO1-A-09, Menara 2,\n KL Eco City, 3, Jln Bangsar 59200 \n Kuala Lumpur WP Malaysia '
      },
      {
        city: 'Indonesia',
        caption: '',
        photo: locationPhotoJakarta,
        tag: '',
        detail: 'PT. BOIT Software Indonesia \n Sahid Sudirman Center, 11th floor, \n Jalan Jendral Sudirman No Kav 86, \n Jakarta Pusat, Provinsi DKI Jakarta, Kode Pos: 10220'
      },  
      {
        city: 'India',
        caption: '',
        photo: locationPhotoBengaluru,
        tag: '',
        detail: 'BOIT India Pvt. Ltd. \n The Estate, 8th Floor, \n Dickenson Road, \n Bangalore, India – 560042 '
      },
      {
        city: 'South Africa',
        caption: '',
        photo: locationPhotoJohannesburg,
        tag: '',
        detail: 'BOIT Africa (PTY) LTD \n 2nd Floor, Nelson Mandela Square, \n Maude Street West Tower, \n Sandton, 2146, South Africa'
      },
    ],
  },
  news: {
    eyebrow: '',
    title: 'Ideas in action.',
    items: [
      {
        title: 'Claims transformation in Malaysia',
        body: 'BOIT announced a multi-year agreement with a leading Malaysian insurer to implement and maintain its Claims Automation Platform.',
        link: 'https://www.linkedin.com/posts/boit-global_malaysian-insurance-company-activity-7416952522436816896-T3yk',
        linkLabel: 'Read BOIT’s announcement',
      },
      {
        title: 'AI insurance solutions at GITEX Asia',
        body: 'BOIT announced its participation in GITEX Asia 2025, with a tech talk by Braj Bhusan Kumar on its AI-powered insurance solutions.',
        link: 'https://www.linkedin.com/posts/boit-global_insurance-innovation-automation-activity-7319785495075430401-u_d0',
        linkLabel: 'View the event post',
      },
    ],
  },
  closingCta: {
    eyebrow: 'Let’s connect',
    title: 'What could we\nbuild together?',
    body: 'Talk to BOIT about your transformation goals, platforms, or specialist talent needs.',
    button: { label: 'Talk to our team', to: '/contact' },
  },
};

/* ---------------------------------------------------------- Case studies */

export const caseStudies = {
  hero: {
    eyebrow: 'Case Studies',
    title: 'Proven results, in production.',
    subtitle:
      'Real transformations for insurance and banking leaders who needed speed without compromising on control.',
    cta: { label: 'Discuss your transformation', to: '/contact' },
  },
  disclaimer: {
    title: 'Disclaimer',
    body: 'The case studies and transformation examples cited on this page are drawn from publicly available materials published by leading consulting organizations. These references are included for informational purposes only to illustrate proven transformation approaches within the banking and insurance industries. BOIT does not claim any ownership, partnership, endorsement, or commercial association with the organizations or materials referenced. BOIT has no control over the content, accuracy, or privacy practices of external websites. Visiting external links is at the user’s discretion, and BOIT bears no responsibility for the information, opinions, or data hosted by those third-party sources. Users are encouraged to review the terms of use and privacy policies of any external sites they visit.',
  },
  groups: [
    {
      label: 'Insurance',
      items: [
        {
          title: 'The Future of AI in the Insurance Industry',
          source: 'McKinsey',
          body: 'How intelligent decisioning, automation, and analytics are reshaping insurance operations and customer experience.',
          tags: ['AI', 'Insurance', 'Analytics'],
          url: 'https://www.mckinsey.com/industries/financial-services/our-insights/the-future-of-ai-in-the-insurance-industry',
        },
        {
          title: 'Allianz Direct — Advancing as Europe’s Leading Digital Insurer',
          source: 'McKinsey',
          body: 'A digital-first insurer modernised its platform to accelerate product launches and scale across European markets.',
          tags: ['Insurance', 'Digital', 'Modernization'],
          url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/how-we-help-clients/rewired-in-action/allianz-direct-advancing-as-europes-leading-digital-insurer',
        },
        {
          title: 'Aegon Digital Transformation Case Study',
          source: 'InsureMO',
          body: 'How a leading insurer leveraged a modern core platform to accelerate digital product delivery and servicing.',
          tags: ['Insurance', 'Core Platform', 'Digital'],
          url: 'https://insuremo.com/en/case-study-aegon/',
        },
        {
          title: 'AI Automation & Intelligent Workflows in Insurance',
          source: 'IBM',
          body: 'Intelligent workflows and AI-driven automation reducing friction across claims, underwriting, and servicing.',
          tags: ['AI', 'Automation', 'Insurance'],
          url: 'https://www.ibm.com/thought-leadership/institute-business-value/en-us/blog/ai-automation-intelligent-workflows-insurance',
        },
      ],
    },
    {
      label: 'Banking',
      items: [
        {
          title: 'Traditional Ways, Modern Technology',
          source: 'Deloitte',
          body: 'How financial institutions blend legacy strengths with modern technology to accelerate digital transformation.',
          tags: ['Banking', 'Technology', 'Transformation'],
          url: 'https://www.deloitte.com/global/en/Industries/technology/case-studies/traditional-ways-modern-technology.html',
        },
        {
          title: 'Digital Transformation for a Leading Public Sector Bank',
          source: 'KPMG',
          body: 'A connected-enterprise approach enabling a major public sector bank to modernise customer journeys and operations.',
          tags: ['Banking', 'Public Sector', 'Digital'],
          url: 'https://kpmg.com/in/en/services/advisory/consulting/business-consulting/connected-enterprise/case-study-digital-transformation-for-leading-public-sector-bank.html',
        },
        {
          title: 'AEON Bank Digital Transformation',
          source: 'PwC',
          body: 'Building a next-generation digital bank experience with modern architecture and customer-centric design.',
          tags: ['Banking', 'Digital Bank', 'CX'],
          url: 'https://www.pwc.com/gx/en/about/case-studies/aeon-bank.html',
        },
        {
          title: 'Transforming Banking Through Intelligent Hyperautomation',
          source: 'PwC',
          body: 'Intelligent hyperautomation used to streamline banking operations and unlock measurable efficiency gains.',
          tags: ['Banking', 'Hyperautomation', 'Operations'],
          url: 'https://www.pwc.co.za/en/services/case-studies/transforming-banking-through-intelligent-hyperautomation.html',
        },
      ],
    },
  ],
};

/* ----------------------------------------------------------------- Media */

export const media = {
  hero: {
    eyebrow: '',
    title: 'Insights & perspectives.',
    subtitle: 'Thinking on automation, AI, and the future of financial services.',
  },
  video: {
    label: 'Featured video',
    title: 'BOIT Global — InsurTech & Digital Transformation',
    youtubeId: '9d7M9S28Lr8',
    url: 'https://www.youtube.com/watch?v=9d7M9S28Lr8',
  },
  article: {
    source: 'NY Weekly',
    title:
      'BOIT: Revolutionizing Insurance with Cutting-Edge InsurTech Services and Solutions',
    summary:
      'Coverage of how BOIT Global is advancing insurance modernisation with InsurTech services, platforms, and delivery excellence.',
    linkLabel: 'Read article',
    url: 'https://nyweekly.com/tech/boit-revolutionizing-insurance-with-cutting-edge-insurtech-services-and-solutions/',
  },
  events: {
    label: 'Events & updates',
    rowLabel: 'LinkedIn',
    rowTitle: 'Latest from BOIT Global',
    /*
      Screenshots live in src/assets/media/.
      Name each file after `image`, with .png, .jpg, .jpeg, or .webp.
      Example: linkedin-01.jpg
    */
    posts: [
      {
        image: 'linkedin-01',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7289745184039305216',
      },
      {
        image: 'linkedin-02',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7340814074282139650',
      },
      {
        image: 'linkedin-03',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7337948706312192001',
      },
      {
        image: 'linkedin-04',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7322877892432932864',
      },
      {
        image: 'linkedin-05',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7319785495075430401',
      },
      {
        image: 'linkedin-06',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7317184162388443136',
      },
      {
        image: 'linkedin-07',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7308454150172815360',
      },
      {
        image: 'linkedin-08',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7304395619144499201',
      },
      {
        image: 'linkedin-09',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7299533189021106176',
      },
      {
        image: 'linkedin-10',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7290102588450988033',
      },
      {
        image: 'linkedin-11',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7290088832450908161',
      },
    ],
  },
};

/* --------------------------------------------------------------- Contact */

export const contact = {
  hero: {
    eyebrow: 'Demo',
    title: 'Let’s build what’s next.',
    subtitle:
      'Tell us about your goals and our team will get back within one business day.',
  },
  direct: {
    eyebrow: 'Direct',
    email: 'marcom@boitglobal.com',
    body: "We operate as an extension of your team. Share your goals and we'll respond within one business day.",
  },
  fields: [
    { name: 'name', label: 'Full name', type: 'text', required: true },
    { name: 'email', label: 'Work email', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'message', label: 'How can we help?', type: 'textarea', required: true },
  ],
  submit: 'Send message',
  success: {
    title: 'Message received.',
    body: 'Thanks for reaching out — our team will be in touch shortly.',
  },
};

/* -------------------------------------------------------- Footer & misc. */

export const footer = {
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Product', to: '/product' },
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Media', to: '/media' },
    { label: 'About', to: '/about' },
  ],
  copyright: (year) => `© ${year} BOIT Global, Inc. All rights reserved.`,
};

export const cookieConsent = {
  title: 'We value your privacy',
  body: 'We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.',
  options: [
    {
      key: 'necessary',
      label: 'Necessary',
      body: 'Required for the site to function. Always on.',
      locked: true,
    },
    { key: 'analytics', label: 'Analytics', body: 'Helps us understand how the site is used.' },
    { key: 'marketing', label: 'Marketing', body: 'Used for personalised ads or content.' },
  ],
  buttons: {
    customise: 'Customise',
    reject: 'Reject All',
    accept: 'Accept All',
    save: 'Save preferences',
  },
};

export const notFound = {
  title: '404',
  body: "This route drifted off the network. Let's get you back on the path.",
  cta: { label: 'Return home', to: '/' },
};

/* --------------------------------------------------------------- Home (v2) */

export const homePage = {
  hero: {
    eyebrow: '',
    headingLines: ['The intelligence behind', ' your transformation.'],
    headingClassName: 'assets-heading',
    lede: 'At BOIT we combine domain-focused AI, specialist agents, industry expertise, and global delivery to help banks and insurers grow sales, enhance customer service, and streamline operations',
    primary: { label: 'Request Demo', to: '/contact' },
    secondary: { label: 'Explore solutions', to: '/product' },
    tags: [''],
    //bottomLeft: 'SCROLL TO EXPLORE ↓',
    //bottomRight: 'EIGHT ASSETS / ONE CONNECTED ADVANTAGE',
    pagination: 'dots',
    slides: [
      {
        label: 'LLM',
        word: 'BOIT’s fine-tuned LLM.',
        kicker: '',
        title: 'Industry context. Clearer insight.',
        copy: 'A domain-focused model interprets industry information, summarises evidence, and supports Banking and Insurance workflows. \n\n',
        image: heroLlm,
        alt: 'BOIT fine-tuned LLM for banking and insurance',
      },
      {
        label: 'Agents',
        word: '500+ specialised AI agents.',
        kicker: '',
        title: 'Focused intelligence for every task.',
        copy: 'An Insurance and Banking portfolio spanning document intelligence, risk screening, underwriting, claims, engagement, and operations.',
        image: heroAgents,
        alt: '500+ specialised AI agents for insurance and banking',
      },
      {
        label: 'Orchestration',
        word: 'AI agent orchestrators.',
        kicker: '',
        title: 'Connect the work. Preserve the context.',
        copy: 'Orchestrators coordinate agents, tools, and workflow stages, routing exceptions to people for review.',
        image: heroOrchestrator,
        alt: 'AI agent orchestrators coordinating specialist agents',
      },
    ],
  },
  outcomes: {
    eyebrow: '',
    titleLines: ['Less friction.'],
    titleGradient: 'More progress.',
    items: [
      {
        title: 'Less manual work',
        body: 'Reduce repetitive document handling and give teams more time for complex cases.',
      },
      {
        title: 'Faster case handling',
        body: 'Coordinate tasks and handoffs so work moves forward with fewer delays.',
      },
      {
        title: 'Clearer oversight',
        body: 'Bring evidence and case context together to support reviews and compliance checks.',
      },
      {
        title: 'Responsive service',
        body: 'Help customers and advisors get clearer answers and timely updates.',
      },
    ],
  },
  solutions: {
    eyebrow: '',
    title: 'Built around your industry.',
    paths: [
      {
        tag: '',
        title: 'AI-powered digital banking. From customer acquisition to services.',
        body: 'Build digital sales journeys across mobile banking and agency channels. Engage new and existing customers with targeted campaigns, simplify account opening, loan and credit card applications, and connect onboarding with KYC, AML, and FATCA checks.',
        link: { label: 'Explore banking platform', to: '/platform/banking' },
      },
      {
        tag: '',
        title: 'AI-powered digital insurance. From first sale to lasting service.',
        body: 'Connect sales, distribution, and operations through end-to-end digital transformation. Use AI-powered journeys to support customer acquisition, onboarding, underwriting, claims, and policy servicing—helping teams work efficiently and deliver a seamless customer experience.',
        link: { label: 'Explore insurance platform', to: '/platform/insurance' },
      },
    ],
  },
  intelligence: {
    eyebrow: '',
    titleLines: ['From intelligence'],
    titleGradient: 'to business impact.',
    lede: 'Our agentic journey brings industry knowledge, specialist AI agents, and orchestration together. Helping banks and insurers move from isolated automation to connected operations, end to end.',
    cards: [
      {
        tag: '',
        title: 'BOIT’s LLM that speaks\nBanking & Insurance',
        body: 'BOIT’s domain-focused LLM interprets industry language, connects information, and delivers contextual insights across sales, customer service, and operations—helping teams make sense of complex requests and take informed next steps. \n\n\n',
        benefit: 'Less time interpreting information. More time applying expertise.',
      },
      {
        tag: '',
        title: '500+ specialised\nAI agents',
        body: 'An agent portfolio for Insurance and Banking, covering document extraction, comparison, risk screening, case summaries, and coordinated workflows.\n\n\n\n',
        benefit: 'Reduce repetitive effort and respond to changing workloads.',
      },
      {
        tag: '',
        title: 'AI orchestrator driving all\ncoordinated operations.',
        body: 'BOIT’s AI orchestrators bring specialist agents, tools, and people together across sales, customer service, and operations. Our orchestrator direct tasks, preserve context, apply business rules, and route exceptions for human review—keeping complex journeys moving.\n\n',
        benefit: 'Less coordination effort. Faster execution. Clearer accountability.',
      },
    ],
  },
  meetMia: {
    eyebrow: '',
    titleLines: ['Meet MIA.'],
    titleGradient: 'Start with a conversation.',
    body: 'MIA is BOIT’s AI guide to banking and insurance. Explore our solutions, ask questions, and find a clearer path through complex information.',
    button: { label: 'Meet MIA', to: '/contact' },
    note: 'Live voice requires an active API connection. The recorded introduction is available in the preview; live lip sync and CaseX access are not connected yet.',
    photo: miaPortrait,
  },
  whyBoit: {
    eyebrow: '',
    titleLines: ['Technology with'],
    titleGradient: 'industry understanding.',
    intro: 'Business knowledge, engineering expertise, and global teams working together across banking and insurance.',
    stats: [
      { value: '20+ years', label: 'Industry experience across our leadership.' },
      { value: '200+', label: 'Domain and SME consultants.' },
      { value: '20+', label: 'Banking and insurance clients.' },
      { value: '6 countries', label: 'A connected global presence.' },
    ],
    trust: {
      partners: [
        { name: 'IBM', logo: partnerIbm },
        { name: 'insureMO', logo: partnerInsuremo },
        { name: 'Red Hat', logo: partnerRedhat },
        { name: 'Microsoft', logo: partnerMicrosoft },
        { name: 'nCino', logo: partnerNcino },
        { name: 'Collabera', logo: partnerCollabera },
      ],
      customers: [
        { name: 'Prudential', logo: customerPrudential },
        { name: 'Generali', logo: customerGenerali },
        { name: 'FWD', logo: customerFwd },
        { name: 'Prudential Takaful', logo: customerPrudentialTakaful },
        { name: 'Allianz', logo: customerAllianz },
        { name: 'Manulife', logo: customerManulife },
        { name: 'TAMUNI Insurance', logo: customerTamuni },
        { name: 'SICOM Group', logo: customerSicom },
        { name: 'Eagle Insurance', logo: customerEagle },
        //{ name: 'Great Eastern', logo: customerGreatEastern },
        { name: 'Standard Bank', logo: customerStandardBank },
        { name: 'Prudential Hongkong', logo: customerPrudentialHongkong },
        
        { name: 'Commercial Bank of Ethiopia', logo: customerCbe },
        { name: 'Al Masraf', logo: customerAlMasraf },
        { name: 'NTUC', logo: ntuc }
      ],
    },
    markets: {
      title: 'Global presence',
      items: [
        { name: 'Singapore', short: 'Singapore', image: singapore },
        { name: 'United Arab Emirates', short: 'UAE', image: dubai },
        { name: 'Malaysia', short: 'Malaysia', image: malaysia },
        { name: 'Indonesia', short: 'Indonesia', image: indonesia },
        { name: 'India', short: 'India', image: india },
        { name: 'South Africa', short: 'South Africa', image: southAfrica },
      ],
    },
    link: { label: 'Get to know BOIT', to: '/about', primary: true },
  },
  contact: {
    eyebrow: '',
    titleLines: ['What could we simplify', 'for your business?'],
    body: 'Tell us where your teams face complexity. Let’s explore how BOIT can help.',
    button: { label: 'Talk to our team', to: '/contact' },
  },
};
