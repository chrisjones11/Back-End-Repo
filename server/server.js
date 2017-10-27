const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();
const { json } = require('body-parser');
var config = require('./config');
var db = config.DB.dev;
mongoose.Promise = global.Promise;

mongoose
  .connect(db, { useMongoClient: true })
  .then(() => console.log('successfully connected to', db))
  .catch(err => console.log('connection failed', err));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.use(json());

app.use('/api', router);

module.exports = app;
