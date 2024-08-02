import { renderShipHit, renderMisHit } from "./render-hit";
function executeAttack(gameboard, DOMCell, x, y) {
  if (DOMCell.dataset.isHit == 1) {
    return false;
  } else {
    if (gameboard.receiveAttack(x, y)) {
      renderShipHit(DOMCell);
      if (gameboard.allShipsSunk()) {
        alert("The Computer won");
      }
    } else {
      renderMisHit(DOMCell);
    }
    DOMCell.dataset.isHit = 1;
    return true;
  }

}

export { executeAttack };
