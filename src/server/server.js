import express from 'express';
import logger from './logger';
import path from 'path';
import authMiddleware from './auth';

export default {
  create(port) {
    return {
      server: null,

      run(done) {
        const app = express();

        app.use('/static', express.static(path.join(__dirname, 'public')));

        app.get('/', (req, res) => {
          res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
        });

        app.get('/protected', authMiddleware, (req, res) => {
          res.send('Logged in!');
        });

        this.server = app.listen(port, done);

        return this;
      },

      stop(done) {
        this.server && this.server.close(done);
        this.server = null;
      }
    }
  }
};
