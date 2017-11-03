let models = require('../models/models');

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function fetchHome(req, res) {
  var json = {};
  let newsStories = models.NewsStory;
  let gameFeeds = models.GameFeed;
  let upcomingTourneys = models.UpcomingTourney;

  newsStories.find(function(err, stories) {
    json.newsStories = stories;

    gameFeeds.find(function(error, games) {
      json.games = games;

      upcomingTourneys.find(function(err, upcomingTourneys) {
        json.upcomingTourneys = upcomingTourneys;

        res.send(json);
      });
    });
  });
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function fetchMatch(req, res) {
  var json = {};
  let durations = models.Duration;
  let firstBloods = models.FirstBlood;
  let winOrLosses = models.WinOrLoss;
  let pregames = models.PregameTeamRecord;

  durations.find(function(error, durationStats) {
    json.durationStats = durationStats;

    firstBloods.find(function(error, firstBloodTimes) {
      json.firstBloodTimes = firstBloodTimes;

      winOrLosses.find(function(error, winOrLossesStats) {
        json.winOrLossesStats = winOrLossesStats;

        pregames.find(function(error, pregamesStats) {
          json.pregamesStats = pregamesStats;

          res.send(json);
        });
      });
    });
  });
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function placeBets (req, res) {
  let arr = req.body.bets;
  arr.map((item) => {
    let placedBet = new models.PlacedBet({
      BetId: item.BetId,
      BetType: item.bet_type,
      Active: item.Active,
      MatchId: item.MatchId,
      TeamName: item.TeamName,
      BettingMarket: item.BettingMarket,
      TournamentName: item.TournamentName,
      Stake: item.Stake,
      Return: item.Return,
      Odds : item.Odds,
      fraction: item.fraction,
      high: item.high,
      low : item.low,
      win: item.win
    });
 
    placedBet.save(err => {
      if (err) console.log(err);
    });
  });
  res.send('success');
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function fetchBetslip (req, res) {

  let json = {};
  let placedBet = models.PlacedBet;

  placedBet.find(function(error, placedBets) {
    json.bets = placedBets;

    res.send(json);   
  });
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function fetchMatchResultBets (req, res){
  console.log('hey');
  let matchId = req.params.matchid;
  let result = models.Result;
  let user = models.User;
  let placedBet = models.PlacedBet;

  placedBet.find({Active: true, MatchId: matchId}, (err, placedBets) => {
    if (err) res.status(500).send(err);

    result.find({match_id : matchId }, (err, results) => {
      if (err) res.status(500).send(err);

      user.find((error, users) => {
        if (err) res.status(500).send(err); 

        res.send(compare(placedBets, results, users));
    
      });
    });
  });

  function compare (bets, results, users){
   
    let rest = bets.map((item) => {
      console.log(results);
      if (results[item.BetType]  >= item.low && results[item.BetType] <= item.high){
        item.win = 'Won';
        users[0].balance = users[0].balance + (item.Stake * item.Odds);
        return item;
      }
      else { 
        item.win = 'Lost'; 
        users[0].balance = users[0].balance - item.Stake; 
        return item;
      }
    });

    return rest;
  }
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function fetchUser (req, res) {
  let user = models.User;
  user.find(function(error, users) {
    res.json(users[0]);   
  });
}

module.exports = { fetchHome, fetchMatch, placeBets, fetchBetslip, fetchMatchResultBets, fetchUser };
