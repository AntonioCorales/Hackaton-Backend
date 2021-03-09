const Categoria = require("../models/categorias");

const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(201).json(categorias);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    res.status(201).json(categoria);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCategoriaByName = async (req, res) => {
  try {
    const categoria = await Categoria.findOne({ nombre: req.params.nombre });
    res.status(201).json(categoria);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createCategorias = async (req, res) => {
  try {
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.status(201).json({ message: "Categoría creada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const editCategorias = async (req, res) => {
  try {
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "Categoria actualizada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteCategorias = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Categoria eliminada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getCategorias,
  getCategoriaById,
  getCategoriaByName,
  createCategorias,
  editCategorias,
  deleteCategorias,
};
