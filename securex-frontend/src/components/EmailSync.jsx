// src/components/EmailSync.jsx
import React, { useEffect } from 'react';
import '../assets/styles.css';

const EmailSync = () => {
  useEffect(() => {
    const handleScroll = () => {
      const emailSyncSection = document.querySelector('.email-sync-section');
      const position = emailSyncSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (position < screenPosition) {
        emailSyncSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="email-sync-section">
      <div className="email-sync-image">
        <div className="phone-frame-light">
          <div className="phone-screen-light">
            <div className="lock-set-content">
              <div className="set-password">Password: 1234</div>
            </div>
            <i className="fas fa-envelope email-icon"></i>
          </div>
        </div>
      </div>
      <div className="email-sync-content">
        <h2 className="gradient-text">Email-Synced <span>Chat Access</span></h2>
        <p>
          Enhance your chat security with email-synced passwords. When you set a password for a chat, the same password is sent securely via email to the other participant...
        </p>
      </div>
    </div>
  );
};

export default EmailSync;
