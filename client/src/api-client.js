import * as config from './config.js';
import http from 'lil-http';

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
