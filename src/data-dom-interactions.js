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

function draggableEvent() {
  const shipNodes = document.querySelectorAll("[data-present]");
  shipNodes.forEach((shipNode) => {
    shipNode.onmousedown = (event) => {
      let shiftX = event.clientX - shipNode.getBoundingClientRect().left;
      let shiftY = event.clientY - shipNode.getBoundingClientRect().top;

      shipNode.style.zIndex = 1000;
      document.body.append(shipNode);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        shipNode.style.left = pageX - shiftX + "px";
        shipNode.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      shipNode.onmouseup = () => {
        console.log("fired mouseup");
        document.removeEventListener("mousemove", onMouseMove);
        shipNode.onmouseup = null;
      };
    };
    shipNode.ondragstart = () => {
      return false;
    };
  });
}

export { executeAttack, draggableEvent };
