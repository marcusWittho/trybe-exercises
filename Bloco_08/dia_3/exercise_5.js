
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const array = names.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.split(',');
  }, '');

  return array.match(/a|A/g).length;
}

assert.deepStrictEqual(containsA(), 20);