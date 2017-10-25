const models = require('../server/models/models');
const path = require('path');
const fs = require('fs');
const async = require('async');
const mongoose = require('mongoose');
const log4js = require('log4js');
const logger = log4js.getLogger();
const DBs = require('../server/config').DB;
mongoose.Promise = global.Promise;


mongoose.connect(DBs.dev, function (err) {
  if (!err) {
    logger.info(`connected to database ${DBs.dev}`);
    mongoose.connection.db.dropDatabase();
    async.waterfall([
      addteamPregameRating
    ], function (err) {
      if (err) {
        logger.error('ERROR SEEDING :O');
        console.log(JSON.stringify(err));
        process.exit();
      }
      logger.info('DONE SEEDING!!');
      process.exit();
    });
  } else {
    logger.error('DB ERROR');
    console.log(JSON.stringify(err));
    process.exit();
  }
});


function addteamPregameRating (done){
  let filepath = path.join(__dirname, '/data/teamRating');
  fs.readdir((filepath), (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      fs.readFile(`${filepath}/${file}`, (err, data) => {
        if (err) console.log(err);
        data = JSON.parse(data);
    
        let teamPregame = new models.PregameTeamRecord({
          team_name: data.name ,
          total_wins: data.wins,
          total_losses: data.losses,
          team_rating: data.rating,
          team_id: data.team_id
        });
        teamPregame.save((err) => {
          if (err) return done(err);
          return done();
        });
      });
    });
  });
}










