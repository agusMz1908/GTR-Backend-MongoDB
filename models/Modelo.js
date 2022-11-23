const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modeloSchema = new Schema({
    nombre_modelo: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Modelos', modeloSchema);