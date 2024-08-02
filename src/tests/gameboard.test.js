import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

let gameboard = new Gameboard(10);


beforeEach(() => {
  gameboard.clearBoard();
});
test("adding a new ship to the grid horizontally", () => {
  gameboard.addShip([1, 2, 1, 5]);
  expect(gameboard.grid[1][2]).toBe(gameboard.grid[1][5]);
});

test("adding a new ship to the grid vertically", () => {
    expect(gameboard.addShip([2, 2, 5, 2])).toBe(true);
    expect(gameboard.grid[2][2]).toBe(gameboard.grid[5][2]);
});

test("testing clearBoard()", () => {
  expect(gameboard.grid[1][2]).toBeFalsy();
});
test("adding a ship of length 1", () => {
  gameboard.addShip([7, 7, 7, 7]);
  expect(gameboard.grid[7][7]).toBeTruthy();
});

test("adding a ship in slanting position", () => {
  expect(gameboard.addShip([1, 2, 2, 3])).toBe(
    "Ships can only be vertical or horizontal not slanting"
  );
});

test("recieving attack from enemy", () => {
    gameboard.addShip([1,2,1,5]);
    gameboard.receiveAttack(1,2);
    expect(gameboard.grid[1][2].getHit()).toBe(1);
    expect(gameboard.grid[1][2].getHit()).toBe(gameboard.grid[1][5].getHit());
    gameboard.receiveAttack(1,5);
    expect(gameboard.grid[1][2].getHit()).toBe(2);
    gameboard.receiveAttack(1,5);
    gameboard.receiveAttack(1,5);
    expect(gameboard.grid[1][2].isSunk()).toBe(true);
    expect(gameboard.grid[1][2].isSunk()).toBe(gameboard.grid[1][2].isSunk());
});

test("receiving attack on a cell with no ship",() => {
  expect(() => gameboard.receiveAttack(1,5)).not.toThrow(Error);
  gameboard.receiveAttack(4,5);
  expect(gameboard.grid[4][5]).toBe(1);
  expect(gameboard.missedAttacks.has([4,5].toString())).toBeTruthy();
});

test("if all the ships on the gameboard have been sunk",() => {
  gameboard.addShip([1,2,1,3]);
  expect(gameboard.numberOfShips).toBe(1);
  gameboard.receiveAttack(1,2);
  expect(gameboard.allShipsSunk()).toBeFalsy();
  gameboard.receiveAttack(1,3);
  expect(gameboard.allShipsSunk()).toBeTruthy();

});

test("saving ships for later use",() => {
  expect(gameboard.allShips.size).toBe(0);
  gameboard.addShip([1,2,1,3]);
  gameboard.addShip([4,5,7,5]);
  expect(gameboard.allShips.size).toBe(2);
});

test("adding two ships with conflicting coordinates",() => {
  expect(gameboard.addShip([1,2,1,3])).toBe(true);
  expect(gameboard.addShip([1,1,1,3])).toBe(false);
});

test("adding two ships with adjacent coordinates",() => {
  expect(gameboard.addShip([1,2,1,3])).toBe(true);
  expect(gameboard.addShip([2,2,2,3])).toBe(false);
  expect(gameboard.addShip([7,5,9,5])).toBe(true);
  expect(gameboard.addShip([6,6,8,6])).toBe(true);
})

