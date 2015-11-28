'use strict';
module.exports ={
	port: process.env.PORT || 3000,
	env: process.env.NODE_ENV || 'development',
	mongo:{
		uri: 'mongodb://localhost/speakr',
		options:{
			db: {
				safe:true
			}
		}
	}
}; 