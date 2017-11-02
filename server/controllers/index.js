let models = require('../models/models');

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

function placeBets (req, res) {
  console.log(typeof(req.body.bets[0].TournamentName));
  let arr = req.body.bets;
  arr.map((item) => {
    let placedBet = new models.PlacedBet({
      BetId: item.BetId,
      Active: item.Active,
      MatchId: item.MatchId,
      TeamName: item.TeamName,
      BettingMarket: item.BettingMarket,
      TournamentName: item.TournamentName,
      Stake: item.Stake,
      Return: item.Return,
      Odds : item.Odds,
      fraction: item.fraction,
      win: item.win
    });
 
    placedBet.save(err => {
      if (err) console.log(err);
    });
  });
  res.send('success');
}

////new stuff
function fetchBetslip (req, res) {
  console.log('hehghgyghgfy');
  var json = {};
  let placedBet = models.PlacedBet;

  placedBet.find(function(error, placedBets) {
    json.bets = placedBets;

    res.send(json);   
  });
}

module.exports = { fetchHome, fetchMatch, placeBets, fetchBetslip };
