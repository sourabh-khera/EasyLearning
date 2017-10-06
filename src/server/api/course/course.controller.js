const courseService = require('./course.service');
const videoService = require('./../video/video.service');
const async = require('async');

exports.createCourse = (req,res, next) => {
    const course = {
        courseName: req.body.name,
        courseType: req.body.type,
        preRequisite: req.body.preRequisite || '',
        time: {
            durationType: req.body.time.durationType || min,
            durationNo: req.body.time.durationNo || 0
        },
        description: req.body.description || '',
        createdBy: {
            ...req.user
        }
    };
    courseService.save(course,res).then((data) => {
        if( data ) {
            async.each(req.video, (video, cb) => {
                createVideos(video).then((status) => {
                    if(status) {
                        cb()
                    }
                })
            }, (err) => {
                if(err) {
                    return res.status(400)
                }
                return res.status(200)
            })
        }
    }).catch((err) => {
        return res.status(400)
    })
};

const createVideos = (data) => {
    const video = {
        title: data.title,
        description: data.description,
        preRequisite: data.preRequisite,
        course: {
            _id: data.course._id,
            courseName: data.course.courseName,
            courseType: data.course.courseType
        },
        url : {
            id: data.video.id,
            name: data.video.name
        },
        createdBy: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            image: req.user.email
        }
    };
    return Promise((resolve,reject) => {
        videoService.saveVideo(video).then((status)=> {
            resolve(status)
        })
    })
};

