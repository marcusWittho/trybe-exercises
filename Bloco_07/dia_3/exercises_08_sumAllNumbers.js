const assert = require('assert');

const sumAllNumbers = (array) => {
  let tmp = 0;

  for (let item of array) {
    tmp += item;
  }

  return tmp;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);