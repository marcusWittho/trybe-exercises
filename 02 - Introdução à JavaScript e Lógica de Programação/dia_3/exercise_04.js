function tree(n) {
  let star = '';
  let middle = Math.ceil(n / 2);
  let left = middle - 1;
  let right = middle + 1;

  for (let row = 0; row < middle; row += 1) {
    for (let column = 1; column <= n; column += 1) {
       if (column > left && column < right) {
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
tree(7);