const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PregameTeamRecord = new Schema({
  team_name: {
    type: String,
    required: true
  },
  total_wins: {
    type: Number,
    required: true
  },
  total_losses: {
    type: Number,
    require: true
  },
  team_rating: {
    type: String,
    required: true
  },
  team_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('pregameTeamRecords', PregameTeamRecord);
