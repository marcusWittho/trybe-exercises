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

// Exercício 4 (Teste de condição)
function condition() {
  let result = '';
  if (arithmeticAverage(numbers) > 20) {
    result = 'Valor maior que 20';
  }else {
    result = 'Valor menor ou igual a 20';
  }
  return result;
};
console.log(condition());

//=================================================

// Exercício 5 (Retorna o maior valor contido no array)
function higherNumber(array) {
  let higher = Math.max(...array);
  return higher;
};
console.log(higherNumber(numbers));

//=================================================

// Exercício 6 (Retorna a quantida de números ímpares)
function totalOdd(array) {
  let count = 0;
  for (number of numbers) {
    if (number % 2 != 0) {
      count += 1;
    }
  }
  let result = '';
  if (count == 0) {
    result = 'Nenhum valor ímpar encontrado';
  }else {
    result = `Total de números ímpares: ${count}`;
  }
  return result; 
};
console.log(totalOdd(numbers));

//=================================================

// Exercício 7 (Retorna o menor valor contido no array)
function smallestNumber(array) {
  let smaller = Math.min(...array);
  return smaller;
};
console.log(smallestNumber(numbers));

//=================================================