// src/components/ChatDashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MessageBox from './MessageBox';
import io from 'socket.io-client';
import axios from 'axios';
import '../assets/ChatDashboard.css';

const socket = io('http://localhost:5000');

const ChatDashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch online users from the backend
    axios.get('http://localhost:5000/api/chat/onlineUsers')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data); // Ensure data is an array
        } else {
          console.warn('Expected array of users, got:', response.data);
        }
      })
      .catch((error) => console.error("Failed to fetch users:", error));

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up socket listener on unmount
    return () => socket.off('receiveMessage');
  }, []);

  const handleSendMessage = (content) => {
    if (currentChat) {
      const messageData = { content, receiverId: currentChat };
      socket.emit('sendMessage', messageData);
      setMessages((prevMessages) => [...prevMessages, { ...messageData, senderId: 'You' }]);
    }
  };

  return (
    <div className="chat-dashboard">
      <Sidebar users={users} onUserSelect={setCurrentChat} />
      {currentChat ? (
        <MessageBox messages={messages} onSendMessage={handleSendMessage} />
      ) : (
        <div className="select-user-placeholder">Select a user to start chatting</div>
      )}
    </div>
  );
};

export default ChatDashboard;
