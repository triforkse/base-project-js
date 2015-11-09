import * as config from './config.js';
import http from 'lil-http';
import io from 'socket.io-client';

let socket = null;

export function fetchStatus(success) {
  const base = config.apiAddress();
  return http.get(`http://${base}/api/1.0/status`, (err, res) => {
    if (err) throw new Error('Cannot perform the request: ' + err.status);
    if (res.status === 200) {
      console.log(res.data); // eslint-disable-line no-console
    }

    success(res.data);
  });
}

export function connectWebSocket(cb) {
  const base = config.apiAddress();
  socket = io(`http://${base}`);
  socket.on('greeting', cb);
  socket.emit('greeting', 'hi from client');
}
