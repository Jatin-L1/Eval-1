// // src/components/Login.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import '../assets/Login.css';
// import Login_page from '../assets/Login_page.webp'; 

// const Login = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const togglePasswordRef = useRef(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const togglePasswordVisibility = () => {
//       const type = passwordRef.current.getAttribute('type') === 'password' ? 'text' : 'password';
//       passwordRef.current.setAttribute('type', type);
//       togglePasswordRef.current.classList.toggle('fa-eye', type === 'password');
//       togglePasswordRef.current.classList.toggle('fa-eye-slash', type === 'text');
//     };

//     togglePasswordRef.current.addEventListener('click', togglePasswordVisibility);
//     return () => togglePasswordRef.current.removeEventListener('click', togglePasswordVisibility);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     setError(""); // Clear previous errors

//     // Check if email or password is empty and set an error if they are
//     if (!email || !password) {
//       setError("Please fill out both email and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Save the token to local storage for authentication
//         localStorage.setItem("token", data.token);
//         alert("Login successful");
//         window.location.href = "/chatdashboard"; // Redirect to the dashboard
//       } else {
//         // Display error from the server
//         setError(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <main>
//       <div className="container_1">
//         <div className="login-section_1">
//           <h1>Sign In</h1>
//           <form id="loginForm" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <i className="fas fa-envelope" />
//               <input
//                 type="email"
//                 ref={emailRef}
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fas fa-lock" />
//               <input
//                 type="password"
//                 ref={passwordRef}
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//               />
//               <i className="fas fa-eye" ref={togglePasswordRef} id="togglePassword" />
//             </div>
//             {/* Conditionally display error message */}
//             {error && <span className="error">{error}</span>}
//             <a href="ForgotPass.html" className="forgot-password">
//               Forgot password?
//             </a>
//             <button type="submit">Sign In</button>
//             <p>
//               Don't have an account? <a href="/signup">Signup now</a>
//             </p>
//           </form>
//         </div>
//         <div className="image-section">
//           <div className="overlay" />
//           <img src={Login_page} alt="logo" />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Login;






import React, { useState, useRef, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../assets/Login.css';
import Login_page from '../assets/Login_page.webp';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const togglePasswordRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const togglePasswordVisibility = () => {
      const type = passwordRef.current.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordRef.current.setAttribute('type', type);
      togglePasswordRef.current.classList.toggle('fa-eye', type === 'password');
      togglePasswordRef.current.classList.toggle('fa-eye-slash', type === 'text');
    };

    togglePasswordRef.current.addEventListener('click', togglePasswordVisibility);
    return () => togglePasswordRef.current.removeEventListener('click', togglePasswordVisibility);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Please fill out both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      window.location.href = "/chatdashboard";
    } catch (error) {
      setError("Invalid credentials or network error. Please try again.");
    }
  };

  return (
    <main>
      <div className="container_1">
        <div className="login-section_1">
          <h1>Sign In</h1>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-envelope" />
              <input type="email" ref={emailRef} id="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <i className="fas fa-lock" />
              <input type="password" ref={passwordRef} id="password" name="password" placeholder="Password" required />
              <i className="fas fa-eye" ref={togglePasswordRef} id="togglePassword" />
            </div>
            {error && <span className="error">{error}</span>}
            <button type="submit">Sign In</button>
            <p>Don't have an account? <a href="/signup">Signup now</a></p>
          </form>
        </div>
        <div className="image-section">
          <img src={Login_page} alt="Login Visual" />
        </div>
      </div>
    </main>
  );
};

export default Login;
