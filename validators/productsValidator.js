const { check } = require('express-validator');
const validateResult = require('../utils/handleValidator');

const validatorPostItem = [
    check("productName")
    .exists()
    .notEmpty(),
    check("quantity")
    .exists()
    .notEmpty(),
    check("productPrice")
    .exists()
    .notEmpty(),
    check("EAN")
    .exists(),
    check("UPC")
    .exists(),
    check("category")
    .exists()
    .notEmpty(),
    check("brand")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next);
    },
]

const validatorGetItem = [
    check('id')
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
]

module.exports = { 
    validatorPostItem,
    validatorGetItem
};