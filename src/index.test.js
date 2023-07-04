import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

test("axis X => ship with length 1 and 0 hits is NOT sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", "x", 1, player);
  expect(ship.isSunk).toBe(false);
});

test("axis X => ship with length 1 and 1 hits is sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", "x", 1, player);
  ship.hit();
  expect(ship.isSunk).toBe(true);
});

test("axis X => ship with length 3 and 2 hits is NOT sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", "x", 3, player);
  ship.hit();
  ship.hit();
  expect(ship.isSunk).toBe(false);
});

test("axis X => ship with length 3 and 4 hits is sunk", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  let ship = board.placeShip("1-1", "x", 3, player);
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

test("axis X => 5x5 gameboard, 3 length ship at 2-3, 2 length ship at 4-4", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("2-3", "x", 3, player)).not.toBe(false);
  expect(board.placeShip("4-4", "x", 2, player)).not.toBe(false);
});

test("axis X => 5x5 gameboard, 5 length ship at 1-1, 4 length ship at 5-2", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("1-1", "x", 5, player)).not.toBe(false);
  expect(board.placeShip("5-2", "x", 4, player)).not.toBe(false);
});

test("axis X => default gameboard, 10 length ship at 1-1, 9 length ship at 10-2", () => {
  let board = new Gameboard();
  let player = new Player("Flick");
  expect(board.placeShip("1-1", "x", 10, player)).not.toBe(false);
  expect(board.placeShip("10-2", "x", 9, player)).not.toBe(false);
});

//

test("axis Y => 5x5 gameboard, 3 length ship at 2-3, 2 length ship at 4-4", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("2-3", "y", 3, player)).not.toBe(false);
  expect(board.placeShip("4-4", "y", 2, player)).not.toBe(false);
});

test("axis Y => 5x5 gameboard, 5 length ship at 1-1, 4 length ship at 5-2", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("1-1", "y", 5, player)).not.toBe(false);
  expect(board.placeShip("2-5", "y", 4, player)).not.toBe(false);
});

test("axis Y => default gameboard, 10 length ship at 1-1, 9 length ship at 8-2", () => {
  let board = new Gameboard();
  let player = new Player("Flick");
  expect(board.placeShip("1-1", "y", 10, player)).not.toBe(false);
  expect(board.placeShip("2-8", "y", 9, player)).not.toBe(false);
});

//

test("axis X and Y => 5x5 gameboard, 3 length ship at 2-3 (X), 2 length ship at 4-4 (Y)", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("2-3", "x", 3, player)).not.toBe(false);
  expect(board.placeShip("4-4", "y", 2, player)).not.toBe(false);
});

test("axis X and Y => 5x5 gameboard, 2 length ship at 1-1 (X), 3 length ship at 2-2, 2 length ship at 2-3 (Y), 2 length ship at 4-4 (Y)", () => {
  let board = new Gameboard(5);
  let player = new Player("Flick");
  expect(board.placeShip("1-1", "x", 2, player)).not.toBe(false);
  expect(board.placeShip("2-2", "x", 3, player)).not.toBe(false);
  expect(board.placeShip("3-2", "y", 2, player)).not.toBe(false);
  expect(board.placeShip("3-4", "y", 2, player)).not.toBe(false);
});

test("7x7 board, big test with X and Y", () => {
  let board = new Gameboard(7);
  let player = new Player("Flick");
  expect(board.placeShip("1-2", "x", 5, player)).not.toBe(false);
  expect(board.placeShip("7-4", "x", 4, player)).not.toBe(false);
  expect(board.placeShip("3-4", "x", 2, player)).not.toBe(false);
  expect(board.placeShip("2-1", "y", 4, player)).not.toBe(false);
  expect(board.placeShip("3-3", "y", 3, player)).not.toBe(false);
  expect(board.placeShip("2-7", "y", 5, player)).not.toBe(false);
});
