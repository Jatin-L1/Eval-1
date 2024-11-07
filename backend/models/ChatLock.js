const mongoose = require('mongoose');

const ChatLockSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lockPassword: { type: String, required: true },
  isLocked: { type: Boolean, default: true }
});

module.exports = mongoose.model('ChatLock', ChatLockSchema);
