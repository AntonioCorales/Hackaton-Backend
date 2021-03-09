const { Schema, model } = require("mongoose");

const ImagenesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ruta: {
        type: String,
        required: true
    }
})

module.exports = model("Imagenes",ImagenesSchema);