const mongoose = require('mongoose')

const dbConnect = function(){
    mongoose.connect(process.env.MONGO_DB)
        .then(()=>console.log('Connected to MongoDB'))
        .catch(err=>console.error(err))
}

module.exports = {
    mongoose,
    dbConnect
}