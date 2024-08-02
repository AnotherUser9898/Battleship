import { toWords } from "./setup";
import { updateBoard } from "./updateBoard";
import { Player } from "./player";
import { setupEventListeners } from "./set-event-listeners";
import { executeAttack } from "./data-dom-interactions";

const shipsCounts = new Map();
shipsCounts.set(4, 1);
shipsCounts.set(3, 2);
shipsCounts.set(2, 3);
shipsCounts.set(1, 4);
let currentPlayer = "opponent";
const switchPlayer = () => {
  if (currentPlayer == "opponent") {
    currentPlayer = "your";
  } else {
    currentPlayer = "opponent";
  }
}

function driver() {
  const humanPlayer = new Player("your");
  const computerPlayer = new Player("opponent");
  setupEventListeners(humanPlayer.gameboard, computerPlayer.gameboard);
  initializeBoardWithShips(humanPlayer.gameboard);
  initializeBoardWithShips(computerPlayer.gameboard);
  updateBoard(humanPlayer.gameboard, humanPlayer.type);
  computerHit(humanPlayer.gameboard);
  
}

function initializeBoardWithShips(gameboard) {
  for (let length = 4; length >= 1 ; length--) {
    let count = shipsCounts.get(length);
    while (count > 0) {
      const orientation = Math.floor(Math.random() * 2);
      if (orientation == 0) {
        const x1 = getRandomNumber();
        const y1 = getRandomNumber();
        const x2 = x1;
        const y2 = y1 + length - 1;
        if (y2 > 9) {
          continue;
        }
        const coordinates = [x1, y1, x2, y2];
        if (gameboard.addShip(coordinates)) {
          count -= 1;
        }
      }
      if (orientation == 1) {
        const x1 = getRandomNumber();
        const y1 = getRandomNumber();
        const x2 = x1 + length - 1;
        if (x2 > 9) {
          continue;
        }
        const y2 = y1;
        const coordinates = [x1, y1, x2, y2];
        if (gameboard.addShip(coordinates)) {
          count -= 1;
        }
      }
    }
  }
}

function computerHit(yourGameboard) {
  while (true) {
    const x = getRandomNumber();
    const y = getRandomNumber();
    const position = `${toWords[x]}-${toWords[y]}`;
    const selector = `.your > .${position}`;
    const cell = document.querySelector(selector);
    if (cell.dataset.isHit == false) {
      executeAttack(yourGameboard, cell, x, y);
      switchPlayer();
      return;
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export { driver, currentPlayer,switchPlayer,computerHit,initializeBoardWithShips };
