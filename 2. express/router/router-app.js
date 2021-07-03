const express = require('express');
const myRouter = require('./my-router');
const app = express();

app.use('/my-router', myRouter);

app.all('/anything', (req, res, next) => {
  console.log('anything method');
  next();
});

app
  .route('/blog')
  .get((req, res) => {
    res.send('get a list of blog');
  })
  .post((req, res) => {
    res.send('add a record to blog');
  })
  .put((req, res) => {
    res.send('update blog');
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
