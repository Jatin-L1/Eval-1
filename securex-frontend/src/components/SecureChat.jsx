// src/components/SecureChat.jsx
// import React, { useEffect } from 'react';
// import '../assets/styles.css';

// const SecureChat = () => {
//   useEffect(() => {
//     const lockIcon = document.querySelector('.lock-icon');
//     const chatContent = document.querySelector('.chat-content');

//     const handleAnimationEnd = () => {
//       chatContent.classList.add('blurred');
//     };

//     if (lockIcon) {
//       lockIcon.addEventListener('animationend', handleAnimationEnd);
//     }
//     return () => {
//       if (lockIcon) {
//         lockIcon.removeEventListener('animationend', handleAnimationEnd);
//       }
//     };
//   }, []);

//   return (
//     <div className="secure-chat-section">
//       <div className="secure-chat-content">
//         <h2 className="gradient-text">Chat <span>Securely</span></h2>
//         <p>
//           With personalized chat locks, your conversations are protected like never before. Only you and the person you’re chatting with can access the messages...
//         </p>
//       </div>
//       <div className="secure-chat-image">
//         <div className="phone-frame">
//           <div className="phone-speaker"></div>
//           <div className="phone-screen">
//             <div className="chat-content">
//               <div className="chat-bubble">Hey, how are you?</div>
//               <div className="chat-bubble received">I'm good, thanks! How about you?</div>
//               <div className="chat-bubble">Doing great! Let's catch up later.</div>
//               <i className="fas fa-lock lock-icon"></i>
//             </div>
//           </div>
//           <div className="phone-home-button"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecureChat;
// src/components/SecureChat.jsx
import React, { useEffect } from 'react';
import '../assets/styles.css';

const SecureChat = () => {
  useEffect(() => {
    const handleScroll = () => {
      const secureSection = document.querySelector('.secure-chat-section');
      const secureSectionPosition = secureSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (secureSectionPosition < screenPosition) {
        secureSection.classList.add('visible');
      }
    };

    const lockIcon = document.querySelector('.lock-icon');
    const chatContent = document.querySelector('.chat-content');

    const handleAnimationEnd = () => {
      if (chatContent) {
        chatContent.classList.add('blurred');  // Add blur effect to chat content
      }
    };

    if (lockIcon) {
      lockIcon.addEventListener('animationend', handleAnimationEnd);  // Attach event listener
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lockIcon) {
        lockIcon.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div className="secure-chat-section">
      <div className="secure-chat-content">
        <h2 className="gradient-text">Chat <span>Securely</span></h2>
        <p>
          With personalized chat locks, your conversations are protected like never before. Only you and the person you’re chatting with can access the messages...
        </p>
      </div>
      <div className="secure-chat-image">
        <div className="phone-frame">
          <div className="phone-speaker"></div>
          <div className="phone-screen">
            <div className="chat-content">
              <div className="chat-bubble">Hey, how are you?</div>
              <div className="chat-bubble received">I'm good, thanks! How about you?</div>
              <div className="chat-bubble">Doing great! Let's catch up later.</div>
              <i className="fas fa-lock lock-icon"></i>
            </div>
          </div>
          <div className="phone-home-button"></div>
        </div>
      </div>
    </div>
  );
};

export default SecureChat;
