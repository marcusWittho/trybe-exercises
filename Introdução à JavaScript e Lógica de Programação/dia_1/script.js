function updatePiece() {
  let cboPieces = document.querySelector('#cboPieces');
  let piece = cboPieces.options[cboPieces.selectedIndex].value;
  let validMoves = '';

  switch (piece) {
    case 'Peões':
      validMoves = 'Se movimenta uma casa para frente, caso seja o primeiro movimento, pode se mover duas casas, seu ataque deve ser feito na diagonal.';
      break;
    case 'Torres':
      validMoves = 'Se movimenta na vertical ou horizontal, sem restrição de quantidade de casas.';
    break;
    case 'Cavalos':
      validMoves = 'Se movimenta duas casas nas vertical ou horizontal, e uma casa no sentido perpendicular àquele.';
      break;
    case 'Bispos':
      validMoves = 'Se movimenta no sentido diagonal, sem restrição de quantidade de casas.';
    break;
    case 'Rainha':
      validMoves = 'Se movimenta de forma livre, sem restrição de direção ou quantidade de casas.';
      break;
    case 'Rei':
      validMoves = 'Se movimenta uma casa em qualquer direção.';
    break;
  }

  let outText = document.querySelector('#outText');
  outText.textContent = validMoves;
};
