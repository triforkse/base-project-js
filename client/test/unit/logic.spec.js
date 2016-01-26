import * as Logic from '../../src/logic.js';

describe('Logic', () => {
  describe('#calculateStuff', () => {
    it('returns 2 + 2', () => {
      expect(Logic.doStuff()).to.equal(2 + 2);
    });
  });
});
