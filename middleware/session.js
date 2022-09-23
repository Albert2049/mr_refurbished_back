const { usersModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');


const authMiddleware = async (req, res, next) => {
    try {
      
        if(!req.headers.authorization){
            handleHttpError(res, "DO_YOU_NEED_LOGIN", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken =  await verifyToken(token);
        const id = dataToken.id;

        if(!id){
            handleHttpError(res, "ERROR_NO_USER", 401);
            return
        }

        const user = await usersModel.findOne({where: {id}});
        req.user = user;
        
        next();

    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;