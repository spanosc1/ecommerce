var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var Cart = require('../models/cart');

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, docs) {
		var productChunks = [];
		var chunkSize = 4;
		var newDocs = [];
		for(var j = 0; j < docs.length; j ++)
		{
			newDocs.push({item: docs[j]});
		}
		for(var i = 0; i < newDocs.length; i += chunkSize) {
			productChunks.push(newDocs.slice(i, i + chunkSize));
		}
		res.render('shop/index', { title: 'ecommerce', products: productChunks });
	});
});

router.get('/search/:term*?', function(req, res, next) {
	if(req.params.term.indexOf("+") >= 0)
	{
		var terms = req.params.term.split("+");
	}
	else
	{
		var terms = [req.params.term];
	}
	Product.find(function(err, docs) {
		var productChunks = [];
		var foundDocs = [];
		var chunkSize = 4;
		var found = 0;
		var title;
		for(var j = 0; j < docs.length; j ++)
		{
			title = docs[j].title.toLowerCase();
			found = 0;
			for(var k = 0; k < terms.length; k ++)
			{
				if(title.includes(terms[k]))
				{
					found++;
				}
			}
			if(found > 0)
			{
				foundDocs.push({item: docs[j], foundTerms: found});
			}
		}
		foundDocs.sort(function(a, b) {
			if(b.foundTerms < a.foundTerms) return -1;
			if(b.foundTerms > a.foundTerms) return 1;
			return 0;
		});
		for(var i = 0; i < foundDocs.length; i += chunkSize) {
			productChunks.push(foundDocs.slice(i, i + chunkSize));
		}
		res.render('shop/index', { title: 'ecommerce', products: productChunks });
	});
});

router.get('/product/:id', function(req, res, next) {
	var productId = req.params.id;
	Product.findById(productId, function(err, product) {
		if(err) {
			return res.redirect('/');
		}
		res.render('shop/item', { product: product});
	});
});

router.get('/add-to-cart/:id', function(req, res, next) {
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	Product.findById(productId, function(err, product) {
		if(err) {
			return res.redirect('/');
		}
		cart.add(product, product.id);
		req.session.cart = cart;
		console.log(req.session.cart);
		res.redirect('/');
	});
});

router.get('/shopping-cart', function(req, res, next) {
	if(!req.session.cart) {
		return res.render('shop/shopping-cart', {products: null});
	}
	var cart = new Cart(req.session.cart);
	res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;
