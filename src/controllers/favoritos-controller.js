const Entrada = require("../models/entradas");
const Notificacion = require("../models/notificaciones");

const getFavoritosByPublicacion= async (req, res) => {
    try{
        const entrada = await Entrada.findById(req.params.id); 
        
        res.status(200).json(entrada.favoritos);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

const addFavorito= async (req, res) => {
    try{
        const entrada = await Entrada.findById(req.params.id);
        entrada.favoritos.push(req.body);
        const notificacion = new Notificaciones({
            idAutor: req.body.autor,
            descripcion: "agregó como favorito",
            idPublicacion: entrada._id,
            idUsuario: entrada.autor
          });
          await notificacion.save();  
        await entrada.save();
        res.status(200).json(reportes);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

const removeFavorito= async (req, res) => {
    try{
        const entrada = await Entrada.findById(req.params.id);
        if(entrada.favoritos.length > 0){
            entrada.favoritos.splice(entrada.favoritos.indexOf(req.body.autor),1)
        }        
        await entrada.save();
        res.status(200).json(reportes);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

module.exports = {getFavoritosByPublicacion,addFavorito,removeFavorito}