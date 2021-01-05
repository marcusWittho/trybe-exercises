function inverseTriangle(n) {
  let star = '';
  let count = n;

  for (let row = 0; row < n; row += 1) {
    for (let column = 0; column <= n; column += 1) {
      if (column < count) {
        star += ' ';
      }else {
        star += '*';
      }
    }
    console.log(star);
    star = '';
    count -= 1;    
  }  
};
inverseTriangle(5);