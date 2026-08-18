/* Product hub, the two platform pillars, and the AI capability layer.
   All copy transcribed from WEBSITE-CONTENT.md. */

export const productHub = {
  hero: {
    eyebrow: 'Accelerate Automation Platform',
    title: 'One platform. Every touchpoint.',
    subtitle:
      'A comprehensive suite of integrated solutions designed to transform insurance and banking operations through intelligent automation and seamless customer experiences.',
  },
  pillarsEyebrow: 'Platform pillars',
  pillars: [
    {
      key: 'insurance',
      title: 'Insurance',
      to: '/product/insurance',
      linkLabel: 'Explore Insurance',
      body: 'AI-powered engagement, operations, and distribution modules purpose-built for life, health, and general insurers.',
    },
    {
      key: 'banking',
      title: 'Banking',
      to: '/product/banking',
      linkLabel: 'Explore Banking',
      body: 'Intelligent engagement, operations, and channel modules that modernize retail, corporate, and investment banking experiences.',
    },
  ],
  capabilitiesStrip: {
    eyebrow: 'Intelligence Layer',
    title: 'AI-Powered Capabilities',
    subtitle:
      'Reusable AI components that sit beneath every insurance and banking module — detection, extraction, decisioning, and propensity in one coherent stack.',
    cta: { label: 'View all capabilities', to: '/product/capabilities' },
  },
  cta: {
    title: 'Ready to transform your operations?',
    body: "See how BOIT Global's platform can accelerate automation across your insurance or banking business.",
    buttons: [
      { label: 'Talk to us', to: '/contact', primary: true },
      { label: 'View case studies', to: '/case-studies' },
    ],
  },
};

export const platforms = {
  insurance: {
    slug: 'insurance',
    //eyebrow: 'Accelerate Automation',
    title: 'Insurance Platform',
    subtitle:
      'AI-powered engagement, operations, and distribution modules purpose-built for life, health, and general insurers.',
    cta: {
      title: 'Ready to accelerate insurance?',
      body: 'Explore the AI capability layer or talk to our team about a tailored rollout.',
      buttons: [
        { label: 'Demo', to: '/contact', primary: true },
        { label: 'AI Capabilities', to: '/product/capabilities' },
      ],
    },
    modules: [
      {
        id: 'accelerate-engagement',
        name: 'Accelerate Engagement',
        headline: 'Engage Smarter, Connect Faster',
        solution:
          'Accelerate customer engagement with personalized experiences and seamless interactions. AI orchestration unifies portals, apps, RPA, and conversational channels so every member and agent touchpoint feels intelligent, consistent, and always-on.',
        features: [
          {
            title: 'Engagement Portals / App',
            body: 'AI-assisted self-service portals and mobile apps that personalize journeys, surface next-best actions, and keep customers engaged across policy, claims, and servicing.',
          },
          {
            title: 'RPA & Chatbots',
            body: 'Intelligent bots and robotic process automation that resolve routine queries, trigger workflows, and hand off complex cases to humans with full context.',
          },
        ],
      },
      {
        id: 'accelerate-operations',
        name: 'Accelerate Operations',
        headline: 'Optimize Faster, Operate Smarter',
        solution:
          'Achieve higher STP, enhanced accuracy, and cost efficiency with smart process automation and automated or assisted decision-making. AI models score risk, route work, and keep every case audit-ready.',
        features: [
          {
            title: 'Case Management and Workbenches',
            body: 'Unified AI workbenches that prioritize queues, recommend decisions, and give underwriters and claims handlers a single pane of glass.',
          },
          {
            title: 'Process, Rules & Content Management',
            body: 'Configurable rules engines and content services infused with AI so policies, exceptions, and documents stay consistent and compliant.',
          },
          {
            title: 'OOTB Reports and Dashboards',
            body: 'Out-of-the-box analytics with AI-driven insights on STP rates, cycle times, leakage, and operational bottlenecks.',
          },
        ],
      },
      {
        id: 'accelerate-distribution',
        name: 'Accelerate Distribution',
        headline: 'Empower Agents, Delight Customers',
        solution:
          'Streamline distribution with better lead management, faster policy issuance, and smarter channel optimization. AI scores leads, guides agents, and keeps a living single view of every customer.',
        features: [
          {
            title: 'Lead Management',
            body: 'AI lead capture, scoring, and nurturing that routes high-intent prospects to the right channel and accelerates conversion.',
          },
          {
            title: 'e-POS',
            body: 'Electronic point-of-sale with intelligent quoting, eligibility checks, and straight-through issuance for agents and partners.',
          },
          {
            title: 'SVOC',
            body: 'Single View of Customer that fuses policies, interactions, and propensity signals into one AI-ready customer graph.',
          },
        ],
      },
    ],
  },

  banking: {
    slug: 'banking',
    //eyebrow: 'Accelerate Automation',
    title: 'Banking Platform',
    subtitle:
      'Intelligent engagement, operations, and channel modules that modernize retail, corporate, and investment banking experiences.',
    cta: {
      title: 'Ready to accelerate banking?',
      body: 'Explore the AI capability layer or talk to our team about a tailored rollout.',
      buttons: [
        { label: 'Demo', to: '/contact', primary: true },
        { label: 'AI Capabilities', to: '/product/capabilities' },
      ],
    },
    modules: [
      {
        id: 'accelerate-engagement',
        name: 'Accelerate Engagement',
        headline: 'Engage Smarter, Connect Faster',
        solution:
          'Accelerate customer engagement with personalized experiences and seamless interactions. AI powers mobile, tablet, web, and conversational channels so every banking journey feels proactive and relevant.',
        features: [
          {
            title: 'Mobile and Tablet Banking',
            body: 'Native and progressive banking experiences enriched with AI insights, biometric security, and contextual product offers.',
          },
          {
            title: 'Website / Portals / App · RPA & Chatbots',
            body: 'Omnichannel portals backed by RPA and conversational AI that automate service requests and escalate only when judgment is required.',
          },
        ],
      },
      {
        id: 'accelerate-operations',
        name: 'Accelerate Operations',
        headline: 'Optimize Faster, Operate Smarter',
        solution:
          'Achieve higher STP, enhanced accuracy, and cost efficiency with smart process automation. AI decides, documents, and continuously improves core banking workflows.',
        features: [
          {
            title: 'BPM and Case Management',
            body: 'AI-orchestrated BPM and case management that shorten cycle times across onboarding, credit, payments, and servicing.',
          },
          {
            title: 'Process, Rules & Content Management',
            body: 'Centralized rules and content platforms with machine learning that adapt policies without heavy IT change cycles.',
          },
          {
            title: 'OOTB Reports and Dashboards',
            body: 'Ready-made operational dashboards with predictive alerts on STP, exceptions, SLA risk, and capacity.',
          },
        ],
      },
      {
        id: 'accelerate-channel',
        name: 'Accelerate Channel',
        headline: 'Empower Agents, Delight Customers',
        solution:
          'Streamline agency and branch with smarter channel optimization. AI unifies CRM, campaigns, and customer intelligence so every banker and agent acts with precision.',
        features: [
          {
            title: 'Customer Relationship Management',
            body: 'AI-augmented CRM that surfaces relationship insights, next-best conversations, and risk flags in real time.',
          },
          {
            title: 'Sales and Campaign Management',
            body: 'Intelligent campaign design, audience selection, and performance optimization across inbound and outbound channels.',
          },
          {
            title: 'Single View of Customer',
            body: 'A unified customer profile spanning accounts, products, interactions, and propensity models for true 360° banking.',
          },
        ],
      },
    ],
  },
};

export const capabilities = {
  hero: {
    eyebrow: 'Intelligence Layer',
    title: 'AI-Powered Capabilities',
    subtitle:
      'Reusable AI components that sit beneath every insurance and banking module — detection, extraction, decisioning, and propensity in one coherent stack.',
  },
  sidebar: {
    title: 'See it in context',
    body: 'Explore insurance and banking modules powered by these capabilities.',
    links: [
      { label: 'Insurance', to: '/product/insurance' },
      { label: 'Banking', to: '/product/banking' },
    ],
  },
  items: [
    {
      id: 'fraud-detection',
      title: 'Intelligent Process Automation (New Business • Underwriting • Policy Servicing • Claims)',
      body: 'Real-time AI models that detect anomalous claims, transactions, and identity patterns — then orchestrate investigation workflows before losses escalate.',
      groups: [
        {
          title: 'Real-time anomaly scoring',
          items: ['Behavioral baselines', 'Network analysis', 'Alert prioritization'],
        },
        {
          title: 'Investigation workbenches',
          items: ['Case packaging', 'Evidence trails', 'Feedback loops for model tuning'],
        },
      ],
    },
    {
      id: 'extraction-engine',
      title: 'Smart Case Management',
      body: 'Intelligent document and image extraction that reads, structures, and compares data across forms, IDs, medical reports, and statements with high precision.',
      groups: [
        {
          title: 'Multi-format ingestion',
          items: ['PDFs & scans', 'Photos & IDs', 'Structured feeds'],
        },
        {
          title: 'Automated comparison',
          items: ['Field-level diffs', 'Tamper signals', 'Confidence scoring'],
        },
      ],
    },
    {
      id: 'data-analysis',
      title: 'Insurance Core Modernization',
      body: 'AI that turns underwriting files, medical evidence, and operational data into concise summaries and decision-ready insights for human experts.',
      groups: [
        {
          title: 'Underwriting intelligence',
          items: ['Risk narratives', 'Evidence highlights', 'Exception flags'],
        },
        {
          title: 'Executive summaries',
          items: ['Auto briefs', 'Trend detection', 'Explainable outputs'],
        },
      ],
    },
    {
      id: 'aml',
      title: 'Medical Underwriting',
      body: 'Automated Anti-Money Laundering and risk assessment that screens customers, monitors activity, and keeps compliance teams focused on true positives.',
      groups: [
        {
          title: 'Screening & monitoring',
          items: ['Watchlist matching', 'Transaction monitoring', 'Ongoing due diligence'],
        },
        {
          title: 'Risk scoring',
          items: ['Dynamic risk tiers', 'SAR-ready packs', 'Audit evidence'],
        },
      ],
    },
    {
      id: 'process-automation',
      title: 'Motor Claims Management',
      body: 'End-to-end process automation tightly coupled with case management — AI routes work, applies rules, and keeps every exception visible and accountable.',
      groups: [
        {
          title: 'Intelligent orchestration',
          items: ['STP paths', 'Human-in-the-loop', 'SLA-aware routing'],
        },
        {
          title: 'Case continuity',
          items: ['Full audit trail', 'Collaboration notes', 'Outcome analytics'],
        },
      ],
    },
    {
      id: 'ekyc',
      title: 'Fraud Detection & Management',
      body: 'Digital identity verification combining facial recognition, geotagging, and liveness detection to onboard customers securely without branch friction.',
      groups: [
        {
          title: 'Biometric assurance',
          items: ['Face match', 'Liveness detection', 'Spoof resistance'],
        },
        {
          title: 'Location & compliance',
          items: ['Geotagging', 'Document OCR', 'Regulatory packs'],
        },
      ],
    },
    {
      id: 'recommendation',
      title: 'Digital AML & Compliance',
      body: 'AI recommendations that suggest the right products and quotations based on customer profile, propensity, and underwriting appetite.',
      groups: [
        {
          title: 'Product fit',
          items: ['Next-best product', 'Cross-sell / up-sell', 'Eligibility checks'],
        },
        {
          title: 'Smart quotation',
          items: ['Dynamic pricing cues', 'Bundle suggestions', 'Agent guidance'],
        },
      ],
    },
    {
      id: 'sales-management',
      title: 'e-KYC & Customer Onboarding',
      body: 'Unified sales orchestration for inbound intent and outbound campaigns — AI prioritizes leads, scripts conversations, and measures conversion quality.',
      groups: [
        {
          title: 'Inbound intelligence',
          items: ['Intent detection', 'Queue optimization', 'Preference matching'],
        },
        {
          title: 'Outbound excellence',
          items: ['Campaign targeting', 'Contact timing', 'Outcome learning'],
        },
      ],
    },
    {
      id: 'propensity',
      title: 'ePOS & Agency Management',
      body: 'Predictive models that score propensity for claims, fraud, lapsation, and churn — so insurers and banks intervene earlier with the right action.',
      groups: [
        {
          title: 'Risk propensity',
          items: ['Claims likelihood', 'Fraud signals', 'Severity cues'],
        },
        {
          title: 'Retention propensity',
          items: ['Lapse / churn scores', 'Save offers', 'Lifecycle triggers'],
        },
      ],
    },
  ],
};

/* Approved alternate copy inventory — richer feature lists that parallel the
   platform modules. Used for the deeper feature grid on the pillar pages. */
export const featureInventory = {
  insurance: [
    {
      n: '01',
      title: 'Accelerated Engagement',
      tagline:
        'Engage smarter, connect faster. Accelerate customer engagement with personalized experiences and seamless interactions across all touchpoints.',
      banner:
        'Elevate experiences. Deliver personalized, seamless, and intelligent interactions across every touchpoint. Empower customers with self-service, unify agent experiences, and accelerate engagement with AI-driven solutions.',
      features: [
        {
          title: 'Single View Of Customer',
          body: '360-degree customer insights for personalized service delivery.',
        },
        {
          title: 'Multi-Channel Engagement',
          body: 'Seamless interactions across web, mobile, email, and social channels.',
        },
        {
          title: 'Self-Serving Portal',
          body: 'Empower customers with self-service for policy management and claims.',
        },
        {
          title: 'Agent Portal',
          body: 'Comprehensive agent management with sales tools and performance analytics.',
        },
        {
          title: 'Personalized Customer Journeys',
          body: 'Tailored experiences based on customer behavior and preferences.',
        },
        {
          title: 'Real-Time Engagement Analytics',
          body: 'Monitor and optimize customer interactions instantly.',
        },
        {
          title: 'AI-Powered Recommendations',
          body: 'Intelligent product and service suggestions.',
        },
      ],
    },
    {
      n: '02',
      title: 'Accelerated Operation',
      tagline:
        'Optimize faster, operate smarter. Achieve higher STP, enhanced accuracy, and cost efficiency with smart process automation and assisted decision making.',
      banner:
        'Simplify processes. Streamline processes, reduce risks, and boost efficiency with intelligent automation. Simplify onboarding, accelerate claims, enhance fraud detection, and drive operational excellence.',
      features: [
        {
          title: 'CaseX — Case Management',
          body: 'Comprehensive case management across all business processes.',
        },
        {
          title: 'Smart Process Operations',
          body: 'AI-driven automation for new business, POS, claims, and agency operations.',
        },
        {
          title: 'Advanced Fraud Management',
          body: 'AI-powered fraud detection and prevention with real-time monitoring.',
        },
        {
          title: 'E-KYC',
          body: 'Digital KYC with automated verification, compliance, and risk assessment.',
        },
        {
          title: 'Intelligent Process Automation',
          body: 'End-to-end workflow automation with AI decision-making.',
        },
        {
          title: 'Automated Compliance Monitoring',
          body: 'AML and regulatory compliance automation.',
        },
        {
          title: 'Data Extraction & Analysis',
          body: 'Intelligent document processing and insights.',
        },
      ],
    },
    {
      n: '03',
      title: 'Accelerated Distribution',
      tagline:
        'Empower agents, delight customers. Streamline distribution with better lead management, faster policy issuance and smarter channel optimization.',
      banner: 'Scale smarter. Expand market presence and empower every channel with smarter tools.',
      features: [
        {
          title: 'Intelligent Lead Management',
          body: 'AI-powered lead capture, scoring, and nurturing for higher conversions.',
        },
        {
          title: 'Electronic Point Of Sale',
          body: 'EPOS for seamless policy issuance, premium collection, and onboarding.',
        },
        {
          title: 'Channel Management',
          body: 'Partner and channel management with performance analytics and optimization.',
        },
        {
          title: 'Bancassurance Solutions',
          body: 'Solutions for bancassurance, cross-selling, and integrated financial services.',
        },
      ],
    },
  ],
  banking: [
    {
      n: '01',
      title: 'Accelerated Engagement',
      tagline: 'Engage smarter, connect faster.',
      banner:
        'Accelerated Engagement. Deepen Connections. Deliver personalized, proactive, and unified interactions across every touchpoint.',
      features: [
        {
          title: 'Personalized Customer Journeys',
          body: 'Tailored experiences based on customer behavior and preferences.',
        },
        {
          title: 'Real-Time Engagement Analytics',
          body: 'Monitor and optimize customer interactions instantly.',
        },
        {
          title: 'Omnichannel Communication',
          body: 'Seamless interactions across all touchpoints.',
        },
        {
          title: 'AI-Powered Recommendations',
          body: 'Intelligent product and service suggestions.',
        },
      ],
    },
    {
      n: '02',
      title: 'Accelerated Operation',
      tagline: 'Optimize faster, operate smarter.',
      banner:
        'Accelerated Operations. Drive Efficiency. Streamline core banking processes, mitigate risks, and boost straight-through processing with intelligent automation.',
      features: [
        {
          title: 'Intelligent Process Automation',
          body: 'End-to-end workflow automation with AI decision-making.',
        },
        {
          title: 'Automated Compliance Monitoring',
          body: 'AML and regulatory compliance automation.',
        },
        {
          title: 'Advanced Fraud Detection',
          body: 'Real-time risk assessment and fraud prevention.',
        },
        {
          title: 'Data Extraction & Analysis',
          body: 'Intelligent document processing and insights.',
        },
      ],
    },
    {
      n: '03',
      title: 'Accelerated Channel',
      tagline: 'Empower agents, delight customers.',
      banner:
        'Accelerated Channels. Expand Reach. Empower every banking touchpoint and expand customer reach with smarter optimization.',
      features: [
        {
          title: 'Unified Channel Management',
          body: 'Seamless integration across all banking channels.',
        },
        {
          title: 'Digital KYC & Onboarding',
          body: 'Facial recognition, geo-tagging, and liveness verification.',
        },
        {
          title: 'Agent Empowerment Tools',
          body: 'AI-assisted decision support and productivity tools.',
        },
        {
          title: 'Sales & Campaign Automation',
          body: 'Intelligent lead management and conversion optimization.',
        },
      ],
    },
  ],
};

export const aiComponents = {
  eyebrow: 'AI-Powered Automation Components',
  title: 'The intelligence layer beneath every module.',
  items: [
    {
      title: 'Fraud Detection and Management',
      body: 'Advanced AI algorithms to detect and prevent fraudulent activities in real-time.',
    },
    {
      title: 'Extraction and Comparison Engine',
      body: 'Intelligent data and image extraction with automated comparison capabilities.',
    },
    {
      title: 'Data Analysis and Summary',
      body: 'AI-powered analysis for underwriting and medical data with intelligent summaries.',
    },
    {
      title: 'AML Checks',
      body: 'Automated risk assessment and Anti-Money Laundering compliance checks.',
    },
    {
      title: 'Process Automation with Case Management',
      body: 'End-to-end process automation integrated with comprehensive case management.',
    },
    {
      title: 'e-KYC',
      body: 'Facial recognition, geotagging, and liveness check for digital identity verification.',
    },
    {
      title: 'Recommendation Engine',
      body: 'AI-driven recommendations for products and underwriting decisions.',
    },
    {
      title: 'Propensity Analytics',
      body: 'Predictive analytics that surface high-intent customers and emerging opportunities.',
    },
  ],
};
