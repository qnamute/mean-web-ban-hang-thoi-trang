var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billSchema = new Schema({
    dateCreated: {type: Date, required: true},
    userOrder: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    totalCost: Number,
    subBill: {type: mongoose.Schema.Types.ObjectId, ref: 'Bill'}
})