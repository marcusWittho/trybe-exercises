/* const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

addProperties(customer, 'lastName', 'Ferreira');

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

function addProperties(object, key, value) {
  let newKey = key;
  const keyValue = value;
  object[newKey] = keyValue;
}

console.log(Object.keys(customer));
console.log(customer); */

//================================================================================

/* const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function studentSkills(student) {
  const skills = Object.keys(student);

  for (let index = 0; index < skills.length; index += 1) {
    console.log(`${skills[index]}, nível: ${student[skills[index]]}`);
  }

  // for (let skill in skills) {
  //   console.log(`${skill}, nível: ${student[skills[skill]]}`);
  // }
}

studentSkills(student1);
studentSkills(student2); */

//================================================================================

/* const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

console.log(Object.entries(student1));

let map = new Map(Object.entries(student1));
console.log(map); */

//================================================================================

/* const classe = {
  classe: 1,
};
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const result = Object.assign(classe, student1, student2);
console.log(result); */