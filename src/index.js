import "./reset.css";
import "./index.css";

import { Player } from "./Player";
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

let board = new Gameboard(7);

let Flick = new Player("Flick");
let Enemy = new Player("Enemy");

// console.log(board.placeShip("1-2", "x", 5, Flick));
// console.log(board.placeShip("7-4", "x", 4, Enemy));
// console.log(board.placeShip("3-4", "x", 2, Flick));
// console.log(board.placeShip("2-1", "y", 4, Enemy));
// console.log(board.placeShip("2-1", "y", 4, Flick));
// console.log(board.placeShip("3-3", "y", 3, Flick));
// console.log(board.placeShip("2-7", "y", 5, Enemy));
// console.log(board.placeShip("4-4", "y", 2, Flick));

// console.log(board.placeShip("2-2", "y", 2, Flick)); // true
// console.log(board.placeShip("1-2", "y", 4, Flick)); // false
// board.placeShip("2-1", "y", 2, Enemy); // true
// board.placeShip("1-1", "y", 2, Enemy); // true
// board.placeShip("5-3", "y", 3, Enemy); // true
// board.placeShip("1-2", "y", 2, Enemy); // false
board.placeShip("1-2", "x", 2, Flick);
board.placeShip("7-4", "x", 4, Enemy);
board.placeShip("3-4", "x", 2, Flick);
board.placeShip("2-1", "y", 4, Enemy);
board.placeShip("3-3", "y", 3, Flick);
board.placeShip("2-7", "y", 3, Enemy);

console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("1-2", Flick))); // 3 = can't attack your own

console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("6-5", Enemy))); // 2 = miss

console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("7-3", Flick))); // 2 = miss

console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("6-5", Enemy))); // 4 = already attacked

console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("2-7", Flick))); // 1 = Flick hit Enemy

console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("1-2", Enemy))); // 1 = Enemy hit Flick

console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("3-7", Flick))); // 1 = Flick hit Enemy

console.log(board.printAttackResult(Enemy, Flick, board.receiveAttack("1-3", Enemy))); // 1 = Enemy hit and sunk Flick

console.log(board.printAttackResult(Flick, Enemy, board.receiveAttack("4-7", Flick))); // 5 = Flick hit and sunk Enemy

//console.log(board);
//console.log(board.board[1]);
board.print();
