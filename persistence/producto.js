var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    codigo: { type: String, required: true, max: 50 },
    nombre: { type: String, required: true, max: 200 },
    precio: { type: Number, required: true },
    existencia: { type: Number, required: true },
});

module.exports = mongoose.model("Producto", UserSchema);