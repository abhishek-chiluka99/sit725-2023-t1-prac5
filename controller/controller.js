let model = require('../model/model');

const insertCat = (req, res) => {
    let cat = req.body;
    model.insertCat(cat, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Card successfully added'});
        }
    });
};

const getAllCats = (req, res) => {
    model.getAllCats((error, result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Success'});
        }
    });
}

module.exports = {insertCat, getAllCats}