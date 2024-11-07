const express = require('express');
const Message = require('../models/Message');
const ChatLock = require('../models/ChatLock');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const router = express.Router();

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Get online users route
router.get('/onlineUsers', (req, res) => {
  try {
    const onlineUsers = [
      { userId: '123', username: 'John Doe' },
      { userId: '456', username: 'Jane Smith' },
    ];
    res.json(onlineUsers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch online users' });
  }
});

// Route for sending a message
router.post('/sendMessage', async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;
    const message = new Message({ senderId, receiverId, content });
    await message.save();
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

// Route for locking a chat
router.post('/lockChat', async (req, res) => {
  try {
    const { user1, user2 } = req.body;
    const lockPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(lockPassword, 10);

    const chatLock = new ChatLock({ user1, user2, lockPassword: hashedPassword });
    await chatLock.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [user1.email, user2.email],
      subject: 'SecureX Chat Lock Password',
      text: `Your chat has been locked. Use this password to unlock: ${lockPassword}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return res.status(500).json({ message: 'Failed to send email' });
      res.status(200).json({ message: 'Chat locked and password sent' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to lock chat' });
  }
});

module.exports = router;
