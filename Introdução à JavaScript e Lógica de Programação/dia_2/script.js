// Array utilizado nos exercícios do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 (Exibe o conteúdo do array)
function show(array) {
  for (number of array) {
    console.log(number);
  }
};
//show(numbers);

//=================================================

// Exercício 2 (Soma todos os itens do array)
function sum(array) {
  let total = array.reduce((total, number) => total + number, 0);
  return total;
};
//console.log(sum(numbers));

//=================================================

// Exercício 3 (Cálculo da média aritmética )
function arithmeticAverage(array) {
  let total = sum(array) / numbers.length;
  return total;
};
//console.log(arithmeticAverage(numbers));

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
//console.log(condition());

//=================================================

// Exercício 5 (Retorna o maior valor contido no array)
function higherNumber(array) {
  let higher = Math.max(...array);
  return higher;
};
//console.log(higherNumber(numbers));

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
//console.log(totalOdd(numbers));

//=================================================

// Exercício 7 (Retorna o menor valor contido no array)
function smallestNumber(array) {
  let smaller = Math.min(...array);
  return smaller;
};
//console.log(smallestNumber(numbers));

//=================================================

// Exercício 8 (Cria um array com valores do 1 ao 25);
function createArray() {
  let arrayNumbers = [];
  for (let index = 1; index <= 25; index += 1) {
    arrayNumbers.push(index);
  }
  console.log(arrayNumbers);
  return arrayNumbers;
};
//createArray();

//=================================================

// Exercício 9 (Retorna a divisão por 2 de todos os elementos do array)
function divideElements(array) {
  for (number of array) {
    console.log(number / 2);
  }  
};
//divideElements(createArray());

//=================================================

// Bônus (Bubble Sort)

let v = [5 , 3 , 2 , 4 , 7 , 1 , 0 , 6];
function orderList(array) {
  for (let i = 0; i < v.length; i += 1) {
    for (let j = 0; j < v.length - i; j += 1) {
      if (v[j] > v[j + 1]) {
        aux = v[j];
        v[j] = v[j + 1];
        v[j + 1] = aux;
      }
    }
  }
  return v;
};
//console.log(orderList(v));

//=================================================