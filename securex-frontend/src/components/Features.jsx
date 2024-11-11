import React from 'react';
import '../assets/Features.css';
import FeaturesCards from './FeaturesCards';
import FeaturesContent from './FeaturesContent';

const Features = () => {
    return (
        <>
        <div className="featuresMain">
            <div className="headingContainer"></div>
              <h1 id="features_heading">Features of SecureX</h1>  
            <div className="feature_cards">
                <FeaturesCards 
                    id="simple-list-item-1"
                    icon="🔒"
                    title="Message Privately"
                    description="End-to-end encryption and privacy controls."
                />
                <FeaturesCards
                    id="simple-list-item-2"
                    icon="🌐"
                    title="Stay Connected"
                    description="Message and call for free* around the world."
                />
                <FeaturesCards 
                    id="simple-list-item-3"
                    icon="👥"
                    title="Build Community"
                    description="Group conversations made simple."
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8">
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">

                        <FeaturesContent
                            div_id="simple-list-item-1"
                            h1="Message Privately"
                            under_heading="Your privacy is our priority. With end-to-end encryption, you can be sure that your personal messages stay between you and who you send them to."
                            right_img="./Images/messaging_privately.webp"
                            no_1_h5="End-to-end Encryption:"
                            no_1_p="Your conversations are protected with industry-leading end-to-end encryption, ensuring that only you and the intended recipient can read the messages. No third parties, not even the web servers itself, can access your messages."
                            no_2_h5="Password Protected Chats:"
                            no_2_p="Add an extra layer of security to your conversations with password-protected chats. Only users with the correct password can access the chat, providing another level of privacy."
                            no_3_h5="Secure File Sharing:"
                            no_3_p="Share files, images, and videos privately. All attachments are encrypted, ensuring that your data remains secure, both in transit and at rest."
                        />

                        <FeaturesContent
                            div_id="simple-list-item-2"
                            h1="Stay Connected"
                            under_heading="Message and call for free* around the world and stay close to the people that matter to you with reliable messaging and calling"
                            right_img="./Images/stay_connected.webp"
                            no_1_h5="Free and Unlimited Usage:"
                            no_1_p="Enjoy all the features of our secure chat website without any subscription fees or hidden costs. Stay connected with your loved ones, colleagues, and friends without worrying about charges."
                            no_2_h5="Reliable Communication Anywhere:"
                            no_2_p="Seamlessly sync your chats across all your devices. Whether you're on your phone, tablet, or desktop, you can stay connected and continue conversations without interruption."
                            no_3_h5="Always Up-to-Date:"
                            no_3_p="Enjoy automatic updates that keep your website running smoothly with the latest features and security enhancements, without disrupting your connectivity."
                        />

                        <FeaturesContent
                            div_id="simple-list-item-3"
                            h1="Build Community"
                            under_heading="Simple group and community messaging to keep in touch with your closest groups and group conversations made simple."
                            right_img="./Images/build_community.webp"
                            no_1_h5="Create and Manage Private Groups:"
                            no_1_p="Bring people together with private group chats that are secured with end-to-end encryption. Whether for friends, family, or colleagues, build your community in a safe and secure environment."
                            no_2_h5="Grow Your Community:"
                            no_2_p="Start small and expand as needed. Increase the number of members in your group without sacrificing performance or security."
                            no_3_h5="Inclusive Community Building:"
                            no_3_p="Building and joining communities within our website is completely free. Grow your groups and connect with others without worrying about any costs."
                        />


                        
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Features;
