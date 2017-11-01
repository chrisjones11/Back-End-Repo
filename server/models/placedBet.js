
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlacedBet = new Schema({
  BetId: {
    type: String,
    required: true
  },
  TeamName: {
    type: String,
    required: true
  },
  BettingMarket: {
    type: String,
    required: true
  },
  TournamentName: {
    type: String,
    required: true
  },
  Stake: {
    type: Number,
    required: true
  },
  Return: {
    type: String,
    required: true
  },
  Odds: {
    type: Number,
    required: true
  },
  fraction: {
    type: String,
    required: true
  },
  win: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('placedBets', PlacedBet);

