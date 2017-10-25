let models = require('../models/models');


function fetchHome(req, res) {
  var json = {};
  let newsStories = models.NewsStory;
  let gameFeeds = models.GameFeed;

  newsStories.find(function(err, stories) {
    json.newsStories = stories;

    gameFeeds.find(function (error, games) {
      json.games = games;

      res.send(json);
    });
  });
}







module.exports = { fetchHome };
