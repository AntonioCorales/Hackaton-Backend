const {
  getReportes,
  getRepoteById,
  getReportesByEntrada,
  createReporte,
  deleteReporte,
} = require("../controllers/reportes-controller");

const express = require("express");
const router = express.Router();

router.get("/",getReportes);
router.get("/entrada/:id",getReportesByEntrada);
router.get("/reporte/:id",getRepoteById);
router.post("/reporte/",createReporte);
router.delete("/reporte/:id",deleteReporte);

module.exports = router;
