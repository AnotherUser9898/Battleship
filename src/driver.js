import { toWords } from "./setup";
import { updateBoard } from "./updateBoard";
import { Player } from "./player";
import { setupEventListeners } from "./set-event-listeners";
import { executeAttack } from "./data-dom-interactions";
import { renderPlayerSwitch } from "./render-player-switch";
import { getRandomNumber } from "./random-number";
import { removeAllInlineStyles } from "./remove-all-inline-styles";
import { aboveToOnGrid } from "./above-to-on-grid";
import { draggableEvent } from "./data-dom-interactions";

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
  setupGamePlay(playerObjects.player1.gameboard, players.player1);
  randomize(playerObjects.player1.gameboard, players.player1);
  playerObjects.player1.gameboard.initializeBoardWithShips();
  playerObjects.player2.gameboard.initializeBoardWithShips();
  updateBoard(playerObjects.player1.gameboard, players.player1);
  draggableEvent();
}

function playGame(cell, x, y) {
  if (currentPlayer == players.player2) {
    setTimeout(() => {
      const attackObj = computerHit();
      if (attackObj.status && attackObj.shipHit) {
        playGame(cell, x, y);
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
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      renderPlayerSwitch();

      delayedComputerHit(2000);
    }
  }
}

function delayedComputerHit(delay) {
  setTimeout(() => {
    const attackObj = computerHit();
    if (attackObj.status && attackObj.shipHit) {
      delayedComputerHit(2000);
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

function setupGamePlay(gameboard, player) {
  const play = document.querySelector(".play");
  play.addEventListener("click", () => {
    setupEventListeners(
      playerObjects.player1.gameboard,
      playerObjects.player2.gameboard
    );
    removeAllInlineStyles(player);
    aboveToOnGrid(gameboard, player);
    finalizeLayout();
    renderPlayerSwitch();
  });
}

function randomize(gameboard, player) {
  const randomize = document.querySelector(".randomize");
  randomize.addEventListener("click", () => {
    if (layoutFinalized == true) {
      return;
    }
    gameboard.clearBoard();
    gameboard.initializeBoardWithShips();
    removeAllInlineStyles(player);
    updateBoard(gameboard, player);
  });
}

function endGame() {
  playerObjects.array.forEach((element) => {
    element.clear();
    removeAllInlineStyles(players.player1);
    removeAllInlineStyles(players.player2);
  });
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
