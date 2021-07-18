const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const api = require('./api');

const app = express();

app.use(cors());

app.use('/api/v1/products/', api.products);
app.use('/api/v1/categories/', api.categories);

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;
  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log(`The server is running on port ${PORT}`);
  })
  .catch(error => console.log(error));
