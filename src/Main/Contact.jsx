import '../Main/Contact.css'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { Container, Form, Button } from 'react-bootstrap';

import shopimage from '../img/contactimage-01.jpg';
import { Link } from 'react-router-dom';


const ContactUs = () => {

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

<div className="container-fluid p-0 position-relative">
    <img className="shop-img" src={shopimage} alt="Shop" loading="eager" />
    <div className="about-container overlay-text">
      <h2 className="about">Contact US</h2>
      <div className="breadcrumb">
        <h5 className="Home">
          <Link to="/">HOME</Link> / Contact Us
        </h5>
      </div>
    </div>
  </div>

   
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

   </>
  );
};

export default ContactUs;
