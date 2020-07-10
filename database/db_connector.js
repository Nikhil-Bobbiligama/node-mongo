var MongoClient = require('mongodb').MongoClient;

const create_db = async function () {
    return new Promise(async function (resolve, reject) {
        try {
            MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, function (err, client) {

                if (err) {
                    console.log(err.message);
                    throw err;
                }
                console.log("conected")
                db = client.db('initial_db');
                resolve(db);
                
            });
        }
        catch (err) {
            console.log("error...........................................!")
            console.log(err);
            reject(err)
        }
        
    })
}
module.exports = { create_db }
