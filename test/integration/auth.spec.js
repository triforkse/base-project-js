import Server from '../../src/server/server.js';
import request from 'request';


describe('Authentication', function() {
  const port = 5678;
  let server;

  beforeEach((done) => {
    // We wait with running the tests until
    // the server has started (which calls the done() function).
    server = Server.create(port).run(done);
  });

  afterEach((done) => {
    server.stop(done);
  });

  it("should start the server", (done) => {
    setTimeout(function() {
      request(`http://localhost:${port}/`, function (err, res) {
        console.log(err);
        expect(res.statusCode).to.equal(200);
        done();
      })

    }, 1000)
  });
});
