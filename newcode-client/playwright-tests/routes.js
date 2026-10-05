// Central list of every route in the app (static + known dynamic slugs).
// Keep this in sync with newcode/src/App.jsx and newcode/src/data/site.js.
export const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },

  { name: 'services', path: '/services' },
  { name: 'services-digital-transformation', path: '/services/digital-transformation' },
  { name: 'services-application-management', path: '/services/application-management' },
  { name: 'services-resource-augmentation', path: '/services/resource-augmentation' },
  { name: 'services-specialised-services', path: '/services/specialised-services' },
  { name: 'services-life-insurance', path: '/services/life-insurance' },
  { name: 'services-health-insurance', path: '/services/health-insurance' },
  { name: 'services-general-insurance', path: '/services/general-insurance' },
  { name: 'services-retail-banking', path: '/services/retail-banking' },
  { name: 'services-corporate-banking', path: '/services/corporate-banking' },
  { name: 'services-investment-banking', path: '/services/investment-banking' },

  { name: 'product', path: '/product' },
  { name: 'product-insurance', path: '/product/insurance' },
  { name: 'product-insurance-life-annuity-medical', path: '/product/insurance/life-annuity-medical' },
  { name: 'product-insurance-property-casualty', path: '/product/insurance/property-casualty' },
  { name: 'product-banking', path: '/product/banking' },
  { name: 'product-banking-financial-services', path: '/product/banking/financial-services' },

  { name: 'product-solutions-intelligent-process-automation', path: '/product/solutions/intelligent-process-automation' },
  { name: 'product-solutions-smart-case-management', path: '/product/solutions/smart-case-management' },
  { name: 'product-solutions-insurance-core-modernization', path: '/product/solutions/insurance-core-modernization' },
  { name: 'product-solutions-medical-underwriting', path: '/product/solutions/medical-underwriting' },
  { name: 'product-solutions-motor-claims-management', path: '/product/solutions/motor-claims-management' },
  { name: 'product-solutions-fraud-detection', path: '/product/solutions/fraud-detection' },
  { name: 'product-solutions-ekyc-onboarding', path: '/product/solutions/ekyc-onboarding' },
  { name: 'product-solutions-epos-agency', path: '/product/solutions/epos-agency' },
  { name: 'product-solutions-digital-aml', path: '/product/solutions/digital-aml' },

  { name: 'product-capabilities', path: '/product/capabilities' },

  { name: 'case-studies', path: '/case-studies' },
  { name: 'media', path: '/media' },
  { name: 'contact', path: '/contact' },
  { name: 'not-found', path: '/this-page-does-not-exist' },
];
