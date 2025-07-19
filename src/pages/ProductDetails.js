import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Icons } from '../components/Icons';
import '../styles/productDetails.css';

// Import all product images
import NarutoFigurine from '../assets/images/naruto-figurine.webp';
import NarutoSide from '../assets/images/naruto-figurine.webp';
import NarutoBack from '../assets/images/naruto-figurine.webp';
import NarutoBox from '../assets/images/naruto-box.jpg';
import SasukeHoodie from '../assets/images/sasuke-hoodie.jpg';
import SasukeHoodieBack from '../assets/images/sasuke-hoodie.jpg';
import AkatsukiRobe from '../assets/images/akatsuki-robes.jpeg';
import AkatsukiRobeDetail from '../assets/images/akatsuki-robes.jpeg';
import KakashiMask from '../assets/images/kakashi-mask.webp';
import KakashiMaskSide from '../assets/images/kakashi-mask.webp';
import KuramaPlush from '../assets/images/kurama-plush.jpg';
import KuramaPlushDetail from '../assets/images/kurama-plush.jpg';
import SharinganLenses from '../assets/images/sharingan-lenses.jpeg';
import SharinganLensesCase from '../assets/images/sharingan-lenses.jpeg';
import ItachiFigurine from '../assets/images/itachi-figurine.webp';
import ItachiFigurineSide from '../assets/images/itachi-figurine.webp';
import KonohaHeadband from '../assets/images/konoha-headband.jpeg';
import KonohaHeadbandPack from '../assets/images/konoha-headband.jpeg';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState(null);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // All products data
  const allProducts = [
    {
      id: 1,
      name: 'Naruto Uzumaki Figurine',
      price: 29.99,
      category: 'figures',
      description: 'High-quality PVC figurine of Naruto Uzumaki in his signature pose. Perfect for display on your desk or shelf. This officially licensed merchandise captures Naruto\'s energetic personality with incredible detail.',
      details: 'Height: 20cm | Material: PVC | Weight: 500g | Packaging: Collector\'s Box',
      features: [
        'Officially licensed Naruto merchandise',
        'Highly detailed sculpt and paintwork',
        'Stands approximately 8 inches tall',
        'Perfect for display or collection',
        'Durable PVC construction'
      ],
      reviews: [
        { id: 1, user: 'SasukeFan99', rating: 5, comment: 'Amazing quality! Looks just like Naruto! The details are incredible.', date: '2023-05-15' },
        { id: 2, user: 'HinataLover', rating: 4, comment: 'Great figurine, but the paint could be a bit better on the headband. Otherwise perfect!', date: '2023-04-22' },
        { id: 3, user: 'NinjaMaster', rating: 5, comment: 'Absolutely love this figure. The pose is dynamic and the face sculpt is spot on.', date: '2023-03-10' },
      ],
      sizes: ['One Size'],
      colors: ['Orange', 'Blue'],
      image: NarutoFigurine,
      additionalImages: [
        { id: 1, image: NarutoSide, alt: 'Naruto Figurine Side View' },
        { id: 2, image: NarutoBack, alt: 'Naruto Figurine Back View' },
        { id: 3, image: NarutoBox, alt: 'Naruto Figurine Packaging' },
      ],
      rating: 4.7,
      reviewCount: 128,
      stock: 15,
      sku: 'NAR-FIG-001',
      tags: ['Figurine', 'Naruto', 'Collectible', 'Anime'],
    },
    {
      id: 2,
      name: 'Sasuke Uchiha Hoodie',
      price: 49.99,
      category: 'clothing',
      description: 'Premium quality hoodie featuring Sasuke Uchiha design. Made from soft, durable fabric for maximum comfort. Perfect for showing your Uchiha pride in style.',
      details: 'Material: 80% Cotton, 20% Polyester | Care: Machine wash cold | Sizes: S-XXL',
      features: [
        'Officially licensed design',
        'Kangaroo pocket for warmth',
        'Adjustable drawstring hood',
        'Premium screen-printed artwork',
        'Available in multiple sizes'
      ],
      reviews: [
        { id: 1, user: 'UchihaClan', rating: 5, comment: 'Perfect fit and amazing quality! The design is even better in person.', date: '2023-06-10' },
        { id: 2, user: 'SharinganUser', rating: 4, comment: 'Very comfortable, but the print seems like it might fade after many washes.', date: '2023-05-28' },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Dark Blue'],
      image: SasukeHoodie,
      additionalImages: [
        { id: 1, image: SasukeHoodieBack, alt: 'Sasuke Hoodie Back View' },
      ],
      rating: 4.5,
      reviewCount: 87,
      stock: 32,
      sku: 'SAS-HOD-002',
      tags: ['Clothing', 'Hoodie', 'Sasuke', 'Apparel'],
    },
    {
      id: 3,
      name: 'Akatsuki Robe',
      price: 59.99,
      category: 'clothing',
      description: 'Authentic Akatsuki robe with cloud pattern. Perfect for cosplay or casual wear. Made from high-quality fabric that drapes beautifully.',
      details: 'Material: 100% Polyester | Care: Hand wash recommended | One Size Fits Most',
      features: [
        'Official Akatsuki cloud pattern',
        'Hidden inner pocket',
        'Adjustable waist tie',
        'Lightweight yet warm',
        'Great for cosplay or lounging'
      ],
      reviews: [
        { id: 1, user: 'AkatsukiMember', rating: 5, comment: 'Exactly like in the anime! The quality is amazing for the price.', date: '2023-07-12' },
      ],
      sizes: ['One Size'],
      colors: ['Black/Red'],
      image: AkatsukiRobe,
      additionalImages: [
        { id: 1, image: AkatsukiRobeDetail, alt: 'Akatsuki Robe Detail' },
      ],
      rating: 4.8,
      reviewCount: 64,
      stock: 18,
      sku: 'AKA-ROB-003',
      tags: ['Clothing', 'Robe', 'Akatsuki', 'Cosplay'],
    },
    {
      id: 4,
      name: 'Kakashi Hatake Mask',
      price: 19.99,
      category: 'accessories',
      description: 'Replica of Kakashi\'s signature mask. Made from breathable fabric that stays comfortable even during extended wear.',
      details: 'Material: 95% Cotton, 5% Spandex | Care: Hand wash | One Size Fits Most',
      features: [
        'Authentic design',
        'Breathable fabric',
        'Adjustable ear loops',
        'Perfect for cosplay',
        'Lightweight and comfortable'
      ],
      reviews: [
        { id: 1, user: 'CopyNinja', rating: 5, comment: 'Fits perfectly and looks just like Kakashi\'s mask!', date: '2023-06-30' },
        { id: 2, user: 'ANBUMember', rating: 4, comment: 'Good quality, but the stitching could be a bit stronger.', date: '2023-06-15' },
      ],
      sizes: ['One Size'],
      colors: ['Black'],
      image: KakashiMask,
      additionalImages: [
        { id: 1, image: KakashiMaskSide, alt: 'Kakashi Mask Side View' },
      ],
      rating: 4.3,
      reviewCount: 42,
      stock: 25,
      sku: 'KAK-MSK-004',
      tags: ['Accessory', 'Mask', 'Kakashi', 'Cosplay'],
    },
    {
      id: 5,
      name: 'Kurama Plush',
      price: 39.99,
      category: 'plushies',
      description: 'Super soft Kurama (Nine-Tails Fox) plush toy. Perfect for cuddling or display. Features detailed stitching and vibrant colors.',
      details: 'Material: 100% Polyester fiber | Size: 14 inches tall | Care: Surface wash only',
      features: [
        'Officially licensed',
        'Super soft plush material',
        'Detailed embroidery',
        'Perfect for Naruto fans',
        'Great gift idea'
      ],
      reviews: [
        { id: 1, user: 'Jinchuriki', rating: 5, comment: 'So soft and well-made! The details are amazing.', date: '2023-08-05' },
        { id: 2, user: 'TailedBeastFan', rating: 5, comment: 'My daughter loves this plush! The quality is excellent.', date: '2023-07-22' },
      ],
      sizes: ['One Size'],
      colors: ['Orange'],
      image: KuramaPlush,
      additionalImages: [
        { id: 1, image: KuramaPlushDetail, alt: 'Kurama Plush Detail' },
      ],
      rating: 5.0,
      reviewCount: 36,
      stock: 12,
      sku: 'KUR-PLU-005',
      tags: ['Plush', 'Kurama', 'Nine-Tails', 'Toy'],
    },
    {
      id: 6,
      name: 'Sharingan Contact Lenses',
      price: 24.99,
      category: 'accessories',
      description: 'Special effect contact lenses featuring the Sharingan design. FDA approved and safe for cosmetic use.',
      details: 'Diameter: 14.5mm | Base Curve: 8.6mm | Water Content: 42% | Disposable: 1 month',
      features: [
        'FDA approved',
        'Comfortable to wear',
        'Authentic Uchiha design',
        'Prescription available',
        'Includes storage case'
      ],
      reviews: [
        { id: 1, user: 'UchihaLegacy', rating: 4, comment: 'Look amazing but can be slightly uncomfortable after a few hours.', date: '2023-07-18' },
      ],
      sizes: ['One Size'],
      colors: ['Red/Black'],
      image: SharinganLenses,
      additionalImages: [
        { id: 1, image: SharinganLensesCase, alt: 'Sharingan Lenses Case' },
      ],
      rating: 4.0,
      reviewCount: 29,
      stock: 40,
      sku: 'SHA-LEN-006',
      tags: ['Accessory', 'Contacts', 'Sharingan', 'Cosplay'],
    },
    {
      id: 7,
      name: 'Itachi Uchiha Figurine',
      price: 34.99,
      category: 'figures',
      description: 'Exquisitely detailed Itachi Uchiha figurine in his Akatsuki cloak. Captures his calm yet powerful demeanor perfectly.',
      details: 'Height: 22cm | Material: PVC | Weight: 550g | Packaging: Window Box',
      features: [
        'Limited edition',
        'Highly poseable',
        'Interchangeable hands',
        'Detailed base included',
        'Collector\'s item'
      ],
      reviews: [
        { id: 1, user: 'MangekyouUser', rating: 5, comment: 'Worth every penny! The details on the cloak are incredible.', date: '2023-08-12' },
        { id: 2, user: 'AkatsukiCollector', rating: 5, comment: 'Perfect addition to my Akatsuki collection. Amazing quality.', date: '2023-07-30' },
      ],
      sizes: ['One Size'],
      colors: ['Black/Red'],
      image: ItachiFigurine,
      additionalImages: [
        { id: 1, image: ItachiFigurineSide, alt: 'Itachi Figurine Side View' },
      ],
      rating: 4.9,
      reviewCount: 53,
      stock: 8,
      sku: 'ITA-FIG-007',
      tags: ['Figurine', 'Itachi', 'Collectible', 'Akatsuki'],
    },
    {
      id: 8,
      name: 'Konoha Headband',
      price: 14.99,
      category: 'accessories',
      description: 'Authentic replica of the Konoha forehead protector. Made from metal with adjustable strap for comfortable wear.',
      details: 'Material: Zinc alloy metal plate, nylon strap | Adjustable: Yes | Size: One size fits most',
      features: [
        'Screen-accurate design',
        'Durable metal plate',
        'Adjustable nylon strap',
        'Perfect for cosplay',
        'Official merchandise'
      ],
      reviews: [
        { id: 1, user: 'LeafShinobi', rating: 4, comment: 'Great quality headband. The metal is nice and sturdy.', date: '2023-06-25' },
        { id: 2, user: 'HokageDreamer', rating: 5, comment: 'Exactly what I wanted! Fits perfectly and looks authentic.', date: '2023-06-10' },
      ],
      sizes: ['One Size'],
      colors: ['Silver'],
      image: KonohaHeadband,
      additionalImages: [
        { id: 1, image: KonohaHeadbandPack, alt: 'Konoha Headband Packaging' },
      ],
      rating: 4.5,
      reviewCount: 71,
      stock: 50,
      sku: 'KON-HED-008',
      tags: ['Accessory', 'Headband', 'Konoha', 'Cosplay'],
    },
  ];

  useEffect(() => {
    // Find the current product
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
    // Set main image to the primary product image
    if (foundProduct) {
      setMainImage(foundProduct.image);
      setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : null);
      setSelectedSize(foundProduct.sizes ? foundProduct.sizes[0] : null);
      
      // Find related products (same category, excluding current)
      const related = allProducts.filter(
        p => p.category === foundProduct.category && p.id !== foundProduct.id
      ).slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const changeMainImage = (image) => {
    setMainImage(image);
  };

  const validateSelection = () => {
    if (!product) return 'Product not found';
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      return 'Please select a size';
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      return 'Please select a color';
    }
    if (quantity < 1) {
      return 'Please select a valid quantity';
    }
    
    // Check stock availability
    const existingCartItem = cartItems.find(
      item => item.id === product.id && 
      item.size === selectedSize && 
      item.color === selectedColor
    );
    
    const currentInCart = existingCartItem ? existingCartItem.quantity : 0;
    if (currentInCart + quantity > product.stock) {
      return `Sorry, only ${product.stock - currentInCart} items available`;
    }
    
    return '';
  };

  const handleAddToCart = () => {
    setButtonClicked(true);
    const validationError = validateSelection();
    
    if (validationError) {
      setError(validationError);
      setTimeout(() => setError(''), 3000);
      return;
    }

    // Create ripple effect
    const button = document.querySelector('.add-to-cart');
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = '0';
    circle.style.top = '0';
    circle.classList.add('button-ripple');

    const ripple = button.getElementsByClassName('button-ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    // Add to cart
    addToCart(product, quantity, selectedSize, selectedColor);
    setAddedToCart(true);
    setShowSuccessMessage(true);
    setError('');

    // Reset states
    setTimeout(() => {
      setAddedToCart(false);
      setButtonClicked(false);
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div className="product-details-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
      </div>

      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image-container">
            {mainImage && <img src={mainImage} alt={product.name} className="main-image" />}
            {product.stock < 5 && (
              <div className="stock-badge">
                Only {product.stock} left in stock!
              </div>
            )}
          </div>
          <div className="thumbnail-images">
            <div 
              className={`thumbnail ${mainImage === product.image ? 'active' : ''}`}
              onClick={() => changeMainImage(product.image)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            {product.additionalImages.map((img) => (
              <div 
                key={img.id}
                className={`thumbnail ${mainImage === img.image ? 'active' : ''}`}
                onClick={() => changeMainImage(img.image)}
              >
                <img src={img.image} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <div className="rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(product.rating)) {
                    return <Icons.Star key={i} className="star-icon" />;
                  } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                    return <Icons.StarHalf key={i} className="star-icon" />;
                  } else {
                    return <Icons.StarEmpty key={i} className="star-icon" />;
                  }
                })}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>
            <div className="sku">SKU: {product.sku}</div>
          </div>

          <div className="product-price">${product.price.toFixed(2)}</div>

          <p className="product-excerpt">{product.description.substring(0, 100)}...</p>

          {product.colors && (
            <div className="color-selector">
              <h3>Color:</h3>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="size-selector">
              <h3>Size:</h3>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link to="/size-guide" className="size-guide-link">Size Guide</Link>
            </div>
          )}

          <div className="add-to-cart-section">
            <div className="stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">{product.stock} items in stock</span>
              ) : (
                <span className="out-of-stock">Out of stock</span>
              )}
            </div>
            <div className="quantity-selector">
              <button 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >-</button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
              />
              <button 
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >+</button>
            </div>
            <button 
              className={`add-to-cart ${buttonClicked ? 'clicked' : ''}`}
              onClick={handleAddToCart}
              disabled={!product || product.stock === 0}
            >
              <Icons.ShoppingCart className="action-icon" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            {error && (
              <div className="error-message">
                <Icons.AlertCircle className="error-icon" />
                {error}
              </div>
            )}
            {showSuccessMessage && (
              <div className="success-message">
                <Icons.CheckCircle className="success-icon" />
                Item added to cart!
              </div>
            )}
          </div>

          <div className="product-meta-info">
            <div className="meta-item">
              <Icons.Info className="meta-icon" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="meta-item">
              <Icons.Info className="meta-icon" />
              <span>30-day return policy</span>
            </div>
          </div>

          <div className="product-tags">
            <h3>Tags:</h3>
            <div className="tags-container">
              {product.tags.map(tag => (
                <Link to={`/products?tag=${tag.toLowerCase()}`} key={tag} className="tag">{tag}</Link>
              ))}
            </div>
          </div>

          <div className="product-share">
            <h3>Share:</h3>
            <div className="share-buttons">
              <button className="share-button facebook">
                <Icons.Facebook className="share-icon" />
              </button>
              <button className="share-button twitter">
                <Icons.Twitter className="share-icon" />
              </button>
              <button className="share-button pinterest">
                <Icons.Pinterest className="share-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tab-headers">
          <button
            className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            <Icons.File className="tab-icon" /> Description
          </button>
          <button
            className={`tab-header ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            <Icons.Info className="tab-icon" /> Details
          </button>
          <button
            className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <Icons.Review className="tab-icon" /> Reviews ({product.reviews.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-content">
              <h2>Product Description</h2>
              <p>{product.description}</p>
              
              <div className="features">
                <h3>Key Features:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <Icons.Star className="feature-icon" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {product.additionalImages.length > 0 && (
                <div className="product-gallery-row">
                  {product.additionalImages.map(img => (
                    <div key={img.id} className="gallery-item">
                      <img src={img.image} alt={img.alt} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="details-content">
              <h2>Product Details</h2>
              <p>{product.details}</p>
              
              <table className="specs-table">
                <tbody>
                  {product.sizes && (
                    <tr>
                      <th>Sizes Available</th>
                      <td>{product.sizes.join(', ')}</td>
                    </tr>
                  )}
                  {product.colors && (
                    <tr>
                      <th>Colors Available</th>
                      <td>{product.colors.join(', ')}</td>
                    </tr>
                  )}
                  <tr>
                    <th>Material</th>
                    <td>{product.details.split('|')[0].trim()}</td>
                  </tr>
                  <tr>
                    <th>Care Instructions</th>
                    <td>{product.details.split('|')[1]?.trim() || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>SKU</th>
                    <td>{product.sku}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <div className="reviews-header">
                <div className="overall-rating">
                  <div className="rating-value">{product.rating}</div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(product.rating)) {
                        return <Icons.Star key={i} className="star-icon" />;
                      } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                        return <Icons.StarHalf key={i} className="star-icon" />;
                      } else {
                        return <Icons.StarEmpty key={i} className="star-icon" />;
                      }
                    })}
                  </div>
                  <div className="total-reviews">{product.reviewCount} total reviews</div>
                </div>
                <button className="add-review-button">
                  <Icons.Plus className="add-icon" /> Write a Review
                </button>
              </div>
              
              <div className="review-list">
                {product.reviews.map(review => (
                  <div key={review.id} className="review">
                    <div className="review-header">
                      <div className="review-user">{review.user}</div>
                      <div className="review-date">{review.date}</div>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}></i>
                        ))}
                      </div>
                    </div>
                    <div className="review-comment">{review.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>You May Also Like</h2>
          <div className="related-products-grid">
            {relatedProducts.map(product => (
              <div key={product.id} className="related-product">
                <Link to={`/products/${product.id}`}>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <span>View Details</span>
                    </div>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    <p className="price">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;