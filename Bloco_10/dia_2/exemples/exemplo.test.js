const soma = require('./exemplo');

describe('Testes do exemplo_01', () => {
  it ('Realiza a soma dos itens de um array', () => {
    expect(soma([ 1, 2, 3, ])).toBe(6);
  });

  it ('Algum item não é do tipo number', () => {
    expect(soma([ 1, 2, 3, '4' ]))
  });
});