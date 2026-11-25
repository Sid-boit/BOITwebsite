import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductVerticalPage from '../components/ProductVerticalPage';
import { getPlatformModule } from '../data/platformModules';

/* Individual platform capability page — same template as product solutions. */
export default function PlatformModule() {
  const { slug } = useParams();
  const module = getPlatformModule(slug);

  if (!module) return <Navigate to="/platform/capabilities" replace />;

  return (
    <ProductVerticalPage
      title={module.title}
      headline={module.headline}
      lede={module.lede}
      image={module.image}
      imageAlt={module.imageAlt}
      pillarsEyebrow={module.pillarsEyebrow}
      pillarsTitle={module.pillarsTitle}
      pillars={module.pillars}
      platformLabel="Explore the platform"
      platformTo="/platform/capabilities"
      ctaEyebrow="Platform"
    />
  );
}
