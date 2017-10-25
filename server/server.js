const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { json } = require('body-parser');
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true})
  .then(() => console.log('successfully connected to', db))
  .catch(err => console.log('connection failed', err));

app.use(json());

app.get('/', function(req, res) {
  res.send('Hello World');
});

module.exports = app;
