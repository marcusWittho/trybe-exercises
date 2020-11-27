// Array utilizado nos exercícios do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 (Exibe o conteúdo do array)
function show(array) {
  for (number of array) {
    console.log(number);
  }
};
<<<<<<< HEAD
//show(numbers);
=======
show(numbers);
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

//=================================================

// Exercício 2 (Soma todos os itens do array)
function sum(array) {
  let total = array.reduce((total, number) => total + number, 0);
  return total;
};
<<<<<<< HEAD
//console.log(sum(numbers));
=======
console.log(sum(numbers));
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

//=================================================

// Exercício 3 (Cálculo da média aritmética )
function arithmeticAverage(array) {
  let total = sum(array) / numbers.length;
  return total;
};
<<<<<<< HEAD
//console.log(arithmeticAverage(numbers));
=======
console.log(arithmeticAverage(numbers));
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

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
<<<<<<< HEAD
//console.log(condition());
=======
console.log(condition());
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

//=================================================

// Exercício 5 (Retorna o maior valor contido no array)
function higherNumber(array) {
  let higher = Math.max(...array);
  return higher;
};
<<<<<<< HEAD
//console.log(higherNumber(numbers));
=======
console.log(higherNumber(numbers));
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

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
<<<<<<< HEAD
//console.log(totalOdd(numbers));
=======
console.log(totalOdd(numbers));
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

//=================================================

// Exercício 7 (Retorna o menor valor contido no array)
function smallestNumber(array) {
  let smaller = Math.min(...array);
  return smaller;
};
<<<<<<< HEAD
//console.log(smallestNumber(numbers));
=======
console.log(smallestNumber(numbers));
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

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
<<<<<<< HEAD
//createArray();
=======
createArray();
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa

//=================================================

// Exercício 9 (Retorna a divisão por 2 de todos os elementos do array)
function divideElements(array) {
  for (number of array) {
    console.log(number / 2);
  }  
};
<<<<<<< HEAD
//divideElements(createArray());

//=================================================

// Bônus (Bubble Sort)

let v = [5 , 3 , 2 , 4 , 7 , 1 , 0 , 6];

for (let i = 0; i < v.length; i += 1) {
  for (let j = 0; j < v.length - i; j += 1) {
    if (v[j] > v[j + 1]) {
      aux = v[j];
      v[j] = v[j + 1];
      v[j + 1] = aux;
    }
  }
};


let test = [3, 4, 5, 6];
[3, 4].move(0, 1);
console.log(test);
=======
divideElements(createArray());

//=================================================
>>>>>>> ec1b2c402c2e6d97021fd7c77df2407f709de6aa
