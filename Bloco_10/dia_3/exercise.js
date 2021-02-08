const randomNumber = () => Math.floor(Math.random() * 101);

const caseSensitivity = (string) => string.toUpperCase();

const returnLetter = (string) => string[0];

const concatString = (string1, string2) => string1.concat(string2);

module.exports = { randomNumber, caseSensitivity, returnLetter, concatString };
