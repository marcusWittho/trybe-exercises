const { randomNumber, caseSensitivity, returnLetter, concatString } = require('./exercise');
jest.mock('./exercise');

describe('Testes para a função randomNumber', () => {
  it ('Testa se a função foi chamada', () => {
    const testRandomNumber = jest.fn().mockReturnValue(10);

    expect(testRandomNumber()).toBe(10);
    expect(testRandomNumber).toHaveBeenCalled();
    expect(testRandomNumber).toHaveBeenCalledTimes(1);
  });

  it ('Testando implementação de divisão', () => {
    randomNumber.mockImplementation((param_1, param_2) => param_1 / param_2);

    randomNumber(4, 2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
    expect(randomNumber(4, 2)).toBe(2);
  });

  it ('Testando implementação de multiplicação', () => {
    // const MultiplyRandomNumber = jest.fn(randomNumber).mockImplementation((param_1, param_2, param_3) => (param_1 * param_2 * param_3));
    randomNumber.mockImplementation((param_1, param_2, param_3) => param_1 * param_2 * param_3);

    randomNumber(2, 3, 4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(3);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
    expect(randomNumber(2, 3, 4)).toBe(24);
  });

  it ('Testando implementação para calcular o dobro', () => {
    randomNumber.mockReset();

    randomNumber.mockImplementation(param_1 => param_1 * 2);

    randomNumber(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4);
    expect(randomNumber(4)).toBe(8);
  });
});

describe('Testes para a função caseSensitivity', () => {
  it ('Transformar texto em caixa baixa', () => {
    caseSensitivity.mockImplementation((string) => string.toLowerCase());

    expect(caseSensitivity('MARCUS')).toBe('marcus');
    expect(caseSensitivity).toHaveBeenCalled();
    expect(caseSensitivity).toHaveBeenCalledTimes(1);
    expect(caseSensitivity).toHaveBeenCalledWith('MARCUS');
  });
});

describe('Testes para a função returnLetter', () => {
  it ('Retorna a última letra da string', () => {
    returnLetter.mockImplementation((string) => string[string.length - 1]);

    expect(returnLetter('Marcus')).toBe('s');
    expect(returnLetter).toHaveBeenCalled();
    expect(returnLetter).toHaveBeenCalledTimes(1);
    expect(returnLetter).toHaveBeenCalledWith('Marcus');
  });
});

describe('Testes para a função concatString', () => {
  it ('Concatena strings', () => {
    concatString.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(concatString('Marcus ', 'Lima ', 'Witthoeft')).toBe('Marcus Lima Witthoeft');
    expect(concatString).toHaveBeenCalled();
    expect(concatString).toHaveBeenCalledTimes(1);
    expect(concatString).toHaveBeenCalledWith('Marcus ', 'Lima ', 'Witthoeft');
  });
});

describe('Testes para a função caseSensitivity', () => {
  it ('Transformar texto em caixa alta', () => {
    caseSensitivity.mockImplementation((string) => string.toLowerCase());

    expect(caseSensitivity('MARCUS')).toBe('marcus');
    expect(caseSensitivity).toHaveBeenCalled();
    expect(caseSensitivity).toHaveBeenCalledTimes(2);
    expect(caseSensitivity).toHaveBeenCalledWith('MARCUS');

    caseSensitivity.mockRestore();

    expect(caseSensitivity('marcus')).toBe('MARCUS');
  });
});
