const array = [ 10, 20, 30, 40 ];

const soma = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc += curr;
  });
};

module.exports = soma;