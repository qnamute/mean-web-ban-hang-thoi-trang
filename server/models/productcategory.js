var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productCategory = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    subProductCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory'}
});