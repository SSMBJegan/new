import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Rs.{product.price}</p>
        <p className="product-rating">Rating: {product.rating} ⭐</p>
        <p className="product-stock">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
