import React from 'react';
import { Link } from 'react-router-dom';
import NarutoCollection from '../assets/images/naruto-collection.jpg';
import AkatsukiCollection from '../assets/images/akatsuki-collection.jpg';
import HokageCollection from '../assets/images/hokage-collection.webp';
import '../styles/collections.css';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Naruto Legacy',
      description: 'Explore our exclusive Naruto Uzumaki merchandise collection featuring figurines, clothing, and accessories.',
      image: NarutoCollection,
      items: 28,
      link: '/products?collection=naruto'
    },
    {
      id: 2,
      name: 'Akatsuki Archives',
      description: 'Dive into the mysterious world of Akatsuki with our premium collectibles and apparel.',
      image: AkatsukiCollection,
      items: 15,
      link: '/products?collection=akatsuki'
    },
    {
      id: 3,
      name: 'Hokage Chronicles',
      description: 'Celebrate the leaders of the Hidden Leaf Village with our Hokage-themed products.',
      image: HokageCollection,
      items: 22,
      link: '/products?collection=hokage'
    }
  ];

  return (
    <div className="collections-page">
      <div className="collections-hero">
        <div className="hero-content">
          <h1>Premium Naruto Collections</h1>
          <p>Curated selections for true shinobi fans</p>
        </div>
      </div>

      <div className="collections-container">
        <div className="section-header">
          <h2>Featured Collections</h2>
          <p>Explore our handpicked selections of Naruto merchandise</p>
        </div>

        <div className="collections-grid">
          {collections.map(collection => (
            <div key={collection.id} className="collection-card">
              <Link to={collection.link}>
                <div className="collection-image-container">
                  <img src={collection.image} alt={collection.name} className="collection-image" />
                  <div className="collection-overlay">
                    <span>View Collection</span>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.name}</h3>
                  <p className="collection-description">{collection.description}</p>
                  <div className="collection-meta">
                    <span className="items-count">{collection.items} items</span>
                    <span className="view-link">Shop Now →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Can't find what you're looking for?</h2>
          <p>Browse our full catalog of Naruto merchandise</p>
          <Link to="/products" className="cta-button">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;