const mongoose = require("mongoose"); // importando el componente mogoose
const articuloSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autores: {
    type: String,
    required: true,
  },
  año_de_publicación: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    requiered: true,
  },
  resumen: {
    type: String,
    required: true,
  },
  cantidad_referencias: {
    type: Number,
    required: true,
  },
  nombre_bases_de_datos_consultada: {
    type: String,
    required: true,
  },
  nombre_revista: {
    type: String,
    required: true,
  },
  enlance: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("articulo", articuloSchema);

