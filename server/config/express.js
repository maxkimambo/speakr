// express configuration section
var config = require('./environment');
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function (app) {
	app.engine('.hbs', exphbs({
		 defaultLayout: 'main',
		 partialsDir: 'views/partials', 
		 extname: '.hbs' }));
	app.set('view engine', '.hbs');
	
	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use('/public', express.static('public'));
}