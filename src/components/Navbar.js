import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);
  const [cartItemsCount] = useState(3);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`naruto-navbar ${isScrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'home' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">☯</span>
          <span className="logo-text">Konoha</span>
          <span className="logo-store">Store</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname.includes('/products') ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Collections
          </Link>
          <Link to="/cart" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Cart
          </Link>
          {isLoggedIn ? (
            <div className="user-menu-container" ref={userMenuRef}>
              <button 
                className="user-menu-button" 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <Icons.User className="user-icon" />
                <span>{user?.name}</span>
                <Icons.ChevronDown className={`chevron-icon ${isUserMenuOpen ? 'open' : ''}`} />
              </button>
              {isUserMenuOpen && (
                <div className="user-menu">
                  <Link 
                    to="/profile" 
                    className="user-menu-item"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    <Icons.User className="menu-icon" />
                    Profile
                  </Link>
                  {user?.isAdmin && (
                    <Link 
                      to="/admin" 
                      className="user-menu-item"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <Icons.Settings className="menu-icon" />
                      Admin Panel
                    </Link>
                  )}
                  <button 
                    className="user-menu-item logout" 
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      setIsLoggedIn(false);
                      setUser(null);
                      setIsUserMenuOpen(false);
                      setIsMenuOpen(false);
                      navigate('/');
                    }}
                  >
                    <Icons.LogOut className="menu-icon" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <Icons.LogIn className="nav-icon" />
              Login
            </Link>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'line1' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line2' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line3' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;