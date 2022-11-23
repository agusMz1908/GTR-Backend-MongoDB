const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true   
    },
    permisos: {
        type: Boolean
    }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);