const Course = require('./course.model');

exports.save = (data,res) => {
    Course.create(data).then((data) => {
        return new Promise((resolve,reject) => {
            if(data) {
                resolve(data)
            }
            reject(err)
        });
    })
};