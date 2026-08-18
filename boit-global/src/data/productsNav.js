/**
 * Products mega-menu + detail pages.
 * Pattern mirrors servicesNav: one page per pillar (Insurance / Banking)
 * plus a capabilities page for the AI component strip.
 *
 * URLs:
 *   /product/insurance
 *   /product/banking
 *   /product/capabilities
 * Section anchors: /product/:slug#section-slug
 */

export const productsTopBar = [
  {
    id: 'fraud-detection',
    label: 'Fraud Detection & Management',
    to: '/product/capabilities#fraud-detection',
  },
  {
    id: 'extraction-engine',
    label: 'Extraction & Comparison Engine',
    to: '/product/capabilities#extraction-engine',
  },
  {
    id: 'data-analysis',
    label: 'Data Analysis & Summary',
    to: '/product/capabilities#data-analysis',
  },
  {
    id: 'aml',
    label: 'AML & Auto Risk Assessment',
    to: '/product/capabilities#aml',
  },
  {
    id: 'process-automation',
    label: 'Process Automation & Case Mgmt',
    to: '/product/capabilities#process-automation',
  },
  {
    id: 'ekyc',
    label: 'e-KYC',
    to: '/product/capabilities#ekyc',
  },
  {
    id: 'recommendation',
    label: 'Recommendation Engine',
    to: '/product/capabilities#recommendation',
  },
  {
    id: 'sales-management',
    label: 'Sales Management',
    to: '/product/capabilities#sales-management',
  },
  {
    id: 'propensity',
    label: 'Propensity Analytics',
    to: '/product/capabilities#propensity',
  },
];

export const productsNav = {
  insurance: {
    slug: 'insurance',
    label: 'Insurance',
    title: 'Insurance Platform',
    eyebrow: 'Accelerate Automation',
    subtitle:
      'AI-powered engagement, operations, and distribution modules purpose-built for life, health, and general insurers.',
    pages: [
      {
        slug: 'accelerate-engagement',
        navLabel: 'Accelerate Engagement',
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
        slug: 'accelerate-operations',
        navLabel: 'Accelerate Operations',
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
        slug: 'accelerate-distribution',
        navLabel: 'Accelerate Distribution',
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
    label: 'Banking',
    title: 'Banking Platform',
    eyebrow: 'Accelerate Automation',
    subtitle:
      'Intelligent engagement, operations, and channel modules that modernize retail, corporate, and investment banking experiences.',
    pages: [
      {
        slug: 'accelerate-engagement',
        navLabel: 'Accelerate Engagement',
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
        slug: 'accelerate-operations',
        navLabel: 'Accelerate Operations',
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
        slug: 'accelerate-channel',
        navLabel: 'Accelerate Channel',
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

export const productCapabilities = {
  slug: 'capabilities',
  title: 'AI-Powered Capabilities',
  eyebrow: 'Intelligence Layer',
  subtitle:
    'Reusable AI components that sit beneath every insurance and banking module — detection, extraction, decisioning, and propensity in one coherent stack.',
  items: [
    {
      id: 'fraud-detection',
      name: 'Fraud Detection and Management',
      description:
        'Real-time AI models that detect anomalous claims, transactions, and identity patterns — then orchestrate investigation workflows before losses escalate.',
      capabilities: [
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
      name: 'Extraction and Comparison Engine (Data or Image)',
      description:
        'Intelligent document and image extraction that reads, structures, and compares data across forms, IDs, medical reports, and statements with high precision.',
      capabilities: [
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
      name: 'Data Analysis and Summary',
      description:
        'AI that turns underwriting files, medical evidence, and operational data into concise summaries and decision-ready insights for human experts.',
      capabilities: [
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
      name: 'AML (Auto Risk Assessment)',
      description:
        'Automated Anti-Money Laundering and risk assessment that screens customers, monitors activity, and keeps compliance teams focused on true positives.',
      capabilities: [
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
      name: 'Process Automation with Case Management',
      description:
        'End-to-end process automation tightly coupled with case management — AI routes work, applies rules, and keeps every exception visible and accountable.',
      capabilities: [
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
      name: 'e-KYC (Facial Recognition, Geotagging, Liveness Check)',
      description:
        'Digital identity verification combining facial recognition, geotagging, and liveness detection to onboard customers securely without branch friction.',
      capabilities: [
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
      name: 'Recommendation (Product and Quotation)',
      description:
        'AI recommendations that suggest the right products and quotations based on customer profile, propensity, and underwriting appetite.',
      capabilities: [
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
      name: 'Outbound and Inbound Sales Management',
      description:
        'Unified sales orchestration for inbound intent and outbound campaigns — AI prioritizes leads, scripts conversations, and measures conversion quality.',
      capabilities: [
        {
          title: 'Inbound intelligence',
          items: ['Intent detection', 'Queue optimization', 'Offer matching'],
        },
        {
          title: 'Outbound excellence',
          items: ['Campaign targeting', 'Contact timing', 'Outcome learning'],
        },
      ],
    },
    {
      id: 'propensity',
      name: 'Propensity of Claims, Fraud, Lapsation or Churn',
      description:
        'Predictive models that score propensity for claims, fraud, lapsation, and churn — so insurers and banks intervene earlier with the right action.',
      capabilities: [
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

export function getProductCategory(slug) {
  return Object.values(productsNav).find((c) => c.slug === slug) ?? null;
}
