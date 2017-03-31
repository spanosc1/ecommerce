var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoes');

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Castlevania_Lords_of_Shadow.png',
		title: 'Castlevania: Lords of Shadow',
		description: 'Castlevania for ps3/xbox 360',
		price: 20
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0e/BreathoftheWildFinalCover.jpg',
		title: 'The Legend of Zelda: Breath of the Wild',
		description: 'The Legend of Zelda for Wii U/Switch',
		price: 60
	}),
	new Product({
		imagePath: 'http://cdn.bulbagarden.net/upload/thumb/0/06/Sun_EN_boxart.png/250px-Sun_EN_boxart.png',
		title: 'Pokemon: Sun',
		description: 'Pokemon for 3DS',
		price: 40
	}),
	new Product({
		imagepath: 'https://www.mariowiki.com/images/thumb/4/42/SSBWiiU_NA_Boxart.png/150px-SSBWiiU_NA_Boxart.png',
		title: 'Super Smash Bros. for Wii U and 3DS',
		description: 'Smash Bros. for Wii U and 3DS',
		price: 50
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