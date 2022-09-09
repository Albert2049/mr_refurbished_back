const bcryptjs = require("bcryptjs");


/**
 * Texto de la contraseña o contraseña sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async(passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 12);
    return hash;
};

/**
 * Pasar contraseña sin encriptar y tambien su version encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async(passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {
    encrypt,
    compare
}