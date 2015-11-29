var express = require('express'); 
var router = express.Router(); 

router.get('/', function(req, res, next){
	
	// mock data for now 
	var upcomingTalks = [
		{title: 'Introduction to AngularJS 2', summary: 'This presentation is supposed to give you basic concepts about using AngularJS 2', 
		links: [{name: "Link name", url: "https://github.com/maxkimambo"}], presenters:[{name: 'Max Kimambo'}, {name: 'Andeas Harder'}],date: '26/11/2015'},
		
		{title: 'Introduction to NodeJS', summary: 'Discover how to build webapps with NodeJS', 
		links: [{name: "Link name", url: "https://github.com/maxkimambo"}], 
		presenters:[{name: 'Max Kimambo'}, {name: 'Andeas Harder'}], date: '26/01/2016'}]; 
	
	
	res.render('home', {
		title: 'Speakr',
		events: upcomingTalks
	}); 
}); 

router.get('/about', function(req,res,next){
	res.render('about'); 
}); 

module.exports = router; 