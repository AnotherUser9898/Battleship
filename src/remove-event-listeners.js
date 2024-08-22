function removeEventListeners() {
  const yourGrid = document.querySelector(".your");
  const opponentGrid = document.querySelector(".opponent");
  yourGrid.replaceChildren();
  opponentGrid.replaceChildren();
}

export { removeEventListeners };
