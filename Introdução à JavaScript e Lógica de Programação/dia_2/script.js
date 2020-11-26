// Array utilizado nos exercícios do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 (Exibe o conteúdo do array)
function show(array) {
  for (number of array) {
    console.log(number);
  }
};
show(numbers);

//=================================================

// Exercício 2 (Soma todos os itens do array)
function sum(array) {
  let total = array.reduce((total, number) => total + number, 0);
  return total;
};
console.log(sum(numbers));

//=================================================

// Exercício 3 (Cálculo da média aritmética )
function arithmeticAverage(array) {
  let total = sum(array) / numbers.length;
  return total;
};
console.log(arithmeticAverage(numbers));

//=================================================

