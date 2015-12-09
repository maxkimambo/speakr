
'use strict'; 

var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 

var userController = require('../controllers/user.controller'); 


router.get('/list', userController.getAll); 

module.exports = router; 