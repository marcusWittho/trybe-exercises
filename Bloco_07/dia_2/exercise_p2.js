const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 1
function addShift(obj, key, value) {
  obj[key] = value;
}
addShift(lesson2, 'turno', 'manhã');

// Requisito 2
const listKeys = obj => Object.keys(obj);

// Requisito 3
const objLength = obj => Object.keys(obj).length;

// Requisito 4
const listValues = obj => Object.values(obj);

// Requisito 5
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

// Requisito 6
function numberOfStudents() {
  const total = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  return total;
}

// Requisito 7
