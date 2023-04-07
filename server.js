var express = require('express');
var app = express();
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://chilukaabhishek9:admin@cluster0.crmprkx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
let dbCollection;
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//getting the collection from mongodb.
function dbConnection(collectionName) {
    client.connect(err => {
        dbCollection = client.db().collection(collectionName);
        if (!err) {
            console.log('DB Connected');
            console.log(dbCollection);
        } else {
            console.log(err);
        }
    });
}

//inserting the data in mongodb
function insert(cat, callback) {
    dbCollection.insertOne(cat, callback);
}

//getting all data 
function getAllCats(callback) {
    dbCollection.find().toArray(callback);
}

app.get('/api/lang',(req,res) => {
    getAllCats((error, result) => {
        if (error) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successfully'});
        }
    });
   
});

app.post('/api/lang', (req, res) => {
    let cat = req.body;
    insert(cat, (err, result) => {
        if (err) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Card successfully added'});
        }
    });
});

app.listen(port,()=>{
    console.log('App listening to: ' + port);
    dbConnection('Cats');
});