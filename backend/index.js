// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/auth', authRoutes);
app.use('/api/chat', authMiddleware, chatRoutes);

const onlineUsers = new Map();

// WebSocket Connection
wss.on('connection', (ws, req) => {
  console.log('New WebSocket connection');

  // Handle messages from clients
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    const { type, userId, username, receiverId, content } = parsedMessage;

    if (type === 'join') {
      onlineUsers.set(userId, { ws, username });
      broadcastOnlineUsers();
    } else if (type === 'message') {
      const receiver = onlineUsers.get(receiverId);
      if (receiver && receiver.ws.readyState === WebSocket.OPEN) {
        receiver.ws.send(JSON.stringify({ type: 'message', senderId: userId, content }));
      }
    }
  });

  // Handle disconnection
  ws.on('close', () => {
    onlineUsers.forEach((value, key) => {
      if (value.ws === ws) {
        onlineUsers.delete(key);
      }
    });
    broadcastOnlineUsers();
  });
});

// Broadcast the list of online users to all connected clients
function broadcastOnlineUsers() {
  const onlineUserList = Array.from(onlineUsers, ([userId, { username }]) => ({ userId, username }));
  onlineUsers.forEach(({ ws }) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'onlineUsers', users: onlineUserList }));
    }
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
