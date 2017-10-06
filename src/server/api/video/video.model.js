/**
 * Created by sourabh on 4/10/17.
 */
const Mongoose = require('mongoose');

const VideoSchema = new Mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    preRequisite: {
        type: String
    },
    course: {
        _id: { type: String },
        courseName: { type: String },
        courseType: { type: String }
    },
    url: {
        id: { type: String },
        name: { type: String }
    },
    createdBy: {
        _id: { type: String },
        name: { type: String },
        email: { type: String },
        image: { type: String }
    }
}, { versionKey: false });

module.exports = Mongoose.model('Videos', VideoSchema);