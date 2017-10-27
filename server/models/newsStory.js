const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsStory = new Schema({
  headline: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    require: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('newsStories', NewsStory);
