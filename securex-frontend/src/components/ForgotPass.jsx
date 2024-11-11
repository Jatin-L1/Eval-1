import React, { useState } from 'react';
import '../assets/Forgot.css';
import ForgotPassImage from '../assets/ForgotPass.png'; // Importing the image

const ForgotPass = () => {
    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Validation functions
    function validateEmail(email) {
        const atPosition = email.indexOf('@');
        const dotPosition = email.lastIndexOf('.');
        return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1;
    }

    function validateUsername(username) {
        if (username.length < 3 || username.length > 15) {
            return false;
        }
        for (let char of username) {
            if (!/[a-zA-Z0-9_]/.test(char)) {
                return false;
            }
        }
        return true;
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        let errorMsg = '';

        // Validate email
        if (!validateEmail(email)) {
            errorMsg += "Please enter a valid email address.\n";
            isValid = false;
        }
        
        // Validate username
        if (!validateUsername(username)) {
            errorMsg += "Username must be 3-15 characters long and can only contain letters, numbers, or underscores.\n";
            isValid = false;
        }

        // Check if fields are empty
        if (email.trim() === "" || username.trim() === "") {
            errorMsg += "Both fields are required.\n";
            isValid = false;
        }

        if (isValid) {
            // Clear any error message if validation passes
            setErrorMessage('');
            alert("Form submitted successfully!"); // Replace with actual submission logic if needed
        } else {
            setErrorMessage(errorMsg);
        }
    };

    return (
      <main>
        <div className="container">
          <div className="image-section">
            <img src={ForgotPassImage} alt="Forgot Password Illustration" />
          </div>
          <div className="form-section">
            <h2>Forgot Your Password?</h2>
            <p>
              Please enter your email address and username associated with your
              account. We will send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <button type="submit">RESET PASSWORD</button>
            </form>
            {errorMessage && (
              <div style={{ color: 'red', marginTop: '10px' }}>
                {errorMessage.split('\n').map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}
              </div>
            )}
            <a href="SignIn.html" className="back-to-signin">
              Back to Sign In
            </a>
          </div>
        </div>
      </main>
    );
};

export default ForgotPass;
