const searchEmployee = require('./05_searchEmployee');

describe('Testes para o arquivo searchEmployee', () => {
  it ('Testa se a função foi declarada', () => {
    expect(searchEmployee).toBeDefined();
  });

  it ('Testa o retorno da função', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
});
