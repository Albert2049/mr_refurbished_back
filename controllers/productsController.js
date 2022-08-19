const { matchedData } = require('express-validator');
const { productsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');


/**
 * OBTENER LISTA DE PRODUCTOS
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res)=>{
    try {
        const data = await productsModel.findAll({});
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_OBTENIENDO_PRODUCTOS');
    }
};

/**
 * OBTENER UN SOLO PRODUCTO
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=>{
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await productsModel.findOne({where: {id}});
        
        if(data == null){
            handleHttpError(res, 'NO_EXISTE_EL_REGISTRO');
            return
        }

        res.send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_OBTIENDO_DETALLE')
    }
};

/**
 * CREAR UN SOLO PRODUCTO
 * @param {*} req 
 * @param {*} res 
 */
const postItem = async (req, res)=>{
    try {
        const body = matchedData(req);
        const data = await productsModel.create(body);
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_CREANDO_UN_PRODUCTO');
        console.log(error);
        console.log(req.body);
    }
};

/**
 * ACTUALIZAR UN SOLO PRODUCTO
 * @param {*} req 
 * @param {*} res 
 */
const putItem = async (req, res)=>{
    try {
        const {id, ...body} = matchedData(req);
        const data = await productsModel.findOne({where: {id}});

        if(data == null) {
            handleHttpError(res, 'NO_EXISTE_EL_REGISTRO');
            return
        } else {
            await productsModel.update(
                body, {where:{id}} 
            );
        }
        res.send(body);
    } catch (error) {
        handleHttpError(res, 'ERROR_ACTUALIZANDO_UN_PRODUCTO');
        console.log(error);
    }
};

/**
 * ELIMINAR UN SOLO PRODUCTO
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res)=>{
    try {
        const {id, ...body} = matchedData(req);

        const data = await productsModel.findOne({where: {id}});

        if(data == null) {
            handleHttpError(res, 'NO_EXISTE_EL_REGISTRO');
            return
        } else {
            await productsModel.destroy({where:{id}} 
            );
        }
        res.send(body);
    } catch (error) {
        handleHttpError(res, 'ERROR_BORRANDO_UN_PRODUCTO');
        console.log(error);
    }
};

module.exports = {
    getItems,
    getItem,
    postItem,
    putItem,
    deleteItem,
};
