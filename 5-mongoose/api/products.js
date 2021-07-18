const express = require('express');

const { products: ctrl } = require('../controllers');

const router = express.Router();

router.get('/', express.json(), ctrl.getAll);

router.get('/:id', express.json(), ctrl.getById);

router.post('/', express.json(), ctrl.add);

router.put('/:id', express.json(), ctrl.update);

router.delete('/:id', express.json(), ctrl.del);

module.exports = router;
