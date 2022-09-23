const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');
const { validatorPostItem, validatorGetItem } = require('../validators/productsValidator');
const { getItems, getItem, postItem, putItem, deleteItem } = require('../controllers/productsController');


router.get('/', authMiddleware, getItems);

router.get('/:id', authMiddleware, validatorGetItem, getItem);

router.post('/', authMiddleware, checkRol(["admin"]), validatorPostItem, postItem);

router.put('/:id', authMiddleware, validatorGetItem, validatorPostItem, putItem);

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);

module.exports = router;