function removeAllInlineStyles(player) {
  const cells = document.querySelectorAll(`.${player} > tr > td > .ship-node`);
  cells.forEach((cell) => {
    cell.removeAttribute("style");
  });
}

function removePlayerSwitchStyles() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");

  player1.style.opacity = 1;
  player1.style.filter = "blur(0px)";

  player2.style.opacity = 1;
  player2.style.filter = "blur(0px)";
}

export { removeAllInlineStyles, removePlayerSwitchStyles };
