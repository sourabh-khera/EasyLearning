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
    preRequisite: {
        type: String,
    },
    time: {
        durationType: { type: String },
        durationNo: { type: Number },
        enum: ['min', 'hr']
    },
    description: {
        type: String,
    },
    createdBy: {
        _id: { type: String },
        name: { type: String },
        email: { type: String },
        image: { type: String }
    },
    createdAt: { type: Number, default: Date.now() }
}, { versionKey: false });

module.exports = Mongoose.model("Courses", CourseSchema);