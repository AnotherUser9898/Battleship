import { Ship } from "../ship.js";

test("contains implementation", () => {
  const testShip = new Ship(4);
  const hits = Number(testShip.getHit());
  testShip.hit();
  expect(testShip.getHit()).toBe(hits + 1);
});

test("accepting more hits than should be possible", () => {
  const testShip = new Ship(2);
  testShip.hit();
  testShip.hit();
  testShip.hit();
  const hits = testShip.getHit();
  expect(testShip.getHit()).toBe(testShip.getLength());
});

test("ship sinks without enough hits", () => {
  const testShip = new Ship(2);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});

test("ship does not sink after enough hits", () => {
  const testShip = new Ship(2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});

test("testing switch orientation", () => {
  const testShip = new Ship(2);
  expect(testShip.switchOrientation()).toBe("vertical");
  expect(testShip.switchOrientation()).toBe("horizontal");

});
