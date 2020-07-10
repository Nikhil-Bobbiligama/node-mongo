const express = require('express');
const app = express();
const BodyParser = require('body-parser');
// const service = require('');
const bodyParser = require('body-parser');
const db_connect = require('./database/db_connector');
const { connection } = require('mongoose');
const base_route = require('./routes/web');
app.use(bodyParser.json());

var db;

const LoggerMiddleware = (req, res, next) => {
    // res.send("ok");
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}
// app.use(LoggerMiddleware);

const app_db_connect = async function () {
    return new Promise(async function (resolve, reject) {
        try {
            connection = await db_connect.create_db();
            db = connection;
            resolve(db);

        } catch (error) {

        }
    })
}();

app.use('/', base_route.router);

app.listen(3000, function () {
    console.log('listening on 3000')
})