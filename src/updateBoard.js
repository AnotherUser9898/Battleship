import { toWords } from "./setup";
function updateBoard(gameboard,player) {
  gameboard.allShips.forEach((value, key, map) => {
    if (key.getOrientation() == "horizontal") {
      const start = value[1];
      const end = value[3];
      const row = value[0];

      for (let i = start; i <= end; i++) {
        const position = `${toWords[row]}-${toWords[i]}`;
        const selector = `.${player} > .${position}`;
        const cell = document.querySelector(selector);
        cell.style.cssText +=
          "border-top: solid 2px blue; border-bottom: solid 2px blue; background-color: #e2e8f0";
        if (i == start) {
          cell.style.cssText += "border-left: solid 2px blue;";
        }
        
        if (i == end) {
          cell.style.cssText += "border-right: solid 2px blue;";
        }
      }
    } else {
      const start = value[0];
      const end = value[2];
      const col = value[1];

      for (let i = start; i <= end; i++) {
        const position = `${toWords[i]}-${toWords[col]}`;
        const selector = `.${player} > .${position}`;
        const cell = document.querySelector(selector);
        cell.style.cssText +=
          "border-left: solid 2px blue; border-right: solid 2px blue; background-color: #e2e8f0";
        if (i == start) {
          cell.style.cssText += "border-top: solid 2px blue;";
        } else if (i == end) {
          cell.style.cssText += "border-bottom: solid 2px blue;";
        }
      }
    }
  });
}

export { updateBoard };
