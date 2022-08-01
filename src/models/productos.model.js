const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PructosSchema = Schema({
  nombre: String,
  categoria: String,
  precio: String,
  fotos: String,
  factura:[{ type: Schema.Types.ObjectId, ref: 'Pructos'}],
  usuario:{ type: Schema.Types.ObjectId, ref: 'Usuarios'},
});

module.exports = mongoose.model("Pructos", PructosSchema);
