
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const newArray = [];
  return arrays.reduce((accumulator, array) => accumulator.concat(array), newArray);

}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);