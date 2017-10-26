const durations = require("../seed/data/durations/averages");

function mapDurations() {
  const arr = durations
    .map(duration => {
      return duration.duration;
    })
    .reduce((acc, item) => {
      return acc + item;
    });
  console.log(arr / 100 / 60);
}

mapDurations();
