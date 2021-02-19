function square(number) {
  let stars = '';
  if (number > 1) {
    for (let i = 0; i < number; i += 1) {
      for (let j = 0; j < number; j += 1) {
        stars += '*';
      }
      stars += '\n';
    }
  }else {
    stars = 'Insira um valor maior que 1.';
  }
  return stars;
};
console.log(square(7));