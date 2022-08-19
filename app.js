require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mysql'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

/**
 * Invocando Rutas
 */

app.use('/api',require('./routes'));


app.listen(port, () => {
    console.log(`app lista en el puerto ${port}`)
});

dbConnect();