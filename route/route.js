var express = require('express');
var route = express.Router()
let controller = require('../controller/controller');


route.post('/api/cats', (req,res) => {
    controller.insertCat(req, res);
});

route.get('/api/cats', (req, res) => {
    controller.getAllCats(req,res)
});

module.exports = route;
