// Funciona no navegador

// let piece = prompt('Escolha uma peça de xadrez.');

// switch (piece.toLowerCase()) {
//   case 'peão':
//   case 'peões':
//     alert('Se movimenta uma casa para frente, caso seja o primeiro movimento, pode se mover duas casas, seu ataque deve ser feito na diagonal.');
//     break;
//   case 'torre':
//   case 'torres':
//     alert('Se movimenta na vertical ou horizontal, sem restrição de quantidade de casas.');
//   break;
//   case 'cavalo':
//   case 'cavalos':
//     alert('Se movimenta duas casas nas vertical ou horizontal, e uma casa no sentido perpendicular àquele.');
//     break;
//   case 'bispo':
//   case 'bispos':
//     alert('Se movimenta no sentido diagonal, sem restrição de quantidade de casas.');
//   break;
//   case 'dama':
//   case 'rainha':
//     alert('Se movimenta de forma livre, sem restrição de direção ou quantidade de casas.');
//     break;
//   case 'rei':
//     alert('Se movimenta uma casa em qualquer direção.');
//   break;
// }

//==================================================
// Funciona no console

let piece = 'Rainha';

switch (piece.toLowerCase()) {
  case 'peão':
  case 'peões':
    console.log('Se movimenta uma casa para frente, caso seja o primeiro movimento, pode se mover duas casas, seu ataque deve ser feito na diagonal.');
    break;
  case 'torre':
  case 'torres':
    console.log('Se movimenta na vertical ou horizontal, sem restrição de quantidade de casas.');
  break;
  case 'cavalo':
  case 'cavalos':
    console.log('Se movimenta duas casas nas vertical ou horizontal, e uma casa no sentido perpendicular àquele.');
    break;
  case 'bispo':
  case 'bispos':
    console.log('Se movimenta no sentido diagonal, sem restrição de quantidade de casas.');
  break;
  case 'dama':
  case 'rainha':
    console.log('Se movimenta de forma livre, sem restrição de direção ou quantidade de casas.');
    break;
  case 'rei':
    console.log('Se movimenta uma casa em qualquer direção.');
  break;
}
