const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    nombreUsuario: {type: String, required: true},
    contraseña: {type: String, required: true},
    //tipoUsuario? -> Usuario cambiaria tipo dependiendo de cada tarea, es necesario?
    etiqueta: {type: Array, required: false}, 
    informacion: {type: String, required: true}
});

module.exports = mongoose.model('Usuario', Usuario);