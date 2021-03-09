const Comentarios = require("../models/comentarios");
const Entrada = require("../models/entradas");
const Notificaciones = require("../models/notificaciones");

const getComentarioById = async (req, res) => {
  try {
    const comentarios = await Comentarios.findById(req.params.id);
    res.status(200).json(comentarios);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getComentariosByPublicacion = async (req, res) => {
  try {
    const comentarios = [];
    const entrada = await Entrada.findById(req.params.id);
    entrada.comentarios.forEach(async (comentario) => {
      const resComentario = await Comentarios.findById(comentario._id);
      comentarios.push(resComentario);      
    });
    res.status(200).json(comentarios);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createComentario = async (req, res) => {
  try {
    const comentarios = new Comentarios(req.body);
    await comentarios.save();
    const entrada = await Entrada.findById(req.params.id);
    entrada.comentarios.push(comentarios._id);
    const notificacion = new Notificaciones({
      idAutor: req.body.autor_comentario,
      descripcion: "ha comentado",
      idPublicacion: entrada._id,
      idUsuario: entrada.autor
    });
    await notificacion.save();
    res.status(200).json(comentarios);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getComentarioById,
  getComentariosByPublicacion,
  createComentario,
};
