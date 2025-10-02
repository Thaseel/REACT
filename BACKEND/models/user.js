const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},                // this unique only helps us to query fast and find the data easily does not check if the email is unique for that we need to install a package npm install --save mongoose-unique-validator
    password : {type : String, required : true, minlength : 6},
    image : {type : String, required : true},
    places : {type : String, required : true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);