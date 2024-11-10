import React from 'react';
import '../assets/Features.css';

const Features = () => {
    return (
        <>
        <div className="featuresMain">
            <div className="headingContainer"></div>
              <h1 id="features_heading">Features of SecureX</h1>  
            <div className="feature_cards">
                <a href="#simple-list-item-1" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">🔒</div>
                        <h6>Message Privately</h6>
                        <p>End-to-end encryption and privacy controls.</p>
                    </div>
                </a>
                <a href="#simple-list-item-2" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">🌐</div>
                        <h6>Stay Connected</h6>
                        <p>Message and call for free* around the world.</p>
                    </div>
                </a>
                <a href="#simple-list-item-3" className="feature-link" style={{ textDecoration: 'none' }}>
                    <div className="feature-card">
                        <div className="icon">👥</div>
                        <h6>Build Community</h6>
                        <p>Group conversations made simple.</p>
                    </div>
                </a>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8">
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <div id="simple-list-item-1">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Message Privately</h1>
                                    <p id="under_heading">Your privacy is our priority. With end-to-end encryption, you can be sure that your personal messages stay between you and who you send them to.</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/messaging_privately.webp" alt="Messaging Privately" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>End-to-end Encryption:</h5>
                                    <p>Your conversations are protected with industry-leading end-to-end encryption, ensuring that only you and the intended recipient can read the messages. No third parties, not even the web servers itself, can access your messages.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Password Protected Chats:</h5>
                                    <p>Add an extra layer of security to your conversations with password-protected chats. Only users with the correct password can access the chat, providing another level of privacy.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Secure File Sharing:</h5>
                                    <p>Share files, images, and videos privately. All attachments are encrypted, ensuring that your data remains secure, both in transit and at rest.</p>
                                </div>
                            </div>
                        </div>
                        <div id="simple-list-item-2">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Stay Connected</h1>
                                    <p id="under_heading">Message and call for free* around the world and stay close to the people that matter to you with reliable messaging and calling</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/stay_connected.webp" alt="Stay Connected" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>Free and Unlimited Usage:</h5>
                                    <p>Enjoy all the features of our secure chat website without any subscription fees or hidden costs. Stay connected with your loved ones, colleagues, and friends without worrying about charges.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Reliable Communication Anywhere:</h5>
                                    <p>Seamlessly sync your chats across all your devices. Whether you're on your phone, tablet, or desktop, you can stay connected and continue conversations without interruption.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Always Up-to-Date:</h5>
                                    <p>Enjoy automatic updates that keep your website running smoothly with the latest features and security enhancements, without disrupting your connectivity.</p>
                                </div>
                            </div>
                        </div>
                        <div id="simple-list-item-3">
                            <div className="features_content">
                                <div className="left_content">
                                    <h1>Build Community</h1>
                                    <p id="under_heading">Simple group and community messaging to keep in touch with your closest groups and group conversations made simple.</p>
                                </div>
                                <div className="right_content">
                                    <img src="./Images/build_community.webp" alt="Build Community" />
                                </div>
                            </div>
                            <div className="below_features_content">
                                <div className="no_1">
                                    <h5>Create and Manage Private Groups:</h5>
                                    <p>Bring people together with private group chats that are secured with end-to-end encryption. Whether for friends, family, or colleagues, build your community in a safe and secure environment.</p>
                                </div>
                                <div className="no_2">
                                    <h5>Grow Your Community:</h5>
                                    <p>Start small and expand as needed. Increase the number of members in your group without sacrificing performance or security.</p>
                                </div>
                                <div className="no_3">
                                    <h5>Inclusive Community Building:</h5>
                                    <p>Building and joining communities within our website is completely free. Grow your groups and connect with others without worrying about any costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Features;
