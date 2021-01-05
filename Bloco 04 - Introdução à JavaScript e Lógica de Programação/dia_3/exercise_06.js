function primeNumber(number) {
  let isPrimeNumber = true;

  for (let i = 2; i < number; i += 1) {
    if (number % i == 0) {
      isPrimeNumber = false;
      break;
    }
  }
  if (isPrimeNumber) {
    console.log('Este número é primo.');
  }else {
    console.log('Este núumero não é primo.');
  }
};
primeNumber(997);