const express = require('express');

const { categoryValidateMiddleware, validateMiddleware } = require('../middleware');
const {
  category: { validateCategory },
} = require('../models/schemas');

const { categories: ctrl } = require('../controllers');

const router = express.Router();

router.get('/', express.json(), ctrl.getAll);

router.get('/:id', express.json(), ctrl.getById);

router.post('/', express.json(), validateMiddleware(validateCategory), ctrl.add);

router.put('/:id', express.json(), ctrl.update);

router.delete('/:id', ctrl.del);

module.exports = router;
