const { encode, decode } = require('./02_encode&decode');

describe('Exercício 02', () => {
  it ('Eh uma função', () => {
    expect(typeof encode && typeof decode).toEqual('function');
  })

  it ('As vogais são substituidas por números', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it ('Os números são substituidos por vogais', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it ('As consoantes não são convertidas em números', () => {
    expect(encode('Marcus')).toBe('M1rc5s');
  });
})