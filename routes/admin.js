var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var multer = require('multer');

var Product = require('../models/product');

var mongoose = require('mongoose');

var fileName;
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './public/images');
	},
	filename: function(req, file, callback) {
		fileName = file.fieldname + '-' + Date.now();
		callback(null, fileName);
	}
})

var upload = multer({ storage: storage }).single('userPhoto');

router.get('/admin/edit-products', isAdmin, function(req, res, next) {
	res.render('admin/edit-products');
});

router.post('/admin/add-product', isAdmin, function(req, res, next) {
	upload(req, res, function(err) {
		if(err) {
			return res.send(err);
		}
		console.log(req.body);
		var product = new Product({
			imagePath: '/images/' + fileName,
			title: req.body.prodName,
			description: req.body.prodDesc,
			price: req.body.prodPrices
		});
		product.save(function(err, result) {
			res.send(fileName);
		});
	});
});

module.exports = router;

function isAdmin(req, res, next) {
	if(req.isAuthenticated() && req.session.email == "admin@gmail.com")
	{
		return next();
	}
	res.redirect('/');
}