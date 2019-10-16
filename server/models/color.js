var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var colorSchema = new Schema({
    colorName: String,
    colorCode: String,
    subColor: {type: mongoose.Schema.Types.ObjectId, ref: 'Color'}
});