/* global it expect describe */

import * as Logic from '../../src/logic.js';

describe('Logic', () => {
  describe('#calculateStuff', () => {
    it('returns 2 squared', () => {
      expect(Logic.calculateStuff()).to.equal(2 * 2);
    });
  });
});
