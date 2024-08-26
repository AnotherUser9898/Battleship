import { toWords } from "./setup";
import { updateBoard } from "./updateBoard";
import { Player } from "./player";
import {
  setupEventListeners,
  setModeChangeButtonEvents,
} from "./set-event-listeners";
import { executeAttack } from "./data-dom-interactions";
import { renderPlayerSwitch } from "./render-player-switch";
import { renderPassDevice } from "./pass-device";
import { getRandomNumber } from "./random-number";
import { removeAllInlineStyles } from "./remove-all-inline-styles";
import { aboveToOnGrid } from "./above-to-on-grid";
import { removeEventListeners } from "./remove-event-listeners";
import { setupCellHTML } from "./setup";
import { addPassDeviceEvent } from "./set-event-listeners";

let mode = "Computer";
const instructionBar = document.querySelector(".instruction-bar");

const switchMode = () => {
  mode = mode == "Computer" ? "Human" : "Computer";
};

const shipsCounts = new Map();
shipsCounts.set(4, 1);
shipsCounts.set(3, 2);
shipsCounts.set(2, 3);
shipsCounts.set(1, 4);

let players = {
  player1: "your",
  player2: "opponent",
};

let currentPlayer = players.player2;

const switchPlayer = () => {
  if (currentPlayer == "opponent") {
    currentPlayer = "your";
  } else {
    currentPlayer = "opponent";
  }
  if (layoutFinalized) {
    instructionBar.textContent = `${currentPlayer}'s turn`;
  }
};

let layoutFinalized = false;
const finalizeLayout = () => {
  layoutFinalized = true;
  instructionBar.textContent = `${currentPlayer}'s turn`;
};

let playerObjects = {
  player1: new Player(players.player1),
  player2: new Player(players.player2),
};
function initialize() {
  setModeChangeButtonEvents();
  addPassDeviceEvent();
  randomize(playerObjects.player1.gameboard, players.player1);
  randomize(playerObjects.player2.gameboard, players.player2);
  playerObjects.player1.gameboard.initializeBoardWithShips();
  playerObjects.player2.gameboard.initializeBoardWithShips();
}
function setupComputerGame() {
  const passDeviceButton = document.querySelector(".pass-device");
  const randomizeOpponent = document.querySelector(".randomize-opponent");
  randomizeOpponent.click();
  randomizeOpponent.style.pointerEvents = "none";
  removeAllInlineStyles(players.player2);
  updateBoard(playerObjects.player1.gameboard, players.player1);
  passDeviceButton.style.display = "none";
}

function setupHumanGame() {
  const passDeviceButton = document.querySelector(".pass-device");
  const randomizeOpponent = document.querySelector(".randomize-opponent");
  randomizeOpponent.style.pointerEvents = "auto";
  passDeviceButton.style.display = "block";
  updateBoard(playerObjects.player1.gameboard, players.player1);
  updateBoard(playerObjects.player2.gameboard, players.player2);
  renderPassDevice();
}
function driver() {
  initialize();
  setupGamePlay(playerObjects.player1.gameboard, players.player1);
  setupComputerGame();
}

function playGame(cell, x, y, alreadyHit) {
  if (currentPlayer == players.player2) {
    if (alreadyHit) {
      const adjacentCell = getRandomAdjacentCell(x, y);
      executeAttack(
        playerObjects.player1,
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate
      );
      playGame(
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate,
        true
      );
      return;
    }
    setTimeout(() => {
      const attackObj = computerHit();
      if (playerObjects.player1.gameboard.allShipsSunk()) {
        alert("The computer Won");
        restartGame();
        return;
      }
      if (attackObj.status && attackObj.shipHit) {
        playGame(cell, attackObj.x, attackObj.y, true);
        return;
      } else if (attackObj.status && attackObj.miss) {
        switchPlayer();
        renderPlayerSwitch();
      }
    }, 2000);
  } else {
    const attackObj = executeAttack(
      playerObjects.player2.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player2.gameboard.allShipsSunk()) {
      alert("You won");
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      renderPlayerSwitch();

      delayedComputerHit(2000, attackObj.x, attackObj.y, false);
    }
  }
}

function playGameVsHuman(cell, x, y) {
  if (currentPlayer == players.player1) {
    const attackObj = executeAttack(
      playerObjects.player2.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player2.gameboard.allShipsSunk()) {
      alert(`${players.player1} Won`);
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      renderPlayerSwitch();
    }
  } else {
    const attackObj = executeAttack(
      playerObjects.player1.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player1.gameboard.allShipsSunk()) {
      alert(`${players.player2} Won`);
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      renderPlayerSwitch();
    }
  }
}

function delayedComputerHit(delay, x, y, alreadyHit) {
  setTimeout(() => {
    if (alreadyHit) {
      const adjacentCell = getRandomAdjacentCell(x, y);
      const attackObj = executeAttack(
        playerObjects.player1.gameboard,
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate
      );
      if (attackObj.status && attackObj.shipHit) {
        delayedComputerHit(
          2000,
          adjacentCell.xCoordinate,
          adjacentCell.yCoordinate,
          attackObj.shipHit
        );
      } else if (attackObj.status && attackObj.miss) {
        switchPlayer();
        renderPlayerSwitch();
      }
      return;
    }
    const attackObj = computerHit();
    if (attackObj.status && attackObj.shipHit) {
      delayedComputerHit(2000, attackObj.x, attackObj.y, attackObj.shipHit);
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      renderPlayerSwitch();
    }
  }, delay);
}
function computerHit() {
  while (true) {
    const x = getRandomNumber();
    const y = getRandomNumber();
    const position = `${toWords[x]}-${toWords[y]}`;
    const selector = `.your > tr > .${position}`;
    const cell = document.querySelector(selector);
    if (cell.dataset.isHit == false) {
      return executeAttack(playerObjects.player1.gameboard, cell, x, y);
    }
  }
}

function getRandomAdjacentCell(x, y) {
  const choices = [];
  if (x > 0) {
    const obj = { xCoordinate: x - 1, yCoordinate: y };
    choices.push(obj);
  }
  if (x < 9) {
    const obj = { xCoordinate: x + 1, yCoordinate: y };
    choices.push(obj);
  }
  if (y > 0) {
    const obj = { xCoordinate: x, yCoordinate: y - 1 };
    choices.push(obj);
  }
  if (y < 9) {
    const obj = { xCoordinate: x, yCoordinate: y + 1 };
    choices.push(obj);
  }

  while (true) {
    const index = Math.floor(Math.random() * choices.length);
    const x = choices[index].xCoordinate;
    const y = choices[index].yCoordinate;
    const position = `${toWords[x]}-${toWords[y]}`;
    const selector = `.your > tr > .${position}`;
    const cell = document.querySelector(selector);
    if (cell.dataset.isHit == false) {
      return Object.assign({}, choices[index], { cell });
    }
  }
}

function playButtonEvent() {
  setupEventListeners();
  removeAllInlineStyles(players.player1);
  removeAllInlineStyles(players.player2);
  if (mode == "Computer") {
    aboveToOnGrid(playerObjects.player1.gameboard, players.player1);
  }
  finalizeLayout();
  currentPlayer = players.player1;
  if (mode == "Human") {
    const passDevice = document.querySelector(".pass-device");
    passDevice.style.display = "none";
    renderPlayerSwitch();
  } else {
    renderPlayerSwitch();
  }
}
function setupGamePlay() {
  const play = document.querySelector(".play");
  play.addEventListener("click", playButtonEvent);
}

function randomize(gameboard, player) {
  const randomize = document.querySelector(`.randomize-${player}`);
  randomize.addEventListener("click", () => {
    if (layoutFinalized == true || currentPlayer == player) {
      return;
    }
    gameboard.clearBoard();
    gameboard.initializeBoardWithShips();
    removeAllInlineStyles(player);
    updateBoard(gameboard, player);
  });
}

function endGame() {
  for (const playerObject in playerObjects) {
    const element = playerObjects[playerObject];
    element.gameboard.clearBoard();
  }
  removeAllInlineStyles(players.player1);
  removeAllInlineStyles(players.player2);
  const yourGrid = document.querySelector(".your-grid");
  const opponentGrid = document.querySelector(".opponent-grid");
  yourGrid.removeAttribute("style");
  opponentGrid.removeAttribute("style");
  currentPlayer = players.player1;
  removeEventListeners();
  const play = document.querySelector(".play");
  play.removeEventListener("click", playButtonEvent);
}

function restartGame() {
  const computerButton = document.querySelector("#computer-button");
  layoutFinalized = false;
  computerButton.click();
  endGame();
  setupCellHTML();
  driver();
}

export {
  driver,
  currentPlayer,
  switchPlayer,
  computerHit,
  shipsCounts,
  finalizeLayout,
  layoutFinalized,
  players,
  playerObjects,
  playGame,
  mode,
  switchMode,
  playGameVsHuman,
  setupComputerGame,
  setupHumanGame,
};
