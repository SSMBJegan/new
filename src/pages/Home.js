import {  products } from '../data';
// import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import './Home.css';  

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Craftsvilla</h1>
      
      {/* <section>
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </section> */}

      <section>
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
