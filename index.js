const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db_connect = require('./database/db_connector');
const { connection } = require('mongoose');
require('dotenv').config();
const department_route = require('./routes/department');
const student_route = require('./routes/student');
app.use(bodyParser.json());
const mongoose = require('mongoose')
// console.log( typeof(process.env.config));
// config = JSON.parse(process.env.config);
// console.log(config['help']);
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

app.use('/department', department_route.router);
app.use('/student', student_route.router);

app.listen(3000, function () {
    console.log('listening on 3000')
})