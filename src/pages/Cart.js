import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Calculate cart totals
  const subtotal = getCartTotal();
  const shippingRates = {
    standard: subtotal > 50 ? 0 : 5.99,
    express: 12.99,
    overnight: 24.99
  };
  const shipping = shippingRates[shippingMethod];
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (!cartItems.length) {
      alert('Your cart is empty');
      return;
    }
    setIsCheckingOut(true);
  };

  const handleShippingMethodChange = (method) => {
    setShippingMethod(method);
  };

  const handlePlaceOrder = () => {
    // Here you would typically make an API call to create the order
    alert('Order placed successfully!');
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <i className="fas fa-shopping-cart"></i>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet</p>
          <Link to="/products" className="shop-now">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-column-headers">
              <div className="header-product">Product</div>
              <div className="header-price">Price</div>
              <div className="header-quantity">Quantity</div>
              <div className="header-total">Total</div>
              <div className="header-remove"></div>
            </div>

            {cartItems.map(item => (
              <div key={item.id + item.size + item.color} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    {item.size && <p className="item-size">Size: {item.size}</p>}
                    {item.color && <p className="item-color">Color: {item.color}</p>}
                    <button className="save-for-later">
                      <i className="fas fa-heart"></i> Save for later
                    </button>
                  </div>
                </div>
                <div className="item-price">${item.price.toFixed(2)}</div>
                <div className="item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                <div className="item-remove">
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {isCheckingOut && (
              <div className="shipping-methods">
                <h3>Shipping Method</h3>
                <div className="shipping-options">
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={() => handleShippingMethodChange('standard')}
                    />
                    <div className="option-details">
                      <span className="option-name">Standard Shipping</span>
                      <span className="option-price">
                        {subtotal > 50 ? 'FREE' : '$5.99'}
                      </span>
                      <span className="option-duration">5-7 business days</span>
                    </div>
                  </label>
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={() => handleShippingMethodChange('express')}
                    />
                    <div className="option-details">
                      <span className="option-name">Express Shipping</span>
                      <span className="option-price">$12.99</span>
                      <span className="option-duration">2-3 business days</span>
                    </div>
                  </label>
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="overnight"
                      checked={shippingMethod === 'overnight'}
                      onChange={() => handleShippingMethodChange('overnight')}
                    />
                    <div className="option-details">
                      <span className="option-name">Overnight Shipping</span>
                      <span className="option-price">$24.99</span>
                      <span className="option-duration">Next business day</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            {isCheckingOut ? (
              <button 
                className="place-order-btn"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            ) : (
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            )}
            <div className="payment-methods">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;