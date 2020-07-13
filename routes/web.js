var express = require('express')
var router = express.Router()
var Subscriber = require('../database/models/sub');
var Department = require('../database/models/department');
var Student = require('../database/models/student');
const { request } = require('express');

router.get('/', async function (req, res) {
    const departments = await Department.find();
    const students = await Student.find();
    res.status(200).json(departments)
});

router.post('/', async (req, res) => {
    const department = new Department({
        name: req.body.name,
        strength: req.body.strength,
        hod: req.body.hod
    })

    try {
        const newDepartment = await department.save()
        res.status(201).json(newDepartment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.delete('/:id', async (req, res) => {
    var req_id = req.params.id;
    result = await Department.findByIdAndDelete(req_id);
    try {
        res.status(201).json({ "mssg": "deleted" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/', async (req, res) => {
    var req_id = req.body;
    result = await Department.findByIdAndDelete(req_id);
    try {
        res.status(201).json({ "mssg": "deleted" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = { router }