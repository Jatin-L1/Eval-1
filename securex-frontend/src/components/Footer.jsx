// src/components/Footer.jsx
import React from 'react';
import '../assets/styles.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are committed to providing secure and seamless messaging solutions that connect you with those who matter most, no matter where you are.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              Email: support@yourwebsite.com<br />
              Phone: +1 234 567 890
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copyright">© 2024 SecureX. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
