let models = require("../models/models");

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

module.exports = { fetchHome };
