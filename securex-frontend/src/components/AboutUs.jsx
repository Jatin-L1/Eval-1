import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/aboutus.css';
import AboutUsVideo from '../assets/AboutUsVideo.mp4';
import one from '../assets/one.jpg';
import two from '../assets/three.jpg';
import three from '../assets/four.jpg';
import four from '../assets/five.jpg';
import logoFooter from '../assets/LOGOfOOTER.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faInstagram,
    faFacebookF,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
    faClone,
    faEyeLowVision,
    faCodeCommit,
    faHourglassStart,
    faBriefcase,
    faShieldAlt,
    faAward,
    faNetworkWired,
    faChalkboardTeacher,
    faHandHoldingHeart,
    faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });

        const handleScroll = () => {
            const progressBar = document.getElementById('about-progress-bar');
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            if (progressBar) progressBar.style.width = progress + "%";

            const button = document.getElementById('about-back-to-top');
            if (scrollTop > 300) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }

            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        if (!name.trim()) {
            alert('Please enter your name.');
            e.preventDefault();
        } else if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        } else if (!message.trim()) {
            alert('Please enter your message.');
            e.preventDefault();
        }
    };

    return (
        <div className="about-container">
            <div id="about-progress-bar"></div>
            {/* Hero Section */}
            <section id="about-hero" className="about-hero">
                <video autoPlay muted loop playsInline id="about-background-video">
                    <source src={AboutUsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="about-overlay"></div>
                <div className="about-hero-content text-center" data-aos="fade-down">
                    <h1 className="display-4 text-white">Welcome to SecureX</h1>
                    <p className="lead text-white"><b>Your trusted partner for Secure Messaging.</b></p>
                    <a href="#about-us" className="btn btn-primary mt-3">Learn More</a>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="about-us" className="about-section container my-5 text-center text-white" data-aos="fade-up">
                <h2 className="display-5 mb-4">Who We Are</h2>
                <p>
                    <b>At SecureX, we prioritize your privacy and security by offering state-of-the-art secure messaging solutions...</b>
                </p>
            </section>

            {/* Meet Our Team Section */}
            <section id="about-team" className="about-section container my-5 text-center" data-aos="fade-up">
                <h2 className="display-4">Meet Our Team</h2>
                <p className="lead">Our team of experts dedicated to your security.</p>
                <div className="row justify-content-center">
                    <TeamMember name="Jatin Sharma" img={one} linkedin="https://www.linkedin.com/in/jatin-sharma-391830283" instagram="https://www.instagram.com/jatin_sharma_2435?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                    <TeamMember name="Jeeya Sharma" img={four} linkedin="https://www.linkedin.com/in/jeeya-sharma-5177042ba" instagram="https://www.instagram.com/jeeya.s24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                    <TeamMember name="Hardik Goyal" img={two} linkedin="https://www.linkedin.com/in/hardik-goyal-469b002ba/" instagram="https://www.instagram.com/_hardik.2005?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                    <TeamMember name="Ishaan Simran Tuli" img={three} linkedin="https://www.linkedin.com/in/ishaan-simran-tuli-954034324/" instagram="https://www.instagram.com/ishaan_tuli7/?utm_source=ig_web_button_share_sheet" />
                </div>
            </section>

            {/* Statistics Section */}
            <section id="about-infographics" className="bg-dark text-white py-5">
                <div className="container text-center mb-5" data-aos="zoom-in">
                    <h2 className="display-4"><b>By The Numbers</b></h2>
                    <p className="lead"><b>A snapshot of our achievements.</b></p>
                    <div className="row">
                        <Statistic icon={faClone} value="44" label="Unique Cloners" />
                        <Statistic icon={faEyeLowVision} value="4" label="Visitors" />
                        <Statistic icon={faCodeCommit} value="120+" label="Commits" />
                        <Statistic icon={faHourglassStart} value="50+" label="Hours of Code" />
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section id="about-timeline" className="about-section container my-5">
                <h2 className="display-4 text-center">Our Journey</h2>
                <Timeline />
            </section>

            {/* Community Outreach Section */}
            <section id="about-community-outreach" className="bg-dark text-white py-5">
                <div className="container">
                    <h2 className="display-4 text-center" data-aos="zoom-in">SecureX Community Outreach</h2>
                    <p className="lead text-center">Empowering Secure messaging to the next level.</p>
                    <div className="row text-center">
                        <Outreach icon={faChalkboardTeacher} title="Workshops" description="Hosting workshops at schools and colleges to educate students about online privacy." />
                        <Outreach icon={faHandHoldingHeart} title="Non-Profit Partnerships" description="Collaborating with non-profits to provide secure messaging solutions to underserved communities." />
                        <Outreach icon={faGlobeAmericas} title="Global Awareness Campaigns" description="Running campaigns to raise awareness about the importance of cybersecurity worldwide." />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="about-contact" className="parallax text-white py-5">
                <div className="container">
                    <h2 className="text-center">Get In Touch</h2>
                    <p className="text-center">We'd love to hear from you. Contact us today!</p>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <form id="about-contact-form" action="https://formspree.io/f/mrbgblkn" method="POST" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                            </form>
                        </div>
                        {/* Secondary Logo Placement */}
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src={logoFooter} alt="Contact Us" className="img-fluid rounded-circle shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="about-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>We are committed to providing secure and seamless messaging solutions that connect you with those who matter most, no matter where you are.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" style={{ textDecoration: 'none' }}>Home</a></li>
                                <li><a href="/features" style={{ textDecoration: 'none' }}>Features</a></li>
                                <li><a href="/contactus" style={{ textDecoration: 'none' }}>Contact Us</a></li>
                                <li><a href="/signup" style={{ textDecoration: 'none' }}>Sign Up</a></li>
                                <li><a href="/about" style={{ textDecoration: 'none' }}>About Us</a></li>
                                <li><a href="/faq" style={{ textDecoration: 'none' }}>FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact</h5>
                            <p>Email: support@yourwebsite.com<br />Phone: +1 234 567 890</p>
                            <div className="social-icons">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>&copy; 2024 SecureX. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button id="about-back-to-top" title="Back to Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>⬆️</button>
        </div>
    );
};

const TeamMember = ({ name, img, linkedin, instagram }) => (
    <div className="col-lg-3 col-md-6 mb-4">
        <div className="about-team-member card border-0 shadow">
            <img src={img} alt={name} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h4 className="card-title mt-3">{name}</h4>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href={linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className="list-inline-item"><a href={instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
        </div>
    </div>
);

const Statistic = ({ icon, value, label }) => (
    <div className="col-md-3" data-aos="fade-up">
        <div className="about-infographic">
            <FontAwesomeIcon icon={icon} size="3x" className="mb-3" />
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    </div>
);

const Outreach = ({ icon, title, description }) => (
    <div className="col-md-4" data-aos="fade-up">
        <div className="about-outreach-card">
            <FontAwesomeIcon icon={icon} size="3x" className="mb-3" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const Timeline = () => (
    <ul className="about-timeline">
        <li data-aos="fade-right">
            <TimelineItem icon={faBriefcase} title="Planning and Research" time="Week 1" description="Leading the research on secure messaging technologies..." />
        </li>
        <li data-aos="fade-left" className="timeline-inverted">
            <TimelineItem icon={faShieldAlt} title="Development Phase" time="Week 2" description="Taking charge of the initial development phase..." />
        </li>
        <li data-aos="fade-right">
            <TimelineItem icon={faAward} title="Testing and Refinement" time="Week 3" description="Leading the testing and refinement process..." />
        </li>
        <li data-aos="fade-left" className="timeline-inverted">
            <TimelineItem icon={faNetworkWired} title="Finalization and Deployment" time="Week 4" description="Overseeing the finalization and deployment of the project..." />
        </li>
    </ul>
);

const TimelineItem = ({ icon, title, time, description }) => (
    <div className="about-timeline-panel">
        <div className="about-timeline-heading">
            <h4 className="timeline-title">{title}</h4>
            <p><small className="text-muted"><FontAwesomeIcon icon={faHourglassStart} /> {time}</small></p>
        </div>
        <div className="about-timeline-body">
            <p>{description}</p>
        </div>
    </div>
);

export default AboutUs;
