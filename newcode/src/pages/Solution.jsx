import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductVerticalPage from '../components/ProductVerticalPage';
import { getSolution } from '../data/solutions';

export default function Solution() {
  const { slug } = useParams();
  const solution = getSolution(slug);

  if (!solution) return <Navigate to="/product" replace />;

  return (
    <ProductVerticalPage
      title={solution.title}
      headline={solution.headline}
      lede={solution.lede}
      image={solution.image}
      imageAlt={solution.imageAlt}
      pillarsEyebrow={solution.pillarsEyebrow}
      pillarsTitle={solution.pillarsTitle}
      pillars={solution.pillars}
      platformLabel="Explore products"
      platformTo="/product"
    />
  );
}
