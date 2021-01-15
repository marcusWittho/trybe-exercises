const assert = require('assert');

const wordLengths = (array) => {
  const newArray = [];

  for (let item of array) {
    newArray.push(item.length);
  }

  return newArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);