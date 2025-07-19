import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NarutoFigurine from '../assets/images/naruto-figurine.webp';
import SasukeHoodie from '../assets/images/sasuke-hoodie.jpg';
import AkatsukiRobe from '../assets/images/akatsuki-robes.jpeg';
import KakashiMask from '../assets/images/kakashi-mask.webp';
import KuramaPlush from '../assets/images/kurama-plush.jpg';
import SharinganLenses from '../assets/images/sharingan-lenses.jpeg';
import ItachiFigurine from '../assets/images/itachi-figurine.webp';
import KonohaHeadband from '../assets/images/konoha-headband.jpeg';
import '../styles/products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Naruto Uzumaki Figurine',
      price: 29.99,
      category: 'figures',
      image: NarutoFigurine,
      rating: 4.5,
      featured: true
    },
    {
      id: 2,
      name: 'Sasuke Uchiha Hoodie',
      price: 49.99,
      category: 'clothing',
      image: SasukeHoodie,
      rating: 4.2,
      featured: true
    },
    {
      id: 3,
      name: 'Akatsuki Robe',
      price: 59.99,
      category: 'clothing',
      image: AkatsukiRobe,
      rating: 4.8,
      featured: true
    },
    {
      id: 4,
      name: 'Kakashi Hatake Mask',
      price: 19.99,
      category: 'accessories',
      image: KakashiMask,
      rating: 4.0
    },
    {
      id: 5,
      name: 'Kurama Plush',
      price: 39.99,
      category: 'plushies',
      image: KuramaPlush,
      rating: 4.7
    },
    {
      id: 6,
      name: 'Sharingan Contact Lenses',
      price: 24.99,
      category: 'accessories',
      image: SharinganLenses,
      rating: 3.9
    },
    {
      id: 7,
      name: 'Itachi Uchiha Figurine',
      price: 34.99,
      category: 'figures',
      image: ItachiFigurine,
      rating: 4.6
    },
    {
      id: 8,
      name: 'Konoha Headband',
      price: 14.99,
      category: 'accessories',
      image: KonohaHeadband,
      rating: 4.3
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'figures', name: 'Figures' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'plushies', name: 'Plushies' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const searchedProducts = searchTerm 
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredProducts;

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="hero-content">
          <h1>Naruto Merchandise</h1>
          <p>Find your favorite shinobi gear and collectibles</p>
        </div>
      </div>

      <div className="products-controls">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {searchedProducts.length > 0 ? (
        <div className="products-grid">
          {searchedProducts.map(product => (
            <div key={product.id} className={`product-card ${product.featured ? 'featured' : ''}`}>
              {product.featured && <div className="featured-badge">Featured</div>}
              <Link to={`/products/${product.id}`}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <span>Quick View</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        ></i>
                      ))}
                      <span>({product.rating})</span>
                    </div>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
              <div className="product-actions">
                <button className="add-to-cart">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button className="wishlist">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <i className="fas fa-search"></i>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button 
            className="reset-filters"
            onClick={() => {
              setActiveCategory('all');
              setSearchTerm('');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;