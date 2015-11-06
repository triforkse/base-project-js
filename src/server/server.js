import http from 'http';
import express from 'express';
import logger from './logger';
import path from 'path';
import authMiddleware from './auth';
import socketIO from 'socket.io';

export default {
  create(port) {
    return {
      server: null,
	  io: null,

      isRunning() {
        return this.server !== null;
      },

      run(done) {
        const app = express();
        this.io = socketIO(http.Server(app));

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

      startSocket(handlers) {
        this.io.on('connection', function (socket) {
          socket.emit('news', { hello: 'world' });
          socket.on('my other event', function (data) {
              console.log(data);
            });
        });
      },

      stop(done) {
        this.server && this.server.close(done);
        this.server = null;
      }
    }
  }
};
