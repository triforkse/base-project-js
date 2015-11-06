import Server from '../../src/server/server.js';
import Resilient from 'resilient';

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

  it("should start the server", () => {
    fetch(`http://localhost:${port}/protected`, (err, res) => {
      console.log(err, res);
    })
  });
});
