/**
 * Created by sourabh on 3/10/17.
 */

const Mongoose = require("mongoose");


const EmployeeSchema = new Mongoose.Schema({

    empName: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    }


}, {versionKey: false});

module.exports = Mongoose.model('Employees', EmployeeSchema);