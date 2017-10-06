/**
 * Created by sourabh on 4/10/17.
 */
const Mongoose = require("mongoose");

const CourseSchema = new Mongoose.Schema({
    courseName: {
        type: String
    },
    courseType: {
        type: String,
        enum: ['Weekly', 'Monthly']
    },
    startedBy: {
        type: Number,
    },
    prerequisite: {
        type: String,
    },
    time: {
        durationType: {type: String},
        durationNo: {type: Number},
        enum: ['min', 'hr']
    },
    description: {
        type: String,
    }
}, {versionKey: false});

module.exports = Mongoose.model("Courses", CourseSchema);