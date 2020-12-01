//  Exercício 1
function ehPalindromo(string) {
  let reverseString = string.split('');  
  reverseString = reverseString.reverse().toString().replace(/,/g, '');
  
  return (string === reverseString) ? true : false;
}

// console.log(ehPalindromo('arara'));
// console.log(ehPalindromo('desenvolvimento'));
//====================================================

//  Exercício 2
function maxNumberPosition(array) {
  return array.indexOf(Math.max(...array));
}

// console.log(maxNumberPosition([2, 3, 6, 7, 10, 1]));
//====================================================

//  Exercício 3
function minNumberPosition(array) {
  return array.indexOf(Math.min(...array));
}

// console.log(minNumberPosition([2, 4, 6, 7, 10, 0, -3]));
//====================================================

//  Exercício 4
function biggestName(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (result.length > array[i].length) {
      continue;
    }else {
      result = array[i];
    }
  }
  return result;
}

// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
//====================================================

//  Exercício 5
function maxRepeat(array) {
  let list = array.sort();
  
  
  return lista
}

console.log(maxRepeat([2, 3, 2, 5, 8, 2, 3]));
