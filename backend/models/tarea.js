const mongoose = require('mongoose');

const Tarea = new mongoose.Schema({
    descripcion: {type: String, required: true},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: false},
    fechaLimite: {type: Date, required: true},
    lugar: {type: String, required: false},
    estado: {type: String, required: true},
    ID_asignado: {type: String, required: false},
    ID_asignador: {type: String, required: true} 
});

module.exports = mongoose.model('Tarea', Tarea);