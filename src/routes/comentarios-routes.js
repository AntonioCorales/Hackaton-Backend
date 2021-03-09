const {
  getComentarioById,
  getComentariosByPublicacion,
  createComentario,
} = require("../controllers/comentarios-controller");

const express = require("express");
const router = express.Router();

router.get("/comentario/:id",getComentarioById);
router.get("/publicacion/:id",getComentariosByPublicacion);
router.post("/comentario/publicacion/:id",createComentario);

module.exports = router;