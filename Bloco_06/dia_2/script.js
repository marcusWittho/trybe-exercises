const states = document.querySelector('#state');
const btnSend = document.querySelector("#btn-send");
const btnClear = document.querySelector("#btn-clear");
const form = document.querySelector("#form");
const datepicker = document.querySelector('#datepicker');

function createOptions() {
  const stateList_1 = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const stateList_2 = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let index = 0; index < stateList_1.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = stateList_1[index];
    option.value = stateList_2[index];
    states.appendChild(option);
  }
}
createOptions();

// function dateValidation() {
//   const arrayDate = getDate.value.split('/');
//   let isValid = true;

//   if (arrayDate[0] < 0 || arrayDate[0] > 31) {
//     isValid = false;
//   } else if (arrayDate[1] < 0 || arrayDate[1] > 12) {
//     isValid = false;
//   } else if (arrayDate[2] <= 0 ) {
//     isValid = false;
//   };

//   return (isValid) ? true : alert('Preencha corretamente o campo data de início.');
// }

function data() {
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelectorAll('textarea');
  const states = document.querySelector('#state');
  const insertedData = document.querySelector('#inserted-data');
  // const radio = document.querySelector('input[type="radio"]:checked').value;
  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  paragraph.innerText = `
    Olá ${inputs[0].value}, vamos conferir seus dados.\n
    E-mail: ${inputs[1].value}\n
    CPF: ${inputs[2].value}\n
    Endereço: ${inputs[3].value}\n
    Cidade: ${inputs[4].value}\n
    Estado: ${states.value}\n
    Moradia: {radio}\n
    \n
    Agora os dados profissionais.\n
    Resumo do currículo: ${textareas[0].value}\n
    Cargo: ${inputs[7].value}\n
    Descrição do cargo: ${textareas[1].value}\n
    Data de início: ${inputs[8].value}
  `;
  insertedData.appendChild(paragraph);
}

btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  data();
});

btnClear.addEventListener('click', () => {
  const insertedData = document.querySelector('#inserted-data');
  const paragraph = document.querySelector('.paragraph');
  if(paragraph) insertedData.removeChild(paragraph);
});

let picker = new Pikaday({ field: document.getElementById('datepicker') });
