import {
  currentPlayer,
  finalizeLayout,
  layoutFinalized,
  playGame,
} from "./driver";
import { updateBoard } from "./updateBoard";
import { removeAllInlineStyles } from "./remove-all-inline-styles";
import { aboveToOnGrid } from "./above-to-on-grid";
import { renderPlayerSwitch } from "./render-player-switch";
function setupEventListeners(yourGameboard, opponentGameboard) {
  const yourCells = document.querySelectorAll(".your > tr > .cell");
  const oppenentCells = document.querySelectorAll(".opponent > tr > .cell");

  yourCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      playGame(cell, x, y);
    });
  });

  oppenentCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (currentPlayer == "opponent") {
        alert("Not your turn");
        return;
      }
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      playGame(cell, x, y);
    });
  });
}

export { setupEventListeners };
