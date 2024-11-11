// // src/components/ChatDashboard.jsx
// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import MessageBox from './MessageBox';
// import io from 'socket.io-client';
// import axios from 'axios';
// import '../assets/ChatDashboard.css';

// const socket = io('http://localhost:5000');

// const ChatDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Fetch online users from the backend
//     axios.get('http://localhost:5000/api/chat/onlineUsers')
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setUsers(response.data); // Ensure data is an array
//         } else {
//           console.warn('Expected array of users, got:', response.data);
//         }
//       })
//       .catch((error) => console.error("Failed to fetch users:", error));

//     // Listen for incoming messages
//     socket.on('receiveMessage', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Clean up socket listener on unmount
//     return () => socket.off('receiveMessage');
//   }, []);

//   const handleSendMessage = (content) => {
//     if (currentChat) {
//       const messageData = { content, receiverId: currentChat };
//       socket.emit('sendMessage', messageData);
//       setMessages((prevMessages) => [...prevMessages, { ...messageData, senderId: 'You' }]);
//     }
//   };

//   return (
//     <div className="chat-dashboard">
//       <Sidebar users={users} onUserSelect={setCurrentChat} />
//       {currentChat ? (
//         <MessageBox messages={messages} onSendMessage={handleSendMessage} />
//       ) : (
//         <div className="select-user-placeholder">Select a user to start chatting</div>
//       )}
//     </div>
//   );
// };

// export default ChatDashboard;
// src/components/ChatDashboard.jsx
// src/components/ChatDashboard.jsx
// src/components/ChatDashboard.jsx





// import React, { useEffect, useState } from 'react';
// import { db, auth } from '../firebaseConfig';
// import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";

// const ChatDashboard = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   // Fetch messages from Firestore
//   useEffect(() => {
//     const messagesRef = collection(db, "messages");
//     const q = query(messagesRef, orderBy("createdAt"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     });
//     return unsubscribe;
//   }, []);

//   // Send a new message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === '') return;

//     const user = auth.currentUser;
//     if (!user) {
//       alert("Please login to send messages.");
//       return;
//     }

//     await addDoc(collection(db, "messages"), {
//       text: newMessage,
//       createdAt: new Date(),
//       uid: user.uid,
//       email: user.email
//     });
//     setNewMessage('');
//   };

//   return (
//     <div>
//       <div className="chat-box">
//         {messages.map(msg => (
//           <div key={msg.id} className="chat-message">
//             <strong>{msg.email}</strong>: {msg.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatDashboard;















// ChatDashboard.jsx
// import React, { useState, useEffect } from "react";
// import { init, send } from "emailjs-com";
// // import Sidebar from './Sidebar';
// import { db, auth } from '../firebaseConfig'; // Ensure firebaseConfig exports db and auth
// import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
// import '../assets/ChatDashboard.css';
// // import MessageBox from './MessageBox';

// init("BzSR-v7E37vg6FpKK"); // Initialize EmailJS with your Public Key

// const ChatDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otp, setOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState("");
//   const [isLocked, setIsLocked] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('/api/users/online'); // Adjust the endpoint if necessary
//       if (response.ok) {
//         const usersData = await response.json();
//         setUsers(usersData);
//       } else {
//         console.error("Failed to fetch users");
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // Generate a random OTP and send it via EmailJS
//   const sendOtp = async () => {
//     const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
//     setOtp(generatedOtp);
//     console.log("Generated OTP:", generatedOtp); // Debugging line

//     const emailParams = {
//       to_name: "User", // Replace or fetch the recipient's name dynamically if available
//       otp: generatedOtp, // Pass the OTP here as `otp`, matching the template variable
//       to_email: "user@example.com" // Replace with actual user email
//     };

//     try {
//       await send("service_soxtflh", "template_vbn22qo", emailParams);
//       alert("OTP sent to your email!");
//     } catch (error) {
//       console.error("Failed to send OTP:", error);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };

//   const verifyOtp = () => {
//     if (enteredOtp === otp) {
//       setIsLocked(false);
//       alert("Access granted!");
//       fetchMessages(); // Start fetching messages once OTP is verified
//     } else {
//       alert("Incorrect OTP. Please try again.");
//     }
//   };

//   // Fetch messages from Firestore
//   const fetchMessages = () => {
//     const messagesRef = collection(db, "messages");
//     const q = query(messagesRef, orderBy("createdAt"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     });
//     return unsubscribe;
//   };

//   // Send a new message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === '') return;

//     const user = auth.currentUser;
//     if (!user) {
//       alert("Please login to send messages.");
//       return;
//     }

//     await addDoc(collection(db, "messages"), {
//       text: newMessage,
//       createdAt: new Date(),
//       uid: user.uid,
//       email: user.email
//     });
//     setNewMessage('');
//   };

//   return (
//     // <div>
//     //   {/* <Sidebar users={users} /> */}

//     //   {/* OTP Section */}
//     //   {isLocked ? (
//     //     <div>
//     //       <h2>Enter OTP to Access Chat</h2>
//     //       <button onClick={sendOtp}>Send OTP to Email</button>
//     //       <input 
//     //         type="text" 
//     //         value={enteredOtp} 
//     //         onChange={(e) => setEnteredOtp(e.target.value)} 
//     //         placeholder="Enter OTP"
//     //       />
//     //       <button onClick={verifyOtp}>Verify OTP</button>
//     //     </div>
//     //   ) : (
//     //     <div>
//     //       {/* Displaying the chat messages */}
//     //       <div className="chat-box">
//     //         {messages.map(msg => (
//     //           <div key={msg.id} className="chat-message">
//     //             <strong>{msg.email}</strong>: {msg.text}
//     //           </div>
//     //         ))}
//     //       </div>
          
//     //       {/* Message input and send button */}
//     //       <form onSubmit={sendMessage}>
//     //         <input
//     //           type="text"
//     //           placeholder="Type a message..."
//     //           value={newMessage}
//     //           onChange={(e) => setNewMessage(e.target.value)}
//     //         />
//     //         <button type="submit">Send</button>
//     //       </form>
//     //     </div>
//     //   )}
//     // </div>

//     <div className="main-container_1">
//   {isLocked ? (
//     <div className="otp-container_1">
//       <h2>Enter OTP to Access Chat</h2>
//       <button onClick={sendOtp}>Send OTP to Email</button>
//       <input 
//         type="text" 
//         value={enteredOtp} 
//         onChange={(e) => setEnteredOtp(e.target.value)} 
//         placeholder="Enter OTP"
//       />
//       <button onClick={verifyOtp}>Verify OTP</button>
//     </div>
//   ) : (
//     <div className="chat-section">
//       {/* Displaying the chat messages */}
//       <div className="chat-box_1">
//   {messages.map(msg => (
//     <div 
//       key={msg.id} 
//       className={`chat-message_1 ${msg.email === auth.currentUser.email ? "user-message" : "other-message"}`}
//     >
//       <strong>{msg.email}</strong>: {msg.text}
//     </div>
//   ))}
// </div>
      
//       {/* Message input and send button */}
//       <form className="message-input-container_1" onSubmit={sendMessage}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button className="try" type="submit">Send</button>
//       </form>
//     </div>
//   )}
// </div>

//   );
// };

// export default ChatDashboard;




import React, { useState, useEffect } from "react";
import { init, send } from "emailjs-com";
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import '../assets/ChatDashboard.css';

init("BzSR-v7E37vg6FpKK"); // Initialize EmailJS with your Public Key

const ChatDashboard = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [isLocked, setIsLocked] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users/online');
      if (response.ok) {
        const usersData = await response.json();
        setUsers(usersData);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const sendOtp = async () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);

    const emailParams = {
      to_name: "User",
      otp: generatedOtp,
      to_email: "user@example.com"
    };

    try {
      await send("service_soxtflh", "template_vbn22qo", emailParams);
      alert("OTP sent to your email!");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === otp) {
      setIsLocked(false);
      alert("Access granted!");
      fetchMessages();
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const fetchMessages = () => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const user = auth.currentUser;
    if (!user) {
      alert("Please login to send messages.");
      return;
    }

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: new Date(),
      uid: user.uid,
      email: user.email
    });
    setNewMessage('');
  };

  return (
    <div className="main-container">
      {/* Header with profile icon */}
      <div className="header">
        <h2 className="header-title">SecureX Chat</h2>
        <div className="profile-icon" onClick={() => navigate('/UserProfile')}>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      {isLocked ? (
        <div className="otp-container">
          <h3>Enter OTP to Access Chat</h3>
          <button onClick={sendOtp} className="otp-button">Send OTP to Email</button>
          <input 
            type="text" 
            value={enteredOtp} 
            onChange={(e) => setEnteredOtp(e.target.value)} 
            placeholder="Enter OTP"
            className="otp-input"
          />
          <button onClick={verifyOtp} className="otp-button">Verify OTP</button>
        </div>
      ) : (
        <div className="chat-section">
          <div className="chat-box">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`chat-message ${msg.email === auth.currentUser.email ? "user-message" : "other-message"}`}
              >
                <strong>{msg.email}</strong>: {msg.text}
              </div>
            ))}
          </div>
          
          <form className="message-input-container" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="message-input"
            />
            <button className="send-button" type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatDashboard;