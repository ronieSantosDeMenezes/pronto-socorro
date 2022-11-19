require('dotenv').config();
const express = require('express')
const conn = require('./db/conn')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

const pacienteRoutes = require('./routes/pacienteRoutes')
app.use(pacienteRoutes)

const port = 3000
conn()
    .then(() => app.listen(port, () => {
        console.info('app running on:', `http://localhost:${port}`)
    }))
    .catch((err) => { 
        console.error(err)
        process.exit()
    })
