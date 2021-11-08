const express = require('express');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion Base de Datos.

mongoose.connect("mongodb+srv://GloriaVarela:jaco201512@clusterc4gloria.ol1h5.mongodb.net/ofertalaboraldb?retryWrites=true&w=majority");

//Operaciones CRUD
app.use(route);
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000")
});