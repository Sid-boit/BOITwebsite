// Single source of truth for approved copy, mirrored from boit-global-content.md.
// Pages consume this module so text stays consistent and easy to hand off to a CMS/API later.

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Media', to: '/media' },
  { label: 'About', to: '/about' },
];

export const brand = {
  name: 'BOIT Global',
  tagline: 'Intelligent automation for insurance & banking.',
};

export const home = {
  hero: {
    eyebrow: 'Accelerate Automation Platform',
    title: ['Intelligent automation', 'for insurance & banking'],
    subtitle:
      'A comprehensive suite of integrated solutions designed to transform insurance and banking operations through intelligent automation and seamless customer experiences.',
    primaryCta: { label: 'Explore the platform', to: '/product' },
    secondaryCta: { label: 'Talk to us', to: '/contact' },
    stats: [
      { value: 'STP', label: 'Higher straight-through processing' },
      { value: '24/7', label: 'World-class application support' },
      { value: 'AI', label: 'Powered decisioning & fraud defense' },
    ],
  },
  roadmap: {
    eyebrow: 'Implementation Roadmap',
    title: 'From discovery to go-live, fully manned.',
    intro:
      'A proven, low-risk path to production — engineered so your most critical timelines stay protected.',
    steps: [
      {
        id: '01',
        title: 'Discovery & Planning',
        body: 'Requirements analysis and system assessment to map the fastest, lowest-risk path to value.',
      },
      {
        id: '02',
        title: 'Configuration & Setup',
        body: 'Platform configuration and data migration tailored to your existing landscape.',
      },
      {
        id: '03',
        title: 'Testing & Training',
        body: 'Comprehensive testing and user training so your teams are production-ready on day one.',
      },
      {
        id: '04',
        title: 'Go-Live & Support',
        body: 'Production deployment with ongoing optimization and world-class application support.',
      },
    ],
  },
  testimonial: {
    quote:
      'We have been working with BOIT Global for over a year on our system support. Their team is highly accountable, technically skilled, and truly operates as an extension of our own team.',
    author: 'Allianz Thailand',
    role: 'System Support Partnership',
  },
  commitment: {
    eyebrow: 'Our Commitment',
    items: [
      { title: 'Value', body: 'Competitive pricing to meet short, medium and long-term business objectives.' },
      { title: 'Quality', body: 'Uncompromised standards across every engagement.' },
      { title: 'Partnership', body: 'Built on transparency and ownership.' },
      { title: 'Governance', body: 'Global best practices for implementation and support.' },
    ],
  },
  cta: {
    title: 'Ready to transform your business?',
    points: ['Quick Implementation', 'Proven Results', 'Expert Support'],
  },
};

export const product = {
  hero: {
    eyebrow: 'Accelerate Automation Platform',
    title: 'One platform. Every touchpoint.',
    subtitle:
      'A comprehensive suite of integrated solutions designed to transform insurance and banking operations through intelligent automation and seamless customer experiences.',
  },
  pillars: [
    {
      id: 'engagement',
      index: '01',
      name: 'Accelerated Engagement',
      tagline:
        'Engage smarter, connect faster. Accelerate customer engagement with personalized experiences and seamless interactions across all touchpoints.',
      banner:
        'Elevate experiences. Deliver personalized, seamless, and intelligent interactions across every touchpoint. Empower customers with self-service, unify agent experiences, and accelerate engagement with AI-driven solutions.',
      features: [
        { title: 'Single View Of Customer', body: '360-degree customer insights for personalized service delivery.' },
        { title: 'Multi-Channel Engagement', body: 'Seamless interactions across web, mobile, email, and social channels.' },
        { title: 'Self-Serving Portal', body: 'Empower customers with self-service for policy management and claims.' },
        { title: 'Agent Portal', body: 'Comprehensive agent management with sales tools and performance analytics.' },
        { title: 'Personalized Customer Journeys', body: 'Tailored experiences based on customer behavior and preferences.' },
        { title: 'Real-Time Engagement Analytics', body: 'Monitor and optimize customer interactions instantly.' },
        { title: 'AI-Powered Recommendations', body: 'Intelligent product and service suggestions.' },
      ],
    },
    {
      id: 'operation',
      index: '02',
      name: 'Accelerated Operation',
      tagline:
        'Optimize faster, operate smarter. Achieve higher STP, enhanced accuracy, and cost efficiency with smart process automation and assisted decision making.',
      banner:
        'Simplify processes. Streamline processes, reduce risks, and boost efficiency with intelligent automation. Simplify onboarding, accelerate claims, enhance fraud detection, and drive operational excellence.',
      features: [
        { title: 'CaseX — Case Management', body: 'Comprehensive case management across all business processes.' },
        { title: 'Smart Process Operations', body: 'AI-driven automation for new business, POS, claims, and agency operations.' },
        { title: 'Advanced Fraud Management', body: 'AI-powered fraud detection and prevention with real-time monitoring.' },
        { title: 'E-KYC', body: 'Digital KYC with automated verification, compliance, and risk assessment.' },
        { title: 'Intelligent Process Automation', body: 'End-to-end workflow automation with AI decision-making.' },
        { title: 'Automated Compliance Monitoring', body: 'AML and regulatory compliance automation.' },
        { title: 'Data Extraction & Analysis', body: 'Intelligent document processing and insights.' },
      ],
    },
    {
      id: 'distribution',
      index: '03',
      name: 'Accelerated Distribution',
      tagline:
        'Empower agents, delight customers. Streamline distribution with better lead management, faster policy issuance and smarter channel optimization.',
      banner:
        'Scale smarter. Expand market presence and empower every channel with smarter tools.',
      features: [
        { title: 'Intelligent Lead Management', body: 'AI-powered lead capture, scoring, and nurturing for higher conversions.' },
        { title: 'Electronic Point Of Sale', body: 'EPOS for seamless policy issuance, premium collection, and onboarding.' },
        { title: 'Channel Management', body: 'Partner and channel management with performance analytics and optimization.' },
        { title: 'Bancassurance Solutions', body: 'Solutions for bancassurance, cross-selling, and integrated financial services.' },
      ],
    },
  ],
  banking: [
    {
      id: 'bank-engagement',
      index: '01',
      name: 'Accelerated Engagement',
      tagline: 'Engage smarter, connect faster.',
      banner: 'Accelerated Engagement. Deepen Connections. Deliver personalized, proactive, and unified interactions across every touchpoint.',
      features: [
        { title: 'Personalized Customer Journeys', body: 'Tailored experiences based on customer behavior and preferences.' },
        { title: 'Real-Time Engagement Analytics', body: 'Monitor and optimize customer interactions instantly.' },
        { title: 'Omnichannel Communication', body: 'Seamless interactions across all touchpoints.' },
        { title: 'AI-Powered Recommendations', body: 'Intelligent product and service suggestions.' },
      ],
    },
    {
      id: 'bank-operation',
      index: '02',
      name: 'Accelerated Operation',
      tagline: 'Optimize faster, operate smarter.',
      banner: 'Accelerated Operations. Drive Efficiency. Streamline core banking processes, mitigate risks, and boost straight-through processing with intelligent automation.',
      features: [
        { title: 'Intelligent Process Automation', body: 'End-to-end workflow automation with AI decision-making.' },
        { title: 'Automated Compliance Monitoring', body: 'AML and regulatory compliance automation.' },
        { title: 'Advanced Fraud Detection', body: 'Real-time risk assessment and fraud prevention.' },
        { title: 'Data Extraction & Analysis', body: 'Intelligent document processing and insights.' },
      ],
    },
    {
      id: 'bank-channel',
      index: '03',
      name: 'Accelerated Channel',
      tagline: 'Empower agents, delight customers.',
      banner: 'Accelerated Channels. Expand Reach. Empower every banking touchpoint and expand customer reach with smarter optimization.',
      features: [
        { title: 'Unified Channel Management', body: 'Seamless integration across all banking channels.' },
        { title: 'Digital KYC & Onboarding', body: 'Facial recognition, geo-tagging, and liveness verification.' },
        { title: 'Agent Empowerment Tools', body: 'AI-assisted decision support and productivity tools.' },
        { title: 'Sales & Campaign Automation', body: 'Intelligent lead management and conversion optimization.' },
      ],
    },
  ],
  aiComponents: {
    eyebrow: 'AI-Powered Automation Components',
    title: 'The intelligence layer beneath every module.',
    items: [
      { title: 'Fraud Detection and Management', body: 'Advanced AI algorithms to detect and prevent fraudulent activities in real-time.' },
      { title: 'Extraction and Comparison Engine', body: 'Intelligent data and image extraction with automated comparison capabilities.' },
      { title: 'Data Analysis and Summary', body: 'AI-powered analysis for underwriting and medical data with intelligent summaries.' },
      { title: 'AML Checks', body: 'Automated risk assessment and Anti-Money Laundering compliance checks.' },
      { title: 'Process Automation with Case Management', body: 'End-to-end process automation integrated with comprehensive case management.' },
      { title: 'e-KYC', body: 'Facial recognition, geotagging, and liveness check for digital identity verification.' },
      { title: 'Recommendation Engine', body: 'AI-driven recommendations for products and underwriting decisions.' },
      { title: 'Propensity Analytics', body: 'Predictive analytics that surface high-intent customers and emerging opportunities.' },
    ],
  },
};

export const services = {
  hero: {
    eyebrow: 'Fintech Services',
    title: 'Built by industry veterans.',
    subtitle:
      'Led by industry veterans, BOIT Global delivers innovative fintech solutions that empower insurance and banking firms and enhance customer experiences.',
  },
  groups: [
    {
      id: 'digital-transformation',
      index: '01',
      name: 'Digital Transformation Solutions',
      description:
        'We specialize in building next-generation technology solutions with significant experience in delivering end-to-end solutions for insurance and banking.',
      capabilities: [
        { title: 'Digital Experience Solutions', items: ['Customer Servicing Portals', 'Agency Solutions', 'Mobile App Development', 'Progressive Web Apps'] },
        { title: 'Digital Solutions', items: ['RPA & Chatbots', 'Document Management System', 'Business Process Management', 'Rules Engine'] },
        { title: 'Data & Intelligence', items: ['API Development & Management', 'Business Intelligence & Analytics', 'OCR/ICR/Pattern Recognition', 'Co-Creation Of Products'] },
        { title: 'Process & Automation', items: ['Data Lake Implementation', 'Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'] },
      ],
    },
    {
      id: 'application-support',
      index: '02',
      name: 'Application Support & Enhancement',
      description:
        'World-class application support on complex IT applications with global best practices, ensuring minimal downtime.',
      capabilities: [
        { title: 'Proactive Support', items: ['Predicts and prevents issues', 'Ensures minimal downtime', 'Continuous performance monitoring'] },
        { title: 'Quick Escalation Process', items: ['Fast response to critical incidents', 'Prioritized issue resolution', 'Real-time status tracking'] },
        { title: 'Continuous Improvement', items: ['Root-cause analysis', 'Measurable performance enhancement'] },
        { title: 'Scalable Support Model', items: ['Adapts to varying app sizes', 'Flexible resource allocation'] },
        { title: 'Comprehensive Training', items: ['Detailed user guides', 'Regular training sessions'] },
        { title: 'Global Best Practices', items: ['SLA & incident management', 'Flexi-support at period-end'] },
      ],
    },
    {
      id: 'resource-augmentation',
      index: '03',
      name: 'Resource Augmentation',
      description:
        'Strong technical and functional talent with expertise across multiple skillsets. Offshore Development Centres (ODC) act as flexible extended arms for your IT departments.',
      capabilities: [
        { title: 'Digital Capabilities', items: ['App Engineering', 'Data & Analytics', 'Cloud Engineering', 'CX & Automation', 'Cybersecurity'] },
        { title: 'Technical Skills', items: ['Angular JS', 'React JS', 'Java, Spring Boot & Microservices', 'Python', 'Node JS', 'QA (Manual/Automation)', 'RPA Tech'] },
        { title: 'Product Skills', items: ['IBM BPM/BAW', 'IBM FileNet', 'IBM Case Manager', 'Oracle BPM/ESB', 'Kafka & Spark'] },
        { title: 'Functional Skills', items: ['Project Managers', 'Scrum Masters', 'Insurance/Banking SMEs', 'Business Consultants'] },
      ],
    },
    {
      id: 'specialised-services',
      index: '04',
      name: 'Specialised Services & Consulting',
      description:
        'Specialized services to support business and technical transformations with outstanding quality and proven methodologies.',
      capabilities: [
        { title: 'Technology Transformation', items: ['App Architecture Review', 'DevOps Setup', 'IT Roadmap Blueprinting'] },
        { title: 'Business Transformation', items: ['Defining Target Operating Model', 'Building Proof Of Concept'] },
        { title: 'Quality Assurance', items: ['Load Testing', 'Performance Testing', 'VAPT & Security Testing', 'Robotic Test Automation'] },
        { title: 'Digital & Business Advisory', items: ['Design technology roadmaps', 'Develop system blueprints'] },
      ],
    },
  ],
};

export const caseStudies = {
  hero: {
    eyebrow: 'Case Studies',
    title: 'Proven results, in production.',
    subtitle:
      'Real transformations for insurance and banking leaders who needed speed without compromising on control.',
  },
  disclaimer:
    'The case studies and transformation examples cited on this page are drawn from publicly available materials published by leading consulting organizations. These references are included for informational purposes only to illustrate proven transformation approaches within the banking and insurance industries. BOIT does not claim any ownership, partnership, endorsement, or commercial association with the organizations or materials referenced. BOIT has no control over the content, accuracy, or privacy practices of external websites. Visiting external links is at the user’s discretion, and BOIT bears no responsibility for the information, opinions, or data hosted by those third-party sources. Users are encouraged to review the terms of use and privacy policies of any external sites they visit.',
  sections: [
    {
      id: 'insurance',
      label: 'Insurance',
      items: [
        {
          id: 'ai-insurance',
          title: 'The Future of AI in the Insurance Industry',
          summary:
            'How intelligent decisioning, automation, and analytics are reshaping insurance operations and customer experience.',
          source: 'McKinsey',
          tags: ['AI', 'Insurance', 'Analytics'],
          href: 'https://www.mckinsey.com/industries/financial-services/our-insights/the-future-of-ai-in-the-insurance-industry',
        },
        {
          id: 'allianz-direct',
          title: 'Allianz Direct — Advancing as Europe’s Leading Digital Insurer',
          summary:
            'A digital-first insurer modernised its platform to accelerate product launches and scale across European markets.',
          source: 'McKinsey',
          tags: ['Insurance', 'Digital', 'Modernization'],
          href: 'https://www.mckinsey.com/capabilities/mckinsey-digital/how-we-help-clients/rewired-in-action/allianz-direct-advancing-as-europes-leading-digital-insurer',
        },
        {
          id: 'aegon-insuremo',
          title: 'Aegon Digital Transformation Case Study',
          summary:
            'How a leading insurer leveraged a modern core platform to accelerate digital product delivery and servicing.',
          source: 'InsureMO',
          tags: ['Insurance', 'Core Platform', 'Digital'],
          href: 'https://insuremo.com/en/case-study-aegon/',
        },
        {
          id: 'ibm-ai-workflows',
          title: 'AI Automation & Intelligent Workflows in Insurance',
          summary:
            'Intelligent workflows and AI-driven automation reducing friction across claims, underwriting, and servicing.',
          source: 'IBM',
          tags: ['AI', 'Automation', 'Insurance'],
          href: 'https://www.ibm.com/thought-leadership/institute-business-value/en-us/blog/ai-automation-intelligent-workflows-insurance',
        },
      ],
    },
    {
      id: 'banking',
      label: 'Banking',
      items: [
        {
          id: 'deloitte-modern-tech',
          title: 'Traditional Ways, Modern Technology',
          summary:
            'How financial institutions blend legacy strengths with modern technology to accelerate digital transformation.',
          source: 'Deloitte',
          tags: ['Banking', 'Technology', 'Transformation'],
          href: 'https://www.deloitte.com/global/en/Industries/technology/case-studies/traditional-ways-modern-technology.html',
        },
        {
          id: 'kpmg-public-bank',
          title: 'Digital Transformation for a Leading Public Sector Bank',
          summary:
            'A connected-enterprise approach enabling a major public sector bank to modernise customer journeys and operations.',
          source: 'KPMG',
          tags: ['Banking', 'Public Sector', 'Digital'],
          href: 'https://kpmg.com/in/en/services/advisory/consulting/business-consulting/connected-enterprise/case-study-digital-transformation-for-leading-public-sector-bank.html',
        },
        {
          id: 'pwc-aeon-bank',
          title: 'AEON Bank Digital Transformation',
          summary:
            'Building a next-generation digital bank experience with modern architecture and customer-centric design.',
          source: 'PwC',
          tags: ['Banking', 'Digital Bank', 'CX'],
          href: 'https://www.pwc.com/gx/en/about/case-studies/aeon-bank.html',
        },
        {
          id: 'pwc-hyperautomation',
          title: 'Transforming Banking Through Intelligent Hyperautomation',
          summary:
            'Intelligent hyperautomation used to streamline banking operations and unlock measurable efficiency gains.',
          source: 'PwC',
          tags: ['Banking', 'Hyperautomation', 'Operations'],
          href: 'https://www.pwc.co.za/en/services/case-studies/transforming-banking-through-intelligent-hyperautomation.html',
        },
      ],
    },
  ],
};

export const about = {
  hero: {
    eyebrow: 'About Us',
    title: 'Transforming Insurance & Banking.',
    subtitle: 'Comprehensive enterprise-grade services designed to accelerate your digital transformation journey with proven methodologies and industry expertise.',
  },
  intro: [
    'BOIT team provides workflow automation, digital transformation implementation, maintenance, support, and resource augmentation services with high-quality standards and competitive commercial models.',
    'The BOIT Accelerate Automation Platform is an enterprise-grade digital foundation that empowers banks and insurers to modernize their ecosystems. It enables end-to-end transformation by digitizing engagement, optimizing core operations, and strengthening branch and distribution networks through an AI-powered, modular, and scalable architecture.',
    'Built on cloud-native, microservices, and open-standards technologies, the platform combines pre-built solution components and process accelerators that can function independently or seamlessly together. Its flexible design allows effortless integration with third-party applications, enabling faster transformation, reduced costs, and greater agility across financial enterprises.',
  ],
  certs: [
    { code: 'ISO 9001', label: 'Quality Management' },
    { code: 'ISO 27001', label: 'Information Security' },
  ],
  locations: [
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'India', flag: '🇮🇳' },
  ],
  stats: [
    { value: '25+', label: 'Years of delivery excellence' },
    { value: '80+', label: 'Years of combined experience' },
    { value: '06+', label: 'Country presence' },
  ],
  founders: [
    {
      name: 'Braj Bhusan Kumar',
      role: 'Co-Founder & CEO',
      img: 'Braj.png',
      bio: 'Braj Bhusan Kumar is a seasoned leader with over 20 years of diverse experience in financial services technology management. A software engineer and an Executive Management alumnus of the Yale School of Management, he has a strong foundation in both technical and business leadership.',
      extra: 'Braj has a proven track record of delivering complex digital transformation programs across Asia-Pacific, the Middle East, Africa, and North America.',
    },
    {
      name: 'Chintan Kothari',
      role: 'Co-Founder & CCO',
      img: 'Chintan.png',
      bio: 'Chintan comes with 22+ years of global leadership experience working across 20+ countries in APAC, Middle East, KSA, Africa and North America regions. Chintan has significant experience in conceptualizing, strategizing and executing multi-million-dollar transformation programs for large organizations.',
      extra: 'Chintan is an MBA in Finance and Marketing. Chintan is based out of Singapore and heads the operations for the APAC at BOIT.',
    },
    {
      name: 'Priyank Choudhary',
      role: 'Co-Founder & CTO',
      img: 'Priyank.png',
      bio: 'Priyank comes with 15+ years of professional experience spanning into people management, program, quality, customer relations and operations management. Priyank has hands-on experience in implementation and maintenance of end-to-end digital solutions for multiple BFSI organizations globally.',
      extra: 'Priyank is an engineering graduate and a passionate technology leader. Priyank is based out of Dubai and heads the operation for the Middle East and Africa Region at BOIT.',
    },
    {
      name: 'Francis Chung',
      role: 'Head of Delivery',
      img: 'francis.png',
      bio: 'With over 20 years of global Delivery Management experience, Francis has led numerous projects in Digital Transformation, AI Implementation, and Resource Outsourcing Management. Certified by the Scrum Alliance as both a Scrum Master and Product Owner, he is renowned for his innovative leadership and adaptability across diverse organizational cultures. Francis is based out of Malaysia.',
      extra: 'As Head of Delivery, Francis is responsible for ensuring all customer projects are delivered on time and within budget while exceeding customer expectations. He is accountable for client satisfaction throughout the entire engagement.',
    },
    {
      name: 'Hiren Jain',
      role: 'Head of Product',
      img: 'hiren.png',
      bio: 'Hiren brings extensive experience across digital transformation, product innovation, and business consulting in financial services. He combines deep technology fluency with a clear understanding of customer needs and strategic execution — helping insurers and banks modernize with confidence.',
      extra: 'As Head of Product at BOIT, Hiren strengthens our mission to reshape the insurance and banking ecosystem through innovation, intelligence, and measurable impact — accelerating AI-powered transformation for institutions worldwide.',
    },
  ],
  leadership: [],
  commitment: home.commitment.items,
};

export const media = {
  hero: {
    eyebrow: 'Media',
    title: 'Insights & perspectives.',
    subtitle: 'Thinking on automation, AI, and the future of financial services.',
  },
  featuredVideo: {
    title: 'BOIT Global — InsurTech & Digital Transformation',
    youtubeId: '9d7M9S28Lr8',
    href: 'https://www.youtube.com/watch?v=9d7M9S28Lr8',
  },
  featuredArticle: {
    title: 'BOIT: Revolutionizing Insurance with Cutting-Edge InsurTech Services and Solutions',
    source: 'NY Weekly',
    href: 'https://nyweekly.com/tech/boit-revolutionizing-insurance-with-cutting-edge-insurtech-services-and-solutions/',
    summary:
      'Coverage of how BOIT Global is advancing insurance modernisation with InsurTech services, platforms, and delivery excellence.',
  },
  events: [
    {
      id: 'li-1',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7289745184039305216',
    },
    {
      id: 'li-2',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7340814074282139650',
    },
    {
      id: 'li-3',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7337948706312192001',
    },
    {
      id: 'li-4',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7322877892432932864',
    },
    {
      id: 'li-5',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7319785495075430401',
    },
    {
      id: 'li-6',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7317184162388443136',
    },
    {
      id: 'li-7',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7308454150172815360',
    },
    {
      id: 'li-8',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7304395619144499201',
    },
    {
      id: 'li-9',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7299533189021106176',
    },
    {
      id: 'li-10',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7290102588450988033',
    },
    {
      id: 'li-11',
      title: 'BOIT Global LinkedIn update',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7290088832450908161',
    },
  ],
};

export const contact = {
  hero: {
    eyebrow: 'Contact Us',
    title: 'Let\u2019s build what\u2019s next.',
    subtitle: 'Tell us about your goals and our team will get back within one business day.',
  },
};

export const clients = ['FWD', 'Generali', 'Allianz', 'NTUC', 'Great Eastern', 'SICOM', 'AIA', 'Prudential'];

export const partners = ['IBM', 'Microsoft', 'Red Hat', 'eBaoTech', 'Collabera', 'Oracle'];

export const statsBar = [
  { value: '100+', label: 'Domain and technical consultants' },
  { value: '20+', label: 'Banks and insurance clients' },
  { value: '2', suffix: ' Decades', label: 'Of proven experience' },
  { value: '6', label: 'Country presence' },
  { value: '10+', label: 'Years average client tenure' },
];

export const testimonials = [
  {
    company: 'Allianz Thailand',
    initials: 'AT',
    quote: 'We have been working with BOIT Global for over a year on our system support. Their team is highly accountable, technically skilled, and truly operates as an extension of our own team. We are looking forward to continuing this collaboration and partnership.',
  },
  {
    company: 'Generali Asia',
    initials: 'GA',
    quote: 'BOIT delivered a digital transformation roadmap that exceeded expectations. Their consultants brought deep insurance domain expertise and modern engineering practices to every engagement.',
  },
  {
    company: 'FWD Insurance',
    initials: 'FW',
    quote: 'From day one BOIT felt like a trusted partner. Their team\'s accountability, agility and product knowledge accelerated our core platform rollout across multiple markets.',
  },
];

export const industries = [
  { title: 'Technology', desc: 'Modern platforms, cloud and SaaS engineering for tech-first organisations.' },
  { title: 'Manufacturing', desc: 'Operations digitisation, MES integration and Industry 4.0 enablement.' },
  { title: 'Banking', desc: 'Core banking modernisation, digital channels and regulatory compliance.' },
  { title: 'Insurance', desc: 'Policy administration, claims, underwriting automation for carriers.' },
  { title: 'Healthcare & Wellness', desc: 'Patient platforms, EHR integrations and wellness tech transformation.' },
];

export const readyToTransform = {
  title: 'Ready to transform your business?',
  subtitle: 'Join leading insurance and banking companies who have already revolutionized their operations with BOIT Global.',
  items: [
    { title: 'Quick Implementation', body: 'Modular onboarding so you go from kickoff to value fast.' },
    { title: 'Proven Results', body: 'Track record of measurable wins for insurance & banking leaders.' },
    { title: 'Expert Support', body: 'Senior consultants who stay with you long after go-live.' },
  ],
};
