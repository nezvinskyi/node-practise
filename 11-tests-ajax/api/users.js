const express = require('express');

const router = express.Router();

const users = [
  {
    _id: '123123',
    name: 'User 1',
  },
  {
    _id: '234321',
    name: 'User 2',
  },
];

router.get('/', async (req, res, next) => {
  res.json({
    status: 'Success',
    code: 200,
    data: {
      result: users,
    },
  });
});

module.exports = router;
