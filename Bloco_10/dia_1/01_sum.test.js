const sum = require('./01_sum');

describe('Exercício 01', () => {
  it ('A função soma dois valores', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it ('A função soma dois valores', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it ('A função deve aceitar somente números', () => {
    expect(() => sum(4, '5').toThrow())
  });

  it ('A mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5').toThrow(/parameters must be numbers/));
  });
});
