const models = require("../server/models/models");
const path = require("path");
const fs = require("fs");
const async = require("async");
const mongoose = require("mongoose");
const log4js = require("log4js");
const logger = log4js.getLogger();
const DBs = require("../server/config").DB;
mongoose.Promise = global.Promise;

mongoose.connect(DBs.dev, function(err) {
  if (!err) {
    logger.info(`connected to database ${DBs.dev}`);
  }
  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      addTeamPregameRating();
      addNewsStory();
      addGameFeed();
      addUpcomingTourney();
    })
    .catch(err => console.log("ERROR", err));
});

function addTeamPregameRating() {
  let filepath = path.join(__dirname, "/data/teamRating");
  fs.readdir(filepath, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
      fs.readFile(`${filepath}/${file}`, (err, data) => {
        if (err) console.log(err);
        data = JSON.parse(data);

        let teamPregame = new models.PregameTeamRecord({
          team_name: data.name,
          total_wins: data.wins,
          total_losses: data.losses,
          team_rating: data.rating,
          team_id: data.team_id
        });
        teamPregame.save(err => {
          if (err) console.log("error");
        });
      });
    });
  });
}

function addNewsStory() {
  let filepath = path.join(__dirname, "/data/news/news.json");
  fs.readFile(filepath, (err, data) => {
    if (err) console.log(err);
    data = JSON.parse(data);

    data.forEach(item => {
      let newStory = new models.NewsStory({
        headline: item.Headline,
        body: item.Body,
        imageUrl: item.ImageUrl,
        date: item.Date,
        url: item.Url
      });
      newStory.save(err => {
        if (err) console.log("error");
      });
    });
  });
}

function addGameFeed() {
  let filepath = path.join(__dirname, "/data/postGame/EGVersusLGD");
  fs.readdir(filepath, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
      fs.readFile(`${filepath}/${file}`, (err, data) => {
        if (err) console.log(err);
        data = JSON.parse(data);
        let gameFeed = new models.GameFeed({
          embedded_game: data.game_url,
          tournament_name: data.tournament_name,
          team_radiant: data.radiant_team.name,
          team_radiant_thumb: data.radiant_team.thumbnail,
          team_dire: data.dire_team.name,
          team_dire_thumb: data.dire_team.thumbnail,
          match_id: data.match_id
        });
        gameFeed.save(err => {
          if (err) console.log("error");
        });
      });
    });
  });
}

function addUpcomingTourney() {
  let filepath = path.join(
    __dirname,
    "/data/upcomingTournies/upcomingTournies.json"
  );
  fs.readFile(filepath, (err, data) => {
    if (err) console.log(err);
    data = JSON.parse(data);

    data.forEach(item => {
      let upcomingTourney = new models.UpcomingTourney({
        tournament_name: item.tournament_name,
        tournament_image: item.tournament_image,
        tournament_info: item.tournament_info
      });
      upcomingTourney.save(err => {
        if (err) console.log("error");
      });
    });
  });
}
