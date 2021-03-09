const express = require("express");
const router = express.Router();

const {
  getCategorias,
  getCategoriaById,
  getCategoriaByName,
  createCategorias,
  editCategorias,
  deleteCategorias,
} = require("../controllers/categorias-controller");

router.get("/", getCategorias);
router.get("/categoria/:id", getCategoriaById);
router.get("/categoria/name/:nombre", getCategoriaByName);
router.post("/categoria/", createCategorias);
router.put("/categoria/:id", editCategorias);
router.delete("/categoria/:id", deleteCategorias);

module.exports = router;
