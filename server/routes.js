var express = require('express');
// var userModule = require('./api/users'); 
var routes = require('./api/home'); 
var users = require('./api/users'); 

module.exports = {
	configure: function (app) {

		// routes for the root of the site
		app.use('/', routes);
		
		// routes for /users/{{some- action}} of the site
		app.use('/users', users);  
	}
}; 
