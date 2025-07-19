import React from 'react';
import { Link } from 'react-router-dom';
import HeroBg from '../assets/images/hero-bg.webp';
import NarutoFigurine from '../assets/images/naruto-figurine.webp';
import SasukeHoodie from '../assets/images/sasuke-hoodie.jpg';
import AkatsukiRobe from '../assets/images/akatsuki-robes.jpeg';
import '../styles/home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Naruto Uzumaki Figurine',
      price: 29.99,
      image: NarutoFigurine,
      category: 'figures',
    },
    {
      id: 2,
      name: 'Sasuke Uchiha Hoodie',
      price: 49.99,
      image: SasukeHoodie,
      category: 'clothing',
    },
    {
      id: 3,
      name: 'Akatsuki Robe',
      price: 59.99,
      image: AkatsukiRobe,
      category: 'clothing',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBg})` }}>
        <div className="hero-content">
          <h1>Welcome to Konoha Store</h1>
          <p>Premium Naruto merchandise for true shinobi</p>
          <div className="hero-buttons">
            <Link to="/products" className="cta-button primary">
              Shop Now
            </Link>
            <Link to="/about" className="cta-button secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Check out our most popular items</p>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.category}</div>
              <Link to={`/products/${product.id}`}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </Link>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="section-header">
          <h2>Shop By Category</h2>
          <p>Find what you're looking for</p>
        </div>
        <div className="categories-grid">
          <Link to="/products?category=figures" className="category-card">
            <div className="category-image" style={{ backgroundImage: `url(${NarutoFigurine})` }}></div>
            <h3>Figures</h3>
          </Link>
          <Link to="/products?category=clothing" className="category-card">
            <div className="category-image" style={{ backgroundImage: `url(${AkatsukiRobe})` }}></div>
            <h3>Clothing</h3>
          </Link>
          <Link to="/products?category=accessories" className="category-card">
            <div className="category-image" style={{ backgroundImage: `url(${SasukeHoodie})` }}></div>
            <h3>Accessories</h3>
          </Link>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h2>About Konoha Store</h2>
          <p>
            We specialize in high-quality Naruto merchandise, from clothing to collectibles. Our mission is to bring the
            Hidden Leaf Village to your home with authentic products.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Authentic Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
          <Link to="/about" className="learn-more">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;