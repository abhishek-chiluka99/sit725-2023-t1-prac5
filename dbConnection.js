const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://chilukaabhishek9:admin@cluster0.crmprkx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if( !err ) {
        console.log('Mongo DB connectes');
    }
    else{
        console.log('Error: ', err);
        process.exit(1)
    }
});

module.exports = client