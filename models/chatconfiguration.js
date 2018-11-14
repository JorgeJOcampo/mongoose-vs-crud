const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatConfigurationSchema = Schema({
  botName: { type: String, required: true },
  askEmail: Boolean,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatConfiguration', ChatConfigurationSchema);
