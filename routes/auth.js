const express = require('express');
const { compare, encrypt } = require('../utils/handlePassword');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/authValidator');
const { matchedData } = require('express-validator');


router.post('/register', validatorRegister, async (req, res)=>{
    req = matchedData(req);
    const passwordHash = await encrypt(req.password)
    const body = {...req, password: passwordHash};
    res.send({data:body});
});


module.exports = router;