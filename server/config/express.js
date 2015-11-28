// express configuration section
var config= require('./environment'); 
var express = require('express');
var path = require('path');

module.exports = function (app){
	app.set('view engine', 'html'); 
	app.use('/public',express.static('public')); 	
}