const { Schema, model } = require("mongoose");

const NotificacionesSchema = new Schema({
  idAutor: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  descripcion:{type:String,required:true},
  idPublicacion: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  fecha: { type:Date, default: new Date()},
  visto: {type:Boolean, default:false},
  idUsuario:{
    type: Schema.Types.ObjectId,
    require: true,
  }
});

module.exports = model("Notificacion", NotificacionesSchema);
