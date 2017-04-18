var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoes');

var products = [
	new Product({
		
	})
];

var done = 0;
for(var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}