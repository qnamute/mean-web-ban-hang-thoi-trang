var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    name: String,
    avatar: String,
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true, select: false},
    email: {type: String, required: true, index: {unique: true}},
    phoneNumber: {type: String, required: true},
    address: {type: String},
    dateOfBirth: {type: Date},
    sex: {type: Number},
    userType: {type: mongoose.Schema.Types.ObjectId, ref: 'UserType'},
    subUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})