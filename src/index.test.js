import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

test("ship with length 1 and 0 hits is NOT sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", 1, player);
  expect(ship.isSunk).toBe(false);
});

test("ship with length 1 and 1 hits is sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", 1, player);
  ship.hit();
  expect(ship.isSunk).toBe(true);
});

test("ship with length 3 and 2 hits is NOT sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", 3, player);
  ship.hit();
  ship.hit();
  expect(ship.isSunk).toBe(false);
});

test("ship with length 3 and 4 hits is sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", 3, player);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk).toBe(true);
});

//

test("default gameboard has 100 tiles", () => {
  let board = new Gameboard();
  expect(board.tileCount).toBe(100);
});

test("7x7 gameboard has 49 tiles", () => {
  let board = new Gameboard(7);
  expect(board.tileCount).toBe(49);
});

//

test("5x5 gameboard, 3 length ship at 2-3, 2 length ship at 4-4", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("2-3", 3, player)).not.toBe(false);
  expect(board.placeShip("4-4", 2, player)).not.toBe(false);
});

test("5x5 gameboard, 5 length ship at 1-1, 4 length ship at 5-2", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("1-1", 5, player)).not.toBe(false);
  expect(board.placeShip("5-2", 4, player)).not.toBe(false);
});

test("default gameboard, 10 length ship at 1-1, 9 length ship at 10-2", () => {
  let board = new Gameboard();
  let player = new Player("Flick");
  expect(board.placeShip("1-1", 10, player)).not.toBe(false);
  expect(board.placeShip("10-2", 9, player)).not.toBe(false);
});
