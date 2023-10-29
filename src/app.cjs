const express = require('express');
const nunjucks = require ('nunjucks');

const app = express();

const PORT = 8084;

nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  return res.send('meow');
});

app.get('/hello', (req, res) => {
  return res.render('test.njk', {
    title: "Form",
    message: "Hello"
  });
});