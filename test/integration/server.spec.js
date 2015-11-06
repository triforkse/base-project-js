import Server from '../../src/server/server.js';
import request from 'request';

const port = 5678;
let server;

describe('Server', function() {

  beforeEach((done) => {
    // We wait with running the tests until
    // the server has started (which calls the done() function).
    server = Server.create(port).run(done);
  });

  afterEach((done) => {
    if (server.isRunning()) {
      server.stop(done);
    }
    else {
      done();
    }
  });

  it("should start when #run is called", (done) => {
    request(`http://localhost:${port}/`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should stop when #stop is called", (done) => {
    server.stop(function() {
      request(`http://localhost:${port}/`, (err, res) => {
        expect(err).to.not.be.null;
        done();
      });
    });
  });
});
