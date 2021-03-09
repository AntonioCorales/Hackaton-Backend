const {
  getNotificacionById,
  getNotificacionesByUser,
  createNotificacion,
  doVistoNotificacion,
} = require("../controllers/notificaciones-controller");

const express = require("express");
const router = express.Router();

router.get("/usuario/:id",getNotificacionesByUser);
router.get("/notificacion/:id",getNotificacionById);
router.post("/notificacion/",createNotificacion);
router.put("/notificacion/visto/:id",doVistoNotificacion);

module.exports = router;

