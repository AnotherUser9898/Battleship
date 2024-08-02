import { Gameboard } from "./gameboard";

class Player {
  gameboard;
  type;

  constructor(type) {
    this.gameboard = new Gameboard(10);
    this.type = type;
  }
}

export { Player };
