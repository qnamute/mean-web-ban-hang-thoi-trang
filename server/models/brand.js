var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brandSchema = new Schema({
    name: {type: String, required: true},
    origin: String,
    description: String,
    subBrand: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'}
})