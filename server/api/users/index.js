
'use strict'; 

var express = require('express'); 
var router = express.Router(); 

var controller = require('./user.controller'); 

console.log(controller.getAll); 

router.get('/list', controller.getAll); 

router.get('/test', function(req, res, next){
	res.render('test'); 
	
}); 
module.exports = router; 