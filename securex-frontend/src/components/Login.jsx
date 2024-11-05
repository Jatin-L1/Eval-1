import React, { useEffect, useRef } from 'react';
import '../assets/Login.css';
import Login_page from '../assets/Login_page.webp'; 

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const togglePasswordRef = useRef(null);
    const emailErrorRef = useRef(null);
    const passwordErrorRef = useRef(null);

    useEffect(() => {
        const togglePasswordVisibility = () => {
            const type = passwordRef.current.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordRef.current.setAttribute('type', type);
            togglePasswordRef.current.classList.toggle('fa-eye', type === 'password');
            togglePasswordRef.current.classList.toggle('fa-eye-slash', type === 'text');
        };

        const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
        const validatePassword = (password) => password.length >= 6;

        const handleSubmit = (event) => {
            event.preventDefault();

            emailErrorRef.current.style.display = 'none';
            passwordErrorRef.current.style.display = 'none';

            let valid = true;

            if (!validateEmail(emailRef.current.value)) {
                emailErrorRef.current.textContent = 'Please enter a valid email address.';
                emailErrorRef.current.style.display = 'block';
                valid = false;
            }

            if (!validatePassword(passwordRef.current.value)) {
                passwordErrorRef.current.textContent = 'Password must be at least 6 characters long.';
                passwordErrorRef.current.style.display = 'block';
                valid = false;
            }

            if (valid) {
                event.target.submit();
            }
        };

        togglePasswordRef.current.addEventListener('click', togglePasswordVisibility);

        const form = document.getElementById('loginForm');
        form.addEventListener('submit', handleSubmit);

        return () => {
            togglePasswordRef.current.removeEventListener('click', togglePasswordVisibility);
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <main>
            <div className="container">
                <div className="login-section">
                    <h1>Sign In</h1>
                    <form id="loginForm" action="UserDashboard.html" method="POST">
                        <div className="input-group">
                            <i className="fas fa-envelope" />
                            <input
                                type="email"
                                ref={emailRef}
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <span className="error" ref={emailErrorRef} id="emailError" />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                ref={passwordRef}
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <i className="fas fa-eye" ref={togglePasswordRef} id="togglePassword" />
                        </div>
                        <span className="error" ref={passwordErrorRef} id="passwordError" />
                        <a href="ForgotPass.html" className="forgot-password">
                            Forgot password?
                        </a>
                        <button type="submit">Sign In</button>
                        <p>
                            Don't have an account? <a href="signup.html">Signup now</a>
                        </p>
                    </form>
                </div>
                <div className="image-section">
                    <div className="overlay" />
                    <img src={Login_page} alt="logo"  />
                </div>
            </div>
        </main>
    );
};

export default Login;
