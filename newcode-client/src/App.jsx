import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/motion/ScrollProgress';
import CookieConsent from './components/CookieConsent';
import FloatingWidget from './components/FloatingWidget';
import { startMotion, stopMotion } from './hooks/motion';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceCategory from './pages/ServiceCategory';
import ServiceLine from './pages/ServiceLine';
import Product from './pages/Product';
import Platform from './pages/Platform';
import PlatformExplore from './pages/PlatformExplore';
import PlatformModule from './pages/PlatformModule';
import LifeAnnuityMedical from './pages/LifeAnnuityMedical';
import PropertyCasualty from './pages/PropertyCasualty';
import BankingFinance from './pages/BankingFinance';
import Solution from './pages/Solution';
import Capabilities from './pages/Capabilities';
import { bankingCapabilities } from './data/products';
import CaseStudies from './pages/CaseStudies';
import Media from './pages/Media';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/* Scroll an in-page #anchor target clear of the fixed header. */
function scrollToHash(hash, behavior) {
  const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (!el) return false;
  const bar = document.querySelector('.hdr__bar');
  const offset = (bar ? bar.offsetHeight : 0) + 12;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior });
  return true;
}

/* Reset scroll before paint so the new page opens already at the top
   (no visible scroll-up from the previous page's position), or at the
   #anchor when the link carries one. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const lastPath = useRef(pathname);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const samePage = lastPath.current === pathname;
    lastPath.current = pathname;

    if (!hash) {
      if (samePage) return;
      // Force an instant jump — CSS scroll-behavior:smooth would animate this.
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }

    // Same page: glide to the section. New page: land on it directly.
    const behavior = samePage ? 'smooth' : 'instant';
    if (!samePage) document.documentElement.style.scrollBehavior = 'auto';
    if (!scrollToHash(hash, behavior)) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Images above the target can shift it while they load — settle once more.
    const t = window.setTimeout(() => scrollToHash(hash, behavior), 400);
    return () => window.clearTimeout(t);
    // `key` re-runs this when the same #link is clicked again.
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  useEffect(() => {
    startMotion();
    return stopMotion;
  }, []);

  return (
    <>
      <ScrollProgress />
      <Header />
      <ScrollManager />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/digital-transformation" element={<ServiceLine slug="digital-transformation" />} />
          <Route path="/services/application-management" element={<ServiceLine slug="application-management" />} />
          <Route path="/services/resource-augmentation" element={<ServiceLine slug="resource-augmentation" />} />
          <Route path="/services/specialised-services" element={<ServiceLine slug="specialised-services" />} />
          <Route path="/services/:slug" element={<ServiceCategory />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/solutions/:slug" element={<Solution />} />
          <Route path="/product/capabilities" element={<Capabilities />} />
          <Route
            path="/product/banking/capabilities"
            element={<Capabilities data={bankingCapabilities} />}
          />

          {/* Business verticals live under Product */}
          <Route path="/product/insurance/life-annuity-medical" element={<LifeAnnuityMedical />} />
          <Route path="/product/insurance/property-casualty" element={<PropertyCasualty />} />
          <Route path="/product/banking/financial-services" element={<BankingFinance />} />

          <Route path="/platform/insurance" element={<Platform slug="insurance" />} />
          <Route path="/platform/banking" element={<Platform slug="banking" />} />
          <Route path="/platform/capabilities" element={<PlatformExplore />} />
          <Route path="/platform/capabilities/:slug" element={<PlatformModule />} />

          {/* Old URLs → current homes */}
          <Route path="/product/insurance" element={<Navigate to="/platform/insurance" replace />} />
          <Route path="/product/banking" element={<Navigate to="/platform/banking" replace />} />
          <Route
            path="/platform/insurance/life-annuity-medical"
            element={<Navigate to="/product/insurance/life-annuity-medical" replace />}
          />
          <Route
            path="/platform/insurance/property-casualty"
            element={<Navigate to="/product/insurance/property-casualty" replace />}
          />
          <Route
            path="/platform/banking/financial-services"
            element={<Navigate to="/product/banking/financial-services" replace />}
          />

          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <CookieConsent />
      <FloatingWidget />
    </>
  );
}
