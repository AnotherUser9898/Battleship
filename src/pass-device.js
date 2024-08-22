import { switchPlayer, currentPlayer, players } from "./driver";
function passDevice() {
  switchPlayer();
  renderPassDevice();
}

function renderPassDevice() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");

  if (currentPlayer == players.player2) {
    player2.style.filter = "blur(35px)";
    player2.style.pointerEvents = "none";
    player1.style.filter = "blur(0px)";
    player1.style.pointerEvents = "auto";
  } else {
    player1.style.filter = "blur(35px)";
    player1.style.pointerEvents = "none";
    player2.style.filter = "blur(0px)";
    player2.style.pointerEvents = "auto";
  }
}

export { passDevice, renderPassDevice };
