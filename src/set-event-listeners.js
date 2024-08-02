import { executeAttack } from "./data-dom-interactions";
import { switchPlayer,computerHit, currentPlayer,initializeBoardWithShips} from "./driver";
import { updateBoard } from "./updateBoard";
function setupEventListeners(yourGameboard, opponentGameboard) {
  const yourCells = document.querySelectorAll(".your > tr > .cell");
  const oppenentCells = document.querySelectorAll(".opponent > tr > .cell");

  yourCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      executeAttack(yourGameboard,cell,x,y);
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
      if (executeAttack(opponentGameboard,cell,x,y)) {
        switchPlayer();
        setTimeout(() => {
          computerHit(yourGameboard);
        },1500);
      }
    });
  });

  const randomize = document.querySelector(".randomize");
  randomize.addEventListener("click",() => {
    yourGameboard.clearBoard();
    initializeBoardWithShips(yourGameboard);
    updateBoard(yourGameboard,"your");
  })
}

export {setupEventListeners};
