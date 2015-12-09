var mongodb = require('mongodb').MongoClient;
var config = require('../config/environment')();
var objectId = require('mongodb').ObjectID;



function showSingleEvent(req, res, next) {
	// grab one record 
	var id = objectId(req.params.id);
console.log(id); 

	mongodb.connect(config.mongo.uri, function (err, db) {
	
		db.collection('events').findOne({ _id: id }, function (err, result) {
					console.log(result); 
			res.render('event', {
				title: config.siteTitle,
				event: result
			});
		});
	});

}

module.exports ={showSingleEvent: showSingleEvent} 
	

