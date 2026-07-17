import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';

// Home is eager (first paint); secondary routes are code-split.
import Home from '@/pages/Home';

const Product = lazy(() => import('@/pages/Product'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const CaseStudies = lazy(() => import('@/pages/CaseStudies'));
const Media = lazy(() => import('@/pages/Media'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line-strong border-t-electric-500" />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      {/* `mode="wait"` lets the outgoing page finish exiting before the next
          one enters, producing clean page-to-page transitions. */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
}
