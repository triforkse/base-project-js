import Server from '../../src/server.js';
import request from 'request';

const port = 5678;

const statusURL = `http://localhost:${port}/api/1.0/status`;
const secureStatusURL = `https://localhost:${port}/api/1.0/status`;

describe('Server', function test() {
  let server;

  describe('No SSL', () => {
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
      request(statusURL, (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should stop when #stop is called', (done) => {
      server.stop(() => {
        request(statusURL, (err) => {
          expect(err).to.not.equal(null);
          done();
        });
      });
    });
  });

  describe('With SSL', () => {
    beforeEach((done) => {
      // We wait with running the tests until
      // the server has started (which calls the done() function).
      const certRoot = __dirname + '/data';
      server = Server.create(port).run(done, {certRoot});

      // Allow Self Signed Certs.
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    });

    afterEach((done) => {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

      if (server.isRunning()) {
        server.stop(done);
      } else {
        done();
      }
    });

    it('rejects all non-HTTPS requests', (done) => {
      request(statusURL, (err) => {
        expect(err).not.to.equal(null);
        done();
      });
    });

    it('uses the supplied certificate for HTTPS', (done) => {
      request(secureStatusURL, (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});
