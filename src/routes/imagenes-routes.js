const express = require("express");
const router = express.Router();
const Imagenes = require("../models/imagenes");
const fs = require("fs");

router.post("/entradas/",async(req,res)=>{
    try {        
        const imagen = new Imagenes({nombre:req.file.filename,ruta:"/img/entradas/" + req.file.filename});
        await imagen.save();
        res.status(200).json({ data: req.file});
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
})

router.post("/perfiles/",async(req,res)=>{
  try {      
      const imagen = new Imagenes({nombre:req.file.filename,ruta:"/img/perfiles/" + req.file.filename});
      await imagen.save();
      res.status(200).json({ data: req.file});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
})

router.delete("/:id",async(req,res)=>{
  try{
    const imagen = await Imagenes.findByIdAndDelete(req.params.id);
    fs.unlinkSync(imagen.ruta);
    res.status(200).json({ message: "Imagen Eliminada"});
  }catch (err) {
    res.status(404).json({ message: err.message });
  }
})
module.exports = router;