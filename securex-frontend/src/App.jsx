// // src/App.jsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import StayConnected from './components/StayConnected'; // Import the new component
// import SecureChat from './components/SecureChat';
// import EmailSync from './components/EmailSync';
// import Footer from './components/Footer';
// import './assets/styles.css'; // Global CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Signup from './components/Signup'
// import UserProfile from './components/UserProfile';


// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <StayConnected /> 
//       <SecureChat />
//       <EmailSync />
//       <Footer />
//       <Signup/>
//       {/* <UserProfile/> */}
//     </>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StayConnected from './components/StayConnected';
import SecureChat from './components/SecureChat';
import EmailSync from './components/EmailSync';
import Footer from './components/Footer';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './components/Signup'
import UserProfile from './components/UserProfile';
import ChatDashboard from './components/ChatDashboard';

// Creating a LandingPage component that contains all sections for the home page
const LandingPage = () => {
  return (
    <>
      {/* <Hero />
      <StayConnected />
      <SecureChat />
      <EmailSync />
      <Footer /> */}
      {/* <Signup/> */}
      {/* <UserProfile/> */}
      <ChatDashboard/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Define separate routes for other pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
