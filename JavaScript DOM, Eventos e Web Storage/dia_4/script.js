const btnDark = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const title = document.querySelector('#title');
const main = document.querySelector('#main');
const text = document.querySelector('.text');
const label = document.querySelector('label');
const inTextColor = document.querySelector('.in-text-color');
const inFontSize = document.querySelector('.in-font-size');
const inLineHeight = document.querySelector('.in-line-height');
const slcFont = document.querySelector('.slc-font');

if (localStorage.getItem('pageConfig')) {
  const restore = JSON.parse(localStorage.getItem('pageConfig'));
  inTextColor.value = restore[1];
  inFontSize.value = restore[2];
  inLineHeight.value = restore[3];
  slcFont.value = restore[4];

  if (restore[0] === 'dark') {
    darkMode()
  }

  text.style.color = restore[1];
  text.style.fontSize = `${restore[2]}px`;
  text.style.lineHeight = restore[3];
  text.style.fontFamily = restore[4];
}

function localSave() {
  const config = [body.className, inTextColor.value, inFontSize.value, inLineHeight.value, slcFont.value];
  localStorage.setItem('pageConfig', JSON.stringify(config));
}

function darkMode() {
  if (body.style.backgroundColor === 'rgb(60, 60, 60)') {
    body.classList.remove('dark');
    body.style.backgroundColor = 'rgb(245, 245, 245)';
    main.style.backgroundColor = 'rgb(255, 248, 243)';
    title.style.color = 'rgb(33, 33, 33)';
    text.style.color = 'rgb(33, 33, 33)';
    label.style.color = 'rgb(33, 33, 33)';
    localSave()
  } else {
    body.classList.add('dark');
    body.style.backgroundColor = 'rgb(60, 60, 60)';
    main.style.backgroundColor = 'rgb(120, 120, 120)';
    title.style.color = 'rgb(240, 240, 240)';
    text.style.color = 'rgb(240, 240, 240)';
    label.style.color = 'rgb(240, 240, 240)';
    localSave()
  }
}
btnDark.addEventListener('click', darkMode);

inTextColor.addEventListener('change', () => {
  text.style.color = inTextColor.value;
  localSave()
})

inFontSize.addEventListener('input', () => {
  text.style.fontSize = `${inFontSize.value}px`;
  localSave()
})

inLineHeight.addEventListener('change', () => {
  text.style.lineHeight = inLineHeight.value;
  localSave()
})

slcFont.addEventListener('change', () => {
  text.style.fontFamily = slcFont.value;
  localSave()
})