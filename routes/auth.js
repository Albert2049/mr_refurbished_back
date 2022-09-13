const express = require('express');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/authValidator');
const { registerCtrl } = require('../controllers/authController');


router.post('/register', validatorRegister, registerCtrl);


module.exports = router;