var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 

router.get('/:id', function(req, res, next){
	
	var id = req.params.id; 
	
	
	res.render('register', {
		title: config.siteTitle, 
		eventId: id 
	})
	
}); 