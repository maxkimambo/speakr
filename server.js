// loading modules. 
var express = require('express'); 
var config = require('./server/config/environment')(); // because config is a function
var expressSetup = require('./server/config/express'); 
// declaring environment
var app = express(); 
expressSetup(app); 

app.get('/', function(req, res){
	res.send(config); 
}); 

app.listen(config.port); 