const express = require("express");
const router = express.Router();

const {getUsuario,getUsuarioById,editUsuario,createUsuario,deleteUsuario,getUsuarios} = require('../controllers/usuarios-controller');

router.get('/',getUsuarios);
router.get('/usuario/:id',getUsuarioById);
router.get('/usuario/:usuario/pass/:pass',getUsuario);
router.get('/usuario/:id',getUsuario);
router.post('/usuario/',createUsuario);
router.put('/usuario/:id',editUsuario);
router.delete('/usuario/:id',deleteUsuario);

module.exports = router;