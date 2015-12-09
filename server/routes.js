var express = require('express');

var home = require('./routes/home'); 
var users = require('./routes/users'); 
var eventsRoutes = require('./routes/events'); 

module.exports = {
	configure: function (app) {

		// routes for the root of the site
		app.use('/', home);
		
		// routes for /users/{{some- action}} of the site
		app.use('/users', users);  
		
		 app.use('/event', eventsRoutes); 
	}
}; 
