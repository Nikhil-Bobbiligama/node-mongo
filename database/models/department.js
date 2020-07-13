const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: false
    },
    hod: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('Department', departmentSchema)