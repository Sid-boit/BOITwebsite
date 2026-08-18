import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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
import Product from './pages/Product';
import Platform from './pages/Platform';
import LifeAnnuityMedical from './pages/LifeAnnuityMedical';
import PropertyCasualty from './pages/PropertyCasualty';
import BankingFinance from './pages/BankingFinance';
import Solution from './pages/Solution';
import Capabilities from './pages/Capabilities';
import CaseStudies from './pages/CaseStudies';
import Media from './pages/Media';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/* Scroll to the top on navigation, or to the hash target when one is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the incoming route paint before measuring the target.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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
          <Route path="/services/:slug" element={<ServiceCategory />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/insurance" element={<Platform slug="insurance" />} />
          <Route path="/product/insurance/life-annuity-medical" element={<LifeAnnuityMedical />} />
          <Route path="/product/insurance/property-casualty" element={<PropertyCasualty />} />
          <Route path="/product/banking" element={<Platform slug="banking" />} />
          <Route path="/product/banking/financial-services" element={<BankingFinance />} />
          <Route path="/product/solutions/:slug" element={<Solution />} />
          <Route path="/product/capabilities" element={<Capabilities />} />

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
