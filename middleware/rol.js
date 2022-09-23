const { handleHttpError } = require("../utils/handleError");

/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const roleByUser = user.role;

        const checkValueRol = roles.some((rolsingle) => roleByUser.includes(rolsingle))

        if(!checkValueRol){
            handleHttpError(res, "USER_HAVEN'T_PERMISSION");
            return
        }

        next()
    } catch (error) {
        handleHttpError(res, "NOT_PERMISSIONS", 403)
    }
}

module.exports = checkRol;