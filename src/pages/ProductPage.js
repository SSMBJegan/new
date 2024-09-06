import React from 'react';
import './ProductPage.css';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection';
import { products, categories } from '../data'; 

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2 className="section-title">Categories</h2>
      <CategorySection categories={categories} /> 

      <h2 className="section-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
