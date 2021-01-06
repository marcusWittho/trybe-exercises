let nota = 53;

let notaFinal = ['A' , 'B' , 'C' , 'D' , 'E' , 'F'];
let referencia = 90;
for (let i = 0; i < notaFinal.length; i++) {
  if (nota >= referencia) {
    console.log(notaFinal[i]);
    break;
  }
  referencia -= 10;
}
