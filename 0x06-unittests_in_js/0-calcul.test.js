const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('should round up decimals', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });

  it('should handle both decimals', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });

  it('should round to nearest integer', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
});

