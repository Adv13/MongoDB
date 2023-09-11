const mongoclient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydatabase";
mongoclient.connect(url, function(err, db){
    if(err) throw err;
    console.log('database created');
    db.close();
});
