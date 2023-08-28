//@ts-check
//Importamos
const express = require('express');
const cardinalidadKeys = require('./dataBase/config-keys');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000
const { sequelize, DataTypes } = require('./dataBase/database');
cardinalidadKeys();

//Implementamos Middlewares
app.use(express.json());

app.use(express.static(__dirname + 'Public'));

//Routes
app.use(require('./src/routes/routersProducts'));

//Iniciar el servidor
app.listen(port,() => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));