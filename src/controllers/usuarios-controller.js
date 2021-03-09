const Usuario = require("../models/usuarios");

const getUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.find();
    res.status(200).json(usuario);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      usuario: req.params.usuario,
      pass: req.params.pass,
    });
    res.status(200).json(usuario);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const editUsuario = async (req,res)=>{
    try {
        await Usuario.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ message: "Usuario Actualizado" });
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}

const createUsuario = async (req,res)=>{
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(200).json({ message: "Usuario Creado" });
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}

const deleteUsuario = async (req,res)=>{
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Usuario Eliminado" });
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}


module.exports = {getUsuario,getUsuarioById,editUsuario,createUsuario,deleteUsuario,getUsuarios};
