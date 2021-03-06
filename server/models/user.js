const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('user', User);