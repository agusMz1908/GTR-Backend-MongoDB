const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoSchema = new Schema({
    nombre_estado: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Estado', estadoSchema);