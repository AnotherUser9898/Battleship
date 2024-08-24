import { renderShipHit, renderMisHit } from "./render-hit";
import { toWords } from "./setup";
function executeAttack(gameboard, DOMCell, x, y) {
  let status;
  let miss;
  let shipHit = false;
  if (DOMCell.dataset.isHit == 1) {
    status = false;
  } else {
    if (gameboard.receiveAttack(x, y)) {
      renderShipHit(DOMCell);
      shipHit = true;
    } else {
      renderMisHit(DOMCell);
      miss = true;
    }
    status = true;
    DOMCell.dataset.isHit = 1;
  }
  return { status, miss, shipHit, x, y };
}

function highlight(ship, startCell) {
  const x = Number(startCell.dataset.x);
  const y = Number(startCell.dataset.y);

  const mouseEvent = new Event("mouseup");

  if (ship.dataset.orientation == "horizontal") {
    let spaceAvailable = true;
    const nodes = [];
    for (let i = 0; i < ship.dataset.length; i++) {
      const node = document.querySelector(
        `.${toWords[x]}-${toWords[y + i]}>.ship-node`
      );
      nodes.push(node);
      if (!node || node.hasAttribute("data-ship-exists")) {
        spaceAvailable = false;
      }
    }
    if (spaceAvailable) {
      nodes[0].dataset.x = ship.dataset.shipX;
      nodes[0].dataset.y = ship.dataset.shipX;
      ship.dataset.shipX = startCell.dataset.x;
      ship.dataset.shipY = startCell.dataset.y;
      const shipParent = document.querySelector(
        `.${toWords[ship.dataset.shipX]}-${toWords[ship.dataset.shipY]}`
      );
      shipParent.appendChild(nodes[0]);
      startCell.appendChild(ship);
      ship.dispatchEvent(mouseEvent);
      ship.style.cssText += "left: 0px; top: 0px;";
    } else {
      return;
    }
  }
  if (ship.dataset.orientation == "vertical") {
    let spaceAvailable = true;
    const nodes = [];
    for (let i = 0; i < ship.dataset.length; i++) {
      const node = document.querySelector(
        `.${toWords[x + i]}-${toWords[y]}>.ship-node`
      );
      nodes.push(node);
      if (!node || node.hasAttribute("data-ship-exists")) {
        spaceAvailable = false;
      }
    }
    if (spaceAvailable) {
      nodes[0].dataset.shipX = ship.dataset.shipX;
      nodes[0].dataset.shipY = ship.dataset.shipY;
      ship.dataset.shipX = startCell.dataset.x;
      ship.dataset.shipY = startCell.dataset.y;
      const shipParent = document.querySelector(
        `.${toWords[ship.dataset.shipX]}-${toWords[ship.dataset.shipY]}`
      );
      shipParent.appendChild(nodes[0]);
      startCell.appendChild(ship);
      setTimeout(() => {
        ship.dispatchEvent(mouseEvent);
      }, 500);

      ship.style.cssText += "left: 0px; top: 0px;";
    } else {
      return;
    }
  }
}
/*
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

      let currentDroppable = null;
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        shipNode.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        shipNode.hidden = false;

        if (!elemBelow) {
          return;
        }

        let droppableBelow = elemBelow.closest(".cell");
        let spaceAvailable = true;
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            //leave area
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            highlight(shipNode, droppableBelow);
          }
        }
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
  */

export { executeAttack };
