import React from 'react';
import './CategorySection.css';

const CategorySection = ({ categories = [] }) => {
  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div className="category-carousel">
      {categories.map((category) => {
        if (!category || !category.imageUrl) {
          return <div key={category?.id || Math.random()}>Invalid Category Data</div>;
        }
        return (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
