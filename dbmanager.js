const { json } = require('body-parser');
var mongoose = require('mongoose');

var dev_url = "mongodb+srv://admin:yfY9Js2CzSF9zT5a@cluster0.mqcap.mongodb.net/AnthonyDB?retryWrites=true&w=majority";

var mongodb = process.env.MONGODB_URI || dev_url;

mongoose.connect(mongodb, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'MongoDB connection error: '));

var Producto = require('./persistence/producto');

//////// CREATE
exports.producto_create = function(req, res) {
    var producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia
    });

    producto.save(function(err) {
        if (err) {
            return res.status(500).json(err);
        }

        res.send({ 'message': 'OK' });
    });
};

//////// READ
exports.producto_read = function(req, res) {
    Producto.findById(req.query.id, function(err, producto) {
        if (err) res.status(500).json(err);

        res.send(producto);
    });
};

//////// UPDATE
exports.producto_update = function(req, res) {
    Producto.findByIdAndUpdate(req.query.id, { $set: req.body }, function(err, producto) {
        if (err) res.status(500).json(err);

        res.send(producto);
    });
};

//////// DELETE
exports.producto_delete = function(req, res) {
    Producto.findByIdAndRemove(req.query.id, function(err, producto) {
        if (err) res.status(500).json(err);

        res.send(producto);
    });
};