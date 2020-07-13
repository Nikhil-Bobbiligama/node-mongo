const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    gender: {
        type: String
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('Student', studentSchema)