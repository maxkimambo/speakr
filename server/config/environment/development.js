'use strict';
var creds = require('../credentials'); 

module.exports ={
	port: process.env.PORT || 3000,
	env: process.env.NODE_ENV || 'development',
	
	mongo:{
		uri: 'mongodb://'+creds.username+':'+creds.password +'@ds027155.mongolab.com:27155/speakr',
		options:{
			db: {
				safe:true
			}
		}
	}
}; 