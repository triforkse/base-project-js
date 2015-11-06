import express from 'express';
import logger from './logger';
import path from 'path';
import authMiddleware from './auth';

export default {
  create(port) {
    return {
      app: null,

      run(done) {
        const app = this.app = express();

        app.use('/static', express.static(path.join(__dirname, 'public')));

        app.get('/', (req, res) => {
          res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
        });

        app.get('/protected', authMiddleware, (req, res) => {
          res.send('Logged in!');
        });

        app.listen(port, done);
      },

      stop(done) {
        this.app && this.app.close(done);
        this.app = null;
      }
    }
  }
};
