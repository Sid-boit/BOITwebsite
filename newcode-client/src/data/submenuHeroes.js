/* Hero illustrations for Product + Services submenu destinations (01–16). */

import hero01 from '../assets/submenu-heroes/01-life-annuity-medical.png';
import hero02 from '../assets/submenu-heroes/02-property-casualty.png';
import hero03 from '../assets/submenu-heroes/03-financial-services.png';
import hero04 from '../assets/submenu-heroes/04-intelligent-process-automation.png';
import hero05 from '../assets/submenu-heroes/05-smart-case-management.png';
import hero06 from '../assets/submenu-heroes/06-insurance-core-modernization.png';
import hero07 from '../assets/submenu-heroes/07-medical-underwriting.png';
import hero08 from '../assets/submenu-heroes/08-motor-claims-management.png';
import hero09 from '../assets/submenu-heroes/09-fraud-detection.png';
import hero10 from '../assets/submenu-heroes/10-ekyc-onboarding.png';
import hero11 from '../assets/submenu-heroes/11-epos-agency.png';
import hero12 from '../assets/submenu-heroes/12-digital-aml.png';
import hero13 from '../assets/submenu-heroes/13-digital-transformation.png';
import hero14 from '../assets/submenu-heroes/14-application-management.png';
import hero15 from '../assets/submenu-heroes/15-resource-augmentation.png';
import hero16 from '../assets/submenu-heroes/16-specialised-services.png';

export const submenuHeroes = {
  '/product/insurance/life-annuity-medical': hero01,
  '/product/insurance/property-casualty': hero02,
  '/product/banking/financial-services': hero03,
  '/product/solutions/intelligent-process-automation': hero04,
  '/product/solutions/smart-case-management': hero05,
  '/product/solutions/insurance-core-modernization': hero06,
  '/product/solutions/medical-underwriting': hero07,
  '/product/solutions/motor-claims-management': hero08,
  '/product/solutions/fraud-detection': hero09,
  '/product/solutions/ekyc-onboarding': hero10,
  '/product/solutions/epos-agency': hero11,
  '/product/solutions/digital-aml': hero12,
  '/services/digital-transformation': hero13,
  '/services/application-management': hero14,
  '/services/resource-augmentation': hero15,
  '/services/specialised-services': hero16,
};

export const solutionHeroes = {
  'intelligent-process-automation': hero04,
  'smart-case-management': hero05,
  'insurance-core-modernization': hero06,
  'medical-underwriting': hero07,
  'motor-claims-management': hero08,
  'fraud-detection': hero09,
  'ekyc-onboarding': hero10,
  'epos-agency': hero11,
  'digital-aml': hero12,
};

export const serviceLineHeroes = {
  'digital-transformation': hero13,
  'application-management': hero14,
  'resource-augmentation': hero15,
  'specialised-services': hero16,
};

export const verticalHeroes = {
  life: hero01,
  property: hero02,
  banking: hero03,
};

export function heroForPath(to) {
  if (!to) return null;
  const path = to.split('#')[0];
  return submenuHeroes[path] || null;
}
