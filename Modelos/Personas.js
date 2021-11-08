const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona : Number,
    TipoDocumento : String,
    Nombres : String,
    Apellidos : String,
    Direccion : String,
    CorreoElectronico : String,
    TelefonoFijo : Number,
    TelefonoCelular : Number,
    EnlaceSitioWeb : String,
    DescripcionPerfil : String,

});

module.exports = mongoose.model('personas', PersonaSchema, 'Personas');