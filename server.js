// loading modules. 
var express = require('express'); 
var config = require('./server/config/environment')(); // because config is a function
var configureExpress = require('./server/config/express'); 
var http = require('http');
var routes = require('./server/routes'); 

// declaring environment
var app = express(); 

// configuring express 
configureExpress(app); 

// configuring routes
routes.configure(app); 

// app.listen(config.port); 

var server = http.createServer(app); 
server.listen(config.port); 

console.log('magic is happening on port %d', config.port); 