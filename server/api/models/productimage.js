var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productImageSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    url: String,
    altImage: String,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('ProductImage', productImageSchema);