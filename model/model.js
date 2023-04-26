let client = require('../dbConnection');
let collection = client.db('test').collection('Cats');

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const getAllCats = (callback) =>{
    collection.find().toArray(callback);
}

module.exports = {insertCat, getAllCats}