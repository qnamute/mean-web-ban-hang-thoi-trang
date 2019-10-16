var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billDetailSchema = new Schema({
    bill: {type: mongoose.Schema.Types.ObjectId, ref: 'Bill'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    quantity: Number,
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
});