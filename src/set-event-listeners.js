import {
  mode,
  playGame,
  playGameVsHuman,
  layoutFinalized,
  setupComputerGame,
  setupHumanGame,
} from "./driver";
import { renderModeChange } from "./render-mode-change";
import { passDevice } from "./pass-device";
import { removePlayerSwitchStyles } from "./remove-all-inline-styles";
// sets up individual event listeners for grid cells
function setupEventListeners() {
  const yourCells = document.querySelectorAll(".your > tr > .cell");
  const oppenentCells = document.querySelectorAll(".opponent > tr > .cell");

  yourCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      if (mode == "Computer") {
        playGame(cell, x, y, false);
      } else {
        playGameVsHuman(cell, x, y);
      }
    });
  });

  oppenentCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      if (mode == "Computer") {
        playGame(cell, x, y, false);
      } else {
        playGameVsHuman(cell, x, y);
      }
    });
  });
}

// adds event listeners that change button style and re-renders the page to indicate game mode
function setModeChangeButtonEvents() {
  const computerButton = document.querySelector("#computer-button");
  const humanButton = document.querySelector("#human-button");

  computerButton.addEventListener("click", (event) => {
    if (layoutFinalized) {
      return;
    }
    renderModeChange(event);
    removePlayerSwitchStyles();
    setupComputerGame();
  });

  humanButton.addEventListener("click", (event) => {
    if (layoutFinalized) {
      return;
    }
    renderModeChange(event);
    removePlayerSwitchStyles();
    setupHumanGame();
  });
}

// sets up pass device event listener
function addPassDeviceEvent() {
  const passDeviceButton = document.querySelector(".pass-device");
  passDeviceButton.addEventListener("click", passDevice);
}

export { setupEventListeners, setModeChangeButtonEvents, addPassDeviceEvent };
