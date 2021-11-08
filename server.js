const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require("./Modelos/Personas.js");

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

//Insertar
router.post('/Personas', (req, res) =>{
    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.idPersona,
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Direccion: req.body.Direccion,
        CorreoElectronico: req.body.CorreoElectronico,
        TelefonoFijo: req.body.TelefonoFijo,
        TelefonoCelular: req.body.TelefonoCelular,
        EnlaceSitioWeb: req.body.EnlaceSitioWeb,
        DescripcionPerfil: req.body.Descripcion 
    });

    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send('Registro Persona')
    })
});

app.use(router);
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000")
});