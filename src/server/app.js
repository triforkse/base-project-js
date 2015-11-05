import express from 'express';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import logger from './logger';
import path from 'path';

const app = express();

passport.use(new BasicStrategy((username, password, done) => {
  if (username === 'admin' && password === 'password') {
    return done(null, {username, password});
  }
  return done(null, false, { message: 'Who are you again?' });
}));

const authMiddleware = passport.authenticate('basic', { session: false });

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Logged in!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info('Running on port %s', PORT);
});
