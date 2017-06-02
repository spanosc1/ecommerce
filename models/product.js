var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type: String, required: true},
	extraImages: {type: Array, required: false},
	title: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Array, required: true},
	type: {type: String, required: true},
	variants: {type: Array, required: false}
});

module.exports = mongoose.model('Product', schema);