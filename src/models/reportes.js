const { Schema, model } = require("mongoose");

const ReportesSchema = new Schema({
  autor: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  motivos: {
    type: [String],
  },
  descripcion: {
    type: String,
    require: true,
  },
  publicacion: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  tipo:{
      type:String,
      default:"AUTO"
  }
});

module.exports = model("Reporte", ReportesSchema);
