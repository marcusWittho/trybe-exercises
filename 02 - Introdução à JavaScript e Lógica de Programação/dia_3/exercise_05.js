function newTree(n) {
  let star = '';
  let middle = Math.ceil(n / 2);
  let left = middle;
  let right = middle;

  for (let row = 0; row  < middle; row += 1) {
    for (let column = 1; column <= n; column += 1) {
      if (column === left || column === right || left === 1) {
        star += '*';
      }else {
        star += ' ';
      }
    }
    console.log(star);
    star = '';
    left -= 1;
    right += 1;
  }
};
newTree(7);