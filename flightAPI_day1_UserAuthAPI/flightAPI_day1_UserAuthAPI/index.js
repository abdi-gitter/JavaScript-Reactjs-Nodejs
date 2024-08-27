const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8001

// Connect to MongoDB:
const {dbConnect} = require('./src/config/dbConnect')
dbConnect()

// Pass async errors to the error handling middleware:
require('express-async-errors')

// Middleware:
// json in req body:
app.use(express.json())

// find search sort pagination middleware:
app.use(require('./src/middleware/findSearchSortPage'))

// authentication middleware:
app.use(require('./src/middleware/authentication'))

// logs:
app.use(require('./src/middleware/logger'))

app.use(require('./src/routes'))

// error handler
app.use(require('./src/middleware/errorHandler'))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})