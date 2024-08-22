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
  const yourGrid = document.querySelector(".your");
  const opponentsGrid = document.querySelector(".opponent");

  for (let i = 0; i < 10; i++) {
    const yourRow = document.createElement("tr");
    const opponentsRow = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const yourCell = document.createElement("td");
      const shipNode = document.createElement("div");
      shipNode.classList.add("ship-node");
      shipNode.dataset.shipX = i;
      shipNode.dataset.shipY = j;
      yourCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      yourCell.dataset.x = i;
      yourCell.dataset.y = j;
      yourCell.dataset.isHit = 0;
      yourCell.appendChild(shipNode);
      yourRow.appendChild(yourCell);

      const opponentCell = document.createElement("td");
      const opponentShipNode = document.createElement("div");
      opponentShipNode.classList.add("ship-node");
      opponentShipNode.dataset.shipX = i;
      opponentShipNode.dataset.shipY = j;
      opponentCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      opponentCell.dataset.x = i;
      opponentCell.dataset.y = j;
      opponentCell.dataset.isHit = 0;
      opponentCell.appendChild(opponentShipNode);
      opponentsRow.appendChild(opponentCell);
    }
    yourGrid.appendChild(yourRow);
    opponentsGrid.appendChild(opponentsRow);
  }
}

export { setupCellHTML, toWords };
