var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 
var homeController = require('../controllers/home.controller'); 


router.get('/', homeController.home); 

// router.get('/event/:id', function(req, res, next){
// 	res.render('event'); 
// }); 

router.get('/about', function(req,res,next){
	res.render('about', {
		title: config.siteTitle
	}); 
	
}); 

module.exports = router; 