// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a path for /comments
app.get('/comments', (req, res) => {
  res.send('This is a page of comments');
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});