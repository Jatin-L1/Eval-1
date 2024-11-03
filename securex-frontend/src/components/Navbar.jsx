import React, { useEffect } from 'react';
import '../assets/styles.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-dark');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="70px" width="140px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/features" data-toggle="dropdown">
                Features
              </a>
              <div className="dropdown-menu">
                <a href="/features#simple-list-item-1" className="feature-link">
                  <div className="feature-card">
                    <div className="icon">🔒</div>
                    <h6>Message Privately</h6>
                    <p>End-to-end encryption and privacy controls.</p>
                  </div>
                </a>
                <a href="/features#simple-list-item-2" className="feature-link">
                  <div className="feature-card">
                    <div className="icon">🌐</div>
                    <h6>Stay Connected</h6>
                    <p>Message and call for free* around the world.</p>
                  </div>
                </a>
                <a href="/features#simple-list-item-3" className="feature-link">
                  <div className="feature-card">
                    <div className="icon">👥</div>
                    <h6>Build Community</h6>
                    <p>Group conversations made simple.</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// src/components/Navbar.jsx
