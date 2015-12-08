var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 
var homeController = require('../controllers/home.controller'); 

router.get('/', homeController.home); 
router.get('/register/:id', homeController.register); 


router.get('/about', function(req,res,next){
	res.render('about', {
		title: config.siteTitle
	}); 
	
}); 

module.exports = router; 