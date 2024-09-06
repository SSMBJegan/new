import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>About Craftsvilla</h1>
        <p>
          Craftsvilla is your one-stop online shop for high-quality, handmade products that 
          bring joy and authenticity into your everyday life. Our mission is to support local 
          artisans by providing a platform for them to showcase their skills and connect with 
          customers worldwide.
        </p>
      </div>

      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to empower small businesses and craftsmen by creating opportunities for them 
          to reach a global audience. We believe in the beauty of handcrafted goods and are 
          committed to delivering unique, ethically sourced products to our customers.
        </p>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We ensure every product meets our high standards.</li>
          <li><strong>Integrity:</strong> We believe in transparency with our customers and artisans.</li>
          <li><strong>Sustainability:</strong> We are committed to eco-friendly business practices.</li>
          <li><strong>Community:</strong> We thrive by supporting local artisans and communities.</li>
        </ul>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          We are a passionate group of designers, marketers, and artisans who believe in 
          the power of handmade goods. From sourcing products to ensuring timely deliveries, 
          our team is dedicated to providing the best possible experience for our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
