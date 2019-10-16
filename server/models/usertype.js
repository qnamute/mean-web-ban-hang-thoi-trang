var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userTypeSchema = new Schema({
    name: String,
    description: {type: String},
    subUserType: {type: mongoose.Schema.Types.ObjectId, ref: 'UserType'}
})