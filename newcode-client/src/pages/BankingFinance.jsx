import React from 'react';
import ProductVerticalPage from '../components/ProductVerticalPage';
import heroImage from '../assets/pageimages/bankingFinance.png';

export default function BankingFinance() {
  return (
    <ProductVerticalPage
      platformKey="banking"
      title="Banking & Financial Services"
      headline="Reimagine financial services with AI at the core."
      lede="Connect intelligence, automation, and decision-making across banking and financial operations to improve efficiency, manage risk, strengthen compliance, and create better customer experiences."
      image={heroImage}
      imageAlt="Banking and Financial Services — digital channels, growth, and global finance"
      pillarsEyebrow="Business pillars"
      pillarsTitle="Retail, corporate, and investment — one stack."
      pillars={[
        {
          title: 'Retail Banking',
          body: 'Mobile, tablet, and digital account opening with AI that personalizes journeys and accelerates onboarding.',
        },
        {
          title: 'Corporate Banking',
          body: 'Enterprise portals, payments, entitlements, and multi-currency operations built for scale and control.',
        },
        {
          title: 'Investment Banking',
          body: 'Market analytics, RegTech, fraud defense, and smart document processing for capital markets workflows.',
        },
      ]}
      acceleratorsTitle="Engagement, operations, and channel — ready for banking."
      platformLabel="Banking Platform"
      platformTo="/product/banking"
    />
  );
}
