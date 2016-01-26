import Nightmare from 'nightmare';
require('mocha-generators').install();

// Get rid of a warning.
process.setMaxListeners(0);

describe('API endpoint', function() {
  this.timeout(15000);

  const hostname = process.env.API_ADDR || 'localhost';
  const base = 'http://' + hostname + ':3000';

  let nightmare;

  beforeEach(() => {
    nightmare = Nightmare();
  });

  afterEach(function * () {
    yield nightmare.end();
  });

  it('is reachable and returns OK', function * () {
    const title = yield nightmare.goto(base + '/api/1.0/status').evaluate(() => document.body.innerText);
    expect(title).to.equal('OK');
  });
});
