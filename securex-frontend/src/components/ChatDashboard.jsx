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





import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";

const ChatDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages from Firestore
  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // Send a new message
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
    <div>
      <div className="chat-box">
        {messages.map(msg => (
          <div key={msg.id} className="chat-message">
            <strong>{msg.email}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatDashboard;
