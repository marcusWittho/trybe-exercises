// SPREAD
/*
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const spreadArray = [...numbers1, ...numbers2];
console.log(spreadArray); // [ 1, 2, 3, 4, 5, 6 ]

//-------------------

const imc = (peso, altura) => (peso / (altura**2)).toFixed(2);
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo)); // 20.76

//-------------------

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};
const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};
const customer = {...people, ...about};
console.log(customer);
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
}

//-------------------

const specialFruits = ['laranja', 'morango', 'banana'];
const addtionalItens = ['geléia', 'chocolate'];
const fruitSalad = (fruit, additional) => {
  const ingredients = [...fruit, ...additional];
  return ingredients;
}
console.log(fruitSalad(specialFruits, addtionalItens));
*/
//========================================================

// REST
/*
function manyParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`
};
console.log(manyParams('a', 'b', 'c'));
console.log(manyParams('a', 1, {}, [1, 2, 3]));

//-------------------

const sum = (...args) => {
  return args.reduce((previousValue, currentValue) => {
   return previousValue + currentValue;
  }, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6));
*/
//========================================================

// OBJECT DESTRUCTURING
/*
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name: productName, price, seller } = product;
console.log(`Nome: ${productName}, preço: ${price}, loja: ${seller}`);

//-------------------

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática',
};
const { a: studentName, b: classAssigned, c: subject} = student;
console.log(`Estudante: ${studentName}, classe: ${classAssigned}, matéria: ${subject}`);

//------------------

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const printProductDetails = ({ name: productName, price, seller }) => {
  console.log(`Promoção! ${productName} por apenas ${price} é só aqui: ${seller}`);
}
printProductDetails(product);
*/
//========================================================

// ARRAY DESTRUCTURING
/*
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;
console.log(`1º: ${firstCountry}, 2º: ${secondCountry}, 3º: ${thirdCountry}, 4º: ${fourthCountry}`);
*/
//========================================================

// DEFAULT DESTRUCTURING
/*
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
}
const { nationality = 'not informed' } = person;
console.log(nationality);
*/
//------------------
/*
const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
console.log(nationality(person));
console.log(nationality(otherPerson));
*/
//========================================================

// OBJECT PROPERTY SHORTHAND
/*
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
console.log(newUser(1, 'Marcus', 'marcus@gmail.com'));
console.log(newUser(2, 'Henrique', 'enrique@gmail.com'));
*/
//========================================================

// DEFAULT PARAMETERS
/*
const multiply = (number, value = 1) => {
  return number * value;
}
console.log(multiply(8, 2));
*/
//========================================================
