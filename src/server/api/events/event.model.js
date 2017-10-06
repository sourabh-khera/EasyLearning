const Mongoose = require('mongoose');

const EventSchema = new Mongoose.Schema({
    name: { type: String },
    payload: {
        course: {
            _id: { type: String },
            courseName: { type: String },
            courseType: { type: String }
        },
        courseSave: { type: Boolean },
        comment: {
            content: { type: String },
            courseId: { type: String }
        },
        watchVideo: {
            _id: { type: String },
            title: { type: String },
        }
    },
    sourceUser: {
        _id: { type: String },
        name: { type: String },
        email: { type: String },
        image: { type: String }
    },
    targetUser: {
        _id: { type: String },
        name: { type: String },
        email: { type: String },
        image: { type: String }
    },
    createdAt: { type: Number, default: Date.now() }
}, { versionKey: false });

module.exports = Mongoose.model('Events', EventSchema);