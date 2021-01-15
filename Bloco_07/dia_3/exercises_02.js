const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// Requisito 3
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Requisito 4
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Requisito 5
const array = [1, 2, 3, 4, 5];
myRemove(array, 3);
assert.deepStrictEqual(array, [1, 2, 3, 4, 5]);

// Requisito 6
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);