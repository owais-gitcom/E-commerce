import React, { useEffect, useState } from 'react';
import './Cartview.css';
import shopimage from '../img/cartviewimage-01.jpg';
import { Link } from 'react-router-dom';

const Cartview = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/get_cart.php")
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setCartItems(data.cart);
        } else {
          alert("Failed to load cart.");
        }
      })
      .catch(() => alert("Error fetching cart"));
  }, []);

  const handleRemove = (id) => {
    fetch("http://localhost/backend/remove_cart.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ product_id: id })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setCartItems(prevItems => prevItems.filter(item => item.product_id !== id));
        } else {
          alert("Failed to remove item: " + (data.message || ""));
        }
      })
      .catch((err) => {
        console.error("Remove error:", err);
        alert("Error removing item from cart");
      });
  };

  return (
    <>
      <div className="container-fluid p-0 position-relative">
        <img className="shop-img" src={shopimage} alt="Shop" loading="eager" />
        <div className="about-container overlay-text">
          <h2 className="about">Cart View</h2>
          <div className="breadcrumb">
            <h5 className="Home">
              <Link to="/">HOME</Link> / <Link to="/Shop">SHOP</Link>
            </h5>
          </div>
        </div>
      </div>

      <div className="cart-container">
        <h2 className="cart-heading">Your Cart</h2>

        <div className="cart-layout">
          <div className="cart-items-section">
            {cartItems.length === 0 ? (
              <p className="empty-msg">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product_id} className="cart-item">
                  <img src={require('../img/watchone.avif')} alt={item.title} className="cart-img" />
                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button className="remove-btn" onClick={() => handleRemove(item.product_id)}>Remove</button><br />
                    <Link to="/shop">
                      <button className="remove-btn">Continue Shopping</button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cartItems.reduce((acc, item) => acc + parseInt(item.quantity), 0)}</p>
            <p>Subtotal: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <Link className="checkout-btn" to="/checkout">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartview;
