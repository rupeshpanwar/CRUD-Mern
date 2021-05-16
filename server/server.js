const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-Parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const postRoutes = require('./routes/post')

//app
const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

//db connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

//route middleware
app.use('/api', postRoutes)

//port
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server is running on port ${port}`))
