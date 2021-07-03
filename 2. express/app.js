const express = require('express');
const path = require('path');
const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get('/con?tact', (req, res) => {
//   res.send('<h1>Contact page</h1>');
// });

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>contact</h1> Param: ${req.params.id}`);
});

app.get('/contact', (req, res) => {
  res.send(`<h1>contact query</h1> Query: ${req.query}`);
});

app.use((req, res, next) => {
  console.log('my middleware!');
  // console.log(req.params.id);
  next();
});

app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
