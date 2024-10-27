// src/components/Hero.jsx
import React from 'react';
import '../assets/styles.css';

const Hero = () => {
  return (
    <div className="container_two">
      <div className="content" id="content">
        <div className="text-section">
          <h2>SECURE, SEAMLESS AND INTERACTIVE MESSAGING</h2>
          <p>
            Connecting you with different users across the globe Anytime, Anywhere while providing security via passwords
          </p>
        </div>
        <div className="animation">
          <div className="phone">
            <div className="camera-notch"></div>
            <div className="screen">
              <div className="message message1">Hello, how are you?</div>
              <div className="message message2">I’m good, thanks! How about you?</div>
              <div className="message message3">I'm doing well. What are you up to?</div>
              <div className="message message4">Just working on a project. Let's meet up later!</div>
            </div>
          </div>
          <div className="shields">
            <i className="fas fa-shield-alt shield shield1"></i>
            <i className="fas fa-shield-alt shield shield2"></i>
            <i className="fas fa-shield-alt shield shield3"></i>
            <i className="fas fa-shield-alt shield shield4"></i>
            <i className="fas fa-shield-alt shield shield5"></i>
            <i className="fas fa-shield-alt shield shield6"></i>
            <i className="fas fa-shield-alt shield shield7"></i>
            <i className="fas fa-shield-alt shield shield8"></i>
            <i className="fas fa-shield-alt shield shield9"></i>
            <i className="fas fa-shield-alt shield shield10"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
