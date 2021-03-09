const express = require("express");
const router = express.Router();

const {getFavoritosByPublicacion,addFavorito,removeFavorito}=require("../controllers/favoritos-controller");

router.get("/publicacion/:id",getFavoritosByPublicacion);
router.put("/publicacion/:id/add",addFavorito);
router.put("/publicacion/:id/remove",removeFavorito);

module.exports = router;