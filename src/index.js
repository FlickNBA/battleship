import "./reset.css";
import "./index.css";

import { Player } from "./Player";
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { initBoard, updateDOM } from "./initBoard";

// let board = new Gameboard(Number(prompt("How many tiles? For 8x8 type in 8")));

let board = new Gameboard(8);

// let player = new Player(prompt("Type in your player name"), "player");
let player = new Player("Flick", "player");
board.addPlayer(player);
let enemy = new Player("AI", "enemy");
board.addPlayer(enemy);

initBoard(board);

// console.log(board.placeShip("1-4", "x", 4, enemy, "Big ship"));
// console.log(board.placeShip("3-4", "x", 2, player, "Jetski"));
// console.log(board.placeShip("2-2", "y", 4, player, "Yacht"));
// console.log(board.placeShip("7-2", "x", 3, player, "U-Boot"));

board.startGame();
// console.log(board.placeShip("2-1", "y", 4, enemy, "U-Boot"));
// console.log(board.placeShip("5-4", "x", 4, enemy, "Cruise ship"));

// // board.print();

// console.log(board.placeShip("1-2", "x", 3, player, "Small ship"));

// console.log(board.receiveAttack("1-1", player)); // miss
// console.log(board.receiveAttack("1-1", enemy)); // miss
// console.log(board.receiveAttack("1-3", player)); // miss;
// console.log(board.receiveAttack("3-4", enemy)); // hit
// console.log(board.receiveAttack("1-5", player)); // hit
// console.log(board.receiveAttack("3-5", enemy)); // hit + sunk
