// chatRoutes.js
const express = require('express');
const router = express.Router();

// Mock in-memory store for online users (for demonstration)
const onlineUsers = new Map();

// Endpoint to fetch online users
router.get('/users/online', (req, res) => {
  const users = Array.from(onlineUsers.values()); // convert Map values to an array
  res.json(users);
});

// Simulated route to mark a user as online (you may have something similar)
router.post('/users/online', (req, res) => {
  const { userId, username } = req.body;
  onlineUsers.set(userId, { userId, username });
  res.json({ message: `${username} is now online` });
});

// Simulated route to mark a user as offline
router.post('/users/offline', (req, res) => {
  const { userId } = req.body;
  onlineUsers.delete(userId);
  res.json({ message: `User ${userId} is now offline` });
});

module.exports = router;