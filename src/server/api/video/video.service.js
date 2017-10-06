const Video = require('./video.model')

exports.saveVideo = (data) => {
    return new Promise((resolve,reject) => {
        Video.create(data).then((data) => {
            if(data) {
                resolve(true)
            }
            reject(false)
        })
    })
};