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

        if(!dataToken.id){
            handleHttpError(res, "ERROR_NO_USER", 401);
            return
        }

        next();

    } catch (error) {
        handleHttpError(res, "NO_SESSION", 401);
    }
}

module.exports = authMiddleware;