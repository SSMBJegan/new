import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-rating">Rating: {product.rating} ⭐</p>
      <p className="product-stock">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;
