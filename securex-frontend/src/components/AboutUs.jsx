import React from 'react'

function Header() {
    return (
        <>
  import React from 'react' function Header() {"{"}
  return (
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - SecureX</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="AboutUs.css" />
  <link rel="icon" href="images/Logo.png" type="image/icon type" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  {/* AOS (Animate On Scroll) CSS for viva */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
  />
  <div id="progress-bar"></div>
  {/* Navbar */}
  <nav classnamename="navbar navbar-expand-lg navbar-dark sticky-top">
    <div classname="container">
      <a classname="navbar-brand" href="index.html">
        <img src="images/Logo.png" alt="logo" height="70px" width="140px" />
      </a>
      <button
        classname="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span classname="navbar-toggler-icon" />
      </button>
      <div
        classname="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul classname="navbar-nav">
          <li classname="nav-item dropdown">
            <a classname="nav-link" href="features.html" data-toggle="dropdown">
              Features
            </a>
            <div classname="dropdown-menu">
              <a
                href="features.html#simple-list-item-1"
                classname="feature-link"
              >
                <div classname="feature-card">
                  <div classname="icon">🔒</div>
                  <h6>Message Privately</h6>
                  <p>End-to-end encryption and privacy controls.</p>
                </div>
              </a>
              <a
                href="features.html#simple-list-item-2"
                classname="feature-link"
              >
                <div classname="feature-card">
                  <div classname="icon">🌐</div>
                  <h6>Stay Connected</h6>
                  <p>Message and call for free* around the world.</p>
                </div>
              </a>
              <a
                href="features.html#simple-list-item-3"
                classname="feature-link"
              >
                <div classname="feature-card">
                  <div classname="icon">👥</div>
                  <h6>Build Community</h6>
                  <p>Group conversations made simple.</p>
                </div>
              </a>
            </div>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="AboutUs.html">
              About Us
            </a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="ContactUs.html">
              Contact Us
            </a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="signup.html">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Bg VIDEO*/}
  <main>
    <section id="hero" classname="parallax">
      <video autoPlay="" muted="" loop="" playsInline="" id="background-video">
        <source
          src="<video"
          autoPlay=""
          muted=""
          loop=""
          playsInline=""
          id="background-video"
        />
        <source src="images/AboutUsVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div classname="overlay" />
      <div classname="hero-content text-center" data-aos="fade-down">
        <h1 classname="display-4 text-white">Welcome to SecureX</h1>
        <p classname="lead text-white">
          {" "}
          <b>Your trusted partner for Secure Messaging. </b>
        </p>
        <a href="#about-us" classname="btn btn-primary mt-3">
          Learn More
        </a>
      </div>
    </section>
    <section id="about-us" classname="container my-5" data-aos="fade-up">
      <div classname="row align-items-center">
        <div classname="col-lg-6 order-lg-2">
          <img
            src="images/Login_page.webp"
            alt="About SecureX"
            classname="img-fluid rounded-circle shadow-lg"
          />
        </div>
        {/* INTRO */}
        <div classname="col-lg-6 order-lg-1 text-white mt-4 mt-lg-0">
          <h2 classname="display-5 mb-4">Who We Are</h2>
          <p>
            <b classname="ishaan">
              {" "}
              At SecureX, we prioritize your privacy and security by offering
              state-of-the-art secure messaging solutions. Our platform is
              designed to keep your communications safe from prying eyes,
              utilizing advanced encryption technologies to ensure that only you
              and your intended recipients have access to your messages. We
              believe in empowering users with the tools to protect their data,
              providing a seamless and intuitive experience without compromising
              on security.{" "}
            </b>
          </p>
          <p>
            <b classname="tuli">
              Whether you're communicating with colleagues, friends, or family,
              SecureX is your trusted partner in safeguarding your digital
              interactions.{" "}
            </b>
          </p>
        </div>
      </div>
    </section>
    {/* MEET OUR TEAM */}
    <section
      id="team"
      classname="container my-5 text-center"
      data-aos="fade-up"
    >
      <div classname="text-center mb-5">
        <h2 classname="display-4">Meet Our Team</h2>
        <p classname="lead">Our team of experts dedicated to your security.</p>
      </div>
      <div classname="row justify-content-center">
        <div classname="col-lg-3 col-md-6 mb-4">
          <div classname="team-member card border-0 shadow">
            <img
              src="images/one.jpg"
              alt="Jatin Sharma"
              classname="card-img-top rounded-circle"
            />
            <div classname="card-body">
              <h4 classname="card-title mt-3">Jatin Sharma</h4>
              <ul classname="list-inline">
                <li classname="list-inline-item">
                  <a href="https://www.linkedin.com/in/jatin-sharma-391830283">
                    <i classname="fab fa-linkedin" />
                  </a>
                </li>
                <li classname="list-inline-item">
                  <a href="https://www.instagram.com/jatin_sharma_2435?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i classname="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <div classname="team-member card border-0 shadow">
            <img
              src="images/five.jpg"
              alt="Jeeya Sharma"
              classname="card-img-top rounded-circle"
            />
            <div classname="card-body">
              <h4 classname="card-title mt-3">Jeeya Sharma</h4>
              <ul classname="list-inline">
                <li classname="list-inline-item">
                  <a href="https://www.linkedin.com/in/jeeya-sharma-5177042ba">
                    <i classname="fab fa-linkedin" />
                  </a>
                </li>
                <li classname="list-inline-item">
                  <a href="https://www.instagram.com/jeeya.s24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i classname="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <div classname="team-member card border-0 shadow">
            <img
              src="images/three.jpg"
              alt="James Brown"
              classname="card-img-top rounded-circle"
            />
            <div classname="card-body">
              <h4 classname="card-title mt-3">Hardik Goyal</h4>
              <ul classname="list-inline">
                <li classname="list-inline-item">
                  <a href="https://www.linkedin.com/in/hardik-goyal-469b002ba/">
                    <i classname="fab fa-linkedin" />
                  </a>
                </li>
                <li classname="list-inline-item">
                  <a href="https://www.instagram.com/_hardik.2005?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i classname="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div classname="col-lg-3 col-md-6 mb-4">
          <div classname="team-member card border-0 shadow">
            <img
              src="images/four.jpg"
              alt="Emily White"
              classname="card-img-top rounded-circle"
            />
            <div classname="card-body">
              <h4 classname="card-title mt-3">Ishaan Simran Tuli</h4>
              <ul classname="list-inline">
                <li classname="list-inline-item">
                  <a href="https://www.linkedin.com/in/ishaan-simran-tuli-954034324/">
                    <i classname="fab fa-linkedin" />
                  </a>
                </li>
                <li classname="list-inline-item">
                  <a href="https://www.instagram.com/ishaan_tuli7/?utm_source=ig_web_button_share_sheet">
                    <i classname="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* STATISTICS */}
    <section id="infographics" classname="bg-dark text-white py-5">
      <div classname="container">
        <div classname="text-center mb-5" data-aos="zoom-in">
          <h2 classname="display-4">
            {" "}
            <b>By The Numbers </b>
          </h2>
          <p classname="lead">
            {" "}
            <b>A snapshot of our achievements. </b>
          </p>
        </div>
        <div classname="row text-center">
          <div classname="col-md-3" data-aos="fade-up">
            <div classname="infographic">
              <i classname="fa-solid fa-clone fa-3x mb-3" />
              <h3>44</h3>
              <p>Unique Cloners</p>
            </div>
          </div>
          <div classname="col-md-3" data-aos="fade-up" data-aos-delay={100}>
            <div classname="infographic">
              <i classname="fa-solid fa-eye-low-vision fa-3x mb-3" />
              <h3>4</h3>
              <p>Visitors</p>
            </div>
          </div>
          <div classname="col-md-3" data-aos="fade-up" data-aos-delay={200}>
            <div classname="infographic">
              <i classname="fa-solid fa-code-commit fa-3x mb-3" />
              <h3>120+</h3>
              <p>Commits</p>
            </div>
          </div>
          <div classname="col-md-3" data-aos="fade-up" data-aos-delay={300}>
            <div classname="infographic">
              <i classname="fa-solid fa-hourglass-start fa-3x mb-3" />
              <h3>50+</h3>
              <p>Hours of Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TIMELINE */}
    <section id="timeline" classname="container my-5">
      <div classname="text-center mb-5" data-aos="zoom-in">
        <h2 classname="display-4">Our Journey</h2>
        <p classname="lead">A timeline of our major milestones.</p>
      </div>
      <ul classname="timeline">
        <li data-aos="fade-right">
          <div classname="timeline-badge">
            <i classname="fas fa-briefcase" />
          </div>
          <div classname="timeline-panel">
            <div classname="timeline-heading">
              <h4 classname="timeline-title">Planning and Research</h4>
              <p>
                <small classname="text-muted">
                  <i classname="fas fa-clock" /> Week 1
                </small>
              </p>
            </div>
            <div classname="timeline-body">
              <p>
                {" "}
                <b>
                  Leading the research on secure messaging technologies,
                  identifying key security features and establishing the
                  project's technical foundation.
                </b>
              </p>
            </div>
          </div>
        </li>
        <li classname="timeline-inverted" data-aos="fade-left">
          <div classname="timeline-badge">
            <i classname="fas fa-shield-alt" />
          </div>
          <div classname="timeline-panel">
            <div classname="timeline-heading">
              <h4 classname="timeline-title">Development Phase</h4>
              <p>
                <small classname="text-muted">
                  <i classname="fas fa-clock" /> Week 2
                </small>
              </p>
            </div>
            <div classname="timeline-body">
              <p>
                Taking charge of the initial development phase, focusing on
                integrating the frontend design and ensuring that the system's
                core functionality is in place
              </p>
            </div>
          </div>
        </li>
        <li data-aos="fade-right">
          <div classname="timeline-badge">
            <i classname="fas fa-award" />
          </div>
          <div classname="timeline-panel">
            <div classname="timeline-heading">
              <h4 classname="timeline-title">Testing and Refinement </h4>
              <p>
                <small classname="text-muted">
                  <i classname="fas fa-clock" /> Week 3
                </small>
              </p>
            </div>
            <div classname="timeline-body">
              <p>
                Leading the testing and refinement process, conducting usability
                tests. Ensuring a seamless user experience and addressing any
                design inconsistencies.
              </p>
            </div>
          </div>
        </li>
        <li classname="timeline-inverted" data-aos="fade-left">
          <div classname="timeline-badge">
            <i classname="fas fa-network-wired" />
          </div>
          <div classname="timeline-panel">
            <div classname="timeline-heading">
              <h4 classname="timeline-title">Finalization and Deployment</h4>
              <p>
                <small classname="text-muted">
                  <i classname="fas fa-clock" />
                  Week 4
                </small>
              </p>
            </div>
            <div classname="timeline-body">
              <p>
                Overseeing the finalization and deployment of the project,
                ensuring that all components are fully integrated and the
                webpage is ready for the 1st Evaluation.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    {/* Community outreach */}
    <section id="community-outreach" classname="bg-dark text-white py-5">
      <div classname="container">
        <div classname="text-center mb-5" data-aos="zoom-in">
          <h2 classname="display-4">SecureX Community Outreach</h2>
          <p classname="lead">Empowering Secure messaging to the next level.</p>
        </div>
        <div classname="row text-center">
          <div classname="col-md-4" data-aos="fade-up">
            <div classname="outreach-card">
              <i classname="fas fa-chalkboard-teacher fa-3x mb-3" />
              <h3> Workshops</h3>
              <p>
                Hosting workshops at schools and colleges to educate students
                about online privacy.
              </p>
            </div>
          </div>
          <div classname="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div classname="outreach-card">
              <i classname="fas fa-hand-holding-heart fa-3x mb-3" />
              <h3>Non-Profit Partnerships</h3>
              <p>
                Collaborating with non-profits to provide secure messaging
                solutions to underserved communities.
              </p>
            </div>
          </div>
          <div classname="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div classname="outreach-card">
              <i classname="fas fa-globe-americas fa-3x mb-3" />
              <h3>Global Awareness Campaigns</h3>
              <p>
                Running campaigns to raise awareness about the importance of
                cybersecurity worldwide.
              </p>
            </div>
          </div>
        </div>
        <div classname="row text-center mt-5">
          <div classname="col-md-6" data-aos="fade-up">
            <div classname="outreach-card">
              <i classname="fas fa-users fa-3x mb-3" />
              <h3>Community Events</h3>
              <p>
                Organizing local events to engage the community and promote
                digital literacy.
              </p>
            </div>
          </div>
          <div classname="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div classname="outreach-card">
              <i classname="fas fa-book-open fa-3x mb-3" />
              <h3>Educational Resources</h3>
              <p>
                Providing free resources and tools for schools to teach
                cybersecurity basics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Bottom part */}
    <section
      id="contact"
      classname="parallax text-white py-5"
      style={{ backgroundImage: 'url("contact-background.jpg")' }}
    >
      <div classname="container">
        <div classname="text-center mb-5">
          <h2 classname="simran">Get In Touch</h2>
          <p classname="singh">We'd love to hear from you. Contact us today!</p>
        </div>
        <div classname="row">
          <div classname="col-lg-6 mb-4">
            <form
              id="contact-form"
              action="https://formspree.io/f/mrbgblkn"
              method="POST"
            >
              <div classname="mb-3">
                <input
                  type="text"
                  name="name"
                  classname="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div classname="mb-3">
                <input
                  type="email"
                  name="email"
                  classname="form-control"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div classname="mb-3">
                <textarea
                  name="message"
                  classname="form-control"
                  rows={5}
                  placeholder="Your Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" classname="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
          {/* Secondary Logo Placement */}
          <div classname="col-lg-6 d-flex align-items-center justify-content-center">
            <img
              src="images/LOGOfOOTER.jpeg"
              alt="Contact Us"
              classname="img-fluid rounded-circle shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer classname="footer-dark">
    <div classname="container">
      <div classname="row">
        <div classname="col-md-4">
          <h5>About Us</h5>
          <p classname="text">
            {" "}
            We are committed to providing secure and seamless messaging
            solutions that connect you with those who matter most, no matter
            where you are.
          </p>
        </div>
        <div classname="col-md-4">
          <h5>Quick Links</h5>
          <ul classname="list-unstyled">
            <li>
              <a href="index.html" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="Features.html" style={{ textDecoration: "none" }}>
                Features
              </a>
            </li>
            <li>
              <a href="ContactUs.html" style={{ textDecoration: "none" }}>
                ContactUs
              </a>
            </li>
            <li>
              <a href="signup.html" style={{ textDecoration: "none" }}>
                {" "}
                Sign Up
              </a>
            </li>
            <li>
              <a href="AboutUs.html" style={{ textDecoration: "none" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="Faq.html" style={{ textDecoration: "none" }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div classname="col-md-4">
          <h5>Contact</h5>
          <p>
            Email: support@yourwebsite.com
            <br />
            Phone: +1 234 567 890
          </p>
          <div classname="social-icons">
            <a href="#">
              <i classname="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i classname="fab fa-twitter" />
            </a>
            <a href="#">
              <i classname="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div classname="row">
        <div classname="col-md-12 text-center">
          <p classname="copyright">© 2024 SecureX. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  <button id="back-to-top" title="Back to Top">
    ⬆️
  </button>
  {/* AOS (Animate On Scroll) JS for viva */}
  {/* Custom JS for AOS Initialization */}){"}"}
</>


    )
}

export default AboutUs