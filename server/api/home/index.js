var express = require('express'); 
var router = express.Router(); 

router.get('/', function(req, res, next){
	
	res.render('home', {
		title: 'Speakr'
	}); 
}); 

router.get('/about', function(req,res,next){
	res.render('about'); 
}); 

module.exports = router; 