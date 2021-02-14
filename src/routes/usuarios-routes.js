const express = require("express");
const router = express.Router();

const {getUsuario,editUsuario,createUsuario,deleteUsuario,getUsuarios} = require('../controllers/usuarios-controller');

router.get('/',getUsuarios)
router.get('/usuario/:usuario/pass/:pass',getUsuario);
router.post('/usuario/',createUsuario);
router.put('/usuario/:id',editUsuario);
router.delete('/usuario/:id',deleteUsuario);

module.exports = router;