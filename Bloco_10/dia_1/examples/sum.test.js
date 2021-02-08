const { TestScheduler } = require('jest');
const sum = require('./sum');

it('A função soma dois valores.', () => {
  expect(sum(2, 3)).toEqual(5);
});