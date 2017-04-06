var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoes');

var products = [
	new Product({
		imagePath: '/images/closingceremony.jpg',
		title: 'AIR JORDAN 11 RETRO LOW "CLOSING CEREMONY"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 225
	}),
	new Product({
		imagePath: '/images/alternate89.jpg',
		title: 'AIR JORDAN 4 RETRO "ALTERNATE 89"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 225
	}),
	new Product({
		imagePath: '/images/aqua2015.jpg',
		title: 'AIR JORDAN 8 RETRO "AQUA 2015"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 200
	}),
	new Product({
		imagePath: '/images/closingceremony.jpg',
		title: 'AIR JORDAN 11 fdsa LOW "CLOSING CEREMONY"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 225
	}),
	new Product({
		imagePath: '/images/alternate89.jpg',
		title: 'AIR JORDAN 4 RETRO "ALTERNATE 89"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 225
	}),
	new Product({
		imagePath: '/images/aqua2015.jpg',
		title: 'AIR JORDAN 8 RETRO "AQUA 2015"',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ligula a congue euismod. Integer cursus, arcu in scelerisque consequat, lacus lectus lacinia est, in dapibus ligula risus sit amet neque. Aenean faucibus nibh vel volutpat accumsan. Morbi placerat egestas egestas. Ut fringilla imperdiet eleifend. Etiam ut lacinia lectus. Fusce dictum non enim id vehicula.',
		price: 200
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