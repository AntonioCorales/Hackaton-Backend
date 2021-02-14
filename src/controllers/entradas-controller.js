const Entrada = require("../models/entradas");

const pipelineSearch = (req) => [
  {
    $search: {
      index: "searchSongs",
      text: {
        query: req,
        path: ["titulo", "contenido.descripcion", "categorias"],
      },
    },
  },
  {
    $project: {
      titulo: 1,
      contenido: 1,
      categorias: 1,
      fechaCreacion: 1,
      autor: 1,
      favoritos: 1,
      comentarios: 1,
      score: {
        $meta: "searchScore",
      },
      highlight: {
        $meta: "searchHighlights",
      },
      _id: 1,
    },
  },
  { $limit: 20 },
];

const getEntradasBySearch = async (req, res) => {
  try {
    const entradas = await Entrada.aggregate(pipelineSearch(req.params.query));
    res.status(200).json(entradas);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getEntradas = async (req, res) => {
  try {
    const entradas = await Entrada.find();
    res.status(200).json(entradas);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getEntradasbyUsuario = async (req, res) => {
  try {
    const entradas = await Entrada.find({ autor: req.params.idusuario });
    res.status(200).json(entradas);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getEntrada = async (req, res) => {
  try {
    const entrada = await Entrada.findById(req.params.id);
    res.status(200).json(entrada);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createEntrada = async (req, res) => {
  try {
    const entrada = new Entrada(req.body);
    await entrada.save();
    res.status(201).json({ message: "Públicacion creada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const editEntrada = async (req, res) => {
  try {
    await Entrada.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Públicacion actualizada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteEntrada = async (req, res) => {
  try {
    await Entrada.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Públicacion eliminada" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getEntrada,
  getEntradas,
  getEntradasBySearch,
  getEntradasbyUsuario,
  createEntrada,
  editEntrada,
  deleteEntrada,
};
