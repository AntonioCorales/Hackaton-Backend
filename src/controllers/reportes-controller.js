const Reporte = require("../models/reportes");

const getReportes = async (req, res) => {
  try {
    const reporte = await Reporte.find();
    res.status(200).json(reporte);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const getRepoteById = async (req, res) => {
  try {
    const reporte = await Reporte.findById(req.params.id);
    res.status(200).json(reporte);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getReportesByEntrada = async (req, res) => {
  try {
    const reportes = await Reporte.find({ publicacion: req.params.id });
    res.status(200).json(reportes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createReporte = async (req, res) => {
  try {
    const reporte = new Reporte(req.body);
    await reporte.save();
    res.status(200).json({ message: "Publicación Reportada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteReporte = async (req, res) => {
  try {
    await Reporte.findOneAndDelete(req.params.id);
    res.status(200).json({ message: "Reporte Cancelado" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {getReportes,getRepoteById, getReportesByEntrada, createReporte, deleteReporte };
