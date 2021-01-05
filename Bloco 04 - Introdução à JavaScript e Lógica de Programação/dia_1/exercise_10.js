let custo = 2;
let valorDeVenda = 10;
let imposto = 0.20;

let custoTotal = custo + (custo * imposto);
let lucro = valorDeVenda - custoTotal;

console.log(`Ao vender 1000 unidades deste produto, o lucro será de ${lucro * 1000}`)
