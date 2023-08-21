const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://yunusemreayan00:xP3sCza4LpI7rkpA@cluster0.hckf2pj.mongodb.net/?retryWrites=true&w=majority'

const db = () =>   {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{
        console.log('Database connection successful');
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = db;