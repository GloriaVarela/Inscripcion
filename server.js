const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion Base de Datos.

mongoose.connect("mongodb+srv://GloriaVarela:jaco201512@clusterc4gloria.ol1h5.mongodb.net/ofertalaboraldb?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/',(req, res) => {
    res.send("Este es el inicio de mi primera API");
});

app.use(router);
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000")
});