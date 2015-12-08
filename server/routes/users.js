
'use strict'; 

var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 

var userController = require('../controllers/user.controller'); 


router.get('/list', userController.getAll); 

router.get('/test', function(req, res, next){
	res.render('test'); 
	
}); 
module.exports = router; 