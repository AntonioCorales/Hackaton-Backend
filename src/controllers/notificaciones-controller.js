const Notificacion = require("../models/notificaciones");

const getNotificacionesByUser= async (req, res) => {
    try{
        const notificaciones = await Notificacion.find({idUsuario: req.params.id})
        res.status(200).json(notificaciones);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

const getNotificacionById = async (req, res) => {
    try{
        const notificacion = await Notificacion.findById(req.params.id);
        res.status(200).json(notificacion);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

const createNotificacion = async (req, res) => {
    try{
        const notificacion = new Notificacion(req.body);
        await notificacion.save();
        res.status(200).json(notificacion);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

const doVistoNotificacion = async (req, res) => {
    try{
        const notificacion = await Notificacion.findById(req.params.id);
        notificacion.visto = true;
        await notificacion.save();
        res.status(200).json(notificacion);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

module.exports = {getNotificacionById,getNotificacionesByUser,createNotificacion,doVistoNotificacion};