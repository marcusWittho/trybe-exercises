function salarioLiquido(salario) {
  let inss = 0;
  let salarioDeduzidoInss = 0;
  let ir = 0;
  let salarioDeduzidoInssEIr = 0;

  if (salario <= 1556.94) {
    inss = salario * 0.08;
  }else if (salario > 1556.94 && salario <= 2594.92) {
    inss = salario * 0.09;
  }else if (salario > 2594.92 && salario <= 5189.82) {
    inss = salario * 0.11;
  }else {
    inss = 570.88
  }

  salarioDeduzidoInss = salario - inss;
  
  if (salarioDeduzidoInss <= 1903.98) {
    ir = 0;
  }else if (salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65) {
    ir = (salarioDeduzidoInss * 0.075) - 142.80;
  }else if (salarioDeduzidoInss > 2826.65 && salarioDeduzidoInss <= 3751.05) {
    ir = (salarioDeduzidoInss * 0.15) - 354.80;
  }else if (salarioDeduzidoInss > 3751.05 && salarioDeduzidoInss <= 4664.68) {
    ir = (salarioDeduzidoInss * 0.225) - 636.13;
  }else {
    ir = (salarioDeduzidoInss * 0.275) - 869.36;
  }

  return salarioDeduzidoInss - ir;
}

console.log(salarioLiquido(3000));
