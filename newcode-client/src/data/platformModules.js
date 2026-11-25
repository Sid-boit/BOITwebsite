/* Platform capability modules — same shape as product solutions. */

import imgAgents from '../assets/platform/01-ai-agents-orchestrator.png';
import imgDataLake from '../assets/platform/02-unified-data-lake.png';
import imgDecision from '../assets/platform/03-smart-decision-configurator.png';
import imgExtraction from '../assets/platform/04-intelligent-data-extraction-comparison.png';
import imgAnalysis from '../assets/platform/05-ai-analysis-summarization.png';
import imgRecommend from '../assets/platform/06-recommendation-engine.png';
import imgPropensity from '../assets/platform/07-propensity-predictive-analytics.png';

export const platformModules = [
  {
    slug: 'ai-agents-orchestrator',
    title: 'AI Agents & Orchestrator',
    headline: 'Coordinate specialist agents so complex work moves with context, not chaos.',
    lede: 'BOIT’s orchestrator routes tasks across domain agents, tools, and human reviewers. Every handoff keeps evidence, policy, and case history intact so insurance and banking teams resolve work faster without losing control.',
    image: imgAgents,
    imageAlt: 'AI agents and orchestration coordinating insurance and banking workflows',
    pillarsEyebrow: 'How it works',
    pillarsTitle: 'Plan, act, and escalate with one spine.',
    pillars: [
      {
        title: 'Compose',
        body: 'Assemble specialist agents for extraction, screening, decisioning, and customer messaging into a single playbook.',
      },
      {
        title: 'Orchestrate',
        body: 'Route work across agents and systems with business rules, SLAs, and full case context at every step.',
      },
      {
        title: 'Supervise',
        body: 'Surface exceptions to experts with the evidence pack already prepared for review and approval.',
      },
      {
        title: 'Improve',
        body: 'Capture outcomes so the next run learns which paths clear faster and where humans add the most value.',
      },
    ],
  },
  {
    slug: 'unified-data-lake',
    title: 'Unified Data Lake',
    headline: 'One governed lake for policies, customers, interactions, and AI features.',
    lede: 'Bring structured and unstructured insurance and banking data into a coherent lake that powers analytics, agents, and operational dashboards — without proliferating another shadow warehouse.',
    image: imgDataLake,
    imageAlt: 'Unified data lake powering analytics and AI across insurance and banking',
    pillarsEyebrow: 'Foundation',
    pillarsTitle: 'Ingest once. Serve every intelligence layer.',
    pillars: [
      {
        title: 'Ingest',
        body: 'Land core, channel, document, and partner feeds with lineage that stays audit-ready.',
      },
      {
        title: 'Curate',
        body: 'Normalize entities — customer, policy, claim, account — into shared, reusable models.',
      },
      {
        title: 'Govern',
        body: 'Apply access, retention, and quality controls so AI and teams consume trusted data.',
      },
      {
        title: 'Activate',
        body: 'Feed workbenches, agents, propensity models, and executive dashboards from one source of truth.',
      },
    ],
  },
  {
    slug: 'smart-decision-configurator',
    title: 'Smart Decision Configurator',
    headline: 'Encode underwriting, claims, and credit logic that business teams can change safely.',
    lede: 'Configure rules, scorecards, and AI-assisted policies in one place. Ship decision changes without heavy IT cycles while every path remains explainable and compliant.',
    image: imgDecision,
    imageAlt: 'Smart decision configurator for insurance and banking policy logic',
    pillarsEyebrow: 'Decision spine',
    pillarsTitle: 'Design decisions the business can own.',
    pillars: [
      {
        title: 'Model',
        body: 'Capture eligibility, pricing, referral, and exception logic in configurable decision trees.',
      },
      {
        title: 'Simulate',
        body: 'Test rule and model changes against historical cases before they hit production.',
      },
      {
        title: 'Decide',
        body: 'Execute consistent outcomes across portals, agents, and back-office workbenches.',
      },
      {
        title: 'Explain',
        body: 'Produce human-readable reasons and audit trails for every automated decision.',
      },
    ],
  },
  {
    slug: 'intelligent-data-extraction',
    title: 'Intelligent Data Extraction & Comparison',
    headline: 'Turn documents and images into structured, comparable evidence in seconds.',
    lede: 'Extract fields from applications, medical reports, invoices, IDs, and statements — then compare them across sources so underwriters, claims handlers, and KYC teams work from verified facts.',
    image: imgExtraction,
    imageAlt: 'Intelligent extraction and comparison across documents and images',
    pillarsEyebrow: 'Document intelligence',
    pillarsTitle: 'From unstructured file to decision-ready data.',
    pillars: [
      {
        title: 'Capture',
        body: 'Accept PDFs, scans, photos, and multi-page packs from portals, email, and partners.',
      },
      {
        title: 'Extract',
        body: 'Pull entities, tables, and signatures with confidence scores and human-review hooks.',
      },
      {
        title: 'Compare',
        body: 'Cross-check forms against IDs, labs, policies, and prior submissions for mismatches.',
      },
      {
        title: 'Package',
        body: 'Hand a clean evidence pack to case workbenches, agents, and decision engines.',
      },
    ],
  },
  {
    slug: 'ai-analysis-summarization',
    title: 'AI Analysis & Summarization',
    headline: 'Compress long files and case histories into clear, actionable briefs.',
    lede: 'Summarize medical records, claim notes, credit files, and customer interactions so specialists spend time deciding — not hunting through pages of unstructured content.',
    image: imgAnalysis,
    imageAlt: 'AI analysis and summarization for underwriting and case review',
    pillarsEyebrow: 'Insight layer',
    pillarsTitle: 'See the story before you open every page.',
    pillars: [
      {
        title: 'Read',
        body: 'Ingest long-form medical, legal, and operational documents at scale.',
      },
      {
        title: 'Analyze',
        body: 'Highlight risk cues, missing evidence, contradictions, and next-best questions.',
      },
      {
        title: 'Summarize',
        body: 'Produce role-aware briefs for underwriters, claims, compliance, and relationship managers.',
      },
      {
        title: 'Ground',
        body: 'Link every insight back to source passages so experts can verify in one click.',
      },
    ],
  },
  {
    slug: 'recommendation-engine',
    title: 'Recommendation Engine',
    headline: 'Surface the next best product, action, or decision for every customer moment.',
    lede: 'Combine propensity, eligibility, and journey context to recommend offers, servicing steps, and underwriting paths that feel personal — and stay inside policy and risk guardrails.',
    image: imgRecommend,
    imageAlt: 'Recommendation engine for products, journeys, and underwriting paths',
    pillarsEyebrow: 'Next best action',
    pillarsTitle: 'Recommend with relevance and restraint.',
    pillars: [
      {
        title: 'Sense',
        body: 'Read customer state across products, channels, and recent interactions.',
      },
      {
        title: 'Rank',
        body: 'Score offers and actions against propensity, eligibility, margin, and risk.',
      },
      {
        title: 'Deliver',
        body: 'Push recommendations into portals, agent desktops, and campaign engines.',
      },
      {
        title: 'Learn',
        body: 'Close the loop on accepts, declines, and outcomes to refine the next suggestion.',
      },
    ],
  },
  {
    slug: 'propensity-predictive-analytics',
    title: 'Propensity & Predictive Analytics',
    headline: 'Know who is ready to buy, claim, churn, or escalate — before they do.',
    lede: 'Predictive models highlight high-intent customers, emerging risk, and operational bottlenecks so growth and risk teams act early with measurable confidence.',
    image: imgPropensity,
    imageAlt: 'Propensity and predictive analytics for insurance and banking',
    pillarsEyebrow: 'Foresight',
    pillarsTitle: 'Predict intent. Prioritize action.',
    pillars: [
      {
        title: 'Signal',
        body: 'Assemble behavioral, product, and risk features from the unified data lake.',
      },
      {
        title: 'Predict',
        body: 'Score propensity to buy, claim, lapse, default, or need human support.',
      },
      {
        title: 'Prioritize',
        body: 'Rank queues, campaigns, and portfolios so capacity follows opportunity and risk.',
      },
      {
        title: 'Measure',
        body: 'Track lift, false positives, and model drift with dashboards operations can trust.',
      },
    ],
  },
];

export const platformExplore = {
  hero: {
    eyebrow: 'Platform',
    title: 'Explore the platform',
    subtitle:
      'Reusable intelligence modules that sit beneath insurance and banking — agents, data, decisions, extraction, analysis, recommendations, and propensity in one coherent stack.',
  },
  cta: {
    title: 'Ready to compose your stack?',
    body: 'Talk to our team about the modules that fit your roadmap — or start with insurance and banking accelerators.',
    buttons: [
      { label: 'Talk to us', to: '/contact', primary: true },
      { label: 'Insurance platform', to: '/platform/insurance' },
      { label: 'Banking platform', to: '/platform/banking' },
    ],
  },
};

export function getPlatformModule(slug) {
  return platformModules.find((m) => m.slug === slug);
}
