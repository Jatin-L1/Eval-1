// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../assets/signup.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [strengthClass, setStrengthClass] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const clearErrors = () => setErrors({});

//   const showError = (field, message) => {
//     setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
//   };

//   const validateForm = () => {
//     clearErrors();
//     let isValid = true;

//     if (formData.username.length < 4 || formData.username.length > 15) {
//       showError("usernameError", "Username must be between 4 and 15 characters.");
//       isValid = false;
//     }

//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!formData.email.match(emailPattern)) {
//       showError("emailError", "Invalid Email Format.");
//       isValid = false;
//     }

//     if (formData.password.length < 6) {
//       showError("passwordError", "Password must be at least 6 characters long.");
//       isValid = false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       showError("confirmPasswordError", "Passwords do not match.");
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await fetch("http://localhost:5000/api/auth/signup", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: formData.username,
//             email: formData.email,
//             password: formData.password
//           })
//         });

//         const data = await response.json();
//         if (response.ok) {
//           alert("User registered successfully");
//           setFormData({ username: "", email: "", password: "", confirmPassword: "" });
//         } else {
//           alert(data.message || "Registration failed");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred. Please try again.");
//       }
//     }
//   };

  
//   const checkPasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 6) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[@$!%*?&#]/.test(password)) strength++;

//     setPasswordStrength(strength);

   
//     if (strength === 1) setStrengthClass("weak");
//     else if (strength === 2) setStrengthClass("medium");
//     else if (strength === 3) setStrengthClass("fair");
//     else if (strength === 4) setStrengthClass("strong");
//     else setStrengthClass(""); 
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//         <div className="signup">
//             <div className="signup-box">
//           <div className="box_image">
//             <img src="./Images/signup_image.jpeg" alt="Signup Visual" />
//           </div>
//           <div className="box_content">
//             <h1>Create Your Account</h1>
//             <form id="signUpPage" onSubmit={handleSubmit}>
//               <div className="inputContainer">
//                 <label htmlFor="username">
//                   <i className="fas fa-user" /> Username:
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   placeholder="Username"
//                   required
//                   value={formData.username}
//                   onChange={handleInputChange}
//                 />
//                 {errors.usernameError && <div className="error">{errors.usernameError}</div>}
//               </div>
    
//               <div className="inputContainer">
//                 <label htmlFor="email">
//                   <i className="fas fa-envelope" /> Email ID:
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email ID"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 {errors.emailError && <div className="error">{errors.emailError}</div>}
//               </div>
    
//               <div className="inputContainer">
//                 <label htmlFor="password">
//                   <i className="fas fa-lock" /> Password:
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   required
//                   value={formData.password}
//                   onChange={(e) => {
//                     handleInputChange(e);
//                     checkPasswordStrength(e.target.value);
//                   }}
//                 />
//                 {errors.passwordError && <div className="error">{errors.passwordError}</div>}
//                 <div className={`strength-meter ${strengthClass}`}>
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className={i < passwordStrength ? "active" : ""} />
//                   ))}
//                 </div>
//                 {}
//                 {formData.password && (
//                   <div id="passwordStrengthText" className={strengthClass}>
//                     {passwordStrength === 1
//                       ? "Password is too Weak"
//                       : passwordStrength === 2
//                       ? "Password is Weak"
//                       : passwordStrength === 3
//                       ? "Password is Fair"
//                       : passwordStrength === 4
//                       ? "Password is Strong"
//                       : "Password is too Weak"}
//                   </div>
//                 )}
//               </div>
    
//               <div className="inputContainer">
//                 <label htmlFor="confirmPassword">
//                   <i className="fas fa-lock" /> Confirm Password:
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   placeholder="Confirm Password"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                 />
//                 <label htmlFor="showPassword" className="showPassword">
//                   <input
//                     type="checkbox"
//                     name="showPassword"
//                     id="showPassword"
//                     checked={showPassword}
//                     onChange={toggleShowPassword}
//                   />{" "}
//                   Show Password
//                 </label>
//                 {errors.confirmPasswordError && <div className="error">{errors.confirmPasswordError}</div>}
//               </div>
    
//               {/* <p>
//                 Already Have an Account? <a href="/Login">Sign In</a>
//               </p> */}
//               <p>
//                 Already Have an Account? <Link to ="/Login">Sign In</Link>
//               </p>
//               <button type="submit" id="submitBtn">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//         </div>
//       );
//     };
// export default Signup;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from '../firebaseConfig'; // Import the configured auth from firebaseConfig.js
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import "../assets/signup.css";
// import signup_image from '../assets/signup_image.jpeg';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Validate the form
//   const validateForm = () => {
//     setErrors({});
//     let isValid = true;

//     // Example: Additional validation checks
//     if (formData.password !== formData.confirmPassword) {
//       setErrors((prev) => ({ ...prev, confirmPasswordError: "Passwords do not match" }));
//       isValid = false;
//     }

//     return isValid;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         // Create user with Firebase
//         await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//         alert("User registered successfully");
//         setFormData({ username: "", email: "", password: "", confirmPassword: "" });
//       } catch (error) {
//         console.error("Registration error:", error.message);
//         setErrors((prev) => ({ ...prev, signupError: error.message || "Error creating account. Try again." }));
//       }
//     }
//   };

//   return (
//     <div className="signup">
//       <div className="signup-box">
//         <div className="box_image">
//           <img src={signup_image} alt="Signup Visual" />
//         </div>
//         <div className="box_content">
//           <h1 >Create Your Account</h1>
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="text" 
//               name="username" 
//               placeholder="Username" 
//               value={formData.username} 
//               onChange={handleInputChange} 
//               required 
//             />
//             {errors.usernameError && <div className="error">{errors.usernameError}</div>}

//             <input 
//               type="email" 
//               name="email" 
//               placeholder="Email" 
//               value={formData.email} 
//               onChange={handleInputChange} 
//               required 
//             />
//             {errors.emailError && <div className="error">{errors.emailError}</div>}

//             <input 
//               type={showPassword ? "text" : "password"} 
//               name="password" 
//               placeholder="Password" 
//               value={formData.password} 
//               onChange={handleInputChange} 
//               required 
//             />
//             <input 
//               type="checkbox" 
//               onClick={() => setShowPassword(!showPassword)} 
//             /> Show Password
//             {errors.passwordError && <div className="error">{errors.passwordError}</div>}

//             <input 
//               type={showPassword ? "text" : "password"} 
//               name="confirmPassword" 
//               placeholder="Confirm Password" 
//               value={formData.confirmPassword} 
//               onChange={handleInputChange} 
//               required 
//             />
//             {errors.confirmPasswordError && <div className="error">{errors.confirmPasswordError}</div>}

//             {errors.signupError && <div className="error">{errors.signupError}</div>}
            
//             <button type="submit">Sign Up</button>
//             <p>Already have an account? <Link to="/login">Sign In</Link></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebaseConfig'; // Firebase configuration for authentication
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../assets/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthClass, setStrengthClass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearErrors = () => setErrors({});

  const showError = (field, message) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
  };

  const validateForm = () => {
    clearErrors();
    let isValid = true;

    if (formData.username.length < 4 || formData.username.length > 15) {
      showError("usernameError", "Username must be between 4 and 15 characters.");
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!formData.email.match(emailPattern)) {
      showError("emailError", "Invalid Email Format.");
      isValid = false;
    }

    if (formData.password.length < 6) {
      showError("passwordError", "Password must be at least 6 characters long.");
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("User registered successfully");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Registration error:", error.message);
        setErrors((prev) => ({ ...prev, signupError: error.message || "Error creating account. Try again." }));
      }
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;

    setPasswordStrength(strength);

    if (strength === 1) setStrengthClass("weak");
    else if (strength === 2) setStrengthClass("medium");
    else if (strength === 3) setStrengthClass("fair");
    else if (strength === 4) setStrengthClass("strong");
    else setStrengthClass("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup_1">
      <div className="signup-box_1">
        <div className="box_image_1">
          <img src="./Images/signup_image.jpeg" alt="Signup Visual" />
        </div>
        <div className="box_content">
          <h1>Create Your Account</h1>
          <form id="signUpPage" onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="username">
                <i className="fas fa-user" /> Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.usernameError && <div className="error">{errors.usernameError}</div>}
            </div>

            <div className="inputContainer">
              <label htmlFor="email">
                <i className="fas fa-envelope" /> Email ID:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.emailError && <div className="error">{errors.emailError}</div>}
            </div>

            <div className="inputContainer">
              <label htmlFor="password">
                <i className="fas fa-lock" /> Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => {
                  handleInputChange(e);
                  checkPasswordStrength(e.target.value);
                }}
              />
              {errors.passwordError && <div className="error">{errors.passwordError}</div>}
              <div className={`strength-meter ${strengthClass}`}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={i < passwordStrength ? "active" : ""} />
                ))}
              </div>
              {formData.password && (
                <div id="passwordStrengthText" className={strengthClass}>
                  {passwordStrength === 1
                    ? "Password is too Weak"
                    : passwordStrength === 2
                    ? "Password is Weak"
                    : passwordStrength === 3
                    ? "Password is Fair"
                    : passwordStrength === 4
                    ? "Password is Strong"
                    : "Password is too Weak"}
                </div>
              )}
            </div>

            <div className="inputContainer">
              <label htmlFor="confirmPassword">
                <i className="fas fa-lock" /> Confirm Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <label htmlFor="showPassword" className="showPassword">
                <input
                  type="checkbox"
                  name="showPassword"
                  id="showPassword"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                />{" "}
                Show Password
              </label>
              {errors.confirmPasswordError && <div className="error">{errors.confirmPasswordError}</div>}
            </div>

            {errors.signupError && <div className="error">{errors.signupError}</div>}

            <p>
              Already Have an Account? <Link to="/login">Sign In</Link>
            </p>
            <button type="submit" id="submitBtn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
