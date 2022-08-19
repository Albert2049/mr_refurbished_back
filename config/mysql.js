const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const userName = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database, 
    userName,
    password,
    {
        host:host,
        dialect:'mysql'
    }
);

const dbConnect = async()=>{
    try {
        await sequelize.authenticate();
        console.log('conexion correcta');
    } catch (error) {
        console.log('Error de conexion')
    }
}

module.exports = {
    sequelize,
    dbConnect
}