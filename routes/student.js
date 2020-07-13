var express = require('express')
var router = express.Router()
var Department = require('../database/models/department');
var Student = require('../database/models/student');
const { request } = require('express');
const { ObjectID } = require('mongodb');

router.get('/', async function (req, res) {
    const departments = await Department.find();
    const students = await Student.find();
    res.status(200).json(students);
});

router.post('/', async (req, res) => {
    try {
        department_id = req.query.department_id;
        department_record = await Department.findById(department_id);
        if (department_record) {
            student = new Student({
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                department_id: ObjectID(department_id)
            })
        }
        else {
            throw Error("no department found")
        }

        newStudent = await student.save()
        res.status(201).json(newStudent)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.delete('/:id', async (req, res) => {
    var req_id = req.params.id;
    result = await Student.findByIdAndDelete(req_id);
    try {
        res.status(201).json({ "mssg": "deleted" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    var req_id = req.params.id;
    var req_body = req.body;
    result = await Student.updateOne({ _id: ObjectID(req_id) }, { $set: req_body });
    try {
        res.status(201).json({ "mssg": "updated" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = { router }