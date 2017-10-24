const express = require('express');
const app = express();
const { json } = require('body-parser');


app.use(json());

app.get('/', function(req, res) {
  res.send('Hello World');
});

module.exports = app;
