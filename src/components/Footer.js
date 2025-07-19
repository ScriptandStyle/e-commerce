import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import '../styles/navbar.css';
const Footer = () => {
    return (
      <footer className="naruto-footer">
        {/* Wave Animation */}
        <div className="wave-container">
          <svg 
            className="wave"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="wave-layer"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="wave-layer"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="wave-layer"
            ></path>
          </svg>
        </div>
      
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <span className="logo-text">Konoha</span>
            <span className="logo-store">Store</span>
          </Link>
          <p className="footer-description">Your one-stop shop for all Naruto merchandise and collectibles.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
            
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cart">Your Cart</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Hidden Leaf Village, Konoha</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>(123) 456-7890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>contact@konohastore.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Konoha Store. All rights reserved.</p>
          <div className="payment-methods">
            <i className="fab fa-cc-visa" aria-hidden="true"></i>
            <i className="fab fa-cc-mastercard" aria-hidden="true"></i>
            <i className="fab fa-cc-amex" aria-hidden="true"></i>
            <i className="fab fa-cc-paypal" aria-hidden="true"></i>
            <i className="fab fa-cc-discover" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;