const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema({
  nombres: {
    type: String,
    require: true,
  },
  apellidos: {
    type: String,
    require: true,
  },
  correo: {
    type: String,
    require: true,
  },
  usuario: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
  categoriasFav: {
    type: [String],
    default:[]    
  },
  
});

module.exports = model("Usuario", usuarioSchema);
