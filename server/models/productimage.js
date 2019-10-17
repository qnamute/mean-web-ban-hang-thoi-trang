var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productImageSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    url: String,
    altImage: String,
});

module.exports = mongoose.model('ProductImage', productImageSchema);