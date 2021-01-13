// function fatorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return (num * fatorial(num - 1));
//   }
// }

// const fatorial = (num) => (num === 0) ? 1 : (num * fatorial(num - 1));

// console.log(fatorial(5));

//===================================================================

function longestWord(string) {
  let array = string.split(' ');
  let longest = '';

  for (word of array) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* // Não funcionou, não entendi
for (let index = 0; index < string.length; index += 1) {
  if (array[index].length > longest.length) {
    longest = array[index];
  }
} */
//===================================================================
