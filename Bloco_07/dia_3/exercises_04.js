const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Requisito 5
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Requisito 6
assert.strictEqual(myFizzBuzz(39), 'fizz');

// Requisito 7
assert.strictEqual(myFizzBuzz(100), 'buzz');

// Requisito 8
assert.strictEqual(myFizzBuzz(52), 52);

// Requisito 9
assert.strictEqual(myFizzBuzz('10'), false);