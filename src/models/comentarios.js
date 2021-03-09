const { Schema, model } = require("mongoose");

const ComentarioSchema = new Schema({
  contenido_comentario: {
    type: String,
    require: true,
  },
  autor_comentario: {
    type: Schema.Types.ObjectId,
    require: true,
  }

});

module.exports = model("Comentario", ComentarioSchema);
