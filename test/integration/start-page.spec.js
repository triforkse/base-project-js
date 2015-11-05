import Nightmare from 'nightmare';
require('mocha-generators').install();

// Get rid of a warning.
process.setMaxListeners(0);

// Utils
const innerText = (selector) => document.querySelector(selector).innerHTML.trim();

describe('Start Page', function() {
  this.timeout(15000);

  const base = 'http://localhost:3000/';

  let nightmare;

  beforeEach(function() {
    nightmare = Nightmare();
  });

  afterEach(function * () {
    yield nightmare.end();
  });

  it("should have a title", function * () {
    const title = yield nightmare.goto(base).title();
    expect(title).to.equal('Project Start');
  });

  it('should show a message when you click the button', function * () {
    const message = yield nightmare
    .goto(base)
    .click('#click-here')
    .wait('#message')
    .evaluate(innerText, '#message');

    expect(message).to.equal('You clicked the button!');
  });
});
