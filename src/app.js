import express from 'express';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import logger from './logger';

const app = express();

passport.use(new BasicStrategy((username, password, done) => {
  	if (username === 'admin' && password == 'password') {
  		return done(null, {username, password});
  	}
  	return done(null, false, { message: 'Who are you again?' });
  }
));
const authMiddleware = passport.authenticate('basic', { session: false });

app.get('/', function(req, res) {
	res.send('Go to /protected (admin:password)');
});

app.get('/protected', authMiddleware, (req, res) => {
		res.send('Logged in!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log(`Running on port ${PORT}`);
});
