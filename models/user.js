//REQUIRE
const mongoose = require('mongoose');

//MongoDB SCHEMA FOR USERS COLLECTION
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
});

//MONGOOSE MODEL FOR MONGODB COLLECTION 'users'
const User= mongoose.model('User', usersSchema);

//EXPORT MONGOOSE MODEL
module.exports=User;