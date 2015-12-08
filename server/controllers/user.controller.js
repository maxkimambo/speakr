


function getAll (req, res, next) {
			
			// we get a fake user list 
			var users =[
				{name: 'Max', topic: 'javascript', date: '20/10/2015'},
				{name: 'Andrea', topic: 'javascript', date: '20/10/2015'},
				{name: 'Kim', topic: 'javascript', date: '20/10/2015'}
			]; 
		
		
		
			res.render('users', { users: users}); 
		}
module.exports = {
	getAll: getAll
}