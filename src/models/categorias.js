const { Schema, model } = require("mongoose");

const CategoriasSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    }
})

module.exports = model("Categoria",CategoriasSchema);