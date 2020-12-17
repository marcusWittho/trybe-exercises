const myTasks = document.querySelector('.my-tasks');
const taskList = document.querySelector('.task-list-container');
const taskInput = document.querySelector('#task-input');
const btnAdd = document.querySelector('#btn-add');
const daysOfMonth = document.querySelector('#days');

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

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function decDays() {
  let ulDays = document.querySelector('#days');

  for (let item in dezDaysList) {
    let liDays = document.createElement('li');
    liDays.className = 'day';
    liDays.innerText = dezDaysList[item];
    ulDays.appendChild(liDays);
  }
}
decDays();

// Exercício 2
let buttonsContainer = document.querySelector('.buttons-container');
function createButtonHoliday(string) {

  let btnHoliday = document.createElement('button');

  btnHoliday.setAttribute('type' , 'button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = string;
  buttonsContainer.appendChild(btnHoliday);
}
createButtonHoliday('Feriado');

// Exercício 3
let liHoliday = document.querySelectorAll('#days li')[26];
liHoliday.className += ' holiday';

function changeColorHoliday() {
  if (liHoliday.style.backgroundColor) {
    liHoliday.style.backgroundColor = '';
    liHoliday.style.borderRadius = '';
  }else {
    liHoliday.style.backgroundColor = 'rgb(400 , 400 , 400)';
    liHoliday.style.borderRadius = '20px';
  }
}
let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', changeColorHoliday);

// Exercício 4
function createButtonFriday(string) {
  let btnFriday = document.createElement('button');

  btnFriday.setAttribute('type' , 'button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = string;
  buttonsContainer.appendChild(btnFriday);
}
createButtonFriday('Sextou!!');

// exercício 5
let friday = document.querySelectorAll('#days li');
let allFridays = [5 , 12 , 19 , 26];

for (let item of allFridays) {
  friday[item].className += ' friday';
}

function changeFriday() {
  for (let item of allFridays) {
    if (friday[item].innerText !== 'Sextou!!') {
      friday[item].innerText = 'Sextou!!';
    }else {
      friday[item].innerText = dezDaysList[item];
    }
  }
}
let btnSextou = document.querySelector('#btn-friday');
btnSextou.addEventListener('click', changeFriday)

// Exercício 6
daysOfMonth.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '24px';
});

daysOfMonth.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = '20px';
});

// Exercício 7
function tasks(string) {
  const span = document.createElement('sppan');
  span.innerText = string;
  myTasks.appendChild(span);
}
tasks('Dias de projeto: ')

// Exercício 8
function colorTask(color) {
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}
colorTask('green');

// Exerecício 9
const copyColor = document.querySelector('.task');
copyColor.addEventListener('click', () => {
  copyColor.classList.toggle('selected');
});

// Exercício 10
function getColor() {
  let reference = 'rgb(119, 119, 119)';
  const myTasksDiv = document.querySelector('.my-tasks div');
  if (myTasksDiv.classList.contains('selected')) {
    const selected = document.querySelector('.selected');
    reference = selected.style.backgroundColor;
  }
  return reference;
}

daysOfMonth.addEventListener('click', (event) => {
  const reference = document.querySelector('.task').style.backgroundColor;
  if (event.target.style.color === reference) {
    event.target.style.color = 'rgb(119, 119, 119)';
  } else {
    event.target.style.color = getColor();
  }
})

// Bônus
function addTask(string) {
  const li = document.createElement('li');
  li.innerText = string;
  li.style.display = 'block';
  taskList.appendChild(li);
}

function checksAndAdds() {
  if (!taskInput.value) {
    alert('Por favor, preencha o campo. :)');
  } else {
    addTask(taskInput.value);
    taskInput.value = '';
    taskInput.focus();
  }
}

btnAdd.addEventListener('click', checksAndAdds);
taskInput.addEventListener('keypress', (tecla) => {
  if (tecla.keyCode === 13) {
    checksAndAdds();
  }
});
