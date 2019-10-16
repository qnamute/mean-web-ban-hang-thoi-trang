var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productImageSchema = new Schema({
    url: String,
    altImage: String,
    subImage: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductImage'}
});