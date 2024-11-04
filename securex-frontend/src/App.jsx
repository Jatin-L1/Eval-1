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
import Signup from './components/Signup'
import UserProfile from './components/UserProfile';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StayConnected /> 
      <SecureChat />
      <EmailSync />
      <Footer />
      {/* <Signup/> */}
      {/* <UserProfile/> */}
    </>
  );
};

export default App;
