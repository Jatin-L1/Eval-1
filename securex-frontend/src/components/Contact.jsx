import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { loadFull } from 'tsparticles';
import '../assets/contact.css';

const Contact = () => {

  // Initialize emailjs on component mount
  useEffect(() => {
    emailjs.init("SL9c6eeNMc5YvMXIi");
  }, []);
  
  // Function to validate form and send email
  const validateAndSendMail = () => {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email_id").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validate Full Name
    if (fullName.length < 2) {
      document.getElementById("nameError").textContent = "Full Name must be at least 2 characters long.";
      isValid = false;
    }

    // Validate Email using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Message
    if (message.length < 5) {
      document.getElementById("messageError").textContent = "Message must be at least 5 characters long.";
      isValid = false;
    }

    // If form is valid, send the email
    if (isValid) {
      const params = {
        from_name: fullName,
        email_id: email,
        message: message
      };

      emailjs.send("service_f6dkktn", "template_f1iwjht", params)
        .then(() => {
          // Display success message and particles
          document.getElementById("thankYouMessage").style.display = "block";
          loadParticles();

          // Stop particles after 5 seconds
          setTimeout(() => {
            tsParticles.domItem(0).destroy();
          }, 5000);
        })
        .catch(() => {
          alert("Failed to send email. Please try again.");
        });
    }
  };


  return (
    <main>
      <div className="container">
        <div className="image-section" />
        <div className="contact-section">
          <div className="contact-background">
            <h1>Contact Us</h1>
            <p>Get in touch with us for more information about SecureX.</p>
            <ul>
              <li>Protect your chats with passwords</li>
              <li>Confidential business chats are more secure now</li>
              <li>Chat anywhere, anytime</li>
            </ul>
            <div className="additional-content">
              <p>
                Our team is here to help you with any inquiries or any issues related to SecureX. 
                If you are facing any problems, don't hesitate to contact us, we are happy to assist you.
              </p>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
              <a href="#"><i className="fab fa-youtube" /></a>
            </div>
          </div>
        </div>
        {/* Info Section with Contact Form */}
        <div className="info-section">
          <div className="contact-info">
            <h4 style={{ fontSize: 25 }}>SecureX- Chat Application</h4>
            <p>Feel free to connect with us</p>
            <p>Email: <a href="mailto:hardik0680.be23@chitkara.edu.in">hardik0680.be23@chitkara.edu.in</a></p>
            <p>Phone: <a href="tel:+91 6284881755">+91 6284881755</a></p>
          </div>
          <div className="additional-info">
            <div className="contact-form">
              <h4 style={{ fontSize: 25 }}>Commercial Requests</h4>
              {/* Contact Form */}
              <form id="contactForm">
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Full Name"
                  required=""
                />
                <span id="nameError" className="error-message" style={{ color: "red" }} />
                <input
                  type="email"
                  id="email_id"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <span id="emailError" className="error-message" style={{ color: "red" }} />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required=""
                />
                <span id="messageError" className="error-message" style={{ color: "red" }} />
                <button type="button" onClick={validateAndSendMail}>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Thank You Message Section */}
        <div id="thankYouMessage">
          Thank you for your request! We will get back to you soon.
        </div>
      </div>
      {/* Particles container */}
      <div id="tsparticles" />
    </main>
  );
};

export default Contact;
