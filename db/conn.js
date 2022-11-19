const mongoose = require('mongoose')
const url = process.env.MONGO_DB_URL
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
