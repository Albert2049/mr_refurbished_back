const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const { validatorPostItem, validatorGetItem } = require('../validators/productsValidator');
const { getItems, getItem, postItem, putItem, deleteItem } = require('../controllers/productsController');


router.get('/', authMiddleware, getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorPostItem, postItem);

router.put('/:id', validatorGetItem, validatorPostItem, putItem);

router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;