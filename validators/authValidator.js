const { check } = require('express-validator');
const validateResult = require('../utils/handleValidator');

const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:40}),
    check("lastName")
    .exists()
    .notEmpty()
    .isLength({min:3, max:40}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("email")
    .exists()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResult(req, res, next);
    },
]

const validatorLogin = [
    check("email")
    .exists()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResult(req, res, next);
    },
]


module.exports = { 
    validatorRegister,
    validatorLogin
};