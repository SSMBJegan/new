import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn, faGoogle, faPaypal, faNpm } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are Craftsvilla, your one-stop shop for authentic handcrafted goods. Our mission is to empower India around the world.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <div className="trust-signals">
            <h4>Trusted By:</h4>
            <div className="trusted-icons">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://netflix.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faNpm} /> 
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPaypal} />
              </a>
             
            </div>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Craftsvilla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
