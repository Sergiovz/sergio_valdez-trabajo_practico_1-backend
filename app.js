//Importamos
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

//Implementamos Middlewares
app.use(express.json());

app.use(express.static(__dirname + 'Public'));

//Routes
app.use(require('./routes/routersProducts'));

//Iniciar el servidor
app.listen(port,async () => {
    try {
        await sequelize.authenticate();
        console.log('Conección exitosa a la Base de Datos');
    } catch (error) {
        console.error('Problemas para conectar a la Base de Datos:', error);
    } finally {
        console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
    }
});