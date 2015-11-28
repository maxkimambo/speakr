'use strict';

var path = require('path');
var dev = require('./development'); 
var prod = require('./production'); 
var _ = require('lodash'); 

var config = function() {
	var all= {}; 
	var configdata = {}; 
	
	// common to both environments 
	all.root= path.normalize(__dirname + '/../../..'); 
	
	// build configuration object. 
	if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined){
		// use dev config 
		configdata =	_.merge(all, dev); 
				
	}
	
	if (process.env.NODE_ENV == 'production'){
		// use teh prod config
			configdata =	_.merge(all, prod); 
	}
	
	return configdata; 	
}

module.exports = config; 