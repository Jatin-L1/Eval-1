// src/components/StayConnected.jsx
import React, { useEffect } from 'react';
import '../assets/styles.css';

const StayConnected = () => {
  useEffect(() => {
    const handleScroll = () => {
      const icons = document.querySelectorAll('.icon');
      icons.forEach((icon) => {
        const iconPosition = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (iconPosition < windowHeight - 100) {
          icon.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container" id="container">
        <div className="message_1">
          <h1>Stay Connected Anywhere, Anytime</h1>
          <p>
            Secure, seamless messaging that brings you closer to your loved ones no matter the distance.
          </p>
        </div>
        <div className="icon-set">
          <i className="fas fa-hand-paper icon wave"></i>
          <i className="fas fa-smile icon smile"></i>
          <i className="fas fa-keyboard icon typing"></i>
          <i className="fas fa-lock icon lock"></i>
          <i className="fas fa-comments icon communication"></i>
          <i className="fas fa-heart icon love"></i>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
