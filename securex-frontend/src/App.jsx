// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import StayConnected from './components/StayConnected';
// import SecureChat from './components/SecureChat';
// import EmailSync from './components/EmailSync';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import UserProfile from './components/UserProfile';
// import Login from './components/Login';
// import ChatDashboard from './components/ChatDashboard';
// import PrivateRoute from './components/PrivateRoute';
// import './assets/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const LandingPage = () => {
//   return (
//     <>
//       <Hero />
//       <StayConnected />
//       <SecureChat />
//       <EmailSync />
//       <Footer />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Define the route for the landing page */}
//         <Route path="/" element={<LandingPage />} />
        
//         {/* Define separate routes for other pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<UserProfile />} />

//         {/* Protect the ChatDashboard route with PrivateRoute */}
//         <Route 
//           path="/chatdashboard" 
//           element={
//             <PrivateRoute>
//               <ChatDashboard />
//             </PrivateRoute>
//           } 
//         />
//       </Routes>
//     </Router>
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
import Login from './components/Login';
import ChatDashboard from './components/ChatDashboard';
import PrivateRoute from './components/PrivateRoute'; // Ensure this exists and works correctly
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define a LandingPage component for the home page layout
const LandingPage = () => {
  return (
    <>
      <Hero />
      <StayConnected />
      <SecureChat />
      <EmailSync />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Other page routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* ChatDashboard route protected by PrivateRoute */}
        <Route 
          path="/chatdashboard" 
          element={
            <PrivateRoute>
              <ChatDashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
