/**
 * Services navigation mega-menu + detail page content.
 *
 * HOW TO ADD A NEW DETAIL PAGE:
 * 1. Add a category under `insurance.categories` or `banking.categories`.
 * 2. Give it a unique `slug` (used in the URL: /services/:slug).
 * 3. Fill in `navPoints` (shown in the mega-menu) and `detail` (page body).
 * 4. No routing changes needed — ServiceDetail.jsx reads this file automatically.
 */

export const servicesTopBox = [
  {
    id: 'digital-transformation',
    label: 'Digital Transformation Solutions',
    icon: 'monitor',
    to: '/services#digital-transformation',
  },
  {
    id: 'application-support',
    label: 'Application Management & Enhancement',
    icon: 'layers',
    to: '/services#application-support',
  },
  {
    id: 'resource-augmentation',
    label: 'Comprehensive Resource Augmentation',
    icon: 'code',
    to: '/services#resource-augmentation',
  },
  {
    id: 'specialised-services',
    label: 'Specialized Services & Consulting',
    icon: 'briefcase',
    to: '/services#specialised-services',
  },
];

export const servicesNav = {
  insurance: {
    label: 'Insurance',
    categories: [
      {
        slug: 'life-insurance',
        title: 'Life Insurance',
        navPoints: [
          'Retail, Group, Takaful Business',
          'New business, UW, Servicing, and Claims',
          'Rules Engines, BPM, ECM',
          'Digital Portal and Mobile Apps',
        ],
        detail: {
          eyebrow: 'Insurance',
          title: 'Life Insurance',
          subtitle:
            'End-to-end digital solutions for life insurers — from new business and underwriting to servicing, claims, and customer engagement.',
          intro: [
            'BOIT Global helps life insurers modernize core operations while launching digital portals and mobile experiences that customers and agents expect today.',
            'Our modular accelerators cover retail, group, and Takaful business lines with proven BPM, rules engine, and ECM integrations.',
          ],
          highlights: [
            {
              title: 'New Business & Underwriting',
              body: 'Digitize proposal intake, medical underwriting workflows, and policy issuance with configurable rules engines.',
            },
            {
              title: 'Servicing & Claims',
              body: 'Self-service portals for policy changes, premium payments, and claims tracking with straight-through processing.',
            },
            {
              title: 'Digital Channels',
              body: 'Responsive web portals and native mobile apps for agents, customers, and bancassurance partners.',
            },
          ],
          capabilities: [
            'Retail, Group & Takaful product configuration',
            'Rules engines, BPM & ECM integration',
            'Agent & customer self-service portals',
            'Mobile apps for iOS & Android',
            'Legacy core modernization',
            'Analytics & reporting dashboards',
          ],
        },
      },
      {
        slug: 'health-insurance',
        title: 'Health Insurance',
        navPoints: [
          'Retail, Group, Takaful Business',
          'TPA and Provider Portal Platform',
          'Customer Self Service',
          'Digital Portal and Mobile Apps',
        ],
        detail: {
          eyebrow: 'Insurance',
          title: 'Health Insurance',
          subtitle:
            'Connected health insurance platforms spanning TPA operations, provider networks, and member self-service.',
          intro: [
            'Streamline claims adjudication, provider management, and member engagement with a unified digital health insurance stack.',
          ],
          highlights: [
            {
              title: 'TPA Platform',
              body: 'End-to-end third-party administration with provider portals, pre-authorization, and claims settlement.',
            },
            {
              title: 'Member Experience',
              body: 'Self-service for policy lookup, e-cards, network search, and claim submission.',
            },
            {
              title: 'Provider Network',
              body: 'Onboarding, credentialing, and contract management for hospitals and clinics.',
            },
          ],
          capabilities: [
            'Retail, Group & Takaful health products',
            'TPA & provider portal platform',
            'Customer self-service channels',
            'Digital portal & mobile apps',
            'Claims workflow automation',
            'Regulatory reporting',
          ],
        },
      },
      {
        slug: 'general-insurance',
        title: 'General Insurance',
        navPoints: [
          'Agent & Customer Portal and Mobile Apps',
          'Case Management and Workflow',
          'Personal and Commercial Lines',
          'Core System Modernization',
        ],
        detail: {
          eyebrow: 'Insurance',
          title: 'General Insurance',
          subtitle:
            'Modernize personal and commercial lines with agent portals, case management, and core system transformation.',
          intro: [
            'From motor and property to commercial liability, BOIT delivers workflow automation and digital channels that reduce loss ratios and improve turnaround.',
          ],
          highlights: [
            {
              title: 'Agent & Customer Portals',
              body: 'Quote, bind, and service policies through responsive web and mobile experiences.',
            },
            {
              title: 'Case Management',
              body: 'Configurable workflows for FNOL, investigation, and settlement across lines of business.',
            },
            {
              title: 'Core Modernization',
              body: 'Migrate legacy policy admin systems to cloud-native architectures without disrupting live business.',
            },
          ],
          capabilities: [
            'Agent & customer portal / mobile apps',
            'Case management & workflow',
            'Personal & commercial lines',
            'Core system modernization',
            'Document management & OCR',
            'Integration with reinsurance & finance',
          ],
        },
      },
    ],
  },
  banking: {
    label: 'Banking',
    categories: [
      {
        slug: 'retail-banking',
        title: 'Retail Banking',
        navPoints: [
          'Mobile Banking, Tablet Banking',
          'Digital Account Opening',
          'BPM, ATM, CRM systems',
          'Branch Transformation and Queue Management System',
        ],
        detail: {
          eyebrow: 'Banking',
          title: 'Retail Banking',
          subtitle:
            'Consumer banking experiences — mobile, tablet, branch, and digital onboarding — built for scale and compliance.',
          intro: [
            'Transform how retail customers interact with your bank through omnichannel digital banking and intelligent branch operations.',
          ],
          highlights: [
            {
              title: 'Mobile & Tablet Banking',
              body: 'Feature-rich apps with biometric login, payments, and personalized offers.',
            },
            {
              title: 'Digital Account Opening',
              body: 'Paperless KYC, e-signature, and instant account activation.',
            },
            {
              title: 'Branch Transformation',
              body: 'Queue management, tablet-assisted servicing, and unified CRM across channels.',
            },
          ],
          capabilities: [
            'Mobile & tablet banking apps',
            'Digital account opening & KYC',
            'BPM, ATM & CRM integration',
            'Branch transformation & queue management',
            'Personal financial management',
            'Regulatory compliance tooling',
          ],
        },
      },
      {
        slug: 'corporate-banking',
        title: 'Corporate Banking',
        navPoints: [
          'Corporate and Business Banking',
          'ODL, Cheque, Multi-currencies system',
          'Payment, Entitlement systems',
          'Group Companies and Renewals',
        ],
        detail: {
          eyebrow: 'Banking',
          title: 'Corporate Banking',
          subtitle:
            'Enterprise-grade corporate banking platforms for treasury, payments, and multi-entity operations.',
          intro: [
            'Support complex corporate relationships with secure payment rails, entitlement controls, and group company management.',
          ],
          highlights: [
            {
              title: 'Corporate & Business Banking',
              body: 'Cash management, lending workflows, and relationship dashboards for RM teams.',
            },
            {
              title: 'Multi-Currency Operations',
              body: 'ODL, cheque processing, and FX across currencies with real-time limits.',
            },
            {
              title: 'Entitlements & Payments',
              body: 'Role-based approval chains and straight-through payment processing.',
            },
          ],
          capabilities: [
            'Corporate & business banking portals',
            'ODL, cheque & multi-currency systems',
            'Payment & entitlement management',
            'Group companies & renewals',
            'Trade finance integration',
            'Audit trails & reporting',
          ],
        },
      },
      {
        slug: 'investment-banking',
        title: 'Investment Banking',
        navPoints: [
          'Market Data Analytics',
          'RegTech Solutions',
          'Smart Fraud Detection',
          'Smart Document Processing',
        ],
        detail: {
          eyebrow: 'Banking',
          title: 'Investment Banking',
          subtitle:
            'Data-driven investment banking tools — analytics, RegTech, fraud detection, and intelligent document processing.',
          intro: [
            'Accelerate deal flow and compliance with AI-powered analytics, fraud defense, and automated document workflows.',
          ],
          highlights: [
            {
              title: 'Market Data Analytics',
              body: 'Real-time dashboards, risk metrics, and portfolio analytics for trading desks.',
            },
            {
              title: 'RegTech Solutions',
              body: 'Automated regulatory reporting, KYC/AML screening, and audit-ready data pipelines.',
            },
            {
              title: 'Smart Document Processing',
              body: 'OCR, classification, and extraction for contracts, term sheets, and compliance filings.',
            },
          ],
          capabilities: [
            'Market data analytics & visualization',
            'RegTech & compliance automation',
            'Smart fraud detection',
            'Intelligent document processing',
            'Trade lifecycle management',
            'API integrations with market feeds',
          ],
        },
      },
    ],
  },
};

/** Flat lookup: slug → full category object (for detail pages & links). */
export function getServiceBySlug(slug) {
  for (const pillar of Object.values(servicesNav)) {
    const match = pillar.categories.find((c) => c.slug === slug);
    if (match) return { pillar: pillar.label, ...match };
  }
  return null;
}

/** All categories flattened — useful for sitemaps or static generation. */
export function getAllServices() {
  return Object.entries(servicesNav).flatMap(([key, pillar]) =>
    pillar.categories.map((cat) => ({ pillarKey: key, pillarLabel: pillar.label, ...cat })),
  );
}
