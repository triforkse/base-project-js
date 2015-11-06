/* global it expect describe beforeEach afterEach */

import Server from '../../src/server.js';
import request from 'request';

const port = 5678;
let server;

describe('Authentication', function test() {
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

  it('should NOT let us in if we provide an invalid username and password', (done) => {
    request(`http://localhost:${port}/protected`, (err, res) => {
      expect(res.statusCode).to.equal(401);
      done();
    });
  });

  it('should let us in if we provide a valid username and password', (done) => {
    const options = {
      'auth': {
        'user': 'admin',
        'pass': 'password',
      },
    };

    request.get(`http://localhost:${port}/protected`, options, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
