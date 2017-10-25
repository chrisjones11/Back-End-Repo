let models = require('../models/models');


function fetchHome(req, res) {
  let newsStories = models.NewsStory;
  newsStories.find()
    .then(function (docs) {
      res.send({ 'news': docs });
    })
    .catch( err => console.log(err));
} 

// function fetchGame(req, res) {
 
//   let gameFeeds = models.GameFeed;
//   gameFeeds.find()
//     .then(function (docs) {
//       console.log(docs);
//       res.send({ 'games': docs});
//     });
// }



module.exports = { fetchHome };


module.exports = { fetchHome };
