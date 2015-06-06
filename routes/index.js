var express = require('express');
var router = express.Router();
var bullshit = require('../public/javascripts/bullshit.js');

/* GET home page. */
function output(array1, array2, array3, array4) {
	router.get('/', function(req, res, next) {
		res.render('index', {verbs: array1, adjectives: array2, nouns: array3, examples: array4});
	});
}

router.get('/testimonials', function(req, res, next) {
	res.render('testimonials');
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

bullshit(output);

module.exports = router;
