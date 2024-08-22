import { Ship } from "./ship";
import { getRandomNumber } from "./random-number";
import { shipsCounts } from "./driver";
class Gameboard {
  grid;
  gridSize;
  missedAttacks;
  numberOfShips;
  allShips;
  constructor(gridSize) {
    this.grid = [];
    this.gridSize = gridSize;
    this.numberOfShips = 0;
    this.missedAttacks = new Set();
    this.allShips = new Map();
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(0);
      }
      this.grid.push(row);
    }
  }

  clearBoard() {
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.numberOfShips = 0;
    this.missedAttacks.clear();
    this.allShips.clear();
  }

  setOffLimitArea(coordinates) {
    if (coordinates[0] == coordinates[2]) {
      for (let i = coordinates[1]; i <= coordinates[3]; i++) {
        if (i == coordinates[1] && coordinates[1] > 0) {
          this.grid[coordinates[0]][coordinates[1] - 1] = 2;
        }
        if (i == coordinates[3] && coordinates[3] < 9) {
          this.grid[coordinates[0]][coordinates[3] + 1] = 2;
        }
        if (coordinates[0] > 0) {
          this.grid[coordinates[0] - 1][i] = 2;
        }
        if (coordinates[0] < 9) {
          this.grid[coordinates[0] + 1][i] = 2;
        }
      }
    } else if (coordinates[1] == coordinates[3]) {
      for (let i = coordinates[0]; i <= coordinates[2]; i++) {
        if (i == coordinates[0] && coordinates[0] > 0) {
          this.grid[coordinates[0] - 1][coordinates[1]] = 2;
        }
        if (i == coordinates[2] && coordinates[2] < 9) {
          this.grid[coordinates[2] + 1][coordinates[3]] = 2;
        }
        if (coordinates[1] > 0) {
          this.grid[i][coordinates[1] - 1] = 2;
        }
        if (coordinates[1] < 9) {
          this.grid[i][coordinates[1] + 1] = 2;
        }
      }
    }
  }

  addShip(coordinates) {
    if (
      !(coordinates[0] == coordinates[2] || coordinates[1] == coordinates[3])
    ) {
      return "Ships can only be vertical or horizontal not slanting";
    } else {
      if (coordinates[0] == coordinates[2]) {
        const length = coordinates[3] - coordinates[1] + 1;
        const newShip = new Ship(length);
        const row = coordinates[0];
        let vacant = true;
        for (let j = coordinates[1]; j < coordinates[3] + 1; j++) {
          if (this.grid[row][j] != 0) {
            vacant = false;
            return false;
          }
        }
        if (vacant) {
          for (let j = coordinates[1]; j < coordinates[3] + 1; j++) {
            if (this.grid[row][j] == 0) {
              this.grid[row][j] = newShip;
            }
          }
          this.setOffLimitArea(coordinates);
          this.allShips.set(newShip, coordinates);
        }
      } else if (coordinates[1] == coordinates[3]) {
        const length = coordinates[2] - coordinates[0] + 1;
        const newShip = new Ship(length);
        const col = coordinates[1];
        let vacant = true;
        for (let i = coordinates[0]; i < coordinates[2] + 1; i++) {
          newShip.orientation = "vertical";
          if (this.grid[i][col] != 0) {
            vacant = false;
            return false;
          }
        }
        if (vacant) {
          for (let i = coordinates[0]; i < coordinates[2] + 1; i++) {
            newShip.orientation = "vertical";
            if (this.grid[i][col] == 0) {
              this.grid[i][col] = newShip;
            } else {
              return false;
            }
          }
          this.setOffLimitArea(coordinates);
          this.allShips.set(newShip, coordinates);
        }
      }
      this.numberOfShips += 1;
      return true;
    }
  }

  receiveAttack(x, y) {
    if (this.grid[x][y] instanceof Ship) {
      this.grid[x][y].hit();
      if (this.grid[x][y].isSunk()) {
        this.numberOfShips -= 1;
      }
      return true;
    } else if (this.grid[x][y] == 0) {
      this.grid[x][y] = 1;
      this.missedAttacks.add([x, y].toString());
      return false;
    }
  }

  allShipsSunk() {
    return this.numberOfShips == 0;
  }

  initializeBoardWithShips() {
    for (let length = 4; length >= 1; length--) {
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
          if (this.addShip(coordinates)) {
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
          if (this.addShip(coordinates)) {
            count -= 1;
          }
        }
      }
    }
  }
}

export { Gameboard };
