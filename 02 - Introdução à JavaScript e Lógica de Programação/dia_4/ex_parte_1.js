// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// };

// console.log(`A jogadora ${player.name} tem ${player.age} anos de idade.`);
// console.log(`A jogadora ${player.name} foi eleita a melhor do mundo po ${player.bestInTheWorld.length} vezes.`);
// console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`)
//=============================================================


// let car = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
// };

// for (let i in car) {
//   console.log(i, car[i]);
// }
//=============================================================

//  Parte 1 - Objetos e For/In
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'sim',
};

let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'sim',
};

console.log(`Bem-vinda, ${info.personagem}`)
console.log(info);

for (key in info) {
  console.log(key)
};

for (key in info) {
  console.log(info[key]);
};

for (key in info) {
  if (info[key] === infoPatinhas[key]) {
    console.log('Ambos recorrentes');
  }else {
    console.log(`${info[key]} e ${infoPatinhas[key]}`);
  }
};
