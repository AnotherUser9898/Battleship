import { toWords } from "./setup";
function updateBoard(gameboard, player) {
  gameboard.allShips.forEach((value, key, map) => {
    if (key.getOrientation() == "horizontal") {
      const start = value[1];
      const end = value[3];
      const row = value[0];

      const position = `${toWords[row]}-${toWords[start]}`;
      const selector = `.${player} > tr > .${position} > .ship-node`;
      const cell = document.querySelector(selector);
      cell.dataset.present = 1;
      cell.style.cssText += "border: solid 2px blue;";
      const width = key.getLength() * 2;
      cell.style.cssText += `width: ${width}em; height: 2em; position:absolute; cursor: move !important; z-index: 1;`;
    } else {
      const start = value[0];
      const end = value[2];
      const col = value[1];

      const position = `${toWords[start]}-${toWords[col]}`;
      const selector = `.${player} > tr > .${position} > .ship-node`;
      const cell = document.querySelector(selector);
      cell.dataset.present = 1;
      cell.style.cssText += "border: 2px solid blue;";
      const height = key.getLength() * 2;
      cell.style.cssText += `height: ${height}em; width: 2em;position: absolute; cursor: move !important; z-index: 1;`;
    }
  });
}

export { updateBoard };
