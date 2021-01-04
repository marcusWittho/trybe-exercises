const country = document.querySelector('#country');
const getDate = document.querySelector('#date');

function createOptions() {
  const countryList = ['Brasil', 'Argentina', 'Uruguai', 'Venezuela', 'EUA'];
  for (let index = 0; index < countryList.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = countryList[index];
    country.appendChild(option);
  }
}
createOptions();

function dateValidation() {
  const arrayDate = getDate.value.split('/');
  let isValid = true;

  if (arrayDate[0] < 0 || arrayDate[0] > 31) {
    isValid = false;
  } else if (arrayDate[1] < 0 || arrayDate[1] > 12) {
    isValid = false;
  } else if (arrayDate[2] < 0 ) {
    isValid = false;
  };

  return isValid;

}
dateValidation();