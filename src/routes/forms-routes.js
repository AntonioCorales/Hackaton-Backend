const express = require("express");
const router = express.Router();

router.get('/entrada/create/',(req,res)=>{
    res.render("formEntrada/create");
});

router.get('/entrada/edit/:id',(req,res)=>{
    res.render("formEntrada/edit");
});

router.get('/entradas/',(req,res)=>{
    res.render("formEntrada/list");
});

router.get('/usuarios/',(req,res)=>{
    res.render("formUsuario/list");
});

router.get('/usuarios/create/',(req,res)=>{
    res.render("formUsuario/create");
});

router.get('/login/',(req,res)=>{
    res.render("login");
});

router.get('/inicio/',(req,res)=>{
    res.render("inicio");
});

module.exports = router;