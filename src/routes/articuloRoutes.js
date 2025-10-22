const express = require("express");
const router = express.Router(); //manejador de rutas de express
const articuloSchema = require("../models/articuloModels");
//crear articulo
router.post("/articulos", (req, res) => {
    const articulo = articuloSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Consultar todos los artículos
router.get("/articulos", (req, res) => {
  articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Consultar un artículo por su id
router.get("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// Modificar un artículo por su id
router.put("/articulos/:id", (req, res) => {
  const { id } = req.params;
  const { 
    titulo, autores, año_de_publicación, resumen, 
    cantidad_referencias, nombre_bases_de_datos_consultada, nombre_revista, enlace
  } = req.body;

  articuloSchema
    .updateOne(
      { _id: id },
      { 
        $set: { 
          titulo, autores, año_de_publicación, resumen, 
          cantidad_referencias, nombre_base_de_datos, nombre_revista, enlace, 
        } 
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un artículo por su id
router.delete("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
