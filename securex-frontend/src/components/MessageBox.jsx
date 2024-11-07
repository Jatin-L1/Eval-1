// src/components/MessageBox.jsx
import React, { useState } from 'react';
import '../assets/MessageBox.css';

const MessageBox = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="message-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === 'You' ? 'sent' : 'received'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-input-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default MessageBox;
