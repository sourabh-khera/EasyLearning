/**
 * Created by sourabh on 3/10/17.
 */

const Mongoose = require("mongoose");


const EmployeeSchema = new Mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    designation: {
        type: String
    },
    competency: {
        type: String
    },
    createdAt: { type: Number, default: Date.now() }

}, { versionKey: false });

module.exports = Mongoose.model('Employees', EmployeeSchema);
