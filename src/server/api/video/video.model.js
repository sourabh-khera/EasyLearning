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
    prerequisite: {
       type: String,
    },
    courseId: {
       type: Mongoose.Schema.type.ObjectId,
        ref: 'Courses'
    },
    url: {
       type: String,
    }
},{versionKey: false});

module.exports = Mongoose.model('Videos',VideoSchema);