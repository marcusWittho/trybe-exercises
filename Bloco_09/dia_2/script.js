// const { default: fetch } = require("node-fetch");
/*
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = (url) => {
  // Adicionar lógica aqui!
  fetch(url, myObject)
    .then(response => response.json())
    .then(data =>
      document.querySelector('#jokeContainer').innerText = data.joke
    );
};
 */
//===================================================
/*
const fetchPromise  = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const raised2 = myArray.map(number => number**2);
    const sum = raised2.reduce((acc, curr) => acc + curr, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
    .then(array => array.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!")
    );
};
fetchPromise();
*/
//===================================================

const arraynumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );

  const raised2 = myArray.map(number => number**2);
  const sum = raised2.reduce((acc, curr) => acc + curr, 0);



}

window.onload = () => fetchJoke(API_URL);