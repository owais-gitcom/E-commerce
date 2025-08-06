import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Main/Home';
import Shop from './Main/Shop';
import About from './Main/About';
import Services from './Main/Services';
import Blog from './Main/Blog';
import Contact from './Main/Contact';
import Footer from './Components/Footer';
import Cartview from './Main/Cartview';
import Checkout from './Main/Checkout';

import Login from './Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost/myapi/get-user.php')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error("PHP fetch error:", error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
              <h2>PHP Backend Data:</h2>
              {user ? (
                <>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                </>
              ) : (
                <p>Loading data from PHP...</p>
              )}
            </div>
          </div>
        } />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cartview" element={<Cartview />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
