import React from "react";
import "./Checkout.css";

import shopimage from '../img/checkoutimage.webp';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (

<>
    <div className="container-fluid p-0 position-relative">
    <img className="shop-img" src={shopimage} alt="Shop" loading="eager" />
    <div className="about-container overlay-text">
      <h2 className="about">Check Out</h2>
      <div className="breadcrumb">
        <h5 className="Home">
          <Link to="/cartview">cartview</Link> /   <Link to="/Shop">SHOP</Link> 
        </h5>
      </div>
    </div>
  </div>


    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-layout">
          {/* Left Section - User Info */}
          <div className="checkout-form">
            <h3>Billing Details</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Street Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Zip Code" required />
              <button type="submit" className="place-order-btn">
                Place Order
              </button>
            </form>
          </div>

          {/* Right Section - Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: $179.99</p>
            <p>Shipping: $10.00</p>
            <p><strong>Total: $189.99</strong></p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Checkout;
