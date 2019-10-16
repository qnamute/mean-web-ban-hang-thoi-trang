var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String},
    amount: {type: Number},
    gender: {type: Number},
    color: {type: mongoose.Schema.Types.ObjectId, ref: 'Color'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory'},
    images: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductImage'},
    brand: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'},
    subProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
});