const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Requisito 1
assert.strictEqual(typeof sum, 'function');

// Requisito 2
assert.strictEqual(sum(4, 5), 9, 'O valor correto é 9, reveja sua funçao');

// Requisito 3
assert.strictEqual(sum(0, 0), 0, 'A soma entre 0 e 0 é igual a 0');

// Requisito 4
assert.throws(() => {
  sum(4, '5');
});

// Requisito 5
const expected = 'parameters must be numbers';
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);
