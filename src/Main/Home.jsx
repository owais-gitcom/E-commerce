import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Carousel from 'react-bootstrap/Carousel';

import one from '../img/wallpaper1-01.jpg';
import two from '../img/wallpaper2-01.jpg';
import three from '../img/wallpaper-01.jpg';

import './Home.css';

import onelook from '../img/onelook.jpg';
import twolook from '../img/twolook.jpg';
import threelook from '../img/fourlook.jpg';

import { FaTruckFast } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";

import dd from '../img/shreesha-bhat-lz6z9GZu8hk-unsplash.jpg';

import { Link } from 'react-router-dom';

import About from '../img/Aboutimg1.jpg';

import Strap from '../img/Strap.jpg';
import dial from '../img/dial.jpg';
import alarm from '../img/alarm.jpg';
import analog from '../img/analog.jpg';

import watch from '../img/watchinner-01.jpg';


import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import watchdetail from '../img/watchdetail.png'




// import contactimage from '../img/contactimg-01.jpg'

const Home = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSendStatus('Please fill all fields');
      setTimeout(() => setSendStatus(''), 3000);
      return;
    }

    setIsSending(true);
    setSendStatus('Sending...');

    emailjs.send(
      'service_0o6khpm',
      'template_ti5c0nb',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: formData.email
      },
      'mVtNqlVudTuh_IHzn'
    )
      .then(() => {
        setSendStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setSendStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSendStatus(''), 3000);
      });
  };

  


  return (
    <>
      <div>
        {/* Carousel Section */}
        <Carousel>
          {[one, two, three].map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={img} alt={`Slide ${idx + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        <Container fluid className="about-section">
          <Row>
            <Col lg={6} className="image-col">
              <img src={About} alt="About Ayan" className="about-image" />
            </Col>
            <Col lg={6} className="text-col">
              <h4 className="about-heading text-center">About Me</h4>
              <p className="about-para">
                Hi, I'm Ayan, a passionate web developer who loves building beautiful
                and functional websites and apps. With a strong background in design and
                coding, I create digital experiences that help brands grow. My mission is
                to deliver creative, user-friendly, and impactful websites that leave a
                lasting impression. Started as a freelancer in 2022, today I work with
                businesses across the globe.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </Col>
          </Row>
        </Container>

        {/* Explore Section */}
        <div className='explore-section py-5'>
  <Container>
    <Row className='align-items-center text-start gy-4'>
      <Col xs={12} lg={3}>
        <div className="explore-text">
          <h2 className="crafted-heading mb-3">Crafted with excellent material.</h2>
          <p className="crafted-description mb-4">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          </p>
          <Link to="/shop">
          <button className="btn explore-btn">Explore</button></Link>
        </div>
      </Col>
      {[onelook, twolook, threelook].map((imgSrc, index) => (
        <Col xs={12} sm={6} lg={3} key={index}>
          <Link to="shop">
            <div className="img-wrapper">
              <img className='explore-img img-fluid' src={imgSrc} alt={`look-${index}`} />
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
</div>


        {/* Offer Section */}
        <Container className='offer-section py-5 text-center'>
  <h3 className='section-title mb-3'>Our Delicious Offer</h3>
  <p className='section-description mb-5'>
    Every Nest Cam plugs into power so it won't miss a second, and is designed with premium materials.
  </p>
  <Row className="gy-4">
    {[
      { img: Strap, title: "Strap Watch", price: "$149.99", desc: "Stylish and durable wristwatch with leather strap and water resistance." },
      { img: dial, title: "Dial Watch", price: "$179.99", desc: "Elegant dial design with precision timing and durable build." },
      { img: alarm, title: "Alarm Clock", price: "$89.99", desc: "Classic alarm clock with loud ring and retro style." },
      { img: analog, title: "Analog Watch", price: "$129.99", desc: "Analog timepiece with minimal design and clear display." }
    ].map((product, index) => (
      <Col xs={12} sm={6} md={3} key={index}>
        <div className="product-card position-relative">
          <img className='product-img img-fluid' src={product.img} alt={`product-${index}`} />
          <div className="overlay d-flex justify-content-center align-items-center">
            <div className="icon-group">
              <Link to="/shop" className="icon-btn">
                <i className="bi bi-cart-fill"></i>
              </Link>
              <button className="icon-btn">
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="product-info text-center mt-3">
          <h6 className='product-title'>{product.title}</h6>
          <p className='product-price'>{product.price}</p>
          <p className='product-description'>
            {product.desc}
          </p>
        </div>
      </Col>
    ))}
  </Row>
</Container>

        {/* Offer Section */}



<img src={watchdetail} alt="" />

        

        {/* Why Choose Us Section */}
        <div className="why title why-choose-section py-5">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col lg={6}>
                <h2 className='chosen text-center'>Why Choose Us</h2>
                <p className='chosen-donec text-center'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>

                <Row className="gy-4 my-4">
                  <Col xs={12} md={6}>
                    <div className="feature text-start">
                      <div className="mb-2"><FaTruckFast className='icon' size={35} /></div>
                      <h4 className='h4'>Fast & Free Shipping</h4>
                      <p>Donec vitae odio quis nisl dapibus malesuada.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="feature text-start">
                      <div className=" mb-2"><FiShoppingBag className='icon' size={35} /></div>
                      <h4 className='h4'>Easy to Shop</h4>
                      <p>Aliquam vulputate velit imperdiet dolor.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="feature text-start">
                      <div className=" mb-2"><HiOutlineSupport className='icon' size={35} /></div>
                      <h4 className='h4'>24/7 Support</h4>
                      <p>Aliquam vulputate velit imperdiet dolor.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="feature text-start">
                      <div className=" mb-2"><GiReturnArrow className='icon' size={35} /></div>
                      <h4 className='h4'>Hassle Free Returns</h4>
                      <p>Aliquam vulputate velit imperdiet dolor.</p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={5} className="why text-center mt-4 mt-lg-0">
                <div className="img-wrap position-relative float-img">
                  <img src={dd} alt="Model" className="Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

                {/* Why Choose Us Section */}


{/* seastar watch image */}

        <img className='innerwatch w-100  ' src={watch} alt="" />

{/* seastar watch image */}



<Container className="py-5">
  <div className="contact-wrapper">
    {/* Left Side: Contact Info */}
    <div className="contact-info">
  <h1 className='Get-in-touch text-center'>Get in touch</h1>  
  <h5 className='text-center'>We’re always open to work with new clients. Reach out via:</h5>
  <br />
  <h5><i className="bi bi-geo-alt-fill"></i> 6016 Green Blvd, NY, USA</h5>
  <h5><i className="bi bi-telephone-fill"></i> (093) 765-2340</h5>
  <h5><i className="bi bi-envelope-fill"></i> demo@yourdomain.com</h5>
  <h5><i className="bi bi-clock-fill"></i> Mon - Fri: 9am - 6pm</h5>
</div>


    {/* Right Side: Contact Form */}
    <div className="contact-form-col">
      <h4 className="send-message mb-3">Send a Message</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
        </Form.Group>

        <Button type="submit" className="w-100" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </Button>

        {sendStatus && (
          <p className={`mt-3 ${sendStatus.includes('successfully') ? 'text-success' : 'text-danger'}`}>
            {sendStatus}
          </p>
        )}
      </Form>
    </div>
  </div>
</Container>





      </div>
    </>
  );
};

export default Home;