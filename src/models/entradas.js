const { Schema, model } = require("mongoose");

const EntradasSchema = new Schema({
  titulo: { type: String, required: true },
  contenido: {
    type: {
      descripcion: { type: String, require: true },
      imagen: { type: String, require: false },
      video: { type: String, require: false },
    },
    required: true,
  },
  categorias: { type: [String], default: [] },
  fechaCreacion: { type: Date, default: Date.now() },
  referencias: { type: [String], default: [] },
  autor: { type: Schema.Types.ObjectId, require: true },
  favoritos: [{ autor: { type: Schema.Types.ObjectId, unique: true } }],
  comentarios: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
});

module.exports = model("Entrada", EntradasSchema);
