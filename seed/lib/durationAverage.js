const axios = require("axios");
const fs = require("fs");
const path = require("path");
const DATA_PATH = path.join(__dirname, "../data");

let fetchDurationAverage = () => {
  axios
    .get(`https://api.opendota.com/api/proMatches`)
    .then(res => {
      fs.writeFile(
        path.join(DATA_PATH, `durations/averages.json`),
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

fetchDurationAverage();
