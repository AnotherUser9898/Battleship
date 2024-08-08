import { renderShipHit, renderMisHit } from "./render-hit";
function executeAttack(gameboard, DOMCell, x, y) {
  let status;
  let miss;
  let shipHit;
  if (DOMCell.dataset.isHit == 1) {
    status = false;
  } else {
    if (gameboard.receiveAttack(x, y)) {
      renderShipHit(DOMCell);
      shipHit = true;
      if (gameboard.allShipsSunk()) {
        alert("The Computer won");
      }
    } else {
      renderMisHit(DOMCell);
      miss = true;
    }
    status = true;
    DOMCell.dataset.isHit = 1;
  }
  return { status, miss, shipHit };
}

export { executeAttack };
