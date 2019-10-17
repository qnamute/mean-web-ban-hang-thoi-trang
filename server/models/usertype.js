var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userTypeSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    description: {type: String},
    user: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('UserType', userTypeSchema);