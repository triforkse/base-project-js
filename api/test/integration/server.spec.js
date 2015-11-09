/* global it expect describe beforeEach afterEach */

import Server from '../../src/server.js';
import request from 'request';

const port = 5678;
let server;

describe('Server', function test() {
  beforeEach((done) => {
    // We wait with running the tests until
    // the server has started (which calls the done() function).
    server = Server.create(port).run(done);
  });

  afterEach((done) => {
    if (server.isRunning()) {
      server.stop(done);
    } else {
      done();
    }
  });

  it('should start when #run is called', (done) => {
    request(`http://localhost:${port}/api/1.0/status`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should stop when #stop is called', (done) => {
    server.stop(() => {
      request(`http://localhost:${port}/`, (err) => {
        expect(err).to.not.equal(null);
        done();
      });
    });
  });
});
