const app = require('./server/server');
const PORT = require('./server/config').PORT[process.env.NODE_ENV];

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
