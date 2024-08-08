import { toWords } from "./setup";
import { updateBoard } from "./updateBoard";
import { Player } from "./player";
import { setupEventListeners } from "./set-event-listeners";
import { executeAttack } from "./data-dom-interactions";
import { renderPlayerSwitch } from "./render-player-switch";
import { getRandomNumber } from "./random-number";

const shipsCounts = new Map();
shipsCounts.set(4, 1);
shipsCounts.set(3, 2);
shipsCounts.set(2, 3);
shipsCounts.set(1, 4);

let players = {
  player1: "your",
  player2: "opponent",
};

let currentPlayer = players.player1;

const switchPlayer = () => {
  if (currentPlayer == "opponent") {
    currentPlayer = "your";
  } else {
    currentPlayer = "opponent";
  }
};

let layoutFinalized = false;
const finalizeLayout = () => {
  layoutFinalized = true;
};

let playerObjects = {
  player1: new Player(players.player1),
  player2: new Player(players.player2),
};

function driver() {
  setupEventListeners(
    playerObjects.player1.gameboard,
    playerObjects.player2.gameboard
  );
  playerObjects.player1.gameboard.initializeBoardWithShips();
  playerObjects.player2.gameboard.initializeBoardWithShips();
  updateBoard(playerObjects.player1.gameboard, players.player1);
}

function playGame(cell, x, y) {
  if (currentPlayer == players.player2) {
    let hit;
    setTimeout(() => {
      hit = computerHit();
    }, 2000);
    if (hit) {
      switchPlayer();
      renderPlayerSwitch();
    }
  } else {
    if (executeAttack(playerObjects.player2.gameboard, cell, x, y)) {
      switchPlayer();
      renderPlayerSwitch();

      delayedComputerHit(2000);
    }
  }
}

function delayedComputerHit(delay) {
  setTimeout(() => {
    computerHit();
    switchPlayer();
    renderPlayerSwitch();
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
      executeAttack(playerObjects.player1.gameboard, cell, x, y);
      return true;
    }
  }
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
  playGame,
};
