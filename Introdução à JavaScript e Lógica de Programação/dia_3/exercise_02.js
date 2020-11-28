function triangle(n) {
  let star = '';
  for (let i = 0; i < n; i += 1) {
    star += '*';
    console.log(star);
  }
  return star;
};
triangle(5);
