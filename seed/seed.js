const models = require('../server/models/models');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const log4js = require('log4js');
const logger = log4js.getLogger();
const DBs = require('../server/config').DB;
mongoose.Promise = global.Promise;

mongoose.connect(DBs.dev,{useMongoClient: true}, function(err) {
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
      addFirstBlood();
      addDuration();
      addWinOrLoss();
      addWinOrLoss2();
      addResult();
      addUser(); 
    })
    .catch(err => console.log('ERROR', err));
});

//wrap all above function in a promise all then in each indivual function map into a new array instead an rerurn that array so the above functions return a promise array or something like that

function addTeamPregameRating() {
  let filepath = path.join(__dirname, '/data/teamRating');
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
          if (err) console.log(err);
        });
      });
    });
  });
}

function addNewsStory() {
  let filepath = path.join(__dirname, '/data/news/news.json');
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
        if (err) console.log(err);
      });
    });
  });
}

function addGameFeed() {
  let filepath = path.join(__dirname, '/data/postGame/EGVersusLGD');
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
          if (err) console.log(err);
        });
      });
    });
  });
}

function addUpcomingTourney() {
  let filepath = path.join(
    __dirname,
    '/data/upcomingTournies/upcomingTournies.json'
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
        if (err) console.log(err);
      });
    });
  });
}

function addFirstBlood() {
  let firstBlood = new models.FirstBlood({
    match_id: '1',
    bet_type: 'first_blood',
    lessthan1min: {
      fraction: '5/1',
      odd: 5,
      low:0,
      high:59
    },
    between1and3min: {
      fraction: '4/1',
      odd: 4,
      low:60,
      high:179
    },
    between3and5min: {
      fraction: '2/1',
      odd: 2,
      low:180,
      high:299
    },
    between5and10min: {
      fraction: '4/1',
      odd: 4,
      low:300,
      high:599
    },
    over10min: {
      fraction: '10/1',
      odd: 10,
      low:599,
      high:100000
    }
  });
  firstBlood.save(err => {
    if (err) console.log(err);
  });
}

function addDuration() {
  let duration = new models.Duration({
    match_id: '1',
    bet_type: 'duration',
    lessthan20min: {
      fraction: '10/1',
      odd: 10,
      low:0,
      high:1199
    },
    between20and30min: {
      fraction: '4/1',
      odd: 4,
      low:1200,
      high:1799
    },
    between30and45min: {
      fraction: '2/1',
      odd: 2,
      low:1800,
      high:2699
    },
    between45and55min: {
      fraction: '4/1',
      odd: 4,
      low:2700,
      high:3299
    },
    over55min: {
      fraction: '8/1',
      odd: 8,
      low:3300,
      high:10000000
    }
  });
  duration.save(err => {
    if (err) console.log(err);
  });
}

function addWinOrLoss() {
  let winOrLoss = new models.WinOrLoss({
    match_id: 1,
    bet_type: 'winorloss',
    team_name: 'EG',
    side: 'radiant',
    toWin: {
      fraction: '2/1',
      odd: 2
    },
    toLose: {
      fraction: '2/1',
      odd: 2
    }
  });
  winOrLoss.save(err => {
    if (err) console.log(err);
  });
}

function addWinOrLoss2() {
  let winOrLoss2 = new models.WinOrLoss({
    match_id: 1,
    bet_type: 'winorloss',
    team_name: 'LGD',
    side: 'dire',
    toWin: {
      fraction: '2/1',
      odd: 2
    },
    toLose: {
      fraction: '2/1',
      odd: 2
    }
  });
  winOrLoss2.save(err => {
    if (err) console.log(err);
  });
}

function addUser() {
  let user = new models.User({
    name: 'arpitha',
    balance: 10
  });
  user.save(err => {
    if (err) console.log(err);
  });
}



function addResult() {
  let filepath = path.join(__dirname, '/data/postGame/EGVersusLGD/');
  fs.readdir(filepath, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
      fs.readFile(`${filepath}/${file}`, (err, data) => {
        if (err) console.log(err);
        data = JSON.parse(data);
        let result = new models.Result({
          match_id: data.match_id,
          first_blood: data.first_blood_time,
          duration: data.duration,
          winningTeam: data.radiant_team.name,
          losingTeam: data.dire_team.name
        });
        result.save(err => {
          if (err) console.log(err);
        });
      });
    });
  });
}
