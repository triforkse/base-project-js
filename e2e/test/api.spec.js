/* globals describe beforeEach afterEach it expect */
import Nightmare from 'nightmare';
import fetch from 'node-fetch';
require('mocha-generators').install();

// Get rid of a warning.
process.setMaxListeners(0);

// Utils
const innerHTML = (selector) => document.querySelector(selector).innerHTML;
const innerText = (selector) => innerHTML(selector).trim();

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

  it('is reachable with fetch and returns OK', function * () {
    const res = yield fetch(base + '/api/1.0/status');
    const text = yield res.text();
    expect(text).to.equal('OK');
  });

  it('is reachable with nightmare and returns OK', function * () {
    const body = yield nightmare.goto(base + '/api/1.0/status').evaluate(() => document.body.innerText);
    expect(body).to.equal('OK');
  });
});
