const { matchedData } = require('express-validator');
const { encrypt } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { usersModel } = require('../models');


const registerCtrl = async (req, res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = {...req, password: passwordHash};
    const dataUser = await usersModel.create(body); 

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }    
    res.send({data});
}

module.exports = {
    registerCtrl
}