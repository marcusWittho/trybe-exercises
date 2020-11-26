// Array utilizado nos exercícios do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 (Exibe o conteúdo do array)
// for (number of numbers) {
//   console.log(number);
// }

//=================================================

// Exercício 2 (Soma todos os itens do array)
let total = numbers.reduce((total, number) => total + number, 0);
console.log(total);

//=================================================

