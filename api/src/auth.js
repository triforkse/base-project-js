import passport from 'passport';
import {BasicStrategy} from 'passport-http';

passport.use(new BasicStrategy((username, password, done) => {
  if (username === 'admin' && password === 'password') {
    return done(null, {username, password});
  }
  return done(null, false, { message: 'Who are you again?' });
}));

export default passport.authenticate('basic', { session: false });
