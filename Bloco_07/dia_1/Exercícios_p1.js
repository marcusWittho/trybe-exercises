// const testingScope = (escopo) => {
//   var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   if (escopo === true) {
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

//=================================================================================

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);
oddsAndEvens = `Os números ${oddsAndEvens.join(',')} se encontram ordenados de forma crescente!`


// let bubbleSort = (array) => {
//   let test;
//   do {
//       test = false;
//       for (let i = 0; i < array.length; i += 1) {
//           if (array[i] > array[i + 1]) {
//               let tmp = array[i];
//               array[i] = array[i + 1];
//               array[i + 1] = tmp;
//               test = true;
//           }
//       }
//   } while (test);
//   return array;
// };

console.log(oddsAndEvens);
// console.log(bubbleSort(oddsAndEvens));