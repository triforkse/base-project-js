var express = require('express'),
    app = express(),
    passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
  	if(username === 'max' && password == 'hej') {
  		return done(null, {username: username, password: password});
  	}
  	return done(null, false, { message: 'Who are you again?' });
  }
));

app.get('/', function(req, res) {
	res.send('Go to /protected max:hej');
});

app.get('/protected',
	passport.authenticate('basic', { session: false }),
	function(req, res) {
		res.send('Logged in!');
});

var server = app.listen(3000, function () {
	console.log('Running on port 3000');
});