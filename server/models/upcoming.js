const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpcomingTourney = new Schema({
  tournament_name: {
    type: String,
    required: true
  },
  tournament_image: {
    type: String,
    required: true
  },
  tournament_info: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('upcomingTourney', UpcomingTourney);
