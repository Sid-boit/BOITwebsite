import React from 'react';
import ProductVerticalPage from '../components/ProductVerticalPage';
import heroImage from '../assets/pageimages/LifeAnnuityMedical.png';

export default function LifeAnnuityMedical() {
  return (
    <ProductVerticalPage
      platformKey="insurance"
      title={<>Life, Annuity &amp; Medical Insurance</>}
      headline="AI-powered intelligence for every stage of the insurance lifecycle."
      lede="From underwriting and policy servicing to claims and customer engagement, turn complex life, annuity, and medical operations into intelligent, adaptive experiences."
      image={heroImage}
      imageAlt="Life Insurance, Annuity, and Medical Insurance under one protective platform"
      pillarsTitle="Three lines. One intelligent platform."
      pillars={[
        {
          title: 'Life Insurance',
          body: 'Retail, group, and takaful journeys covering new business, underwriting, servicing, and claims — with AI guiding every decision.',
        },
        {
          title: 'Annuity',
          body: 'Quote, issue, and service annuity products with automated calculations, eligibility checks, and always-on customer self-service.',
        },
        {
          title: 'Medical Insurance',
          body: 'Member, provider, and TPA workflows unified in one platform — from onboarding and underwriting through claims and care support.',
        },
      ]}
      acceleratorsTitle="Engagement, operations, and distribution — ready for life & medical."
      platformLabel="Insurance Platform"
      platformTo="/product/insurance"
    />
  );
}
