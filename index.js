const express = require("express");

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

const dbmanager = require('./dbmanager');

/////////// CRUD

////////// CREATE ------- POST
app.post('/producto', (req, res) => {
    dbmanager.producto_create(req, res);
});
////////// READ ------- GET
app.get('/producto', (req, res) => {
    dbmanager.producto_read(req, res);
});
////////// UPDATE ------- PUT
app.put('/producto', (req, res) => {
    dbmanager.producto_update(req, res);
});
////////// DELETE ------- DELETE
app.delete('/producto', (req, res) => {
    dbmanager.producto_delete(req, res);
});

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.listen(8985, () => {
    console.log('API REST is running 8985 !!!!!');
});