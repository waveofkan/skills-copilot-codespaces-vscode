// create web server
// create a route to handle POST requests
// create a route to handle GET requests
// create a route to handle PUT requests
// create a route to handle DELETE requests

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const COMMENTS_FILE = './comments.json';

app.get('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    const comments = JSON.parse(data);
    const newComment = {
        id: Date.now(),
      };