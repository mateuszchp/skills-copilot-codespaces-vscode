//Create web server using express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
// const comments = require('./comments.json');
const fs = require('fs');
// const comments = JSON.parse(fs.readFileSync('./comments.json', 'utf-8'));
const comments = require('./comments.json');
// console.log(comments);

// Static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Get request
app.get('/', (req, res) => {
  res.render('home', { comments: comments });
});

// Get request
app.get('/comment', (req, res) => {
  res.render('comment');
});

// Post request
app.post('/comment', (req, res) => {
  // console.log(req.body);
  comments.push(req.body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.redirect('/');
});

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});