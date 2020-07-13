const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db_connect = require('./database/db_connector');
const { connection } = require('mongoose');
const base_route = require('./routes/web');
app.use(bodyParser.json());
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/initial_db', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

app.use('/department', base_route.router);

app.listen(3000, function () {
    console.log('listening on 3000')
})