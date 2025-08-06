import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../Components/Footer.css'

import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <>
   
{/* footer */}
<div className="bg  py-5">
  <Container>
    <Row className="text-center text-lg-start">
      {/* Ayan Shop Info */}
      <Col lg="6" className="mb-4 mb-lg-0">
        <h4 className="ayan text-center mb-3">Ayan Shop</h4>
        <p className="text-white">
          Hi, I'm Ayan, a passionate web developer who loves building beautiful and functional websites and apps. With a strong background in design and coding, I create digital experiences that help brands grow. My mission is to deliver creative, user-friendly, and impactful websites that leave a lasting impression. Started as a freelancer in 2022, today I work with businesses across the globe.
        </p>
        
        {/* Social Media Icons */}
        <div className="mt-4">
  <h5 className="text-white mb-3">Follow us on!</h5>
  <div className="d-flex gap-3">
    {/* Facebook Icon */}
    <Link to="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
      <i className="bi bi-facebook"></i>
    </Link>
    
    {/* Google Icon */}
    <Link to="https://google.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
      <i className="bi bi-google"></i>
    </Link>
    
    {/* Twitter Icon */}
    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
      <i className="bi bi-twitter"></i>
    </Link>
    
    {/* LinkedIn Icon */}
    <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
      <i className="bi bi-linkedin"></i>
    </Link>
    
    {/* Instagram Icon */}
    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
      <i className="bi bi-instagram"></i>
    </Link>
  </div>
</div>
      </Col>
      
      {/* Quick Links */}
      <Col lg="3" className="mb-4 mb-lg-0">
        <h4 className="text-white mb-3">Quick Links</h4>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-white text-decoration-none footer-link">Home</Link></li>
          <li><Link to="/shop" className="text-white text-decoration-none footer-link">Shop</Link></li>
          <li><Link to="/about" className="text-white text-decoration-none footer-link">About</Link></li>
          <li><Link to="/services" className="text-white text-decoration-none footer-link">Services</Link></li>
          <li><Link to="/blog" className="text-white text-decoration-none footer-link">Blog</Link></li>
          <li><Link to="/contact" className="text-white text-decoration-none footer-link">Contact</Link></li>
        </ul>
      </Col>

      {/* Contact Info */}
      <Col lg="3">
        <h4 className="text-white mb-3">Contact Info!</h4>
        <p className="text-white mb-1">Mobile: 474897897</p>
        <p className="text-white mb-1">Email: 89789434</p>
        <p className="text-white mb-1">Address: fdfdfdsfds</p>
      </Col>
    </Row>
  </Container>
</div>

{/* footer */}
   </>
  )
}

export default Footer
