const toWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const toNumbers = new Map();
for (let i = 0; i < toWords.length; i++) {
  toNumbers.set(toWords[i], i);
}

function setupCellHTML() {
  const yourGrid = document.querySelector(".your-grid>.grid");
  const opponentsGrid = document.querySelector(".opponent-grid>.grid");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const yourCell = document.createElement("cell");
      yourCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      yourCell.dataset.x = i;
      yourCell.dataset.y = j;
      yourCell.dataset.isHit = 0;

      const opponentCell = document.createElement("cell");
      opponentCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      opponentCell.dataset.x = i;
      opponentCell.dataset.y = j;
      opponentCell.dataset.isHit = 0;

      if (j == 9) {
        yourCell.style.cssText += "border-right: 0.25px solid #3b82f6;";
        opponentCell.style.cssText += "border-right: 0.25px solid #3b82f6;";
      }

      if (i == 0) {
        yourCell.style.cssText += "border-top: 0.25px solid #3b82f6;";
        opponentCell.style.cssText += "border-top: 0.25px solid #3b82f6;";
      }
      yourGrid.appendChild(yourCell);
      opponentsGrid.appendChild(opponentCell);
    }
  }
}


export { setupCellHTML, toWords};
