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
  // // res.send('hello');
  // console.log(req.params.matchid);
  let matchId = req.params.matchid;
  let result = models.Result;
  let placedBet = models.PlacedBet;

  placedBet.find({Active: true, MatchId: matchId}, (err, placedBets) => {
    if (err) res.status(500).send(err);
    result.find({match_id : matchId }, (err, results) => {
      if (err) res.status(500).send(err);
      let allbets = placedBets;
      let resultObj = results;
      // console.log(resultObj);
      // console.log(allbets);
      let resy = compare(allbets, results);
      console.log(compare(allbets, results));
      res.send(resy);
    });
  });

  function compare (bets, results){
    let rest = bets.map((item) => {
 
      if (results[0][item.BetType]  >= item.low && results[0][item.BetType] <= item.high){
        item.win = true;
        return item;
      }
      else { 
        item.win = false; 
        return item;}
    });
    return rest;
  }
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

module.exports = { fetchHome, fetchMatch, placeBets, fetchBetslip, fetchMatchResultBets };
