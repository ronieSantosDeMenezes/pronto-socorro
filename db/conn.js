const mongoose = require('mongoose')
const url = 'mongodb+srv://Caio:caiojulia123@pronto-socorrocluster3.xrfek4l.mongodb.net/?retryWrites=true&w=majority'
const conn = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
        .then(() => {
            console.info("db connected!!!")
            resolve()
        })
        .catch((err) => reject(err))
    })
}

module.exports = conn
