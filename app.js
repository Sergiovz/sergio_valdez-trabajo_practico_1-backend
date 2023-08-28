//Importamos
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

//Implementamos Middlewares
app.use(express.json());

app.use(express.static(__dirname));

//Routes
app.use();

//Iniciar el servidor
app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));