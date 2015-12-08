var mongodb = require('mongodb').MongoClient;
var config = require('../config/environment')();
var objectId = require('mongodb').ObjectID;


function home(req, res, next) {
	// // mock data for now 
	// var upcomingTalks = [
	// 	{title: 'Introduction to AngularJS 2', summary: 'This presentation is supposed to give you basic concepts about using AngularJS 2', 
	// 	links: [{name: "Link name", url: "https://github.com/maxkimambo"}], presenters:[{name: 'Max Kimambo'}, {name: 'Andeas Harder'}],date: '26/11/2015'},
	// 	
	// 	{title: 'Introduction to NodeJS', summary: 'Discover how to build webapps with NodeJS', 
	// 	links: [{name: "Link name", url: "https://github.com/maxkimambo"}], 
	// 	presenters:[{name: 'Max Kimambo'}, {name: 'Andeas Harder'}], date: '26/01/2016'}]; 
	// 
	var upcomingTalks = {}; 
		
	// create database connection 
	mongodb.connect(config.mongo.uri, function (err, db) {
		
		// hook up to document collection
		var collection = db.collection('events'); 
		
		// fetch the data
		collection.find().toArray(function (err, result) {
			upcomingTalks = result; 
			
			// render the page after getting the data back			
			res.render('home', {
				title: config.siteTitle,
				events: upcomingTalks
			});
		});
	});
}

function register(req, res, next) {
	// grab one record 
	var id = objectId(req.params.id);

	mongodb.connect(config.mongo.uri, function (err, db) {
		db.collection('events').findOne({ _id: id }, function (err, result) {
			console.log(result); 
			
			res.render('register', {
				title: config.siteTitle,
				event: result
			});
		});
	});



}

module.exports = {
	home: home,
	register: register

}