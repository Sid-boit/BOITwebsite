import React from 'react';
import ProductVerticalPage from '../components/ProductVerticalPage';
import heroImage from '../assets/pageimages/propertyCasuality.png';

export default function PropertyCasualty() {
  return (
    <ProductVerticalPage
      platformKey="insurance"
      title="Property & Casualty Insurance"
      headline="Put AI at the core of P&C insurance operations."
      lede="Transform underwriting, claims, policy servicing, and risk decisions across personal, commercial, fleet, and specialty insurance with intelligent, AI-driven workflows."
      image={heroImage}
      imageAlt="Property and Casualty Insurance — home, auto, and commercial protection"
      pillarsTitle="Personal and commercial lines, unified."
      pillars={[
        {
          title: 'Personal Lines',
          body: 'Quote, bind, and service home, auto, and specialty products with straight-through processing and AI-assisted underwriting.',
        },
        {
          title: 'Commercial Lines',
          body: 'Complex commercial risks with configurable rating, case workbenches, and document intelligence across the policy lifecycle.',
        },
        {
          title: 'Claims & Recovery',
          body: 'Faster FNOL, smarter triage, and leakage control — with AI extracting evidence and recommending next-best actions.',
        },
      ]}
      acceleratorsTitle="Engagement, operations, and distribution — built for P&C."
      platformLabel="Insurance Platform"
      platformTo="/product/insurance"
    />
  );
}
