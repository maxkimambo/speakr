var express = require('express'); 
var router = express.Router(); 
var config = require('../config/environment')(); 
var eventController = require('../controllers/event.controller'); 

module.exports = router; 

router.get('/:id', eventController.showSingleEvent); 
	