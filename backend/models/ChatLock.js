const mongoose = require('mongoose');

const ChatLockSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  lockPassword: { type: String, required: true },
});

module.exports = mongoose.model('ChatLock', ChatLockSchema);
