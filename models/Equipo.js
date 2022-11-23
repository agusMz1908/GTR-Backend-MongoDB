const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipoSchema = new Schema({
    serial: {
        type: String,
        required: true,
        trim: true
    },
    numero_partida: {
        type: String,
        required: true,
        trim: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    propietario: {
        type: String,
        required: true,
        trim: true       
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true
    },
    observaciones: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Equipos', equipoSchema);