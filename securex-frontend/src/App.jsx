// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StayConnected from './components/StayConnected'; // Import the new component
import SecureChat from './components/SecureChat';
import EmailSync from './components/EmailSync';
import Footer from './components/Footer';
import './assets/styles.css'; // Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StayConnected /> {/* Add the StayConnected component here */}
      <SecureChat />
      <EmailSync />
      <Footer />
    </>
  );
};

export default App;
