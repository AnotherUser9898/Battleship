import { currentPlayer, players } from "./driver";
function renderPlayerSwitch() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");
  player1.style.filter = "blur(0px)";
  player2.style.filter = "blur(0px)";

  if (currentPlayer == players.player2) {
    player2.style.opacity = 0.15;
    player2.style.pointerEvents = "none";
    player1.style.opacity = 1;
    player1.style.pointerEvents = "auto";
  } else {
    player1.style.opacity = 0.15;
    player1.style.pointerEvents = "none";
    player2.style.opacity = 1;
    player2.style.pointerEvents = "auto";
  }
}

export { renderPlayerSwitch };
