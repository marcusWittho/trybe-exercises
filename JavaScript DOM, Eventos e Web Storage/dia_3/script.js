function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDays = document.querySelector('#days');


for (let item of dezDaysList) {
  let liDays = document.createElement('li');

  if (item !== 26) {
    liDays.className = 'day';
  }else {
    liDays.className = 'day holiday';
  }
  
  liDays.innerText = dezDaysList[item];
  
  ulDays.appendChild(liDays);
}

// Exercício 2
function createButton(string) {
  let buttonsContainer = document.querySelector('.buttons-container');

  let btnHoliday = document.createElement('button');

  btnHoliday.setAttribute('type' , 'button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = 'Feriados';
  
  buttonsContainer.appendChild(btnHoliday);
}
createButton('Feriado');

// Exercício 3
function changeColorHoliday() {
  let holiday = document.querySelector('.holiday');

  if (holiday.style.backgroundColor) {
    holiday.style.backgroundColor = '';
    holiday.style.borderRadius = '';
  }else {
    holiday.style.backgroundColor = 'rgb(400 , 400 , 400)';
    holiday.style.borderRadius = '20px';
  }
}
let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', changeColorHoliday);
