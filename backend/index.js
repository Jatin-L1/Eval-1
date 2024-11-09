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
const cors = require('cors');
const Pusher = require('pusher');

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const app = express();

// Pusher configuration
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Route configuration
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Endpoint to broadcast messages
app.post('/api/messages', (req, res) => {
  const { senderId, receiverId, message } = req.body;
  pusher.trigger('chat-channel', 'new-message', { senderId, receiverId, message });
  res.status(200).send('Message sent');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));