const app = require('./server/server');
const PORT = require('./server/config').PORT.dev;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
