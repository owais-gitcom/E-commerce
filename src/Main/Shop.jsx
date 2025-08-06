import './Shop.css';
import React, { useState } from 'react';
import shopimage from '../img/shopimage-01.jpg';
import onewatch from '../img/watchone.png';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Maxfit Smartwatch",
    price: 179.99,
    image: onewatch,
    description: "Advanced health tracking and sleek design.",
  },
  {
    id: 2,
    title: "FitPulse Pro",
    price: 149.99,
    image: onewatch,
    description: "Waterproof with full GPS features.",
  },
  {
    id: 3,
    title: "SmartBand X",
    price: 99.99,
    image: onewatch,
    description: "Compact and lightweight with step tracking.",
  },
];

const Shop = () => {
  const [showModal, setShowModal] = useState(false);
  const [insertedProduct, setInsertedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  // Handle quantity change for each product
  const handleQuantityChange = (productId, value) => {
    const qty = Math.max(1, Math.min(99, Number(value) || 1)); // Min 1, max 99
    setQuantities(prev => ({ ...prev, [productId]: qty }));
  };

  const handleAddToCartAndShow = async (product) => {
    const quantity = quantities[product.id] || 1; // Default 1 if no input
    try {
      const response = await fetch("http://localhost/backend/add_to_cart.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity,
        }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setInsertedProduct(data.data);
        setShowModal(true);
      } else {
        alert("Failed to add to cart.");
      }
    } catch (error) {
      alert("Backend error.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid p-0 position-relative">
        <img className="shop-img" src={shopimage} alt="Shop" loading="eager" />
        <div className="about-container overlay-text">
          <h2 className="about">Shop</h2>
          <div className="breadcrumb">
            <h5 className="Home">
              <Link to="/">HOME</Link> / SHOP
            </h5>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <Container className="collection-container py-5">
        <h2 className="text-center mb-4 collection-heading">COLLECTIONS</h2>
        <Row className="g-4">
          {products.map((item) => (
            <Col key={item.id} md={4}>
              <div className="card-content text-center border p-3 rounded">
                <img src={item.image} alt={item.title} className="img-fluid product-img" />
                <h5 className="product-title mt-2">{item.title}</h5>
                <h6 className="product-price">${item.price}</h6>

                {/* Quantity input */}
                <Form.Group controlId={`quantity-${item.id}`} className="my-2">
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="99"
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    style={{ width: '100px', margin: 'auto' }}
                  />
                </Form.Group>

                <Button
                  className="add-to-cart-btn mt-2"
                  onClick={() => handleAddToCartAndShow(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Center Popup */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Added</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {insertedProduct && (
            <>
              <h5>{insertedProduct.title}</h5>
              <p>Qty: {insertedProduct.quantity} | Price: ${insertedProduct.price}</p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <Button variant="primary" onClick={() => navigate('/cartview')}>
                  View Cart
                </Button>
                <Button variant="success" onClick={() => navigate('/checkout')}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Shop;
