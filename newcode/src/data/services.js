/* Services overview + the six category detail pages.
   All copy transcribed from WEBSITE-CONTENT.md. */

export const servicesOverview = {
  hero: {
    eyebrow: 'Fintech Services',
    title: 'Built by industry veterans.',
    subtitle:
      'Led by industry veterans, BOIT Global delivers innovative fintech solutions that empower insurance and banking firms and enhance customer experiences.',
  },
  sidebarCta: {
    title: 'Ready to get started?',
    body: 'Let us tailor a solution for your business.',
    cta: { label: 'Request Demo', to: '/contact' },
  },
  whyPartner: {
    eyebrow: 'Our Commitment',
    title: 'Why partner with us',
  },
  groups: [
    {
      id: 'digital-transformation',
      n: '01',
      title: 'Digital Transformation Solutions',
      body: 'We specialize in building next-generation technology solutions with significant experience in delivering end-to-end solutions for insurance and banking.',
      columns: [
        {
          title: 'Digital Experience Solutions',
          items: [
            'Customer Servicing Portals',
            'Agency Solutions',
            'Mobile App Development',
            'Progressive Web Apps',
          ],
        },
        {
          title: 'Digital Solutions',
          items: [
            'RPA & Chatbots',
            'Document Management System',
            'Business Process Management',
            'Rules Engine',
          ],
        },
        {
          title: 'Data & Intelligence',
          items: [
            'API Development & Management',
            'Business Intelligence & Analytics',
            'OCR/ICR/Pattern Recognition',
            'Co-Creation Of Products',
          ],
        },
        {
          title: 'Process & Automation',
          items: [
            'Data Lake Implementation',
            'Artificial Intelligence',
            'Machine Learning',
            'Natural Language Processing',
          ],
        },
      ],
    },
    {
      id: 'application-support',
      n: '02',
      title: 'Application Support & Enhancement',
      body: 'World-class application support on complex IT applications with global best practices, ensuring minimal downtime.',
      columns: [
        {
          title: 'Proactive Support',
          items: [
            'Predicts and prevents issues',
            'Ensures minimal downtime',
            'Continuous performance monitoring',
          ],
        },
        {
          title: 'Quick Escalation Process',
          items: [
            'Fast response to critical incidents',
            'Prioritized issue resolution',
            'Real-time status tracking',
          ],
        },
        {
          title: 'Continuous Improvement',
          items: ['Root-cause analysis', 'Measurable performance enhancement'],
        },
        {
          title: 'Scalable Support Model',
          items: ['Adapts to varying app sizes', 'Flexible resource allocation'],
        },
        {
          title: 'Comprehensive Training',
          items: ['Detailed user guides', 'Regular training sessions'],
        },
        {
          title: 'Global Best Practices',
          items: ['SLA & incident management', 'Flexi-support at period-end'],
        },
      ],
    },
    {
      id: 'resource-augmentation',
      n: '03',
      title: 'Resource Augmentation',
      body: 'Strong technical and functional talent with expertise across multiple skillsets. Offshore Development Centres (ODC) act as flexible extended arms for your IT departments.',
      columns: [
        {
          title: 'Digital Capabilities',
          items: [
            'App Engineering',
            'Data & Analytics',
            'Cloud Engineering',
            'CX & Automation',
            'Cybersecurity',
          ],
        },
        {
          title: 'Technical Skills',
          items: [
            'Angular JS',
            'React JS',
            'Java, Spring Boot & Microservices',
            'Python',
            'Node JS',
            'QA (Manual/Automation)',
            'RPA Tech',
          ],
        },
        {
          title: 'Product Skills',
          items: [
            'IBM BPM/BAW',
            'IBM FileNet',
            'IBM Case Manager',
            'Oracle BPM/ESB',
            'Kafka & Spark',
          ],
        },
        {
          title: 'Functional Skills',
          items: [
            'Project Managers',
            'Scrum Masters',
            'Insurance/Banking SMEs',
            'Business Consultants',
          ],
        },
      ],
    },
    {
      id: 'specialised-services',
      n: '04',
      title: 'Specialised Services & Consulting',
      body: 'Specialized services to support business and technical transformations with outstanding quality and proven methodologies.',
      columns: [
        {
          title: 'Technology Transformation',
          items: ['App Architecture Review', 'DevOps Setup', 'IT Roadmap Blueprinting'],
        },
        {
          title: 'Business Transformation',
          items: ['Defining Target Operating Model', 'Building Proof Of Concept'],
        },
        {
          title: 'Quality Assurance',
          items: [
            'Load Testing',
            'Performance Testing',
            'VAPT & Security Testing',
            'Robotic Test Automation',
          ],
        },
        {
          title: 'Digital & Business Advisory',
          items: ['Design technology roadmaps', 'Develop system blueprints'],
        },
      ],
    },
  ],
};

export const categoryChrome = {
  subtitle: (category) =>
    `End-to-end solutions for ${category} — explore how BOIT Global modernises every stage of your operations.`,
  ctaTitle: (category) => `Ready to transform ${category}?`,
  ctaBody: 'Talk to our team about tailoring a solution for your organisation.',
  buttons: [
    { label: 'Demo', to: '/contact', primary: true },
    { label: 'All Services', to: '/services' },
  ],
};

export const serviceCategories = {
  'life-insurance': {
    label: 'Life Insurance',
    pillar: 'Insurance',
    sections: [
      {
        id: 'retail-group-takaful',
        name: 'Retail, Group, Takaful Business',
        headline: 'Unified Solutions for Diverse Life Insurance Markets',
        challenge:
          'Managing individual retail policies, complex corporate group schemes, and Sharia-compliant Takaful products often requires juggling disparate, siloed legacy systems, leading to high overhead and compliance risks.',
        solution:
          'We provide a consolidated, flexible technology architecture capable of supporting multiple business lines on a single platform. Whether you are scaling direct-to-consumer retail products, managing dynamic employee benefits for corporate clients, or ensuring strict ethical and financial compliance for Takaful funds, our platform adapts to your specific market requirements seamlessly.',
        capabilities: [
          {
            title: 'Multi-Line Administration',
            body: 'Manage Retail, Group, and Takaful portfolios from a single, centralized core system.',
          },
          {
            title: 'Fund Segregation Engine',
            body: 'Automated, compliant financial routing to maintain strict separation between shareholder and participant funds for Takaful operations.',
          },
          {
            title: 'Dynamic Group Billing',
            body: 'Flexible census management and automated premium reconciliation for complex corporate group structures.',
          },
        ],
        impact: [
          {
            title: 'Accelerated Market Expansion',
            body: 'Launch new product types across different demographic segments rapidly.',
          },
          {
            title: 'Reduced IT Overhead',
            body: 'Eliminate the cost of maintaining separate legacy systems for different business lines.',
          },
          {
            title: 'Guaranteed Compliance',
            body: 'Built-in regulatory and Sharia-compliant frameworks mitigate financial and legal risks.',
          },
        ],
      },
      {
        id: 'new-business-uw-claims',
        name: 'New business, UW, Servicing, and Claims',
        headline: 'End-to-End Life Insurance Lifecycle Automation',
        challenge:
          'Traditional life insurance lifecycles are plagued by manual data entry, slow underwriting decisions, and disconnected customer servicing, which frustrates applicants and delays revenue.',
        solution:
          'BOIT Global modernizes the entire policy journey. We implement straight-through processing (STP) pipelines that take a policy from application to issuance in record time. By integrating data-driven underwriting and automated servicing workflows, we ensure that your operations are as seamless for your back-office teams as they are for your policyholders.',
        capabilities: [
          {
            title: 'Frictionless Onboarding',
            body: 'Digital e-applications with real-time data validation and electronic signature integration.',
          },
          {
            title: 'Intelligent Underwriting',
            body: 'Automated risk assessment using third-party data integrations (medical, financial) to instantly approve standard cases.',
          },
          {
            title: 'Automated Claims Adjudication',
            body: 'Streamlined claims intake, validation, and payout routing with built-in fraud detection protocols.',
          },
        ],
        impact: [
          {
            title: 'Faster Time-to-Issue',
            body: 'Dramatically reduce the time it takes to quote, bind, and issue new life policies.',
          },
          {
            title: 'Optimized Resource Allocation',
            body: 'Free up your expert underwriters and claims adjusters to focus only on complex, high-value cases.',
          },
          {
            title: 'Enhanced Customer Retention',
            body: 'Provide smooth, error-free policy servicing and rapid claims resolutions when it matters most.',
          },
        ],
      },
      {
        id: 'rules-bpm-ecm',
        name: 'Rules Engines, BPM, ECM',
        headline: 'The Intelligent Engine Behind Modern Insurance',
        challenge:
          'As insurance products become more customized, relying on hard-coded legacy systems or manual routing for pricing, workflows, and document management creates critical operational bottlenecks.',
        solution:
          'We decouple your business logic from your core code. BOIT Global integrates enterprise-grade Rules Engines for agile decision-making, Business Process Management (BPM) to orchestrate complex tasks across departments, and Enterprise Content Management (ECM) to securely digitize and organize the massive volume of documentation inherent to life insurance.',
        capabilities: [
          {
            title: 'Agile Rules Engine',
            body: 'Empower business users to update pricing, underwriting guidelines, and commission structures without requiring IT intervention.',
          },
          {
            title: 'Workflow Orchestration (BPM)',
            body: 'Track and automate tasks across departments, ensuring SLAs are met and nothing falls through the cracks.',
          },
          {
            title: 'Secure Document Management (ECM)',
            body: 'Centralized, secure storage for medical records, identification, and policy contracts with advanced search and audit trails.',
          },
        ],
        impact: [
          {
            title: 'Unmatched Agility',
            body: 'React to market changes, competitor pricing, and new regulations in days, not months.',
          },
          {
            title: 'Operational Transparency',
            body: 'Gain real-time visibility into every workflow, identifying and eliminating bottlenecks instantly.',
          },
          {
            title: 'Audit Readiness',
            body: 'Ensure total compliance with a secure, highly organized, and easily retrievable document ecosystem.',
          },
        ],
      },
      {
        id: 'digital-portal-apps',
        name: 'Digital Portal and Mobile Apps',
        headline: 'Next-Generation Digital Experiences for Life Insurance',
        challenge:
          'Today’s policyholders and agents expect the same intuitive, on-demand digital experiences they get from consumer tech companies. Outdated interfaces lead to high call center volumes and poor brand perception.',
        solution:
          'We design and deploy high-performance digital portals and mobile applications that put the power directly into the hands of your users. Our omnichannel solutions ensure that whether an agent is generating a complex quote in the field, or a customer is updating their beneficiaries from their couch, the experience is secure, fast, and entirely frictionless.',
        capabilities: [
          {
            title: 'Omnichannel Access',
            body: 'Responsive web portals and native iOS/Android applications built for speed and security.',
          },
          {
            title: 'Self-Service Policy Management',
            body: 'Allow users to update personal details, change payment methods, view cash values, and download tax documents instantly.',
          },
          {
            title: 'Agent Enablement Hub',
            body: 'Equip your sales force with mobile tools for quick quotes, illustration generation, and client portfolio tracking.',
          },
        ],
        impact: [
          {
            title: 'Drastic Reduction in Support Costs',
            body: 'Deflect routine inquiries and servicing requests away from your call center.',
          },
          {
            title: 'Increased Agent Productivity',
            body: 'Give your sales channels the digital tools they need to close deals faster and manage their book of business effortlessly.',
          },
          {
            title: 'Elevated Brand Loyalty',
            body: 'Drive long-term engagement by providing a modern, user-centric interface that builds trust.',
          },
        ],
      },
    ],
  },

  'health-insurance': {
    label: 'Health Insurance',
    pillar: 'Insurance',
    sections: [
      {
        id: 'retail-group-takaful',
        name: 'Retail, Group, Takaful Business',
        headline: 'Comprehensive Administration for Diverse Health Portfolios',
        challenge:
          'Managing individual health plans, complex corporate benefits, and Sharia-compliant Takaful health policies on fragmented legacy systems causes major inefficiencies, billing errors, and compliance gaps.',
        solution:
          'BOIT Global delivers a unified, scalable core platform that seamlessly handles the distinct requirements of all health insurance models. Our technology simplifies policy administration across all demographics, from direct-to-consumer retail plans to massive enterprise groups, while ensuring strict adherence to regulatory and ethical Takaful frameworks.',
        capabilities: [
          {
            title: 'Multi-Line Health Core',
            body: 'Centrally manage individual health policies alongside complex, multi-tiered corporate group schemes on a single database.',
          },
          {
            title: 'Flexible Group Billing & Census',
            body: 'Streamlined enrollment portals, automated prorated billing, and easy roster updates for corporate HR administrators.',
          },
          {
            title: 'Takaful Fund Management',
            body: 'Automated, transparent segregation of participant and operator funds for Sharia-compliant health products.',
          },
        ],
        impact: [
          {
            title: 'Accelerated Market Expansion',
            body: 'Quickly deploy new health products to diverse demographic segments without IT bottlenecks.',
          },
          {
            title: 'Operational Efficiency',
            body: 'Drastically lower administrative costs by consolidating disparate systems into one unified engine.',
          },
          {
            title: 'Risk Mitigation',
            body: 'Ensure total regulatory and ethical compliance with built-in, automated financial guardrails.',
          },
        ],
      },
      {
        id: 'tpa-provider-portal',
        name: 'TPA and Provider Portal Platform',
        headline: 'Seamless Connectivity for Payers, TPAs, and Healthcare Networks',
        challenge:
          'Disconnected communication between insurers, Third-Party Administrators (TPAs), and medical providers leads to delayed pre-authorizations, frustrating claims disputes, and friction within your healthcare network.',
        solution:
          'We build robust, integrated portals that act as a secure digital bridge connecting all stakeholders in the healthcare ecosystem. By facilitating real-time data exchange, BOIT Global ensures rapid claims routing, transparent payment tracking, and frictionless collaboration between your core systems and your medical partners.',
        capabilities: [
          {
            title: 'Automated Pre-Authorization',
            body: 'Instant eligibility checks and rules-driven approvals for medical procedures, reducing wait times for patients.',
          },
          {
            title: 'Real-Time Claims Tracking',
            body: 'Transparent dashboards for hospitals and clinics to monitor claim statuses, denials, and payment schedules.',
          },
          {
            title: 'Secure Data Exchange',
            body: 'Fully compliant (e.g., HIPAA/GDPR) transmission of sensitive Electronic Health Records (EHR) and standardized billing codes.',
          },
        ],
        impact: [
          {
            title: 'Stronger Provider Networks',
            body: 'Attract and retain top medical facilities by providing them with hassle-free administrative tools.',
          },
          {
            title: 'Reduced Processing Costs',
            body: 'Eliminate manual data entry, paper trails, and expensive phone-based verifications.',
          },
          {
            title: 'Faster Turnaround Times',
            body: 'Accelerate care delivery and claim payouts with instant, digital workflows.',
          },
        ],
      },
      {
        id: 'customer-self-service',
        name: 'Customer Self Service',
        headline: 'Empowering Health Insurance Members with 24/7 Control',
        challenge:
          'When policyholders lack easy, intuitive access to their health plan details, call centers become overwhelmed with costly, routine inquiries regarding coverage limits, network providers, and claim statuses.',
        solution:
          "BOIT Global develops intuitive self-service platforms that put the member in the driver's seat. We provide highly secure, on-demand access to critical health insurance information, empowering users to manage their care journey independently, confidently, and without needing to pick up the phone.",
        capabilities: [
          {
            title: 'Digital ID & Benefit Overview',
            body: 'Instant access to digital health cards, real-time deductible tracking, and comprehensive coverage limits.',
          },
          {
            title: 'Intelligent Provider Search',
            body: 'Interactive, location-based directories allowing members to easily locate in-network hospitals, pharmacies, and specialists.',
          },
          {
            title: 'Digital Claim Submission',
            body: 'Easy document and photo uploads for out-of-network reimbursement requests with real-time status updates.',
          },
        ],
        impact: [
          {
            title: 'Drastically Lower Support Costs',
            body: 'Deflect high volumes of basic, repetitive inquiries away from your expensive call centers.',
          },
          {
            title: 'Enhanced Member Satisfaction',
            body: 'Deliver the frictionless, modern digital experience that today’s healthcare consumers expect.',
          },
          {
            title: 'Improved Health Outcomes',
            body: 'Encourage proactive care by making benefits and provider networks easily accessible and transparent.',
          },
        ],
      },
      {
        id: 'digital-portal-apps',
        name: 'Digital Portal and Mobile Apps',
        headline: 'Health Insurance in the Palm of Your Hand',
        challenge:
          'Modern healthcare consumers demand immediate, on-the-go access to their insurance. Clunky web interfaces and a lack of true mobile functionality damage brand reputation and severely limit user engagement.',
        solution:
          'We design and engineer high-performance mobile applications and responsive digital portals specifically for the health insurance sector. BOIT Global ensures your members, brokers, and care coordinators have a secure, seamless, and deeply engaging user experience across all devices, wherever they are.',
        capabilities: [
          {
            title: 'Native Mobile Experiences',
            body: 'Fast, secure iOS and Android applications utilizing modern biometric login (FaceID/TouchID) for ease of access.',
          },
          {
            title: 'Telehealth Integration',
            body: 'Seamless API connections to virtual care and telemedicine providers directly within your app ecosystem.',
          },
          {
            title: 'Proactive Push Notifications',
            body: 'Automated alerts for claim payouts, premium due dates, missing documents, and personalized wellness reminders.',
          },
        ],
        impact: [
          {
            title: 'Maximized Digital Adoption',
            body: 'Drive high download and usage rates with a user-centric design that members actually enjoy using.',
          },
          {
            title: 'Competitive Differentiation',
            body: 'Stand out in a crowded insurance market by offering cutting-edge mobile health technology.',
          },
          {
            title: 'Always-On Engagement',
            body: "Keep your brand connected to members' daily lives through wellness integrations and timely, helpful alerts.",
          },
        ],
      },
    ],
  },

  'general-insurance': {
    label: 'General Insurance',
    pillar: 'Insurance',
    sections: [
      {
        id: 'agent-customer-portal',
        name: 'Agent & Customer Portal and Mobile Apps',
        headline: 'Omnichannel Digital Hubs for General Insurance',
        challenge:
          'Disconnected sales channels and outdated customer interfaces slow down policy binding for agents and overwhelm your support teams with routine, manual inquiries from policyholders.',
        solution:
          'We build high-performance web and mobile platforms that empower both your distribution networks and your customers. From instant, complex quoting tools for brokers to self-service claims tracking for individuals, we ensure every interaction is fast, intuitive, and seamlessly integrated with your back-office core systems.',
        capabilities: [
          {
            title: 'Unified Agent Dashboard',
            body: 'Equip brokers with digital tools to generate quotes, issue policies, and manage their client portfolios from anywhere.',
          },
          {
            title: 'Customer Self-Service Hubs',
            body: 'Enable policyholders to download documents, pay premiums, and file First Notice of Loss (FNOL) claims entirely online.',
          },
          {
            title: 'Mobile-First Accessibility',
            body: 'Native iOS and Android applications designed for rapid, on-the-go access to digital ID cards and emergency roadside assistance integrations.',
          },
        ],
        impact: [
          {
            title: 'Increased Sales Velocity',
            body: 'Give agents the frictionless digital tools they need to close deals faster and outpace the competition.',
          },
          {
            title: 'Reduced Support Overhead',
            body: 'Deflect high volumes of routine calls and emails by giving customers the power to manage their own policies.',
          },
          {
            title: 'Elevated Customer Loyalty',
            body: 'Deliver a modern, consumer-grade digital experience that builds trust and drives renewals.',
          },
        ],
      },
      {
        id: 'case-management-workflow',
        name: 'Case Management and Workflow',
        headline: 'Intelligent Orchestration for Complex Operations',
        challenge:
          'Manual hand-offs, disjointed communication, and siloed data in claims handling and underwriting lead to expensive operational bottlenecks, missed SLAs, and frustrated clients.',
        solution:
          'BOIT Global implements advanced case management and workflow automation architecture that intelligently routes work across your entire organization. We eliminate operational blind spots, ensuring every complex claim, dispute, and underwriting request is handled efficiently, transparently, and with full auditability.',
        capabilities: [
          {
            title: 'Automated Task Routing',
            body: 'Intelligently assign tasks to the right adjusters or underwriters based on workload, expertise, and authority limits.',
          },
          {
            title: '360-Degree Case Views',
            body: 'Consolidate all communications, documents, and system data into a single, unified workspace for fast decision-making.',
          },
          {
            title: 'SLA Monitoring & Alerts',
            body: 'Proactive tracking of deadlines with automated escalations to ensure regulatory and internal compliance.',
          },
        ],
        impact: [
          {
            title: 'Faster Claims Resolution',
            body: 'Accelerate the lifecycle of complex claims by removing administrative friction and manual delays.',
          },
          {
            title: 'Optimized Workforce Productivity',
            body: 'Free your expert staff from tedious tracking and routing, allowing them to focus on high-value analysis.',
          },
          {
            title: 'Total Operational Transparency',
            body: 'Gain real-time analytics into workflow bottlenecks to continuously improve operational efficiency.',
          },
        ],
      },
      {
        id: 'personal-commercial-lines',
        name: 'Personal and Commercial Lines',
        headline: 'Scalable Architecture for Every Business Line',
        challenge:
          'Managing high-volume, standardized personal lines (like auto and home) alongside highly complex, customized commercial lines often forces insurers to maintain duplicate, expensive, and rigid IT infrastructures.',
        solution:
          'We deliver a flexible, unified core platform capable of handling the entire spectrum of general insurance. Our technology seamlessly processes the rapid, automated transactions required for personal lines, while simultaneously providing the deep, configurable underwriting and rating engines needed for specialized commercial risks.',
        capabilities: [
          {
            title: 'Configurable Product Factory',
            body: 'Rapidly design, test, and launch new insurance products across both personal and commercial sectors without heavy coding.',
          },
          {
            title: 'High-Volume Processing Engine',
            body: 'Scalable architecture built to handle massive transactional loads for standardized personal lines efficiently.',
          },
          {
            title: 'Dynamic Commercial Underwriting',
            body: 'Advanced rating capabilities and customized risk assessment tools for complex commercial portfolios.',
          },
        ],
        impact: [
          {
            title: 'Accelerated Time-to-Market',
            body: 'Launch new products and react to market changes in days, not months.',
          },
          {
            title: 'Reduced IT Complexity',
            body: 'Consolidate multiple legacy systems into one unified platform, drastically lowering maintenance costs.',
          },
          {
            title: 'Optimized Risk Selection',
            body: 'Leverage precise, data-driven underwriting rules across both standardized and complex policies.',
          },
        ],
      },
      {
        id: 'core-system-modernization',
        name: 'Core System Modernization',
        headline: 'Future-Proofing the Insurance Enterprise',
        challenge:
          'Aging legacy mainframe systems are inflexible, prohibitively expensive to maintain, and fundamentally incapable of supporting modern digital initiatives, API integrations, or advanced data analytics.',
        solution:
          'BOIT Global specializes in end-to-end core system modernization. We help general insurers strategically migrate away from outdated infrastructure to agile, cloud-ready platforms. We de-risk the modernization journey, unlocking new capabilities and ensuring your business is perfectly positioned to capitalize on the future of insurtech.',
        capabilities: [
          {
            title: 'Legacy Data Migration',
            body: 'Secure, accurate extraction and transformation of decades of historical policy and claims data.',
          },
          {
            title: 'Cloud-Native Architecture',
            body: 'Deployment of highly scalable, resilient core systems hosted on modern cloud infrastructure (AWS, Azure, GCP).',
          },
          {
            title: 'API & Microservices Enablement',
            body: 'Open architecture that allows for rapid, secure integration with third-party data providers, insurtech startups, and payment gateways.',
          },
        ],
        impact: [
          {
            title: 'Dramatically Lower TCO',
            body: 'Eliminate the exorbitant licensing and maintenance costs associated with legacy mainframes.',
          },
          {
            title: 'Unparalleled System Scalability',
            body: 'Automatically scale computing resources to handle seasonal spikes or rapid business growth without performance drops.',
          },
          {
            title: 'Ecosystem Readiness',
            body: 'Easily plug into the broader digital ecosystem to leverage new distribution channels and alternative data sources.',
          },
        ],
      },
    ],
  },

  'retail-banking': {
    label: 'Retail Banking',
    pillar: 'Banking',
    sections: [
      {
        id: 'mobile-tablet-banking',
        name: 'Mobile Banking, Tablet Banking',
        headline: 'Next-Generation Mobile & Tablet Banking Experiences',
        challenge:
          'Today’s retail banking customers expect feature-rich, hyper-personalized, and lightning-fast digital banking experiences. Clunky, disjointed mobile apps lead to poor app store ratings, lower engagement, and customer churn.',
        solution:
          'BOIT Global designs and engineers top-tier mobile and tablet banking applications that put your bank in the pockets of your customers. We focus on delivering an intuitive user experience combined with enterprise-grade security, ensuring your customers can confidently manage their finances, execute transactions, and access support anytime, anywhere.',
        capabilities: [
          {
            title: 'Native iOS & Android Applications',
            body: 'High-performance, responsive design optimized specifically for both smartphones and larger tablet interfaces.',
          },
          {
            title: 'Advanced Security & Biometrics',
            body: 'Seamless integration of FaceID, TouchID, and multi-factor authentication (MFA) to ensure total account security without adding friction.',
          },
          {
            title: 'Personal Financial Management (PFM)',
            body: 'Embedded spending analytics, budget tracking, and personalized financial insights to drive daily app engagement.',
          },
        ],
        impact: [
          {
            title: 'Increased Customer Retention',
            body: 'Foster long-term loyalty by providing a best-in-class digital banking experience that users actually enjoy.',
          },
          {
            title: 'Reduced Cost-to-Serve',
            body: 'Migrate costly teller and call-center transactions to highly efficient, automated digital channels.',
          },
          {
            title: 'New Revenue Streams',
            body: 'Leverage targeted, in-app push notifications to cross-sell relevant financial products like credit cards and personal loans.',
          },
        ],
      },
      {
        id: 'digital-account-opening',
        name: 'Digital Account Opening',
        headline: 'Frictionless Digital Account Opening (DAO)',
        challenge:
          'Lengthy, paper-heavy, and complex onboarding processes cause severe friction for prospective retail banking customers, leading to skyrocketing application abandonment rates.',
        solution:
          'BOIT Global implements straight-through Digital Account Opening (DAO) solutions that allow new customers to onboard in minutes from any device. We integrate advanced identity verification and instant funding capabilities, transforming your customer acquisition strategy from a cumbersome chore into a seamless, modern experience.',
        capabilities: [
          {
            title: 'Automated eKYC & AML',
            body: 'Seamless integrations with third-party verification services for real-time document scanning, liveness checks, and background screening.',
          },
          {
            title: 'Omnichannel "Save and Resume"',
            body: 'Allow customers to start an application on their smartphone and finish it on a desktop without losing their progress.',
          },
          {
            title: 'Instant Issuance & Funding',
            body: 'Enable immediate account funding via debit/credit card or bank transfer, coupled with instant virtual debit card issuance for immediate use.',
          },
        ],
        impact: [
          {
            title: 'Plummeting Abandonment Rates',
            body: 'Maximize your marketing ROI by ensuring interested prospects actually complete the onboarding funnel.',
          },
          {
            title: 'Lower Acquisition Costs',
            body: 'Eliminate the manual data entry and paper processing costs associated with traditional in-branch account opening.',
          },
          {
            title: 'Immediate Revenue Generation',
            body: 'Drive instant transaction volume by giving customers immediate access to their new digital accounts.',
          },
        ],
      },
      {
        id: 'bpm-atm-crm',
        name: 'BPM, ATM, CRM systems',
        headline: 'Integrated Banking Ecosystems for Peak Performance',
        challenge:
          'Siloed back-office operations, disconnected self-service terminals, and fragmented customer data prevent retail banks from delivering a unified, efficient, and personalized omnichannel experience.',
        solution:
          'BOIT Global connects and synchronizes your core banking infrastructure. By integrating Business Process Management (BPM) for workflow automation, modernizing ATM network software, and deploying robust Customer Relationship Management (CRM) systems, we ensure your data flows seamlessly across all touchpoints.',
        capabilities: [
          {
            title: '360-Degree CRM Integration',
            body: 'Centralize customer data to empower your staff with a complete view of client interactions, account history, and product holdings.',
          },
          {
            title: 'BPM Workflow Automation',
            body: 'Orchestrate and automate complex back-office tasks such as loan origination, dispute resolution, and compliance reporting.',
          },
          {
            title: 'Next-Gen ATM Modernization',
            body: 'Upgrade ATM software to support advanced capabilities like cardless cash withdrawals, cash recycling, and personalized marketing screens.',
          },
        ],
        impact: [
          {
            title: 'Hyper-Personalized Service',
            body: 'Empower your sales and support teams to offer tailored advice and relevant product recommendations based on comprehensive customer profiles.',
          },
          {
            title: 'Exponential Efficiency Gains',
            body: 'Eliminate manual bottlenecks in the back office, reducing processing times and minimizing human error.',
          },
          {
            title: 'Optimized Self-Service Channels',
            body: 'Extract maximum value from your ATM fleet by offering a wider range of transactions outside of branch hours.',
          },
        ],
      },
      {
        id: 'branch-transformation',
        name: 'Branch Transformation and Queue Management System',
        headline: 'Smart Branch Transformation & Queue Management',
        challenge:
          'Traditional bank branches often suffer from long, frustrating wait times, inefficient staff allocation, and an outdated in-person experience that severely contradicts the convenience of modern digital banking.',
        solution:
          'BOIT Global revitalizes physical bank branches by bridging the physical-digital divide. We deploy intelligent Queue Management Systems (QMS) and interactive self-service technologies to optimize foot traffic, reduce wait times, and transform your branches from mere transaction centers into high-value advisory hubs.',
        capabilities: [
          {
            title: 'Digital Appointment Booking',
            body: 'Allow customers to schedule branch appointments via mobile app or web, ensuring they meet with the right specialist upon arrival.',
          },
          {
            title: 'Intelligent Queue Management',
            body: 'Automated check-in kiosks and digital signage that route walk-in customers efficiently based on their specific service needs.',
          },
          {
            title: 'Interactive Self-Service Kiosks',
            body: 'Deploy advanced in-branch terminals that allow customers to handle complex tasks (like card replacement or statement printing) without teller assistance.',
          },
        ],
        impact: [
          {
            title: 'Elevated In-Branch Experience',
            body: 'Eradicate frustrating lines and ensure customers feel valued and respected the moment they walk through the door.',
          },
          {
            title: 'Optimized Staff Allocation',
            body: 'Ensure your specialized branch staff (like mortgage advisors and wealth managers) are spending their time consulting, not managing crowds.',
          },
          {
            title: 'Increased Cross-Selling Opportunities',
            body: 'Utilize digital signage and targeted queue notifications to promote relevant banking products while customers wait.',
          },
        ],
      },
    ],
  },

  'corporate-banking': {
    label: 'Corporate Banking',
    pillar: 'Banking',
    sections: [
      {
        id: 'corporate-business-banking',
        name: 'Corporate and Business Banking',
        headline: 'Empowering Corporate and Business Banking Growth',
        challenge:
          'Corporate clients have complex, large-scale financial needs that rapidly outpace standard retail banking solutions. Rigid legacy systems often fail to provide the tailored, highly scalable platforms required to service these high-value enterprise accounts effectively.',
        solution:
          'BOIT Global engineers robust corporate banking platforms designed to handle the scale and complexity of enterprise finance. We provide a unified digital environment that allows banks to offer specialized commercial products, tailored credit facilities, and comprehensive financial management tools directly to their corporate clients.',
        capabilities: [
          {
            title: 'Comprehensive Account Management',
            body: 'Consolidated dashboard views of complex corporate portfolios, spanning multiple accounts, entities, and global regions.',
          },
          {
            title: 'Tailored Lending Origination',
            body: 'Streamlined, end-to-end digital workflows for commercial real estate loans, trade finance, and bespoke credit facilities.',
          },
          {
            title: 'Advanced Analytics & Reporting',
            body: 'Customizable financial dashboards that provide corporate treasurers with real-time insights into liquidity, cash flow, and risk exposure.',
          },
        ],
        impact: [
          {
            title: 'Accelerated Client Acquisition',
            body: 'Attract top-tier enterprise clients and large SMEs with a modern, feature-rich corporate banking portal.',
          },
          {
            title: 'Increased Share of Wallet',
            body: 'Cross-sell complex financial products more effectively using data-driven corporate relationship management tools.',
          },
          {
            title: 'Enhanced Operational Agility',
            body: 'Quickly adapt to changing commercial regulations and launch new corporate banking products without requiring systemic core overhauls.',
          },
        ],
      },
      {
        id: 'odl-cheque-multicurrency',
        name: 'ODL, Cheque, Multi-currencies system',
        headline: 'Seamless ODL, Cheque, and Multi-Currency Management',
        challenge:
          'Globalized businesses require fluid access to working capital and frictionless cross-border transactions. Unfortunately, fragmented legacy systems routinely cause delays in Overdraft Limit (ODL) approvals, cheque clearing, and complex currency conversions.',
        solution:
          'We modernize the core transactional engines of corporate banking. BOIT Global implements dynamic systems for instant ODL management, automated high-volume cheque processing, and real-time multi-currency handling, ensuring your corporate clients can operate globally without financial friction.',
        capabilities: [
          {
            title: 'Dynamic Overdraft Limits (ODL)',
            body: 'Automated, rules-based assessment and real-time adjustments of corporate credit limits based on cash flow analytics and collateral.',
          },
          {
            title: 'Automated Cheque Clearing',
            body: 'Integrated digital imaging and workflow automation for rapid, secure bulk cheque processing and advanced fraud detection.',
          },
          {
            title: 'Real-Time Multi-Currency Engine',
            body: 'Seamless handling of cross-border transactions, automated FX rate calculations, and multi-currency account ledgering within a single profile.',
          },
        ],
        impact: [
          {
            title: 'Uninterrupted Cash Flow',
            body: 'Provide businesses with instant, reliable access to required working capital through highly agile ODL management.',
          },
          {
            title: 'Global Business Enablement',
            body: 'Empower your corporate clients to seamlessly trade, pay, and receive funds in any major global currency without hidden delays.',
          },
          {
            title: 'Reduced Transactional Risk',
            body: 'Minimize bank exposure to FX volatility and significantly lower the risk of check fraud through automated, intelligent verification.',
          },
        ],
      },
      {
        id: 'payment-entitlement',
        name: 'Payment, Entitlement systems',
        headline: 'Secure Corporate Payments and Granular Entitlements',
        challenge:
          'Corporate treasuries execute high-value, complex payments daily, requiring watertight security protocols and highly specific user permissions that basic, out-of-the-box banking portals simply cannot enforce.',
        solution:
          "BOIT Global fortifies your corporate transaction infrastructure. We deliver sophisticated payment gateways coupled with granular, multi-tiered entitlement systems. This ensures that high-volume corporate disbursements are executed swiftly, securely, and in strict accordance with the client's internal corporate governance models.",
        capabilities: [
          {
            title: 'Bulk Payment Processing',
            body: 'High-throughput engines capable of securely processing mass payroll, vendor disbursements, and international wire transfers instantly.',
          },
          {
            title: 'Granular Role-Based Access Control (RBAC)',
            body: 'Highly configurable entitlement systems that dictate exactly which corporate employees can view, initiate, or approve specific transaction types.',
          },
          {
            title: 'Multi-Level Approval Workflows',
            body: 'Customizable transaction authorization matrices (e.g., dual authorizations, limit-based escalations) aligned with strict corporate mandates.',
          },
        ],
        impact: [
          {
            title: 'Watertight Fraud Prevention',
            body: 'Protect high-value corporate assets and bank liability with mandatory, multi-tiered approval chains for all outgoing funds.',
          },
          {
            title: 'Empowered Corporate Treasurers',
            body: "Give business clients complete, self-service administrative control over their own staff's banking permissions without needing to call the bank.",
          },
          {
            title: 'Flawless Transaction Execution',
            body: 'Guarantee the reliable, on-time execution of critical bulk payments, severely reducing settlement errors and enhancing client trust.',
          },
        ],
      },
      {
        id: 'group-companies-renewals',
        name: 'Group Companies and Renewals',
        headline: 'Streamlined Management for Group Companies and Renewals',
        challenge:
          'Servicing corporate conglomerates with intricate parent-subsidiary hierarchies is incredibly labor-intensive, often leading to disconnected financial views, inaccurate risk profiling, and missed credit facility renewal deadlines.',
        solution:
          "We provide the architectural framework required to manage complex corporate structures effortlessly. BOIT Global's solutions map intricate group company hierarchies and automate the tracking of facility expirations, ensuring holistic relationship management, accurate risk assessment, and proactive credit renewals.",
        capabilities: [
          {
            title: 'Hierarchical Entity Mapping',
            body: 'Consolidate financial views across parent companies, subsidiaries, and joint ventures within a single, overarching corporate master profile.',
          },
          {
            title: 'Automated Renewal Tracking',
            body: 'Systemic monitoring of expiring credit facilities, compliance documents, and corporate mandates with automated, time-sensitive alerts for account managers.',
          },
          {
            title: 'Consolidated Liquidity Management',
            body: 'Advanced tools enabling corporate treasurers to perform cash pooling and intercompany transfers seamlessly across their entire group structure.',
          },
        ],
        impact: [
          {
            title: 'Proactive Relationship Management',
            body: 'Prevent facility lapses, revenue leakage, and compliance breaches with automated, system-generated renewal prompts.',
          },
          {
            title: 'Holistic Risk Assessment',
            body: 'Empower bank risk officers to accurately evaluate credit exposure across an entire corporate group, rather than looking at isolated subsidiaries.',
          },
          {
            title: 'Superior Corporate Experience',
            body: 'Offer large multinational conglomerates a simplified, consolidated view of their entire global financial position on one powerful dashboard.',
          },
        ],
      },
    ],
  },

  'investment-banking': {
    label: 'Investment Banking',
    pillar: 'Banking',
    sections: [
      {
        id: 'market-data-analytics',
        name: 'Market Data Analytics',
        headline: 'Advanced Market Data Analytics for Capital Markets',
        challenge:
          'Investment banks face an overwhelming influx of high-velocity market data. Relying on fragmented or outdated analytical tools leads to missed trading opportunities, inaccurate risk modeling, and suboptimal portfolio strategies.',
        solution:
          'We deploy high-performance analytics engines capable of processing massive datasets in real-time. BOIT Global empowers your quantitative researchers, traders, and portfolio managers with actionable intelligence, predictive modeling, and deep market insights, ensuring your institution stays ahead of market volatility.',
        capabilities: [
          {
            title: 'Real-Time Data Ingestion',
            body: 'Seamless integration with global exchanges and alternative data providers to stream high-frequency pricing, volume, and sentiment data without latency.',
          },
          {
            title: 'Predictive AI Modeling',
            body: 'Advanced machine learning algorithms that identify hidden market correlations, forecast asset price movements, and back-test complex trading strategies.',
          },
          {
            title: 'Customizable Trading Dashboards',
            body: 'Intuitive visualization tools that allow desk heads and portfolio managers to monitor risk exposure and market alpha in real-time.',
          },
        ],
        impact: [
          {
            title: 'Maximize Trading Alpha',
            body: 'Uncover hidden market opportunities and execute data-driven strategies faster than the competition.',
          },
          {
            title: 'Accelerated Decision-Making',
            body: 'Replace siloed spreadsheets with centralized, real-time analytics that empower immediate, confident capital allocation.',
          },
          {
            title: 'Optimized Risk Management',
            body: 'Instantly calculate complex risk metrics (like Value at Risk) across multi-asset portfolios to protect institutional capital.',
          },
        ],
      },
      {
        id: 'regtech',
        name: 'RegTech Solutions',
        headline: 'Next-Generation RegTech for Global Compliance',
        challenge:
          'Navigating the constantly shifting landscape of global financial regulations (such as MiFID II, Basel III, or Dodd-Frank) is highly complex and resource-intensive, with non-compliance resulting in severe financial penalties and reputational damage.',
        solution:
          'BOIT Global integrates agile Regulatory Technology (RegTech) solutions that automate compliance monitoring and statutory reporting. We replace manual, error-prone compliance checks with systemic, rule-based architecture that continuously adapts to new jurisdictional mandates across global markets.',
        capabilities: [
          {
            title: 'Automated Regulatory Reporting',
            body: 'Instantly aggregate and format trading data to generate accurate, audit-ready reports for global financial authorities.',
          },
          {
            title: 'Real-Time Compliance Monitoring',
            body: 'Proactive, pre-trade compliance checks that ensure all transactions adhere to internal risk limits and external regulatory frameworks.',
          },
          {
            title: 'Dynamic Rule Updates',
            body: 'A flexible rules engine that allows compliance officers to quickly update system logic as new global regulations are enacted.',
          },
        ],
        impact: [
          {
            title: 'Eliminate Regulatory Fines',
            body: 'Ensure total accuracy and timeliness in reporting, drastically reducing the risk of regulatory audits and financial penalties.',
          },
          {
            title: 'Reduce Compliance Overhead',
            body: 'Free your legal and compliance teams from manual data gathering, allowing them to focus on high-level risk strategy.',
          },
          {
            title: 'Future-Proof Operations',
            body: 'Maintain a compliant posture effortlessly, even as you expand trading operations into new, heavily regulated international markets.',
          },
        ],
      },
      {
        id: 'smart-fraud-detection',
        name: 'Smart Fraud Detection',
        headline: 'AI-Driven Smart Fraud Detection for Institutional Finance',
        challenge:
          'As institutional transactions become faster and more complex, sophisticated malicious actors exploit blind spots in traditional, static security systems, threatening institutional capital, client assets, and market integrity.',
        solution:
          'We fortify your investment bank with proactive, intelligent defense mechanisms. BOIT Global implements advanced machine learning algorithms that analyze behavioral patterns and transaction anomalies in real-time, identifying and neutralizing complex threats before a transaction even settles.',
        capabilities: [
          {
            title: 'Machine Learning Anomaly Detection',
            body: 'Systems trained on vast datasets of historical fraud patterns to instantly flag unusual transaction volumes, abnormal geographies, or irregular trade sizes.',
          },
          {
            title: 'Behavioral Profiling',
            body: 'Continuous monitoring of user behavior across trading terminals and client portals to detect compromised credentials or insider threats.',
          },
          {
            title: 'Real-Time Transaction Blocking',
            body: 'Automated, millisecond-level intervention protocols that halt suspicious fund transfers or rogue trades pending manual review.',
          },
        ],
        impact: [
          {
            title: 'Protect Institutional Capital',
            body: 'Stop sophisticated financial crimes, wire fraud, and unauthorized trading before funds leave the institution.',
          },
          {
            title: 'Minimize False Positives',
            body: 'Leverage AI to distinguish between legitimate complex trading activity and actual fraud, reducing friction for legitimate clients and traders.',
          },
          {
            title: 'Preserve Institutional Trust',
            body: 'Maintain your reputation as a secure, impenetrable financial partner for high-net-worth individuals and corporate entities.',
          },
        ],
      },
      {
        id: 'smart-document-processing',
        name: 'Smart Document Processing',
        headline: 'Intelligent Document Processing for Investment Banking',
        challenge:
          'Investment banking operations—from M&A due diligence to derivatives clearing—rely heavily on unstructured data trapped in complex documents. Manual review of pitch books, term sheets, and ISDA contracts causes severe processing delays and high error rates.',
        solution:
          'BOIT Global revolutionizes your middle and back-office operations by automating the extraction of unstructured data. Leveraging Natural Language Processing (NLP) and Optical Character Recognition (OCR), we intelligently read, validate, and route critical financial data from complex documents directly into your core systems.',
        capabilities: [
          {
            title: 'AI-Powered Data Extraction',
            body: 'Advanced OCR and NLP algorithms that accurately capture specific clauses, financial figures, and entity names from scanned PDFs and unstructured text.',
          },
          {
            title: 'Automated Contract Analysis',
            body: 'Rapidly parse thousands of pages during M&A due diligence to identify non-standard terms, risk clauses, and compliance obligations.',
          },
          {
            title: 'Seamless System Integration',
            body: 'Automatically push extracted, verified data directly into your CRM, trading, or risk management systems without manual data entry.',
          },
        ],
        impact: [
          {
            title: 'Drastically Reduced Processing Times',
            body: 'Accelerate deal cycles and trade settlements by replacing days of manual document review with minutes of automated processing.',
          },
          {
            title: 'Eliminated Data Entry Errors',
            body: 'Remove the operational risk and financial discrepancies caused by manual re-keying of complex financial terms.',
          },
          {
            title: 'Scalable Operational Capacity',
            body: 'Handle massive spikes in deal flow or regulatory document reviews without needing to hire temporary back-office staff.',
          },
        ],
      },
    ],
  },
};

export const serviceCategoryOrder = [
  'life-insurance',
  'health-insurance',
  'general-insurance',
  'retail-banking',
  'corporate-banking',
  'investment-banking',
];
