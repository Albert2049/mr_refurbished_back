const express = require('express');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/authValidator');
const { registerCtrl, loginCtrl } = require('../controllers/authController');


router.post('/register', validatorRegister, registerCtrl);

router.post('/login', validatorLogin, loginCtrl);


module.exports = router;