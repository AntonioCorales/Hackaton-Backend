const { Schema, model } = require("mongoose");

const ComentariosSchema = new Schema({
  contenido_comentario: {
    type: String,
    require: true,
  },
  autor_comentario: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  like: {
    type: Number,
    default: 0,
  },
});

const EntradasSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: {
      descripcion: String,
      imagen: String,
      video: String,
    },
    require: true,
  },
  categorias: { type: [{type:String,require:true}], require: true },
  fechaCreacion: { type: Date, default: Date.now() },
  autor: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  favoritos: { type: Number, default: 0 },
  comentarios: {
    type: [ComentariosSchema],
    default: [],
  },
});

module.exports = model("Entrada", EntradasSchema);
