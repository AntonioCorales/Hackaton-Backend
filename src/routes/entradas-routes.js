const express = require("express");
const router = express.Router();

const {
  createEntrada,
  editEntrada,
  getEntrada,
  getEntradas,
  getEntradasByPag,
  getEntradasBySearch,
  deleteEntrada,
  getEntradasByUsuario,
  getEntradasbyUsuarioFav
} = require("../controllers/entradas-controller");

router.get('/entrada/:id',getEntrada);
router.get('/search/:query',getEntradasBySearch);
router.get('/',getEntradas);
router.get('/:pag',getEntradasByPag);
router.get('/usuario/:idusuario',getEntradasByUsuario);
router.get('/usuario-fav/:idusuario/',getEntradasbyUsuarioFav);
router.post('/entrada/',createEntrada);
router.put('/entrada/:id',editEntrada);
router.delete('/entrada/:id',deleteEntrada);

module.exports = router;