import http from 'http';
import express from 'express';
import authMiddleware from './auth';
import socketIO from 'socket.io';
import cors from './cors';
import logger from 'winston';

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
        this.io = socketIO(new http.Server(app));

        // Since our API is a (BFF, backend for frontend)
        // running on another URL we need to allow CORS.
        // You may want to restrict access, rather than '*'.
        cors(app, '*');

        app.get('/api/1.0/status', (req, res) => {
          res.send('OK');
        });

        app.get('/protected', authMiddleware, (req, res) => {
          res.send('Logged in!');
        });

        this.server = app.listen(port, done);

        return this;
      },

      startSocket() {
        this.io.on('connection', (socket) => {
          socket.emit('news', { hello: 'world' });
          socket.on('my other event', (data) => {
            logger.log(data);
          });
        });
      },

      stop(done) {
        if (this.server) this.server.close(done);
        this.server = null;
      },
    };
  },
};
