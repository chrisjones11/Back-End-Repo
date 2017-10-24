const axios = require("axios");
const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data");

fetchTeamRating = id => {
  axios
    .get(`https://api.opendota.com/api/teams/${id}`)
    .then(res => {
      console.log(res.data);
      fs.writeFile(
        path.join(DATA_PATH, `teamRating/${id}.json`),
        JSON.stringify(res.data, null, 2),
        err => {
          if (err) return console.log(err);
          else console.log("all done");
        }
      );
    })
    .catch(function() {
      console.log("Promise Rejected");
    });
};

fetchTeamRating(39);
fetchTeamRating(15);

fetchPostMatchResults = match_id => {
  axios
    .get(`https://api.opendota.com/api/matches/${match_id}`)
    .then(res => {
      console.log(res.data);
      fs.writeFile(
        path.join(DATA_PATH, `postGame/${match_id}.json`),
        JSON.stringify(res.data, null, 2),
        err => {
          if (err) return console.log(err);
          else console.log("all done");
        }
      );
    })
    .catch(function() {
      console.log("Promise Rejected");
    });
};

fetchPostMatchResults(3516590405);
fetchPostMatchResults(3516707269);
