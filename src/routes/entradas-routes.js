const express = require("express");
const router = express.Router();

const {
  createEntrada,
  editEntrada,
  getEntrada,
  getEntradas,
  getEntradasBySearch,
  deleteEntrada,
  getEntradasbyUsuario,
} = require("../controllers/entradas-controller");

router.get('/entrada/:id',getEntrada);
router.get('/:query',getEntradasBySearch);
router.get('/',getEntradas);
router.get('/usuario/:idusuario',getEntradasbyUsuario);
router.post('/',createEntrada);
router.put('/entrada/:id',editEntrada);
router.delete('/entrada/:id',deleteEntrada);

module.exports = router;