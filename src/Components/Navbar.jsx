import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlineContentPasteSearch } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [username, setUsername] = useState(null);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get cart count from backend
  useEffect(() => {
    fetch("http://localhost/backend/get_cart.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const totalItems = data.cart.reduce((acc, item) => acc + parseInt(item.quantity), 0);
          setCartCount(totalItems);
        }
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  // Check login from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    // Optionally redirect here
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-text">Ayan Shop</Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" className={isActive('/shop') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className="shopicon">
          <Link to="/cartview" className="icon-button cart-icon-wrapper">
            <FaShoppingBasket />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <div className="user-info">
            {username ? (
              <div className="user-dropdown">
                <BsFillPersonLinesFill className="user-icon" />
                <div className="dropdown-menu">
                  <span className="username">{username}</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="icon-button"><BsFillPersonLinesFill /></Link>
            )}
          </div>

          <button className="icon-button"><MdOutlineContentPasteSearch /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
